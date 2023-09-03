import { useRef } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";

function App() {
  const ref0 = useRef<HTMLDivElement>(null);
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);
  const refs = [ref0, ref1, ref2, ref3, ref4]

  const scrollToComponent = (componentId: number) => {
    refs[componentId].current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <NavBar scroll={(i) => scrollToComponent(i)} />
      <Home ref={refs[0]} />
      <About ref={refs[1]} />
      <Skills ref={refs[2]} />
      <Projects ref={refs[3]} />
      <Education ref={refs[4]} />
    </>
  );
}

export default App;
