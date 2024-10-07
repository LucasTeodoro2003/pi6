import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { api, apiUser } from "../../../App/serviceApi";
import { Person } from "../../../Entities/employee";
import { User } from "../../../Entities/users";
import { BackgroundAlert } from "../../../widgets/backGround";
import { Header } from "../../../widgets/header";
import { Sidebar } from "../../../widgets/SideBar";

function AlertPage() {
  const navigate = useNavigate();

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

  return (
    <main>
      <Header
        id={1}
        name="Lucas"
        onCameraClick={() => {
          navigate("/?cameraID=1");
        }}
      />
      <Sidebar user={user} />
      <BackgroundAlert people={people} />
    </main>
  );
}

export { AlertPage };
