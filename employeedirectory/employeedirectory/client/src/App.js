import React from "react";
import Main from "./pages/Main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <Main />
      </Wrapper>
      <Footer />
    </div>
  );
}


export default App;
