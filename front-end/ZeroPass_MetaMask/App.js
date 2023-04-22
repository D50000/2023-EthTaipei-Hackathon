import React, { useState, useEffect } from "react";
import Web3 from "web3";

function App() {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    async function fetchData() {
      // 建立 Web3 物件
      // const provider = new Web3.providers.HttpProvider("https://goerli.net");
      // const web3 = new Web3(provider);
      const provider = new Web3.providers.HttpProvider("/api");
      const web3 = new Web3(provider);

      // 取得帳號資訊
      const accounts = await web3.eth.getAccounts();
      console.log(accounts);
      const defaultAccount = accounts[0];
      setAccount(defaultAccount);
    }
    fetchData();
  }, []);

  return (
    <div>
      {account ? <p>當前帳戶：{account}</p> : <p>未連接 MetaMask 錢包</p>}
    </div>
  );
}

export default App;
