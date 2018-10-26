export api = require 'lua.src.l2dsafe'

export dir = (o) -> for k, v in pairs(o) do print(k,v)
-- debug.debug()

totype = (str) ->
	switch str
		when "function"
			return "Function"
		when "light userdata"
			return "LightUserData" -- defined in lib.l2dother.d.ts
		when ""
			return "any"
		else
			return str
	return string.gsub str, "%s+", ""

toarg = (a) ->
	name = a.name
	switch a.name
		when "..."
			name = "...vararg"
			a.type ..= "[]"
		when '"restart"'
			name = "restartstr"
			a.type = "RestartString"
	t = totype(a.type)
	return "#{name}?: #{t}" if a.default
	return "#{name}: #{t}"

-- splits a any string into an array of strings that do not exceed max_width
wrap = (string, max_width) ->
	-- splits a line into more lines that do not exceed max_width, yields them
	wrapline = (line) ->
		w = 0
		sep = " "
		current = {}
		for word in line\gmatch("[^ ]*")
			if #word == 0
				continue
			if w + #word + 1 > max_width
				coroutine.yield table.concat(current, sep)
				current = {}
				w = 0
			table.insert(current, word)
			w += #word + 1
		coroutine.yield table.concat(current, sep)
	wrapeachline = () ->
		for line in string\gmatch("[^\r\n]*")
			wrapline line
	return [line for line in coroutine.wrap wrapeachline]

jsdoc = (tabs, descriptionlines={}, paramlines={}, returnlines={}) ->
	tabs = string.rep("\t",tabs)
	print "#{tabs}/**"
	-- print " * @function #{details.function}" if details.function
	-- print " * @method #{details.method}" if details.method
	-- print " * @constructs" if details.constructs
	print "#{tabs} * #{line}" for line in *descriptionlines
	print "#{tabs} * #{line}" for line in *paramlines
	print "#{tabs} * #{line}" for line in *returnlines
	-- print " * @returns {#{r.type}} #{r.desc}" for r in *details.returns
	print "#{tabs} */"

exportfunctions = (functions,tabamt,t,classname="Unknown") ->
	pre = ""
	switch t
		when "namespace_variable"
			pre = "export let "
		when "namespace_function"
			pre = "export function "
	tabs = string.rep("\t",tabamt)
	for f in *functions
		for v in *f.variants
			args = ""
			paramlines = {}
			returnlines = {}
			if v.arguments
				paramlines = ["@param #{totype(a.name)} #{a.description}" for a in *v.arguments]
				a = [toarg(a) for a in *v.arguments]
				args = table.concat a, ", "
			returns = "void"
			multireturn = false
			if v.returns
				returnlines = ["@return {#{totype(r.type)}} #{r.name}, #{r.description}" for r in *v.returns]
				if #v.returns == 1
					returns = "#{totype(v.returns[1].type)}"
				else
					multireturn = true
					r = [totype(r.type) for r in *v.returns]
					returns = "[#{table.concat r, ", "}]"
			lines = wrap(f.description, 80) or {}
			jsdoc(tabamt, lines, paramlines, returnlines)
			print "#{tabs}/** !TupleReturn */" if multireturn
			if t == "namespace_variable"
				print "#{tabs}#{pre}#{f.name}: (#{args}) => #{returns};\n"
			elseif t == "constructors"
				print "#{tabs}#{pre}#{classname}(#{args}): #{returns};\n"
			else
				print "#{tabs}#{pre}#{f.name}(#{args}): #{returns};\n"

for m in *api.modules
	if m.enums
		for e in *m.enums
			escape = (sym) ->
				switch sym
					when "'"
						return '"\'"'
					when '"'
						return "'\"'"
					when "\\"
						return "'\\\\'"
				return "'#{sym}'"
			constants = [escape(c.name) for c in *e.constants]
			types = table.concat constants, " | "
			lines = wrap(e.description, 80) or {}
			jsdoc(0, lines)
			print "type #{totype(e.name)} = #{types}\n"

for m in *api.modules
	if m.types
		for t in *m.types
			print "declare interface #{totype(t.name)} extends #{totype(t.parenttype)} {"
			exportfunctions t.functions, 1, "interface_function"
			print "}"

for t in *api.types
	parent = t.parenttype == "Object" and "" or t.parenttype
	print "interface #{totype(t.name)} {"
	if t.functions
		exportfunctions t.functions, 1, "interface_function"
	print "}"

print "declare namespace love {"

exportfunctions api.functions, 1, "namespace_function"

exportfunctions api.callbacks, 1, "namespace_variable"

for m in *api.modules
	lines = wrap(m.description, 80) or {}
	jsdoc(1, lines)
	print "\texport namespace #{m.name} {"
	exportfunctions m.functions, 2, "namespace_function"
	print "\t}"

print "}"

