import { Worker } from "worker_threads"

export default class AppTracker{

    pid: number
    worker: Worker
    exit_function = (exitCode: number) => {}
    error_function = (err: Error) => {}

    constructor(pid: number) {
        this.pid = pid
        this.worker = new Worker(new URL('./worker.js', import.meta.url))
    }

    start(){
        this.worker.addListener("exit", this.exit_function)
        this.worker.addListener("error", this.error_function)
        this.worker.postMessage(this.pid)
        return this.worker.threadId
    }
}
