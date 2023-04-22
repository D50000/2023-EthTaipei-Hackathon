import React, { useState, useEffect } from "react";
import Web3 from "web3";
import ImageUpload from "./components/ImageUpload";
import styled from "styled-components";
import { Identity } from "@semaphore-protocol/identity";

const Corners = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
  text-align: center;
  border-radius: 25px;
  border: 2px solid #73ad21;
`;

const Account = styled.div`
  margin-top: 5px;
  color: green;
`;

function App() {
  const [account, setAccount] = useState(null);

  const { trapdoor, nullifier, commitment } = new Identity();
  console.log(trapdoor, nullifier, commitment);
  function handleSubmit(e) {
    e.preventDefault();
    alert("Submit ID Verify !");
    // 上傳圖片到後端的程式碼
    // ...
  }

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
      <Corners>
        {account ? (
          <h2>
            Wallet Account: <Account>{account}</Account>
            <ImageUpload
              label="User ID Data"
              onSubmit={(e) => handleSubmit(e)}
            ></ImageUpload>
          </h2>
        ) : (
          <p>未連接 MetaMask 錢包</p>
        )}
      </Corners>
      <div>
        <h3>Trapdoor: {trapdoor}</h3>
        <h3>Nullifier: {nullifier}</h3>
        <h3>Commitment: {commitment}</h3>
        {/* 144698994230870455570316203059413520696111613442630847768503977765944302221n
        11827948054747260276871818349931896975949743658089513718321752016483487676n 
        7479741313694700264869122481844569128508882582898096878107575610039128214775n */}
      </div>
    </div>
  );
}

export default App;
