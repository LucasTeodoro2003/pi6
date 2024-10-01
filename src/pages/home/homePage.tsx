import { useState } from "react";
import { ButtonDarkorWhite } from "../../Features/buttonBlackorWhite";
import { AlertSimple } from "../../shared/ui/alertAll";
import { Background } from "../../widgets/backGround";
import { Header } from "../../widgets/header/ui/header";
import Sidebar from "../../widgets/SideBar/ui/sidebar";

function HomePage() {
  const [videosId, setVideosId] = useState("");
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: "1", href: "https://www.youtube.com/watch?v=Z7pFwsX6UVc", current: activeTab === 0 },
    { name: "2", href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", current: activeTab === 1 },
    { name: "3", href: "https://www.youtube.com/watch?v=3fumBcKC6RE", current: activeTab === 2 },
    { name: "4", href: "https://www.youtube.com/watch?v=2Vv-BfVoq4g", current: activeTab === 3 },
  ];

  const alterVideoId = (href: string, index: number) => {
    setVideosId(href);
    setActiveTab(index);
    setShow(true);
  };

  return (
    <main>
      <Header
        name="Lucas"
        onCameraClick={() => {
          setShow(true);
          setVideosId(tabs[0].href);
        }}
      />
      <Background VideosId={videosId} tabs={tabs} alterIDVideos={alterVideoId} activeTab={activeTab} />
      <AlertSimple show={show} setShow={setShow} />
      <Sidebar />
      <ButtonDarkorWhite />
    </main>
  );
}

export { HomePage };
