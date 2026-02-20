import React from "react";
import ArtBanner from "./ArtBanner";
import Topartists from "./Topartists";
import Gellery from "./Gellery";
import ImageTrainSlider from "./ImageTrainSlider";
import SupportivePillars from "./SupportivePillars.jsx";
import Footer from "./Footer.jsx";

const ArtisansPage = () => {
  return (
    <>
      <ArtBanner />
      <Topartists />
      <SupportivePillars />
      <ImageTrainSlider />
        {/* <Gellery /> */}
        <Footer />

    </>
  );
};

export default ArtisansPage;
