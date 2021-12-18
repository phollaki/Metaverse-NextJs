import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";
import {RecoilRoot} from "recoil"

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_APP_ID}
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
    >
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </MoralisProvider>
  );
}

export default MyApp;
