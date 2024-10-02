import { useEffect } from "react";
import { useNavigate } from "react-router";
import { ButtonDarkorWhite } from "../../Features/buttonBlackorWhite";
import { BackgroundFormulary, Header, Sidebar } from "../../widgets";

function FormularyPage() {
  useEffect(() => {
    fetch("");
  });
  const navigate = useNavigate();

  return (
    <main>
      <Header
        name="Lucas"
        onCameraClick={() => {
          navigate("/?cameraID=1");
        }}
      />
      <Sidebar />
      <BackgroundFormulary />
      <ButtonDarkorWhite />
    </main>
  );
}

export { FormularyPage };
