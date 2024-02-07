import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Appbar from "./shared/appbar";
import { TaskProvider } from "./context/taskContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TaskProvider>
      <Appbar />
      <div className="max-w-[1200px] mx-auto">
        <Component {...pageProps} />
      </div>
    </TaskProvider>
  );
}

export default MyApp;
