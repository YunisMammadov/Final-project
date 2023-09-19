import "./Personal_info.css";

function Personal_info() {
  return (
    <div className="profile-down-right">
      <div className="profile-person-detail">
        <div className="profile-person">
          <div className="profile-per-img">
            <img
              src="https://s3-alpha-sig.figma.com/img/5084/a7e3/7e7cd1c893075a37d729499a65dc1004?Expires=1695600000&Signature=Poo5TmJdxzaEw-TqdfcU2deY6I9X8YD4VuzNNqo8RTzbnWiB-6FQSWbvdWLignOJTsuPIZcMeBIi2yUKGnuqo0JgII5p2q6SjHrieAqyf5uoBbkEJD0qXlM8ZszZbFGlM~xOQHgROkFReQS7QihssW4q1Kf8D-WzdqvkPYIUnskhDkwaO8RsmmQnY2-YXHqjftmXxh2ITndYETi8LSGJvFNlpsTIDvlmvgwn565Q3PuD3XBvtnU7I5Tzs9~ka6p6wGym8pgLKC7xS1ElNGRCh2rpLOeRYf4621IT65OSk01seBVzuR8mK1PxsL5LOjYZnG-DnqB2LTL~p9XJO7ooLw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
          </div>
          <div className="profile-per-svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="black"
            >
              <path
                d="M12.294 7.00017V10.1766C12.294 11.3462 11.3459 12.2943 10.1764 12.2943H3.82346C2.65391 12.2943 1.70581 11.3462 1.70581 10.1766V3.8237C1.70581 2.65416 2.65391 1.70605 3.82346 1.70605H6.99993M8.95153 2.77692C8.95153 2.77692 8.95153 3.53414 9.70875 4.29135C10.466 5.04857 11.2232 5.04857 11.2232 5.04857M5.49358 9.1123L7.08373 8.88513C7.31311 8.85236 7.52567 8.74608 7.68951 8.58224L11.9804 4.29135C12.3986 3.87315 12.3986 3.19512 11.9804 2.77692L11.2232 2.0197C10.805 1.6015 10.1269 1.6015 9.70875 2.0197L5.41786 6.3106C5.25402 6.47443 5.14774 6.68699 5.11497 6.91637L4.88781 8.50652C4.83732 8.85989 5.14021 9.16278 5.49358 9.1123Z"
                stroke="white"
                stroke-width="1.05882"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M22.5 12V18C22.5 20.2091 20.7091 22 18.5 22H6.5C4.29086 22 2.5 20.2091 2.5 18V6C2.5 3.79086 4.29086 2 6.5 2H12.5M16.1864 4.02275C16.1864 4.02275 16.1864 5.45305 17.6167 6.88334C19.047 8.31364 20.4773 8.31364 20.4773 8.31364M9.65467 15.9896L12.6583 15.5605C13.0916 15.4986 13.4931 15.2978 13.8025 14.9884L21.9076 6.88334C22.6975 6.09341 22.6975 4.81268 21.9076 4.02275L20.4773 2.59245C19.6873 1.80252 18.4066 1.80252 17.6167 2.59245L9.51164 10.6975C9.20217 11.0069 9.00142 11.4084 8.93952 11.8417L8.51044 14.8453C8.41508 15.5128 8.9872 16.0849 9.65467 15.9896Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
            <span>Edit Profile</span>
          </button>
        </div>
        <form className="profile-per-form">
          <div className="profile-per-inp">
            <div className="pro-per-up-inp">
              <p>First name</p>
              <input type="text" name="" id="" />
            </div>
            <div className="pro-per-up-inp">
              <p>Last name</p>
              <input type="text" name="" id="" />
            </div>
          </div>
          <div className="profile-per-inp">
            <div className="pro-per-up-inp">
              <p>Phone Number</p>
              <input type="tel" name="" id="" />
            </div>
            <div className="pro-per-up-inp">
              <p>Email Address</p>
              <input type="email" name="" id="" />
            </div>
          </div>
          <div className="profile-per-inp1">
            <p>Address</p>
            <input type="address" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Personal_info;
