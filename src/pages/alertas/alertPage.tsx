import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { api } from "../../App";
import { Person } from "../../Entities/employee";
import { ButtonDarkorWhite } from "../../Features/buttonBlackorWhite";
import { BackgroundAlert, Header, Sidebar } from "../../widgets";

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


  return (
    <main>
      <Header
        name="Lucas"
        onCameraClick={() => {
          navigate("/?cameraID=1");
        }}
      />
      <Sidebar />
      <BackgroundAlert people={people}/>
      <ButtonDarkorWhite />
    </main>
  );
}

export { AlertPage };
