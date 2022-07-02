import { parentPort } from "worker_threads";
import isRunning from "is-running"

parentPort?.on("message", (pid) => {
    let id = setInterval(() => {
        if(!isRunning(pid)){
            clearInterval(id)
            process.exit(0)
        }
    }, 1000);
})