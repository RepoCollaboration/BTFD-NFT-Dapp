import type { AppProps } from "next/app";
import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  safeWallet,
  trustWallet,
  phantomWallet,
} from "@thirdweb-dev/react";
import "../styles/globals.css";
import Navbar from "../components/navbar";
import Header from "../components/header";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "polygon";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId="038b83b824298094fd986ab87fd36ca3"
      activeChain={activeChain}
       supportedWallets={[
        metamaskWallet(),
        coinbaseWallet(),
        walletConnect(),
      ]}
    >
      <Header />
      <Component {...pageProps} />
      <Navbar />
    </ThirdwebProvider>
  );
}

export default MyApp;
