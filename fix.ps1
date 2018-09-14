$x = Get-Content "_G.d.ts"

# A raycast function has a second y1 parameter, this changes its name to y2
$x = $x -replace [Regex]::Escape("rayCast(x1: number, y1: number, x2: number, y1: number"), "rayCast(x1: number, y1: number, x2: number, y2: number"

# Transform#reset returns a Transform
$x = $x -replace "reset\(\): \[\]", "reset(): Transform"

# Varargs cannot go in between arguments
$x = $x -replace [Regex]::Escape("setMatrix(e1_1: number, e1_2: number, ...vararg: number[], e4_4: number): Transform"), "setMatrix(e1_1: number, e1_2: number, ...vararg: number[]): Transform"
$x = $x -replace [Regex]::Escape("setMatrix(layout: MatrixLayout, e1_1: number, e1_2: number, ...vararg: number[], e4_4: number): Transform"), "setMatrix(layout: MatrixLayout, e1_1: number, e1_2: number, ...vararg: number[]): Transform"

Set-Content -Value $x -Path "_G.d.ts"
