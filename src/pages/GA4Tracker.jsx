import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA4Tracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-4CNTCDNCMM', {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null;
};

export default GA4Tracker;
