## AppTracker
アプリケーションが実行終了時に関数を実行するライブラリ

使い方の例
``` javascript
const process = spawn("notepad")
const tracker = new AppTracker(process.pid)
tracker.exit_function = (exitCode) => console.log(exitCode) //正しく終了したら0が出力される
tracker.start()
```
