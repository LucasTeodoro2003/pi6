import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { apiUser } from "../../../App/serviceApi";
import { User } from "../../../Entities";
import { BackgroundFormulary } from "../../../widgets/backGround";
import { Header } from "../../../widgets/header";
import { Sidebar } from "../../../widgets/SideBar";

function FormularyPage() {
  useEffect(() => {
    fetch("");
  });
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    apiUser
      .get("/User/GetUser")
      .then((response) => setUser(response.data[0] || null))
      .catch((err) => {
        console.error("Aconteceu um erro: " + err);
      });
  }, []);

  return (
    <main>
      <Header
        name="Lucas"
        id={1}
        onCameraClick={() => {
          navigate("/?cameraID=1");
        }}
      />
      <Sidebar user={user} />
      <BackgroundFormulary />
    </main>
  );
}

export { FormularyPage };
