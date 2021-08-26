//import curiosity from "../../images/curiosity.PNG";
//import oppertunity from "../../images/oppertunity.png";
//import spirit from "../../images/spirit.png";

export const roverInfo = {
  curiosity: {
    launchDate: "2011-11-26",
    image:
      "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia23378-16.jpg",
    landDate: "2012-08-06",
    status: "active",
    camera: ["FHAZ", "RHAZ", "MAST", "CHEMCAM", "MAHLI", "MARDI", "NAVCAM"],
    cameraName: [
      "Front Hazard Avoidance Camera",
      "Rear Hazerd Avoidance Camera",
      "Mast Camera",
      "Chemistry and Camera Complex",
      "Mars Hand Lens Imager",
      "Mars Descent Imager",
      "Navigation Camera",
    ],
  },
  spirit: {
    launchDate: "2003-06-10",
    image:
      "https://solarsystem.nasa.gov/system/content_pages/main_images/1068_rover2-1.jpg",
    landDate: "2004-01-04",
    status: "complete",
    camera: ["FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"],
    cameraName: [
      "Front Hazard Avoidance Camera",
      "Rear Hazerd Avoidance Camera",
      "Navigation Camera",
      "Panoramic Camera",
      "Miniature Thermal Emission Spectrometer(Mini-TES)",
    ],
  },
  oppertunity: {
    launchDate: "2003-07-07",
    image:
      "https://api.time.com/wp-content/uploads/2019/02/nasa-space-rover-opportunity-1.jpg?quality=85",
    landDate: "2004-01-25",
    status: "complete",
    camera: ["FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"],
    cameraName: [
      "Front Hazard Avoidance Camera",
      "Rear Hazerd Avoidance Camera",
      "Navigation Camera",
      "Panoramic Camera",
      "Miniature Thermal Emission Spectrometer(Mini-TES)",
    ],
  },
};
