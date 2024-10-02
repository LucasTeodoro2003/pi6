import { useEffect } from "react";
import { useNavigate } from "react-router";
import { ButtonDarkorWhite } from "../../Features/buttonBlackorWhite";
import { BackgroundAlert, Header, Sidebar } from "../../widgets";

function AlertPage() {
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
      <BackgroundAlert />
      <ButtonDarkorWhite />
    </main>
  );
}

export { AlertPage };
