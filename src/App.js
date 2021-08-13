import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
  console.log("env: ", process.env.REACT_APP_TEXT);

  return (
    <Paper style={{ borderRadius: 0 }}>
      <Router>
        <Header />
        <div style={{ marginLeft: "4.8rem", marginTop: "4rem" }}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/astronomy-picture" component={AstronomyPictures} />
            <Route path="/mars-images" component={MarsImages} />
            <Route path="/satellite-imagery" component={SatelliteImagery} />
            <Route path="/polychromatic-earth" component={PolychromaticEarth} />
            <Route path="/tech-news" component={TechNews} />
            <Route path="/nasa-projects" component={NasaProjects} />
            <Route component={Default} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </Paper>
  );
}

export default App;
