import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Appbar from "./shared/appbar";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Appbar />
      <div className="max-w-[1200px] mx-auto px-10 py-5 my-5 rounded-lg border shadow-lg flex  gap-10">
        <Component {...pageProps} />
      </div>
    </>
  );
}
