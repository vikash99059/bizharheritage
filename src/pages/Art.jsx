import { Helmet } from "react-helmet-async";
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
      <ArtBanner />
      <Topartists />
      <SupportivePillars />
      {/* <ImageTrainSlider /> */}
        {/* <Gellery /> */}
        <Footer />

    </>
  );
};

export default ArtisansPage;

