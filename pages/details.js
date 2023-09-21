import Sidebar from "@/components/sidebar";
import DetailsView from "@/components/details-view";

export default function DetailsPage() {
  return (
    <div className="h-full md:max-h-screen flex flex-col md:flex-row overflow-auto md:overflow-hidden">
      <Sidebar />
      <DetailsView />
    </div>
  );
}
