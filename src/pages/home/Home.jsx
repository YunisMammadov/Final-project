import "./Home.css";
import Home_banner from "../../components/home/Home_banner";
import Deals_month from "../../components/home/Deals_month";
import Our_bestseller from "../../components/home/Our_bestseller";

function Home() {
  return (
    <>
      <Home_banner />
      <Our_bestseller />
      <Deals_month />
      
    </>
  );
}

export default Home;
