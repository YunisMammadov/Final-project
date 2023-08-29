function Home_banner() {
  return (
    <section className="home">
      <div className="container">
        <div className="home-banner">
          <div className="home-banner-info">
            <div className="home-banner-info-text">
              <p>Classic Exclusive</p>
              <h1>Women's Collection</h1>
              <h2>UPTO 40% OFF</h2>
            </div>
            <button>
              <span>Shop Now</span>
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

export default Home_banner;
