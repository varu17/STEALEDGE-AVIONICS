import Header from "./Components/Header";
import Tag from "./Components/TagLine";
import Footer from "./Components/Footer";
import VMission from "./Components/VMission";
import Vision from "./Components/Vision";
import Agenda from "./Components/Agenda";
import Team from "./Components/People";
import Msmeimgs from "./Components/Msmeimgs";

function App() {
  return (
    <div style={{ overflowY: "auto", height: "100vh" }}>
      <Header />
      <Tag />
      <Vision />
      <VMission />
      <Agenda />
      <Team />
      <Msmeimgs />
      <Footer />
    </div>
  );
}

export default App;
