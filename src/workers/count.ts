import { parentPort, workerData } from "worker_threads";
import { CountResponse } from "workers/count.interface";

let initData = workerData.value as number;
let total = 0;
for (let i = 0; i < initData; i++) {
  total++;
}

parentPort.postMessage({
  data: total,
} as CountResponse);
