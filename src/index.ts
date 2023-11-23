import { sampleWorkerThread } from "./worker_thread";
import { WorkerThreadTypes } from "worker_thread.interface";
import path from "path";

const main = async () => {
  console.log(path.resolve(__dirname, "./count.ts"));
  sampleWorkerThread(WorkerThreadTypes.COUNT_SAMPLE);
};

main();
