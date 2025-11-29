import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="min-h-screen bg-white text-[#5F6B7B] transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Profile />
        <Projects />
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
