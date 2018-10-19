export api = require 'lua.src.l2dsafe'

export dir = (o) -> for k, v in pairs(o) do print(k,v)
-- debug.debug()

totype = (str) ->
	switch str
		when "function"
			return "LuaFunction" -- defined in missingdefs.d.ts
		when "light userdata"
			return "LightUserData" -- defined in missingdefs.d.ts
		when "Object"
			return "L2DObject"
		when "Event"
			return "L2DEvent"
		when "Body"
			return "L2DBody"
		when "GamepadButton"
			return "L2DGamepadButton"
		when "File"
			return "L2DFile"
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

exportfunctions = (functions,tabs,t,classname="Unknown") ->
	pre = ""
	switch t
		when "namespace_variable"
			pre = "export let "
		when "namespace_function"
			pre = "export function "
	tabs = string.rep("\t",tabs)
	for f in *functions
		for v in *f.variants
			args = ""
			paramlabels = {}
			returnlabels = {}
			if v.arguments
				paramlabels = ["@param #{totype(a.name)} #{a.description}" for a in *v.arguments]
				a = [toarg(a) for a in *v.arguments]
				args = table.concat a, ", "
			returns = "void"
			multireturn = false
			if v.returns
				paramlabels = ["@return #{totype(r.name)} #{r.description}" for r in *v.returns]
				if #v.returns == 1
					returns = "#{totype(v.returns[1].type)}"
				else
					multireturn = true
					r = [totype(r.type) for r in *v.returns]
					returns = "[#{table.concat r, ", "}]"
			description = string.gsub f.description, "\n", "\n#{tabs} * "
			paramlabels = string.gsub table.concat(paramlabels,"\n"), "\n", "\n#{tabs} * "
			returnlabels = string.gsub table.concat(returnlabels,"\n"), "\n", "\n#{tabs} * "
			print "#{tabs}/**"
			print "#{tabs} * @func #{f.name}"
			print "#{tabs} * #{description}" if description
			print "#{tabs} * #{paramlabels}" if paramlabels
			print "#{tabs} */"
			print "#{tabs}/** !TupleReturn */" if multireturn
			if t == "namespace_variable"
				print "#{tabs}#{pre}#{f.name}: (#{args}) => #{returns}\n"
			elseif t == "constructors"
				print "#{tabs}#{pre}#{classname}(#{args}): #{returns}\n"
			else
				print "#{tabs}#{pre}#{f.name}(#{args}): #{returns}\n"

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
			description = string.gsub e.description, "\n", "\n * "
			print "/**"
			print " * #{description}"
			print " */"
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
	description = string.gsub m.description, "\n", "\n\t * "
	print "\t/**"
	print "\t * @func #{m.name}"
	print "\t * #{description}"
	print "\t */"
	print "\texport namespace #{m.name} {"
	exportfunctions m.functions, 2, "namespace_function"
	print "\t}"

print "}"

