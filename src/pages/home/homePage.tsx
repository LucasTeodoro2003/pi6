import { useState } from "react";
import { ButtonDarkorWhite } from "../../Features/buttonBlackorWhite";
import { AlertSimple } from "../../shared/ui/alertAll";
import { Background } from "../../widgets/backGround";
import { Header } from "../../widgets/header/ui/header";
import Sidebar from "../../widgets/SideBar/ui/sidebar";

function HomePage() {
  const [videosId, setVideosId] = useState("");
  const [show, setShow] = useState(false);

  return (
    <main className="">
      <Header
        name="Lucas"
        onCameraClick={() => {
          setShow(true);
          setVideosId("https://www.youtube.com/watch?v=Z7pFwsX6UVc");
        }}
      />
      <Background VideosId={videosId} />
      <AlertSimple show={show} setShow={setShow} />
      <Sidebar />
      <ButtonDarkorWhite />
    </main>
  );
}

export { HomePage };
