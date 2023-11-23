import { ethers } from "ethers";
import { parentPort, workerData } from "worker_threads";
import { CountResponse } from "workers/count.interface";

const handleTotal = async () => {
  let initData = workerData.value as number;
  let total = 0;
  for (let i = 0; i < initData; i++) {
    total++;
  }
  return total;
};

handleTotal().then((res) => {
  parentPort.postMessage({
    data: res,
  } as CountResponse);
});
