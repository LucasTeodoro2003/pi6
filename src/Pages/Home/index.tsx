import { ButtonDarkorWhite } from "../../Features/index";
import { Sidebar, Header, Background} from "../../Widgets/index";

function HomePage() {
  return (
    <main className="">
      <Header name="Lucas"/>
      <Background/>
      <Sidebar/>
      <ButtonDarkorWhite />
    </main>
  );
}

export { HomePage };
