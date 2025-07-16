import './App.css'
//@ts-ignore
import React, { FC, useMemo } from 'react';
//@ts-ignore
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
//@ts-ignore
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
//@ts-ignore
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
//@ts-ignore
import {
  WalletModalProvider,
  //@ts-ignore
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
//@ts-ignore
import { clusterApiUrl } from '@solana/web3.js';

import '@solana/wallet-adapter-react-ui/styles.css';

import { RequestAirdrop } from "./Components/RequestAirdrop"
import { ShowBalance } from './Components/ShowBalance';
import { SendToken } from './Components/SendToken';
import { SolHEader } from './Components/SolHeader';
import { Layout } from './Components/Main/Layout';

function App() {


  return (
    <ConnectionProvider endpoint='https://api.devnet.solana.com'>
      <WalletProvider wallets={[]}>
        <WalletModalProvider>

          {/* <WalletMultiButton /> */}
          {/* <div>
                  <RequestAirdrop/>
                </div>
                <div>
                  <ShowBalance />
                </div>
                <div className='border-4 w-full m-4 mb-6'></div>
                <div>
                  <SendToken />
                </div> */}

                {/* <SolHEader /> */}

                <Layout />

        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default App
