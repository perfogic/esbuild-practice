import { Worker } from "node:worker_threads";
import { WorkerThreadTypes } from "worker_thread.interface";
import { ethers } from "ethers";

export async function sampleWorkerThread(workerType: WorkerThreadTypes) {
  const provider = new ethers.providers.JsonRpcProvider(
    "https://ethereum-goerli.publicnode.com"
  );

  const worker = new Worker(`${workerType}`, {
    workerData: {
      value: 1000000000,
      //   provider, // PANIC here: because can only pass pure variable
    },
  });

  worker.on("message", (data) => {
    console.log("Test data: ", data);
  });
}
