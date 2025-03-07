import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Body from "./body/body";
import Footer from "./footer/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>  
      <Body />
      <Footer />
    </div>
  );
}

export default App;
