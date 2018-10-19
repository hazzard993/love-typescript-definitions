-- Returns the LOVE API, safe for typescript
export api = require 'love-api.love_api'
api.modules[10].types[7].functions[16].variants[1].arguments[4].name = 'y2'
table.remove(api.modules[8].types[4].functions[9].variants[1].arguments, 4)
table.remove(api.modules[8].types[4].functions[9].variants[2].arguments, 4)
return api
