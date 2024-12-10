import {Route, Routes} from "react-router-dom";
import HomePage from "./page/HomePage";
import Header from "./components/Header";
import {Container, Grid, ThemeProvider} from "@mui/material";
import "../src/css/app.css";
import theme from "./css/muiTheme";
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container
        >
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
