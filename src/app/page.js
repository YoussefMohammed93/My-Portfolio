import { Home } from "./home/home";
import { Expertise } from "./expertise/expertise";
import ScrollToTopButton from "@/components/scoll-to-top-button";
import CustomCursor from "@/components/custom-cursor";
import { Work } from "./work/work";
import { Experience } from "./experience/experience";

export default function App() {
  return (
    <main>
      <Home />
      <Expertise />
      <Work />
      <Experience />
      <CustomCursor />
      <ScrollToTopButton />
    </main>
  );
}
