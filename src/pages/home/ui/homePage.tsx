import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { api, apiUser } from "../../../App/serviceApi";
import { Person, User } from "../../../Entities";
import { AlertSimple } from "../../../shared/ui";
import { BackgroundHome } from "../../../widgets/backGround";
import { Header } from "../../../widgets/header";
import { Sidebar } from "../../../widgets/SideBar";

function HomePage() {
  const [videosId, setVideosId] = useState("");
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [params, setParams] = useSearchParams();

  const [people, setPeople] = useState<Person[]>([]);
  useEffect(() => {
    api
      .get("/PersonController/GetPersons")
      .then((response) => setPeople(response.data))
      .catch((err) => {
        console.error("Aconteceu um erro: " + err);
      });
  }, []);

  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    apiUser
      .get("/User/GetUser")
      .then((response) => setUser(response.data[0] || null))
      .catch((err) => {
        console.error("Aconteceu um erro: " + err);
      });
  }, []);

  const tabs = useMemo(
    () => [
      {
        name: "Setor 1",
        href: "https://www.youtube.com/watch?v=e6nZXpaeXhs",
        current: activeTab === 0,
      },
      {
        name: "Setor 2",
        href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        current: activeTab === 1,
      },
      {
        name: "Setor 3",
        href: "https://www.youtube.com/watch?v=3fumBcKC6RE",
        current: activeTab === 2,
      },
      {
        name: "Setor 4",
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
      <div></div>
      <Header
        name="Lucas"
        id={1}
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
      <Sidebar user={user} />
    </main>
  );
}

export { HomePage };
