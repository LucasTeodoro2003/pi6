import { ButtonDarkorWhite } from "../../Features/index";
import { Sidebar, Header, Background} from "../../Widgets/index";

function HomePage() {
  return (
    <main className="">
      <Header name="Lucas" idVideo="https://www.youtube.com/watch?v=Z7pFwsX6UVc"/>
      <Background VideosId=""/>
      <Sidebar/>
      <ButtonDarkorWhite />
    </main>
  );
}

export { HomePage };
