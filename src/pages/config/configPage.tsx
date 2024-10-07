import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { api } from "../../App";
import { User } from "../../Entities";
import { ButtonDarkorWhite } from "../../Features/buttonBlackorWhite";
import { BackgroundConfig, Sidebar } from "../../widgets";
import { Header } from "../../widgets/header/ui/header";

function ConfigPage() {
  useEffect(() => {
    fetch("");
  });
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    api
      .get("/User/GetUser")
      .then((response) => setUser(response.data[0] || null))
      .catch((err) => {
        console.error("Aconteceu um erro: " + err);
      });
  }, []);

  return (
    <main>
      <Header
        name="Lucas" id={1}
        onCameraClick={() => {
          navigate("/?cameraID=1");
        }}
      />
      <Sidebar user={user}/>
      <BackgroundConfig />
      <ButtonDarkorWhite />
    </main>
  );
}

export { ConfigPage };
