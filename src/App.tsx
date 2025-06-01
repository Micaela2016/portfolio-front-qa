import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar.tsx";

function App() {
  return (
     <div>
      <Navbar /> 
      <section id="inicio" className="p-8">
        <h1 className="text-3xl font-bold">¡Bienvenida a mi portafolio!</h1>
      </section>
    </div>
  );
}

export default App;
