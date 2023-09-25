import { useState } from "react";
import My_orders from "../../components/my_profile/my_orders/My_orders";
import Personal_info from "../../components/my_profile/personal_info/Personal_info";
import My_wishlists from "../../components/my_profile/my_wishlists/My_wishlists";
import Manage_address from "../../components/my_profile/manage_address/Manage_address";
import Saved_cards from "../../components/my_profile/saved_cards/Saved_cards";
import Notifications from "../../components/my_profile/notifications/Notifications";
import Settings from "../../components/my_profile/settings/Settings";

import "./My_profile.css";
function My_profile() {
  const [activeTab, setActiveTab] = useState("Personal_Info");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <main>
      <section className="myprofile">
        <div className="container">
          <div className="my_prof">
            <div className="profile-up">
              <div className="profile-up-left">
                <p>My Profile</p>
              </div>
            </div>
            <div className="profile-down">
              <div className="profile-down-left">
                <div className="profile-left-up">
                  <div className="profile-left-up-img">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/5084/a7e3/7e7cd1c893075a37d729499a65dc1004?Expires=1695600000&Signature=Poo5TmJdxzaEw-TqdfcU2deY6I9X8YD4VuzNNqo8RTzbnWiB-6FQSWbvdWLignOJTsuPIZcMeBIi2yUKGnuqo0JgII5p2q6SjHrieAqyf5uoBbkEJD0qXlM8ZszZbFGlM~xOQHgROkFReQS7QihssW4q1Kf8D-WzdqvkPYIUnskhDkwaO8RsmmQnY2-YXHqjftmXxh2ITndYETi8LSGJvFNlpsTIDvlmvgwn565Q3PuD3XBvtnU7I5Tzs9~ka6p6wGym8pgLKC7xS1ElNGRCh2rpLOeRYf4621IT65OSk01seBVzuR8mK1PxsL5LOjYZnG-DnqB2LTL~p9XJO7ooLw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                      alt=""
                    />
                  </div>
                  <div className="profile-left-up-info">
                    <p>Hello 👋 </p>
                    <h1>Robert Fox</h1>
                  </div>
                </div>
                <div className="profile-left-rect"></div>
                <div className="profile-left-bot">
                  <div
                    className={`product-bot-rect ${
                      activeTab === "Personal_Info" ? "active-tab" : ""
                    }`}
                    onClick={() => handleTabClick("Personal_Info")}
                  >
                    <div className="product-bot-rect-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <ellipse
                          cx="12"
                          cy="17.5"
                          rx="7"
                          ry="3.5"
                          stroke={
                            activeTab === "Personal_Info"
                              ? "#FFFFFF"
                              : "#131118"
                          }
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        />
                        <circle
                          cx="12"
                          cy="7"
                          r="4"
                          stroke={
                            activeTab === "Personal_Info"
                              ? "#FFFFFF"
                              : "#131118"
                          }
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>Personal Information</span>
                    </div>
                  </div>
                  <div
                    className={`product-bot-rect ${
                      activeTab === "My_orders" ? "active-tab" : ""
                    }`}
                    onClick={() => handleTabClick("My_orders")}
                  >
                    <div className="product-bot-rect-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M20 7L12 11L4 7"
                          stroke={
                            activeTab === "My_orders" ? "#FFFFFF" : "#131118"
                          }
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18.6246 4.66762L13.6246 2.35827C12.5903 1.88058 11.4097 1.88058 10.3754 2.35827L5.37545 4.66762C3.93093 5.33479 3 6.82344 3 8.46617V15.5338C3 17.1766 3.93094 18.6652 5.37545 19.3324L10.3754 21.6417C11.4097 22.1194 12.5903 22.1194 13.6246 21.6417L18.6246 19.3324C20.0691 18.6652 21 17.1766 21 15.5338V8.46617C21 6.82344 20.0691 5.33479 18.6246 4.66762Z"
                          stroke={
                            activeTab === "My_orders" ? "#FFFFFF" : "#131118"
                          }
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8 4L17 9V19.5"
                          stroke={
                            activeTab === "My_orders" ? "#FFFFFF" : "#131118"
                          }
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 11V22"
                          stroke={
                            activeTab === "My_orders" ? "#FFFFFF" : "#131118"
                          }
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>My Orders</span>
                    </div>
                  </div>
                  <div
                    className={`product-bot-rect ${
                      activeTab === "My_wishlists" ? "active-tab" : ""
                    }`}
                    onClick={() => handleTabClick("My_wishlists")}
                  >
                    <div className="product-bot-rect-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12.765 4.70229L12 5.52422L11.235 4.70229C9.12233 2.43257 5.69709 2.43257 3.58447 4.70229C1.47184 6.972 1.47184 10.6519 3.58447 12.9217L10.4699 20.3191C11.315 21.227 12.685 21.227 13.5301 20.3191L20.4155 12.9217C22.5282 10.6519 22.5282 6.972 20.4155 4.70229C18.3029 2.43257 14.8777 2.43257 12.765 4.70229Z"
                          stroke={
                            activeTab === "My_wishlists" ? "#FFFFFF" : "#131118"
                          }
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>My Wishlists</span>
                    </div>
                  </div>
                  <div
                    className={`product-bot-rect ${
                      activeTab === "Manage_address" ? "active-tab" : ""
                    }`}
                    onClick={() => handleTabClick("Manage_address")}
                  >
                    <div className="product-bot-rect-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="11"
                          r="3"
                          stroke={
                            activeTab === "Manage_address"
                              ? "#FFFFFF"
                              : "#131118"
                          }
                          stroke-width="1.5"
                        />
                        <path
                          d="M21 10.8889C21 15.7981 15.375 22 12 22C8.625 22 3 15.7981 3 10.8889C3 5.97969 7.02944 2 12 2C16.9706 2 21 5.97969 21 10.8889Z"
                          stroke={
                            activeTab === "Manage_address"
                              ? "#FFFFFF"
                              : "#131118"
                          }
                          stroke-width="1.5"
                        />
                      </svg>
                      <span>Manage Addresses</span>
                    </div>
                  </div>
                  <div
                    className={`product-bot-rect ${
                      activeTab === "Saved_cards" ? "active-tab" : ""
                    }`}
                    onClick={() => handleTabClick("Saved_cards")}
                  >
                    <div className="product-bot-rect-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M2 7C2 4.79086 3.79086 3 6 3H18C20.2091 3 22 4.79086 22 7V17C22 19.2091 20.2091 21 18 21H6C3.79086 21 2 19.2091 2 17V7Z"
                          stroke={
                            activeTab === "Saved_cards" ? "#FFFFFF" : "#131118"
                          }
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M2 7H22V11H2V7Z"
                          stroke={
                            activeTab === "Saved_cards" ? "#FFFFFF" : "#131118"
                          }
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8 17H6"
                          stroke={
                            activeTab === "Saved_cards" ? "#FFFFFF" : "#131118"
                          }
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                      </svg>
                      <span>Saved Cards</span>
                    </div>
                  </div>
                  <div
                    className={`product-bot-rect ${
                      activeTab === "Notifications" ? "active-tab" : ""
                    }`}
                    onClick={() => handleTabClick("Notifications")}
                  >
                    <div className="product-bot-rect-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M5.67964 8.79403C6.05382 5.49085 8.77095 3 12 3C15.2291 3 17.9462 5.49085 18.3204 8.79403L18.6652 11.8385C18.7509 12.595 19.0575 13.3069 19.5445 13.88C20.5779 15.0964 19.7392 17 18.1699 17H5.83014C4.26081 17 3.42209 15.0964 4.45549 13.88C4.94246 13.3069 5.24906 12.595 5.33476 11.8385L5.67964 8.79403Z"
                          stroke={
                            activeTab === "Notifications"
                              ? "#FFFFFF"
                              : "#131118"
                          }
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15 19C14.5633 20.1652 13.385 21 12 21C10.615 21 9.43668 20.1652 9 19"
                          stroke={
                            activeTab === "Notifications"
                              ? "#FFFFFF"
                              : "#131118"
                          }
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                      </svg>
                      <span>Notifications</span>
                    </div>
                  </div>
                  <div
                    className={`product-bot-rect ${
                      activeTab === "Settings" ? "active-tab" : ""
                    }`}
                    onClick={() => handleTabClick("Settings")}
                  >
                    <div className="product-bot-rect-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M20.7439 15.7206L20.1043 15.3289V15.3289L20.7439 15.7206ZM19.7894 17.2794L20.429 17.6711V17.6711L19.7894 17.2794ZM3.25609 8.27942L2.61648 7.88775H2.61648L3.25609 8.27942ZM4.21064 6.72057L4.85025 7.11223L4.21064 6.72057ZM6.81852 6.06172L7.1771 5.403L7.1771 5.403L6.81852 6.06172ZM3.95487 10.7383L3.59629 11.397H3.59629L3.95487 10.7383ZM17.1815 17.9383L16.8229 18.597L16.8229 18.597L17.1815 17.9383ZM20.0451 13.2617L19.6866 13.9204V13.9205L20.0451 13.2617ZM4.21064 17.2794L3.57103 17.6711L3.57103 17.6711L4.21064 17.2794ZM3.25609 15.7206L3.8957 15.3289L3.8957 15.3289L3.25609 15.7206ZM19.7894 6.72058L20.429 6.32892V6.32892L19.7894 6.72058ZM20.7439 8.27943L20.1043 8.67109V8.67109L20.7439 8.27943ZM20.0451 10.7383L20.4037 11.397L20.0451 10.7383ZM17.1815 6.06174L17.5401 6.72046V6.72046L17.1815 6.06174ZM3.95487 13.2617L4.31345 13.9205H4.31345L3.95487 13.2617ZM6.81851 17.9383L6.45994 17.2795L6.45993 17.2795L6.81851 17.9383ZM17.08 6.11698L16.7214 5.45825L17.08 6.11698ZM6.92 6.11697L6.56142 6.77569L6.56142 6.77569L6.92 6.11697ZM17.08 17.883L17.4386 17.2243L17.4386 17.2243L17.08 17.883ZM6.92 17.883L7.27858 18.5418L7.27858 18.5418L6.92 17.883ZM11.0455 3.75H12.9545V2.25H11.0455V3.75ZM12.9545 20.25H11.0455V21.75H12.9545V20.25ZM11.0455 20.25C10.3631 20.25 9.88635 19.7389 9.88635 19.2H8.38635C8.38635 20.6493 9.61906 21.75 11.0455 21.75V20.25ZM14.1136 19.2C14.1136 19.7389 13.6369 20.25 12.9545 20.25V21.75C14.3809 21.75 15.6136 20.6493 15.6136 19.2H14.1136ZM12.9545 3.75C13.6369 3.75 14.1136 4.26107 14.1136 4.8H15.6136C15.6136 3.35071 14.3809 2.25 12.9545 2.25V3.75ZM11.0455 2.25C9.61906 2.25 8.38635 3.35071 8.38635 4.8H9.88635C9.88635 4.26107 10.3631 3.75 11.0455 3.75V2.25ZM20.1043 15.3289L19.1498 16.8878L20.429 17.6711L21.3835 16.1122L20.1043 15.3289ZM3.8957 8.67108L4.85025 7.11223L3.57103 6.32891L2.61648 7.88775L3.8957 8.67108ZM4.85025 7.11223C5.15889 6.6082 5.88055 6.40506 6.45993 6.72045L7.1771 5.403C5.93027 4.72428 4.31676 5.11109 3.57103 6.32891L4.85025 7.11223ZM4.31345 10.0795C3.75746 9.77688 3.6043 9.14696 3.8957 8.67108L2.61648 7.88775C1.85352 9.13373 2.32606 10.7055 3.59629 11.397L4.31345 10.0795ZM19.1498 16.8878C18.8411 17.3918 18.1195 17.5949 17.5401 17.2795L16.8229 18.597C18.0697 19.2757 19.6832 18.8889 20.429 17.6711L19.1498 16.8878ZM21.3835 16.1122C22.1465 14.8663 21.6739 13.2945 20.4037 12.603L19.6866 13.9205C20.2425 14.2231 20.3957 14.853 20.1043 15.3289L21.3835 16.1122ZM4.85025 16.8878L3.8957 15.3289L2.61648 16.1122L3.57103 17.6711L4.85025 16.8878ZM19.1498 7.11225L20.1043 8.67109L21.3835 7.88777L20.429 6.32892L19.1498 7.11225ZM20.1043 8.67109C20.3957 9.14697 20.2425 9.77689 19.6866 10.0795L20.4037 11.397C21.6739 10.7055 22.1465 9.13374 21.3835 7.88777L20.1043 8.67109ZM17.5401 6.72046C18.1195 6.40507 18.8411 6.60822 19.1498 7.11225L20.429 6.32892C19.6832 5.1111 18.0697 4.72429 16.8229 5.40301L17.5401 6.72046ZM3.8957 15.3289C3.6043 14.853 3.75746 14.2231 4.31345 13.9205L3.59629 12.603C2.32606 13.2945 1.85352 14.8663 2.61648 16.1122L3.8957 15.3289ZM3.57103 17.6711C4.31675 18.8889 5.93027 19.2757 7.1771 18.597L6.45993 17.2795C5.88055 17.5949 5.15889 17.3918 4.85025 16.8878L3.57103 17.6711ZM17.4386 6.7757L17.5401 6.72046L16.8229 5.40301L16.7214 5.45825L17.4386 6.7757ZM6.45993 6.72045L6.56142 6.77569L7.27858 5.45824L7.1771 5.403L6.45993 6.72045ZM17.5401 17.2795L17.4386 17.2243L16.7214 18.5417L16.8229 18.597L17.5401 17.2795ZM6.56142 17.2243L6.45994 17.2795L7.17709 18.597L7.27858 18.5418L6.56142 17.2243ZM3.59629 11.397C4.07404 11.6571 4.07404 12.3429 3.59629 12.603L4.31345 13.9205C5.83498 13.0922 5.83498 10.9078 4.31345 10.0795L3.59629 11.397ZM7.27858 18.5418C7.77798 18.2699 8.38635 18.6314 8.38635 19.2H9.88635C9.88635 17.4934 8.06035 16.4084 6.56142 17.2243L7.27858 18.5418ZM15.6136 19.2C15.6136 18.6314 16.222 18.2699 16.7214 18.5417L17.4386 17.2243C15.9397 16.4083 14.1136 17.4934 14.1136 19.2H15.6136ZM20.4037 12.603C19.926 12.3429 19.926 11.6571 20.4037 11.397L19.6866 10.0795C18.165 10.9078 18.165 13.0922 19.6866 13.9204L20.4037 12.603ZM6.56142 6.77569C8.06035 7.59165 9.88635 6.50663 9.88635 4.8H8.38635C8.38635 5.3686 7.77798 5.7301 7.27858 5.45824L6.56142 6.77569ZM16.7214 5.45825C16.222 5.73011 15.6136 5.36861 15.6136 4.8H14.1136C14.1136 6.50663 15.9397 7.59166 17.4386 6.7757L16.7214 5.45825ZM14.25 12C14.25 13.2426 13.2426 14.25 12 14.25V15.75C14.0711 15.75 15.75 14.0711 15.75 12H14.25ZM12 14.25C10.7574 14.25 9.75001 13.2426 9.75001 12H8.25001C8.25001 14.0711 9.92894 15.75 12 15.75V14.25ZM9.75001 12C9.75001 10.7574 10.7574 9.75 12 9.75V8.25C9.92894 8.25 8.25001 9.92893 8.25001 12H9.75001ZM12 9.75C13.2426 9.75 14.25 10.7574 14.25 12H15.75C15.75 9.92893 14.0711 8.25 12 8.25V9.75Z"
                          stroke={
                            activeTab === "Settings" ? "#FFFFFF" : "#131118"
                          }
                        />
                      </svg>
                      <span>Settings</span>
                    </div>
                  </div>
                </div>
              </div>
              {activeTab === "Personal_Info" && <Personal_info />}
              {activeTab === "My_orders" && <My_orders />}
              {activeTab === "My_wishlists" && <My_wishlists />}
              {activeTab === "Manage_address" && <Manage_address />}
              {activeTab === "Saved_cards" && <Saved_cards />}
              {activeTab === "Notifications" && <Notifications />}
              {activeTab === "Settings" && <Settings />}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default My_profile;
