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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId="038b83b824298094fd986ab87fd36ca3" // Replace with your client ID
      activeChain="polygon"
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet(),
        walletConnect(),
        safeWallet({
          personalWallets: [
            metamaskWallet(),
            coinbaseWallet(),
            walletConnect(),
            trustWallet(),
            phantomWallet(),
          ],
        }),
        trustWallet(),
        phantomWallet(),
      ]}
    >
      <Header />
      <Component {...pageProps} />
      <Navbar />
      {/* Use ConnectWallet component to enable wallet connectivity */}
      <ConnectWallet theme="dark" switchToActiveChain={true} modalSize="wide" />
    </ThirdwebProvider>
  );
}

export default MyApp;
