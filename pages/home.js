import { useUI, useTheme } from "@/hooks";

import Popup from "@/components/popup";
import Sidebar from "@/components/sidebar";
import MainPanel from "@/components/main-panel";

export default function HomePage() {
  const {
    showPopup,
    // setShowPopup
  } = useUI();

  const {
    // toggleTheme,
  } = useTheme();

  return (
    <div
      className="h-full md:max-h-screen flex flex-col md:flex-row overflow-auto md:overflow-hidden"
      // onClick={toggleTheme}
      // onClick={() => setShowPopup(!showPopup)}
    >
      <Sidebar />
      <MainPanel />
      {showPopup && <Popup />}
    </div>
  );
}
