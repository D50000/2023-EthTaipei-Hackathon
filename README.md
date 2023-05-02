# 2023 EthTaipei Hackathon

For [**EthTaipei-hackathon**](https://taikai.network/ethtaipei/hackathons/hackathon/prizes) competition.

- [Project Ideas, Competition Rules](https://docs.google.com/document/d/1P1IHRy7ix4IYtiTw7-Pmn9gFjAdUsHQrz0ZSRZtfEEE/edit#)
- Prize and Categories
  ![](https://github.com/D50000/fighting-game-2D/blob/main/archive/categories.jpg)

## [ZeroChain](https://taikai.network/ethtaipei/hackathons/hackathon/projects/clgsr3qg96196390101256ssyd5/idea)

**ZeroChain** presents **ZeroPass**, a service leveraging [Semaphore](https://semaphore.appliedzkp.org/docs/introduction) for [Zero-Knowledge](https://en.wikipedia.org/wiki/Zero-knowledge_proof) authentication ([PSE service](https://appliedzkp.org/?fbclid=IwAR1clr8HCpsV4PV8lS48oBMu3jd7bwEVOL6BqK9TDGmit8tWpZVWqr8iKmM#top)). Users submit ID and license to ZeroPass, which verifies and adds their commitment to the Semaphore. The new service flow to improve security, convenience and integrate [AutoPass](https://autopass.notion.site/ETH-Taipei-Hackathon-6c2e9a5f561147f8a43c3f3ef1c9fc54) with **Smart Contract**.

- Scenarios: https://autopass.notion.site/ETH-Taipei-Hackathon-6c2e9a5f561147f8a43c3f3ef1c9fc54
- Data Flow: https://docs.google.com/document/d/1fcTVqekdQlz07ijKKUNNiT5kG-a0v7UOIoywtdSMd7Y/edit

- How  
  ![](https://github.com/D50000/fighting-game-2D/blob/main/archive/how.jpg)
- What  
  ![](https://github.com/D50000/fighting-game-2D/blob/main/archive/what.jpg)
- Why  
  ![](https://github.com/D50000/fighting-game-2D/blob/main/archive/why.jpg)
- [Presentation Detail](https://taikai.network/ethtaipei/hackathons/hackathon/projects/clgsr3qg96196390101256ssyd5/idea)

## Competition Result:

[ETHTaipei Hackathon (April 21 - 23) - All Participants Projects](https://taikai.network/ethtaipei/hackathons/hackathon/projects)

- [Result & Prize](https://twitter.com/EthTaipei/status/1652953655723855872)
- We Win:
  ![](https://github.com/D50000/fighting-game-2D/blob/main/archive/zeroChain.jpg)

## Demo Platform:

Support over all platform.

**Front-end:**

- ZeroPass-Client
- ZeroPass-meta-mask
  <details>
  <summary>Host Server:</summary>
  - Web:
    - Install dependencies  
      `npx expo install react-native-web@~0.18.10 react-dom@18.2.0 @expo/webpack-config@^18.0.1`
  - Android:
    - Through Device  
      Install **Expo Go** app and run `npx expo start --tunnel` and scan the QR code.
  - IOS:
    - Through Device  
      Install **Expo Go** app and run `npx expo start --tunnel` and scan the QR code.
  </details>

**Back-end:**

[ZeroPass Service](https://github.com/D50000/ZeroPass)
