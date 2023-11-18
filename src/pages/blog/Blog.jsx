import React from "react";
import "./Blog.css";
import { connect } from "react-redux";

function Blog({ lang, words }) {
  return (
    <section className="blog">
      <div className="container">
        <div className="blog-cards">
          <div className="blog-card">
            <div className="blog-img">
              <img
                src="https://static.wixstatic.com/media/9973c1_397e16cd9e454972b1d6abf43906bab6~mv2.jpg/v1/fill/w_625,h_939,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9973c1_397e16cd9e454972b1d6abf43906bab6~mv2.jpg"
                alt=""
              />
              <div className="blog-time">
                <h3>07</h3>
                <p>{words[lang].november}</p>
                <span>2023</span>
              </div>
            </div>
            <div className="blog-text">
              <h4>{words[lang].floridaoff}</h4>
              <p>{words[lang].Consonantia}</p>
            </div>
          </div>
          <div className="blog-card">
            <div className="blog-img">
              <img
                src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Fashion%20Blogger/10.jpg"
                alt=""
              />
              <div className="blog-time">
                <h3>10</h3>
                <p>{words[lang].october}</p>
                <span>2023</span>
              </div>
            </div>
            <div className="blog-text">
              <h4>{words[lang].Oclohomaoff}</h4>
              <p>{words[lang].Consonantia}</p>
            </div>
          </div>
          <div className="blog-card">
            <div className="blog-img">
              <img
                src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Fashion%20Blogger/11.jpg"
                alt=""
              />
              <div className="blog-time">
                <h3>17</h3>
                <p>{words[lang].September}</p>
                <span>2023</span>
              </div>
            </div>
            <div className="blog-text">
              <h4>{words[lang].Miamioff}</h4>
              <p>{words[lang].Consonantia}</p>
            </div>
          </div>
          <div className="blog-card">
            <div className="blog-img">
              <img
                src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Fashion%20Blogger/01.jpg"
                alt=""
              />
              <div className="blog-time">
                <h3>23</h3>
                <p>{words[lang].August}</p>
                <span>2023</span>
              </div>
            </div>
            <div className="blog-text">
              <h4>{words[lang].Houstonoff}</h4>
              <p>{words[lang].Consonantia}</p>
            </div>
          </div>
          <div className="blog-card">
            <div className="blog-img">
              <img
                src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="blog-time">
                <h3>30</h3>
                <p>{words[lang].July}</p>
                <span>2023</span>
              </div>
            </div>
            <div className="blog-text">
              <h4>{words[lang].Philadelphiaoff}</h4>
              <p>{words[lang].Consonantia}</p>
            </div>
          </div>
          <div className="blog-card">
            <div className="blog-img">
              <img
                src="https://c0.wallpaperflare.com/preview/298/581/92/fashion-female-model-clothes.jpg"
                alt=""
              />
              <div className="blog-time">
                <h3>18</h3>
                <p>{words[lang].February}</p>
                <span>2023</span>
              </div>
            </div>
            <div className="blog-text">
              <h4>{words[lang].Charlotteoff}</h4>
              <p>{words[lang].Consonantia}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
const t = (a) => a;
export default connect(t)(Blog);
