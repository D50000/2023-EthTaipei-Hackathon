import React, { useState, useEffect } from "react";
import Web3 from "web3";
import ImageUpload from "./components/ImageUpload";
import styled from "styled-components";

const Account = styled.div`
  margin-top: 5px;
  color: green;
`;

function App() {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    async function fetchData() {
      // 建立 Web3 物件
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          // 請求 MetaMask 授權使用帳戶
          await window.ethereum.enable();
          // 取得帳號資訊
          const accounts = await web3.eth.getAccounts();
          const defaultAccount = accounts[0];
          setAccount(defaultAccount);
        } catch (error) {
          console.error(error);
        }
      } else {
        console.error("未偵測到 MetaMask 插件");
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {account ? (
        <h2>
          Wallet Account: <Account>{account}</Account>
          <ImageUpload label="User ID Data"></ImageUpload>
        </h2>
      ) : (
        <p>未連接 MetaMask 錢包</p>
      )}
    </div>
  );
}

export default App;
