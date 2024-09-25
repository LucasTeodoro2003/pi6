import { useState } from "react";
import { ButtonDarkorWhite } from "../../Features/index";
import { Sidebar, Header, Background} from "../../Widgets/index";
import { AlertSimple } from "../../shared";

function HomePage() {
    const [videosId, setVideosId] = useState('');
    const [show, setShow] = useState(false);

    return (
    <main className="">
      <Header name="Lucas" onCameraClick={() => {
                            setShow(true);
                            setVideosId("https://www.youtube.com/watch?v=Z7pFwsX6UVc");
                          
                        }}/>
      <Background VideosId={videosId}/>
      <AlertSimple
                show={show} 
                setShow={setShow} 
            />
      <Sidebar/>
      <ButtonDarkorWhite />
    </main>
  );
}

export { HomePage };
