import { Home } from "./home/home";
import { Expertise } from "./expertise/expertise";
import ScrollToTopButton from "@/components/scoll-to-top-button";

export default function App() {
  return (
    <main>
      <Home />
      <Expertise />
      <ScrollToTopButton />
    </main>
  );
}
