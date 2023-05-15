import { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../redux/store";
import RootLayout from "../layouts/RootLayout";

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return (
    <Provider store={store}>
      <RootLayout>
        <AnyComponent {...pageProps} />
      </RootLayout>
    </Provider>
  );
}

export default MyApp;
