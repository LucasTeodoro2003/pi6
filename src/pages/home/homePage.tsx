import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ButtonDarkorWhite } from "../../Features/buttonBlackorWhite";
import { AlertSimple } from "../../shared/ui";
import { BackgroundHome, Sidebar } from "../../widgets";
import { Header } from "../../widgets/header/ui/header";

function HomePage() {
  const [videosId, setVideosId] = useState("");
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [params, setParams] = useSearchParams();

  const people = useMemo(
    () => [
      {
        name: "John Doe",
        title: "Developer",
        department: "Engineering",
        email: "john.doe@example.com",
        image: "https://via.placeholder.com/150",
        usingEpi: true,
      },
      {
        name: "Jane Smith",
        title: "Designer",
        department: "UI/UX",
        email: "jane.smith@example.com",
        image: "https://via.placeholder.com/150",
        usingEpi: false,
      },
      {
        name: "Michael Johnson",
        title: "Manager",
        department: "Operations",
        email: "michael.johnson@example.com",
        image: "https://via.placeholder.com/150",
        usingEpi: true,
      },
      {
        name: "Michael Johnson",
        title: "Manager",
        department: "Operations",
        email: "michael.johnson@example.com",
        image: "https://via.placeholder.com/150",
        usingEpi: true,
      },
      {
        name: "Michael Johnson",
        title: "Manager",
        department: "Operations",
        email: "michael.johnson@example.com",
        image: "https://via.placeholder.com/150",
        usingEpi: true,
      },
      {
        name: "Michael Johnson",
        title: "Manager",
        department: "Operations",
        email: "michael.johnson@example.com",
        image: "https://via.placeholder.com/150",
        usingEpi: true,
      },
      {
        name: "Michael Johnson",
        title: "Manager",
        department: "Operations",
        email: "michael.johnson@example.com",
        image: "https://via.placeholder.com/150",
        usingEpi: true,
      },
      {
        name: "Michael Johnson",
        title: "Manager",
        department: "Operations",
        email: "michael.johnson@example.com",
        image: "https://via.placeholder.com/150",
        usingEpi: true,
      },
    ],
    []
  );

  useEffect(() => {
    fetch("");
  });

  const tabs = useMemo(
    () => [
      {
        name: "1",
        href: "https://www.youtube.com/watch?v=e6nZXpaeXhs",
        current: activeTab === 0,
      },
      {
        name: "2",
        href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        current: activeTab === 1,
      },
      {
        name: "3",
        href: "https://www.youtube.com/watch?v=3fumBcKC6RE",
        current: activeTab === 2,
      },
      {
        name: "4",
        href: "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
        current: activeTab === 3,
      },
    ],
    [activeTab]
  );

  useEffect(() => {
    const cameraID = params.get("cameraID");
    if (cameraID) {
      setShow(true);
      setActiveTab(parseInt(cameraID) - 1);
      setVideosId(tabs[parseInt(cameraID) - 1].href);
    }
    setParams(undefined);
  }, [params, tabs, setParams]);

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
      <BackgroundHome
        people={people}
        VideosId={videosId}
        tabs={tabs}
        alterIDVideos={alterVideoId}
        activeTab={activeTab}
      />
      <AlertSimple show={show} setShow={setShow} />
      <Sidebar />
      <ButtonDarkorWhite />
    </main>
  );
}

export { HomePage };
