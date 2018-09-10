<#
    .SYNOPSIS
    Build, clean and test.

    .DESCRIPTION
    Build, clean and test.
    Use `help build.ps1 -examples` for examples

    .EXAMPLE
    ./build.ps1
    Build the project.

    .EXAMPLE
    ./build.ps1 -Clean
    Clean all outputted files. Do not build.

    .EXAMPLE
    ./build.ps1 -Test
    Build the project and copy all.d.ts over for testing.
#>
param(
    [Switch] $Clean,
    [Switch] $Test)

function Clean {
    Remove-Item dist/*
    Remove-Item src/*.lua
    Remove-Item test/*.d.ts
    Remove-Item test/*.lua
}

function Apply-Fixes {
    <#
        .DESCRIPTION
        Applies some fixes.
        The typescript conversion doesn't work for all cases.
    #>
    param($x)

    # A raycast function has a second y1 parameter, this changes its name to y2
    $x = $x -replace [Regex]::Escape("rayCast(x1: number, y1: number, x2: number, y1: number"), "rayCast(x1: number, y1: number, x2: number, y2: number"

    # Transform#reset returns a Transform
    $x = $x -replace "reset\(\): \[\]", "reset(): Transform"

    # Varargs cannot go in between arguments
    $x = $x -replace [Regex]::Escape("setMatrix(e1_1: number, e1_2: number, ...vararg: number[], e4_4: number): Transform"), "setMatrix(e1_1: number, e1_2: number, ...vararg: number[]): Transform"
    $x = $x -replace [Regex]::Escape("setMatrix(layout: MatrixLayout, e1_1: number, e1_2: number, ...vararg: number[], e4_4: number): Transform"), "setMatrix(layout: MatrixLayout, e1_1: number, e1_2: number, ...vararg: number[]): Transform"

    return $x
}

function Build {
    bash -c "moonc src/*.moon"
    lua src/tots.lua | Out-File "dist/l2d.d.ts"
    $x = Apply-Fixes (Get-Content "dist/l2d.d.ts")
    Set-Content "dist/l2d.d.ts" $x
    copy types-lua/types/* dist/
    copy src/*.d.ts dist/
    if (Test-Path dist/all.d.ts) { rm dist/all.d.ts }
    Get-Content dist/*.d.ts | Set-Content dist/all.d.ts
    Write-Host -f Yellow "Check out dist/all.d.ts for all lua + Love2D definitions"
}

if ($Clean) { Clean } else { Build }

if ($Test) {
    copy dist/all.d.ts test/
    Write-Host -f Yellow "Open test/test.ts in a text editor to see if the definitions work"
}
