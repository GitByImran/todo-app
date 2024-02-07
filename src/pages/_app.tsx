import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Appbar from "./shared/appbar";
import Sidemenu from "./components/sidemenu";
import BottomMenu from "./components/bottomMenu";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Appbar />
      <div className="w-[1200px] h-96 mx-auto px-10 py-5 my-5 rounded-lg border shadow-lg flex  gap-10">
        <Sidemenu />
        <Component {...pageProps} />
        <BottomMenu />
      </div>
    </>
  );
}
