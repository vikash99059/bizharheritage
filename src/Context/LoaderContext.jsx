import React, { createContext, useState, useContext } from "react";

// ✅ Context name
export const LoaderContext = createContext();

// ✅ Provider
export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const showLoader = () => setLoading(true);
  const hideLoader = () => setLoading(false);

  return (
    <LoaderContext.Provider value={{ loading, showLoader, hideLoader }}>
      {children}
    </LoaderContext.Provider>
  );
};

// ✅ Optional hook
export const useLoader = () => useContext(LoaderContext);
