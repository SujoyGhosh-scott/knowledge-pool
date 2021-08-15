import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import Home from "./Components/Home/Home";
import AstronomyPictures from "./Components/AstronomyPicture/AstronomyPictures";
import MarsImages from "./Components/MarsImages/MarsImages";
import PolychromaticEarth from "./Components/polychromaticEarth/PolychromaticEarth";
import TechNews from "./Components/TechNews/TechNews";
import NasaProjects from "./Components/NasaProjects/NasaProjects";
import SatelliteImagery from "./Components/SatelliteImagery/SatelliteImagery";
import Default from "./Components/Default";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";

function App() {
  const [mode, setMode] = React.useState("light");
  console.log(process.env.REACT_APP_TEXT);

  const theme = createTheme({
    palette: {
      type: mode,
    },
  });

  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else if (mode === "dark") {
      setMode("light");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ borderRadius: 0 }}>
        <Router>
          <Header changeMode={changeMode} />
          <div style={{ marginLeft: "4.5rem", marginTop: "3.8rem" }}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/astronomy-picture" component={AstronomyPictures} />
              <Route path="/mars-images" component={MarsImages} />
              <Route path="/satellite-imagery" component={SatelliteImagery} />
              <Route
                path="/polychromatic-earth"
                component={PolychromaticEarth}
              />
              <Route path="/tech-news" component={TechNews} />
              <Route path="/nasa-projects" component={NasaProjects} />
              <Route component={Default} />
            </Switch>
          </div>
          <Footer />
        </Router>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
