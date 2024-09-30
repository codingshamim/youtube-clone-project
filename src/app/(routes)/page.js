import Categories from "@/components/categories/Categories";
import Sidebar from "@/components/sidebar/Sidebar";
import VideoCard from "@/components/videos/VideoCard";

export default function Home() {
  return (
    <div className="content w-full md:w-[80%] overflow-hidden">
      <Categories />
      {/* video section start  */}
      <div className="video-contents grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-2">
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
      {/* video section end  */}
    </div>
  );
}
