import React, { useEffect } from "react";
import Vistuar from "./modules/Vistuar.jsx";
import MainBanner from "../pages/modules/MainBanner.jsx";
import Whychooesebihar from './modules/Whychooesebihar.jsx';
// import NewwhychosesUS from "./NewwhychosesUS";
// import Ourclints from "./Ourclints";
// import Ourtestmonial from "./Ourtestmonial";
 import Business from "./modules/Business";
 import Videoalumni from "./modules/Videoalumni.jsx";
// import Career from "./Career";
 import HappyCustomers from "./HappyCustomers.jsx";
 import Footer from "./Footer";
 import Ourteam from './Ourteam'
 import Ourpolicy from './Ourpolicy'
 import Ourbusinessmodel from './Ourbusinessmodel'
 import HandicraftGallery from "./HandicraftGallery.jsx";
  import Ourproduct from "./Ourproduct.jsx";
  import Mainbannernew from './Mainbannernew';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{
        backgroundImage:
          "url('/image/3662a43d-artificial-intelligence.jpeg.optimal.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <div style={{  background: "#fefaf0" }}>
       {/* <Mainbannernew/> */}
        <MainBanner />
        {/* <Vistuar /> */}
        <HandicraftGallery />
        <Ourproduct/>
        {/* <Whychooesebihar/> */}
        <Ourbusinessmodel/>
        <Ourpolicy/>
        {/* <HappyCustomers/> */}
        {/* <Ourteam/> */}
        {/* <Videoalumni/> */}
        {/* <Business/> */}
        {/* <Footer/> */}
      </div>
    </div>
  );
};

export default Home;
