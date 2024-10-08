import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { api, apiTabs, apiUser } from "../../../App/serviceApi";
import { Person } from "../../../Entities/employee";
import { User } from "../../../Entities/users";
import { AlertSimple } from "../../../shared/ui";
import { BackgroundHome } from "../../../widgets/backGround";
import { Header } from "../../../widgets/header";
import { Sidebar } from "../../../widgets/SideBar";

function HomePage() {
  const [videosId, setVideosId] = useState("");
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [params, setParams] = useSearchParams();
  const [tabs, setTabs] = useState<Array<{ name: string; href: string; current: boolean }>>([
    { name: "Setor 01", href: "https://www.youtube.com/watch?v=e6nZXpaeXhs", current: activeTab === 0 },
  ]);


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

  useEffect(() => {
    apiTabs.get("/Cam/GetCam")
      .then((response) => {
        const fetchedTabs = response.data.map((tab: { name: string; href: string }, index: number) => ({
          name: tab.name,
          href: tab.href,
          current: activeTab === index,
        }));
        setTabs(fetchedTabs);
      })
      .catch((err) => {
        console.error("Aconteceu um erro: " + err);
      });
  }, [activeTab]);


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
