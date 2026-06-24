import { Helmet } from "react-helmet-async";
import React, { useEffect } from "react";

import Vistuar from "./modules/Vistuar.jsx";
import MainBanner from "../pages/modules/MainBanner.jsx";
import Business from "./modules/Business";
import Videoalumni from "./modules/Videoalumni.jsx";
import HappyCustomers from "./HappyCustomers.jsx";
import Footer from "./Footer";
import Ourteam from "./Ourteam";
import Ourpolicy from "./Ourpolicy";
import Ourbusinessmodel from "./Ourbusinessmodel";
import HandicraftGallery from "./HandicraftGallery.jsx";
import Ourproduct from "./Ourproduct.jsx";
import Mainbannernew from "./Mainbannernew";
import Categry from "../pages/modules/Categry.jsx";
import GiftSlider from "./GiftSlider.jsx";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Handmade Handicrafts & Home Decor | BiZhar Heritage
        </title>

        <meta
          name="description"
          content="Buy premium handmade handicrafts, home decor and artisan products online in India."
        />

        <meta
          name="keywords"
          content="handmade handicrafts India, home decor online, artisan products"
        />
      </Helmet>

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
        <div style={{ background: "#fff" }}>
          {/* <Mainbannernew /> */}
          {/* <GiftSlider /> */}

          <MainBanner />

          <Categry />

          {/* <Vistuar /> */}

          <HandicraftGallery />

          <Ourproduct />

          {/* <Ourbusinessmodel /> */}
          {/* <Ourpolicy /> */}
          {/* <HappyCustomers /> */}
          {/* <Ourteam /> */}

          <Videoalumni />

          <Ourproduct />

          {/* <Business /> */}
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
};

export default Home;