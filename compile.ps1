cls
bash -c "moonc *.moon"
lua to_ts.lua | Out-File love2d.d.ts
Start-Sleep 1
./defects.ps1