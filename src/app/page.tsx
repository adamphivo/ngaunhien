import Count from "../components/count";
import { sayGreetings } from "@/lib/serverOnly";
export default function Home() {
  sayGreetings();
  return (
    <main>
      <h1>Hello next !</h1>
      <Count />
    </main>
  );
}
