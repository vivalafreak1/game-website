import Hero from "./components/Hero";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Features from "./components/Features";
import Story from "./components/Story";

const App = () => {
  return (
    <main className="relative w-screen min-h-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Story />
    </main>
  );
};

export default App;
