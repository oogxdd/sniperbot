import { createContext, useState } from "react";

const UIContext = createContext();

const UIProvider = ({ children }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <UIContext.Provider
      value={{
        showPopup,
        setShowPopup,
        showMobileMenu,
        setShowMobileMenu,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export { UIProvider, UIContext };
