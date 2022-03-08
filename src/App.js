import React from "react";
import Header from "./Components/header/header";
import Footer from "./Components/footer/footer";
import FormRegister from "./Components/form/form_register";

function App() {
  return (
      <div className='App'>
          <Header />
          <FormRegister />
          <Footer />
      </div>
  );
}

export default App;
