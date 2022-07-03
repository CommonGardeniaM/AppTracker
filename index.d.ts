/// <reference types="node" />
import { Worker } from "worker_threads";
export default class AppTracker {
    pid: number;
    worker: Worker;
    exit_function: (exitCode: number) => void;
    error_function: (err: Error) => void;
    constructor(pid: number);
    start(): number;
}
