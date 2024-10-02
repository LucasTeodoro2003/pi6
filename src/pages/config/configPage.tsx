import { useEffect } from "react";
import { useNavigate } from "react-router";
import { ButtonDarkorWhite } from "../../Features/buttonBlackorWhite";
import { BackgroundConfig } from "../../widgets/backGround";
import { Header } from "../../widgets/header/ui/header";
import Sidebar from "../../widgets/SideBar/ui/sidebar";

function ConfigPage() {
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
      <BackgroundConfig />
      <ButtonDarkorWhite />
    </main>
  );
}

export { ConfigPage };
