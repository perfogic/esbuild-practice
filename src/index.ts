import { ethers } from "ethers";

const main = async () => {
  const PRIVATE_KEY = "";

  const SEED_ADDRESSES = [
    "0xF7FA5aCEc4Bffea9830043b317045dBa76dA3366",
    "0xD705b07439A08EB454AD816DE2Ee87FA6AdD2f8e",
    "0x63b997343B111E043198f8B9939a85aecEc01944",
  ];

  let transactionHashes = [] as string[];

  const handleSentTransaction = async (
    privateKey: string,
    address: string,
    nonce: number
  ) => {
    try {
      const provider = new ethers.providers.JsonRpcProvider(
        "https://ethereum-goerli.publicnode.com"
      );
      const signer = new ethers.Wallet(privateKey, provider);

      const tx = await signer.sendTransaction({
        to: address,
        data: "0x",
        value: ethers.utils.parseEther("0.0000001"),
        nonce: ethers.BigNumber.from(nonce.toString()),
      });

      await tx.wait(0);

      transactionHashes.push(`${tx.hash} - Nonce: ${nonce}`);
    } catch (err) {}
  };

  const provider = new ethers.providers.JsonRpcProvider(
    "https://ethereum-goerli.publicnode.com"
  );
  const nonce = await provider.getTransactionCount(
    "0xe4c2B359D3e775A586Ef1C2eFcdc5EFa376d97a6"
  );
  const nonceNumber = parseInt(nonce.toString());

  await Promise.all(
    [
      ...SEED_ADDRESSES,
      ...SEED_ADDRESSES,
      ...SEED_ADDRESSES,
      ...SEED_ADDRESSES,
      ...SEED_ADDRESSES,
      ...SEED_ADDRESSES,
      ...SEED_ADDRESSES,
      ...SEED_ADDRESSES,
      ...SEED_ADDRESSES,
      ...SEED_ADDRESSES,
    ].map((address, idx) =>
      handleSentTransaction(PRIVATE_KEY, address, nonceNumber + idx)
    )
  );

  console.log(transactionHashes);
};

main();
