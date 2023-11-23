import { Worker } from "node:worker_threads";
import { WorkerThreadTypes } from "worker_thread.interface";

export async function sampleWorkerThread(workerType: WorkerThreadTypes) {
  const worker = new Worker(`${workerType}`, {
    workerData: {
      value: 10000000000,
    },
  });

  setInterval(() => {
    console.log("Tuhu...");
  }, 1000);

  worker.on("message", (data) => {
    console.log("Test data: ", data);
  });
}
