import Aboutme from "../components/Aboutme";
import Background from "../components/Background";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";

function Home(props){

  return (
    <div>
        <Header/>
        <Banner />
        <Aboutme />
        <Skills />
        <Background />
        <Portfolio />

    </div>
  )
}

export default Home;