import Image from "next/image";
import { Inter } from "next/font/google";
import AllTasks from "./components/allTasks";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex-1">
      <AllTasks />
    </main>
  );
}
