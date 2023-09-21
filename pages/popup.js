// same as home.js but with Popup default opened

import Popup from "@/components/popup";
import Sidebar from "@/components/sidebar";
import MainPanel from "@/components/main-panel";

export default function HomePage() {
  return (
    <div className="h-full md:max-h-screen flex flex-col md:flex-row overflow-auto md:overflow-hidden">
      <Sidebar />
      <MainPanel />
      {true && <Popup />}
    </div>
  );
}
