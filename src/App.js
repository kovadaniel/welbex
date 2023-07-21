import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AppRouter from './components/AppRouter';
import { RootContext } from "./context";
import { useState } from "react";
import useWindowSize from "./hooks/useWindowSize";


function App() {
  const [width, height] = useWindowSize();
  return (
    <RootContext.Provider value={width}>
      <div className="App">
        <Header/>
        <BrowserRouter>
          <AppRouter/>
        </BrowserRouter>
        <Footer/>
      </div>
    </RootContext.Provider>
  );
}

export default App;
