import { connect } from "react-redux";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

function Home_banner({ lang, words }) {
  return (
    // <section className="home">
    //   <div className="container">
    //     <Swiper
    //       loop={true}
    //       autoplay={{ delay: 1000 }}
    //       pagination={{
    //         dynamicBullets: true,
    //       }}
    //       modules={[Pagination]}
    //       className="mySwiper"
    //     >
    //       <SwiperSlide>
    //         <div className="home-banner">
    //           <div className="home-banner-info">
    //             <div className="home-banner-info-text">
    //               <p>{words[lang].classicexclusive}</p>
    //               <h1>{words[lang].womencollection}</h1>
    //               <h2>40% {words[lang].upto40}</h2>
    //             </div>
    //             <button>
    //               <span>{words[lang].shop_now}</span>
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="24"
    //                 height="24"
    //                 viewBox="0 0 24 24"
    //                 fill="none"
    //               >
    //                 <path
    //                   d="M14 8L18 12M18 12L14 16M18 12L6 12"
    //                   stroke="white"
    //                   stroke-width="1.5"
    //                   stroke-linecap="round"
    //                   stroke-linejoin="round"
    //                 />
    //               </svg>
    //             </button>
    //           </div>
    //           <div className="home-rectangle">
    //             <div className="home-rec"></div>
    //             <div className="home-img">
    //               <img src="/fashionable.png" alt="" />
    //             </div>
    //             <div className="home-rectangle1"></div>
    //           </div>
    //           <p className="bestseller">BESTSELLER</p>
    //         </div>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <div className="home-banner">
    //           <div className="home-banner-info">
    //             <div className="home-banner-info-text">
    //               <p>{words[lang].classicexclusive}</p>
    //               <h1>{words[lang].mencollection}</h1>
    //               <h2>30% {words[lang].upto40}</h2>
    //             </div>
    //             <button>
    //               <span>{words[lang].shop_now}</span>
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="24"
    //                 height="24"
    //                 viewBox="0 0 24 24"
    //                 fill="none"
    //               >
    //                 <path
    //                   d="M14 8L18 12M18 12L14 16M18 12L6 12"
    //                   stroke="white"
    //                   stroke-width="1.5"
    //                   stroke-linecap="round"
    //                   stroke-linejoin="round"
    //                 />
    //               </svg>
    //             </button>
    //           </div>
    //           <div className="home-rectangle">
    //             <div className="home-rec"></div>
    //             <div className="home-img">
    //               <img
    //                 src="https://www.moodbana.com/images/makaleler/Onu-1-Duym--li-Klassik-Indigo-Kostyum-resim-6165-resim-23.jpg"
    //                 alt=""
    //               />
    //             </div>
    //           </div>
    //           <p className="bestseller">BESTSELLER</p>
    //         </div>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <div className="home-banner">
    //           <div className="home-banner-info">
    //             <div className="home-banner-info-text">
    //               <p>{words[lang].classicexclusive}</p>
    //               <h1>{words[lang].kidscollection}</h1>
    //               <h2>35% {words[lang].upto40}</h2>
    //             </div>
    //             <button>
    //               <span>{words[lang].shop_now}</span>
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="24"
    //                 height="24"
    //                 viewBox="0 0 24 24"
    //                 fill="none"
    //               >
    //                 <path
    //                   d="M14 8L18 12M18 12L14 16M18 12L6 12"
    //                   stroke="white"
    //                   stroke-width="1.5"
    //                   stroke-linecap="round"
    //                   stroke-linejoin="round"
    //                 />
    //               </svg>
    //             </button>
    //           </div>
    //           <div className="home-rectangle">
    //             <div className="home-rec"></div>
    //             <div className="home-img">
    //               <img
    //                 src="https://luned.shop/images5/1017/cocktailkleider-kinderkleider/cocktailkleider-kinderkleider-90.jpg"
    //                 alt=""
    //               />
    //             </div>
    //             {/* <div className="home-rectangle1"></div> */}
    //           </div>
    //           <p className="bestseller">BESTSELLER</p>
    //         </div>
    //       </SwiperSlide>
    //     </Swiper>
    //   </div>
    // </section>

    <section className="home">
      <div className="container">
        <div className="home-banner">
          <div className="home-banner-info">
            <div className="home-banner-info-text">
              <p>{words[lang].classicexclusive}</p>
              <h1>{words[lang].womencollection}</h1>
              <h2>40% {words[lang].upto40}</h2>
            </div>
            <button>
              <span>{words[lang].shop_now}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14 8L18 12M18 12L14 16M18 12L6 12"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="home-rectangle">
            <div className="home-rec"></div>
            <div className="home-img">
              <img src="/fashionable.png" alt="" />
            </div>
            <div className="home-rectangle1"></div>
          </div>
          <p className="bestseller">BESTSELLER</p>
        </div>
      </div>
    </section>
  );
}
const t = (a) => a;
export default connect(t)(Home_banner);
