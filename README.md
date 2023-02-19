# DecentraLance - The Ultimate Freelancing DAPP

Decentralance lets you hire talent from around the world, and pay them in crypto. We are a community of freelancers, developers, designers, and more. We are Decentralance.

[Presentation](https://www.canva.com/design/DAFbA40WFkw/F64yrpxgw0E6lIBAeE-C6w/view)
[Demo video](https://youtu.be/CqrCyR_cFB0)
[Learn more](https://drive.google.com/drive/folders/1EAHSUzuf60Sdv4vyNTexNvVP19sIIO69?usp=sharing)

## Introduction

Decentralance is the ultimate freelancing decentralized application (DAPP) that connects employers with top talent from around the world. With a community of skilled professionals including developers, designers, writers, and more, Decentralance offers a vast pool of talent for all your project needs.

Our platform is governed by an escrow-based smart contract, which ensures that all transactions are secure and transparent. We have incorporated several features to make the process of freelancing as easy and efficient as possible. Our platform includes a quick chat function using push protocol, live video and audio calls using Livepeer, and wallet-less authentication using Arcana. Additionally, we offer consultancy services where sellers can provide hourly video call-based consultations to clients, with payments streamed using Superfluid. For clients with project ideas, we offer flash loans using Aave grants to help them launch their projects. Our AI-based matchmaking algorithm ensures that clients can find the best freelancers available for their projects, and they can connect with them using gigs stored in Filecoin. Clients can communicate with freelancers using our push chat function, and have live stream consultancy calls using Livepeer, with payment made on a per-hour basis using Superfluid. Our payment system is governed by escrow-based smart contracts deployed on Polygon, with market price and cost coverages converted to tokens using Chainlink oracle and live data using The Graph. In case clients need financial support, we also offer the option to get flash loans using Aave. Our platform also boasts a sleek and user-friendly UI, ensuring that clients and freelancers can easily navigate our platform and access all the features available to them

At Decentralance, we believe that all you need is an idea, and we will take care of the rest. Join our platform today and experience a whole new world of freelancing.

### Advantages

- Secure and Transparent Transactions: Decentralance is governed by an escrow-based smart contract, which ensures that all transactions are secure and transparent.
- Global Access to Talent: By connecting clients to potential sellers from around the world, Decentralance provides access to a global pool of talent.
- Efficient and Streamlined Process: With features like quick chat, live video and audio calls, and consultancy services, Decentralance provides an efficient and streamlined process for freelancing. This makes it easier for clients and freelancers to communicate and collaborate, which can lead to faster and better results.
- Decentralized Payments: Decentralance uses cryptocurrency payments, which are fast, secure, and transparent. Payments are made using Superfluid, which allows for real-time payments, ensuring that freelancers get paid quickly and efficiently.
- AI-based Matchmaking: Decentralance uses an AI-based matchmaking algorithm to connect clients with the best available freelancers for their projects.

# Implementations

## Aave

- Flash Loans: Decentralance offers flash loans using Aave grants to help clients who have a great idea but are short on funds. These loans allow clients to quickly access the capital they need to launch their projects, without the need for collateral.

- Decentralized Lending: In addition to flash loans, Decentralance provides a platform for decentralized lending and borrowing using Aave. This means that clients can access funds from lenders all over the world, without the need for a centralized intermediary.

## Filecoin Virtual Machine

- Decentralized Storage: Decentralance stores client and freelancer gigs (project details) using the Filecoin VM. This allows for secure, decentralized storage of project data, ensuring that sensitive information is kept private and is not vulnerable to attacks.

- Decentralized Computing: By leveraging the Filecoin VM, Decentralance also provides a decentralized computing platform for freelancers. This allows freelancers to run complex computations and analytics tasks without the need for expensive hardware, all while ensuring privacy and security.

## Polygon

- Aave: Decentralance integrates Aave lending on Polygon, which allows clients to borrow cryptocurrency without the need for a centralized intermediary. By using Aave on Polygon, Decentralance can offer fast, secure, and low-cost loans to users that can be used to finance their projects

- Superfluid: Decentralance integrates Superfluid on Polygon, which allows for real-time streaming of tokens. Superfluid enables freelancers to be paid in real-time while they are working on a project / Providin consultancy to clients, which provides them with a more stable and predictable income stream

## Livepeer

- Video storage: Decentralance uses Livepeer to store gig videos and freelancer intro videos. By using Livepeer for video storage, Decentralance provides a more decentralized and cost-effective way to store and share these videos. This is a significant advantage over traditional centralized video hosting services, which can be expensive and may not be as reliable as a decentralized network like Livepeer.

- Bidding: Decentralance uses Livepeer to enable clients to stream their project idea and allow freelancers to bid on it in real-time through video. This feature provides a more engaging and interactive way for clients and freelancers to interact and helps to create a more dynamic and competitive environment for bidding.

  > Ref : https://docs.livepeer.org/guides/developing/create-a-livestream

- Live consultancy: Livepeer is integrated along with superfluid to generate per second payment stream where client and consultant can discuss and token are streamed on per second basis from client to the consultant

## Mantle

- Cross-chain interoperability: Decentralance is built to work across multiple blockchains, including Ethereum and Polygon. Mantle provides an easy way to deploy smart contracts that can interact with multiple chains, enabling Decentralance to offer its services to a broader range of users.

- Smart contract deployment: Mantle makes it easy to deploy and manage smart contracts. All of the smart contracts used in Decentralance, including the escrow-based smart contract, are deployed on Mantle (testnet), providing a secure and reliable infrastructure for transactions.

- RPC provider and testnet: Mantle provides a reliable RPC provider and testnet for developers to test and deploy their smart contracts. Decentralance has used the Mantle RPC provider and testnet to ensure that all smart contracts are functioning correctly and to provide a smooth user experience.

## Chainlink

- Live and Reliable data: Decentralance uses Chainlink to obtain live data for market price and cost coverage for services offered by freelancers, ensuring that clients are paying a fair and up-to-date price for the services they receive.

- Decentralized data: Chainlink's decentralized oracle network ensures that data used in smart contracts is obtained from multiple sources and is not controlled by a single entity. This provides added security and trust to the smart contract system used in Decentralance.

- Smart contract integration (Random number and price feeds): Decentralance has integrated Chainlink into its smart contract system to provide reliable and secure off-chain data

## Superfluid

- Subscription model: Superfluid is used to create a subscription-based model where clients can stream tokens to freelancers for a particular period when the freelancer is working for them. This allows for more flexible payment options for clients, who can pay freelancers on a continuous basis instead of paying a lump sum upfront.

- Live consultancy calls: Superfluid is also used to provide token streams for live consultancy calls between freelancers and clients. When a client and freelancer get on a video call using Huddle01, which is integrated into the Decentralance site, tokens are streamed at a particular rate from the client to the consultant (freelancer). This ensures that the consultant is compensated in real-time for their time spent on the call, providing a more transparent and fair payment system for all parties involved.

## Arcana

- Auth: We have implemented Arcana for wallet-less authentication, making it easy for clients with limited knowledge of web3 to use our platform. With Arcana, clients can easily access the platform without needing to create and manage a separate wallet. This provides a more seamless experience for new users and reduces the barriers to entry for web3 applications.

## Transak

- Fiat on Ramp: We have integrated Transak, which is a fiat on-ramp service. This allows clients to easily purchase tokens using their preferred fiat currency and then use those tokens to pay for services on our platform. With this integration, we are able to offer a wider range of payment options, making it easier for clients to use our platform.

## Quicknode

- RPC Provider: In our DecentraLance freelancing Dapp, we have utilized QuickNode as our preferred RPC provider. QuickNode provides a fast and reliable infrastructure for our smart contract interactions, allowing us to deliver a smooth and responsive experience for our users.

## Push protocol

- Notifications: Push protocol is used to send real-time notifications to users when a new message is received, a bid is placed, or a project milestone is completed.

- Chat: Decentralance uses push chat, which allows users to chat in real-time without having to constantly refresh the page. This enhances the user experience by making the chat feature more responsive.

- Updates: Push protocol is also used to send updates to users about their projects or bids. For example, if a freelancer completes a milestone or a client approves a milestone, a push notification is sent to the other party to inform them.

- Engagement: By using push notifications to remind users of upcoming milestones or deadlines, Decentralance aims to increase user engagement and improve the overall success rate of projects on the platform.

# Technical

## Configuration

1. First, make sure you have Node.js and npm (Node Package Manager) installed on your computer, You can check this by running the following commands in your terminal:

```
    node -v
    npm -v
```

> Read docs here [Node.js Documentation](https://nodejs.org/en/docs/)

2. Once you have npm installed you can run the following both to install and upgrade Yarn

```
    npm install --global yarn
    yarn --version
```

> Read docs here [Yarn Installation guide](https://classic.yarnpkg.com/lang/en/docs/install)

## Installation

1. Clone the News-Unchained project from GitHub

```
    git clone https://github.com/KarthikS373/NewsUnchained.git
```

2. Once the project is cloned, navigate into the project directory and run the following command to install all the necessary dependencies:

```
    yarn install
```

3. Finally, to start the development server, run the following command in your terminal:

```
    yarn dev
```

> This will start the development server and you should be able to see your project running at [`http://localhost:3000`](http://localhost:3000) in your browser.

## Details

## Techstack

Front-end

- Next.js: React framework for building server-side rendered web applications
- Tailwind CSS: utility-first CSS framework for rapid UI development

Back-end

- Polygon: EVM-compatible sidechain for fast and low-cost transactions
- Hardhat: development environment for building and testing smart contracts
- Solidity: programming language for writing smart contracts on Ethereum
- Mantle: blockchain infrastructure and developer platform for building decentralized applications

Other Technologies

- Superfluid: protocol for real-time streaming of ERC-20 tokens
- Livepeer: decentralized video streaming network for live and on-demand video
- Chainlink: decentralized oracle network for providing off-chain data to smart contracts
- The Graph: protocol for indexing and querying data from blockchains
- Filecoin: decentralized storage network for storing and retrieving data
- Arcana: decentralized identity protocol for secure and private authentication
- Aave: decentralized lending and borrowing platform for cryptocurrencies
- QuickNode: provider of fast and reliable Ethereum and BSC nodes for developers
- Pusher: platform for building real-time web applications with push notifications and chat

> Note: We have also used TypeScript for type safety and better developer experience.

# Misc

## Contributors

- Advit Mahale
- Jyotiraditya Kuanar
- Karthik S
- Partha Das
- Shashank Pandey
