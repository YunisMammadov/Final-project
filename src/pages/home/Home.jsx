import "./Home.css";
import "./Home_resp.css"
import Home_banner from "../../components/home/Home_banner";
import Deals_month from "../../components/home/Deals_month";
import Our_bestseller from "../../components/home/Our_bestseller";
import Shop_category from "../../components/home/Shop_category";
import Feedbacks from "../../components/home/Feedbacks";
import Insta_Story from "../../components/home/Insta_story";

function Home() {
  return (
    <>
      {/* <Home_banner /> */}
      <Shop_category />
      <Our_bestseller />
      <Deals_month />
      <Feedbacks />
      <Insta_Story />
    </>
  );
}

export default Home;
