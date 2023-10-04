import "./Checkout.css";

function Checkout_modal() {
  return (
    <div className="checkout_modal">
      <div className="minicart">
        <div className="minicart-up">
          <p>You have 3 items in your cart</p>
        </div>
        <div className="minicart-down">
          <div className="minicart-products">
            <div className="minicart-product">
              <div className="minicart1">
                <div className="minicart-product-img">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/5576/3d45/9184a253721acd1b282d80cd874bd19b?Expires=1696204800&Signature=UQ5eomleNvpUUSpQS86uDad~u8vuI2lMK3UmMNd2HGHrDm-LwoHSHnpwdF0pWECGqHV0ObidoR8tVgt6oPBcocqVcH9VHJ5AyiN2fQbTbnC7m26jLNo2uxt6EI9apCNtZsqZhtus0zKa68zyKUXOb34VzKeiVeM77gdYnw0HVzxFDaPMX9pmPoz3kIXLl6S1pIjk0LRAbMgstkiivTsDoP9GsfIFZtFx1net-wUjmRr2oY1znxHRZO2LVMNfuU6rjZdjzrjSp2~b1akf4ZliTim5z4Na60zrm1NGW1y5zogBwcupGqkRLjNDBTGKr5S-rZ1y~-pYdg~XimIJ-YFHxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
                <div className="minicart-product-details">
                  <p>Girls Pink Moana Printed Dress</p>
                  <h1> 1 x $80.00</h1>
                  <div className="minicart-product-det">
                    <span>Size: S</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M4.16667 6.66699V15.0003C4.16667 16.8413 5.65905 18.3337 7.5 18.3337H12.5C14.3409 18.3337 15.8333 16.8413 15.8333 15.0003V6.66699M11.6667 9.16699V14.167M8.33333 9.16699L8.33333 14.167M13.3333 4.16699L12.1614 2.40916C11.8523 1.94549 11.3319 1.66699 10.7747 1.66699H9.22531C8.66805 1.66699 8.14767 1.94549 7.83856 2.40916L6.66667 4.16699M13.3333 4.16699H6.66667M13.3333 4.16699H17.5M6.66667 4.16699H2.5"
                        stroke="#FF7262"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="minicart-rect"></div>
            </div>
          </div>
          <div className="minicart-subtotal">
            <p>Subtotal</p>
            <p>$200</p>
          </div>
          <div className="minicart-buttons">
            <div className="view-cart-btn">View Cart</div>
            <div className="checkout-btn">Checkout</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout_modal;
