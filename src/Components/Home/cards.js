import astrobg from "../../images/astrobg.png";
import earthbg from "../../images/earthbg.jpg";
import marsbg from "../../images/marsbg.jpg";
import nasabg from "../../images/nasabg2.png";
import techbg from "../../images/tech.jpg";
import satellitebg from "../../images/satellitebg.jpg";

export const cards = [
  {
    image: astrobg,
    path: "/astronomy-picture",
    header: "Astronomy Pictures",
    headerbg: "#0099cc",
    content: "See the best astronomy pictures of the day",
    contentbg: "white",
  },
  {
    image: marsbg,
    path: "/mars-images",
    header: "Mars Images",
    headerbg: "#ffe699",
    content:
      "You can see the images of red-planet taken by all three mars-rovers.",
    contentbg: "#d6d6c2",
  },
  {
    image: earthbg,
    path: "/polychromatic-earth",
    header: "Earth",
    headerbg: "#0099ff",
    content: "See Polychromatic images of Earth",
    contentbg: "#0059b3",
  },
  {
    image: nasabg,
    path: "/nasa-projects",
    header: "Nasa Projects",
    headerbg: "#0b3d91",
    content: "See details of projects where Nasa's been working on.",
    contentbg: "black",
  },
  {
    image: satellitebg,
    path: "/satellite-imagery",
    header: "Satellite Imagery",
    headerbg: "white",
    content:
      "See satellite images of you current location or any given location",
    contentbg: "lightgray",
  },
  {
    image: techbg,
    path: "/tech-news",
    header: "Tech News",
    headerbg: "#ff4000",
    content: "See all recent inventions and researches.",
    contentbg: "white",
  },
];
