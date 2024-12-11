import {Route, Routes} from "react-router-dom";
import HomePage from "./page/HomePage";
import Header from "./components/Header";
import {Container,  ThemeProvider} from "@mui/material";
import "../src/css/app.css";
import theme from "./css/muiTheme";
import {ThemeContext} from "@emotion/react";
import {useState} from "react";






function App() {
  const [themePage, setThemePage] = useState("light");

  const toggleTheme = () => {
    setThemePage((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{themePage,toggleTheme}}>
      <ThemeProvider theme={theme}>
        <Container>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
