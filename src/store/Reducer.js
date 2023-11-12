const getBasket = () => {
  const basket = localStorage.getItem("basket");
  if (basket) {
    return JSON.parse(localStorage.getItem("basket"));
  } else {
    return [];
  }
};
const getTotalAmount = () => {
  const basket = localStorage.getItem("totalamount");
  if (basket) {
    return JSON.parse(localStorage.getItem("totalamount"));
  } else {
    return 0;
  }
};

const init = {
  products: [],
  category: [],
  filteredCategories: [],
  cartItems: getBasket(),
  totalAmount: getTotalAmount(),
  searchVisible: false,
  lang: localStorage.getItem("language") || "az",
  words: {
    az: {
      homepage: "Ana səhifə",
      category: "Kateqoriyalar",
      womencollection: "Qadın Kolleksiyası",
      classicexclusive: "Klassik Eksklüziv",
      upto40: "40%-ə qədər ENDİRİM",
      shop_now: "İndi alış-veriş edin",
      shop_category: "Kateqoriyalar üzrə alış-veriş edin",
      ourbestseller: "Ən çox satılanlarımız",
      addtocart: "Səbətə əlavə et",
      dealsmonth: "Ayın Endirimləri",
      dealmonth:
        "Ayın endirimləri ilə əldə etmək istədiyiniz hər şey indi çox ucuzdur! Yalnız bir ay üçün nəzərdə tutulan bu kampaniyanı qaçırmayın. Yüzlərlə məhsula böyük endirimlər sizi gözləyir. İndi alış-verişə başlayın və qənaətdən zövq alın!",
      days: "Günlər",
      hours: "Saatlar",
      mins: "Dəqiqələr",
      secs: "Saniyələr",
      wievproducts: "Bütün Məhsullara Baxın",
      customersays: "Müştərimiz nə deyir",
      feedbacks:
        "Mən sizin səylərinizi yüksək qiymətləndirirəm. İşinizdə fədakarlığınız və keyfiyyətiniz hər zaman diqqət çəkir. Sizə daha böyük uğurlar arzulayıram!",
      football: "Futbolcu",
      hr: "İnsan resursları",
      fashiondesigner: "Dəb dizayneri",
      actor: "Aktrisa",
      instastory: "Bizim instagram hekayələrimiz",
      freeshipping: "Pulsuz çatdırılma",
      freeshippings: "150$ yuxarı sifariş üçün pulsuz çatdırılma",
      MoneyGuarantee: "Pul Zəmanəti",
      moneyexchange: "Mübadilə üçün 30 gün ərzində",
      onlinesupport: "Onlayn dəstək",
      hoursday: "Gündə 24 saat, həftədə 7 gün",
      Flexpay: "Çevik Ödəniş",
      creditcards: "Birdən çox kredit kartı ilə ödəyin",
      home: "Ana səhifə",
      shop: "Mağaza",
      ourstory: "Bizim Hekayə",
      blog: "Bloq",
      contact: "Bizimlə əlaqə",
      info: "İnformasiya",
      myacc: "Mənim Hesabım",
      login: "Daxil ol",
      mycart: "Mənim Səbətim",
      mywish: "İstək Siyahım",
      checkout: "Yoxla",
      service: "Xidmət",
      aboutus: "Bizim haqqımızda",
      careers: "Karyera",
      delinfo: "Çatdırılma məlumatı",
      privacy: "Gizlilik Siyasəti",
      terms: "Şərtlər və qaydalar",
      subscribe: "Abunə ol",
      subsinfo:
        "Yeni kolleksiyalar və məhsul buraxılışları haqqında ilk xəbərdar olmaq üçün aşağıya e-poçtunuzu daxil edin.",
      kristres: "Krist Bütün hüquqlar qorunur️",
      allpro: "Bütün Məhsullar",
      procategory: "Məhsul Kateqoriyaları",
      filprice: "Qiymətə görə seçin",
      filcolor: "Rəngə görə seçin",
      filsize: "Ölçüyə görə seçin",
      price: "Qiymət",
      red: "Qırmızı",
      blue: "Mavi",
      orange: "Narıncı",
      black: "Qara",
      green: "Yaşıl",
      yellow: "Sarı",
      shotby: "Ən son çəkiliş",
      show: "72 nəticədən 1-16 arası göstərilir",
      description: "Təsvir",
      additional: "Əlavə",
      reviews: "Rəylər",
      color: "Rəng",
      colors: "Qırmızı, Mavi, Narıncı, Qara, Yaşıl, Sarı",
      size: "Ölçü",
      customerrev: "Müştəri rəyləri",
      addrev: "Rəyinizi əlavə edin",
      yourrate: "Reytinqiniz",
      name: "Ad",
      entername: "Adınızı daxil edin",
      emailaddress: "Email ünvanı",
      enteremail: "Email daxil edin",
      yourrev: "Sizin rəy",
      submit: "Təqdim etmək",
      relatedpro: "Oxşar məhsullar",
      youhave: "Səbətinizdə",
      itemcart: "element var",
      subtotal: "Cəmi",
      shipaddress: "Çatdırılma ünvanı",
      shipadddel: "Çatdırılma ünvanını seçin",
      shipadddel1:
        "İstifadə etmək istədiyiniz ünvan aşağıda göstərilir? Əgər belədirsə, müvafiq 'Bu ünvana çatdır' düyməsini basın. Və ya yeni çatdırılma ünvanı daxil edə bilərsiniz.",
      deliveryhere: "Buraya çatdırılma",
      addaddress: "Yeni ünvan əlavə edin",
      mobilenumber: "Mobil nömrəsi",
      addmobilenumber: "Mobil Nömrəni daxil edin",
      flat: "Mənzil, Ev No., Bina, Şirkət, Mənzil",
      area: "Ərazi, Koloniya, Küçə, Sektor, Kənd",
      city: "Şəhər",
      baku: "Bakı",
      pinkod: "Pin Kod",
      addpinkod: "Pin Kodu daxil edin",
      state: "Dövlət",
      aze: "Azərbaycan",
      useaddress: "Mənim standart ünvanım kimi istifadə edin",
      updateaddress: "Ünvanı yeniləyin",
      edit: "Düzəliş et",
      del: "Silin",
      discount: "Endirim Kodunu daxil edin",
      apply: "Tətbiq edin",
      delcharge: "Çatdırılma haqqı",
      grandtotal: "Ümumi cəm",
      address: "Ünvan",
      payment: "Ödəniş üsulu",
      selpayment: "Ödəniş metodu seçin",
      debit: "Debet/Kredit Kartı",
      cardnum: "Kart nömrəsi",
      cardname: "Kartın adı",
      entercardname: "Kartın adını daxil edin",
      expiredate: "İstifadə müddəti",
      addcard: "Kart əlavə edin",
      continue: "Davam edin",
      cash: "Nəğd Ödəniş",
      revorder: "Sifarişinizi nəzərdən keçirin",
      estimated: "Təxmini çatdırılma",
      placeorders: "Sifariş verin",
      yourorder: "Sifarişiniz təsdiqləndi",
      thanksshop:
        "Alış-veriş üçün təşəkkür edirik! Sifarişiniz hələ göndərilməyib, lakin hazır olduqda sizə e-poçt göndərəcəyik.",
      vieworder: "Sifarişə Baxın",
      backhome: "Ana səhifəyə qayıt",
      MyProfile: "Mənim Hesabım",
      hello: "Salam",
      perinfo: "Şəxsi məlumat",
      myorders: "Sifarişlərim",
      mywishlists: "İstək siyahılarım",
      manageaddress: "Ünvanları idarə edin",
      savedcard: "Saxlanan Kartlar",
      Notifications: "Bildirişlər",
      settings: "Parametrlər",
      editprofile: "Profilə düzəliş et",
      firstname: "Ad",
      lastname: "Soyad",
      filter: "Süzgəc",
      search: "Axtarış",
      Delivered: "Çatdırılıb",
      productdel: "Məhsulunuz çatdırıldı",
      writereview: "Rəy Yaz",
      inprocess: "Prosesdədir",
      productprocess: "Məhsulunuz prosesdədir",
      CancelOrder: "Sifarişi ləğv et",
      cancel: "Ləğv edin",
      addcard: "Yeni Kart əlavə edin",
      updateprofile: "Profil yeniləməsi",
      updateprofile1: "Sadəcə profil şəklinizi yeniləyin",
      yourorder1: "Sifarişiniz uğurla verildi",
      justnow: "İndi",
      youplace: "Yeni sifariş verirsiniz",
      orderdel: "Sifariş çatdırıldı",
      orderdel1: "Sifarişiniz uğurla çatdırıldı",
      sharefeedback: "Rəyinizi paylaşırsınız",
      sharefeedback1: "Şirkətinizlə heyrətamiz bir təcrübə oldu",
      Yesterday: "Dünən",
      passwordupdate: "Parolun yenilənməsi uğurla həyata keçirildi",
      passwordupdate1: "Parolunuz uğurla yeniləndi",
      twofactor: "İki faktorlu autentifikasiya",
      twofactor1:
        "Poçt vasitəsilə 2FA-nı aktiv etməklə hesabınızı təhlükəsiz saxlayın",
      pushnoti: "Push Notifications",
      pushnoti1: "Push bildiriş alın",
      detskompnoti: "Masaüstü Bildirişlər",
      detskompnoti1: "İş masasında təkan bildirişi alın",
      emailnoti: "E-poçt bildirişləri",
      emailnoti1: "E-poçt bildirişi alın",
      Language: "Dil",
      Language1: "Dilinizi seçin",
      eng: "İngilis",
      welcome: "Xoş gəldiniz",
      pleaselogin: "Zəhmət olmasa bura daxil olun",
      password: "Parol",
      pleasepassword: "Zəhmət olmasa parolunuzu yazın",
      rememberme: "Məni xatırla",
      forgotpassword: "Şifrəni unutmusunuz",
      createaccount: "Yeni hesab yaratmaq",
      enterdetails: "Təfərrüatları daxil edin",
      writefirstname: "Zəhmət olmasa adınızı yazın",
      writelastname: "Zəhmət olmasa soyadınızı yazın",
      termsconditions: "Mən Qaydalar və Şərtlərlə razıyam",
      signup: "Abunə olun",
      back: "Arxıya",
      enterforgotpassword:
        "Qeydiyyatdan keçmiş e-poçt ünvanınızı daxil edin. parolunuzu sıfırlamaq üçün sizə kod göndərəcəyik",
      sentotp: "OTP göndərin",
      enterotp: "OTP daxil edin",
      registeremail:
        "Biz robertfox@example.com qeydiyyatdan keçmiş e-poçt ünvanınızın kodunu paylaşdıq",
      verify: "Doğrulayın",
      PasswordChanged: "Parol Uğurla Dəyişdirildi",
      passwordsuccess: "Parolunuz uğurla yeniləndi",
      backlogin: "Giriş səhifəsinə qayıt",
      movecard: "Səbətə köçürün",
    },
    en: {
      movecard: "Move to Cart",
      backlogin: "Back to Login",
      passwordsuccess: "Your password has been updated succesfully",
      PasswordChanged: "Password Changed Successfully",
      verify: "Verify",
      registeremail:
        "We have share a code of your registered email address robertfox@example.com",
      enterotp: "Enter OTP",
      sentotp: "Send OTP",
      enterforgotpassword:
        "Enter your registered email address. we'll send you a code to reset your password",
      back: "Back",
      signup: "Signup",
      termsconditions: " I agree to the Terms & Conditions",
      writelastname: "Please write your last name",
      rightfirstname: "Please write your first name",
      enterdetails: "Please enter details",
      createaccount: "Create New Account",
      forgotpassword: "Forgot password",
      rememberme: "Remember me",
      pleasepassword: "Please write your password",
      password: "Password",
      pleaselogin: "Please login here",
      welcome: "Welcome",
      eng: "English",
      Language1: "Select your language",
      Language: "Language",
      emailnoti1: "Receive email notification",
      emailnoti: "Email Notifications",
      detskompnoti1: "Receive push notification in desktop",
      detskompnoti: "Desktop Notifications",
      pushnoti1: "Receive push notification",
      pushnoti: "Push Bildirişləri",
      twofactor1: "Keep your account secure by enabling 2FA via mail",
      twofactor: "Two-factor Authentication",
      passwordupdate1: "Your password has been updated successfully",
      passwordupdate: "Password Update successfully",
      Yesterday: "Yesterday",
      sharefeedback1: "It was an amazing experience with your company",
      sharefeedback: "You share your feedback",
      orderdel1: "Your order has been delivered successfully",
      orderdel: "Order delivered",
      youplace: "You place a new order",
      justnow: "Just Now",
      yourorder1: "Your order placed successfullty",
      updateprofile1: "You just update your profile picture",
      updateprofile: "Profile Update",
      addcard: "Add New Card",
      cancel: "Cancel",
      CancelOrder: "Cancel Order",
      productprocess: "Your product has been Inprocess",
      inprocess: "In Process",
      writereview: "Write A Review",
      productdel: "Your product has been delivered",
      Delivered: "Delivered",
      search: "Search",
      filter: "Filter",
      lastname: "Last name",
      firstname: "First name",
      editprofile: "Edit Profile",
      settings: "Settings",
      Notifications: "Notifications",
      savedcard: "Saved Cards",
      manageaddress: "Manage Addresses",
      mywishlists: "My Wishlists",
      myorders: "My Orders",
      perinfo: "Personal Information",
      hello: "Hello",
      MyProfile: "My Profile",
      backhome: "Back to Home",
      vieworder: "View Order",
      thanksshop:
        "Thanks for shopping! your order hasn’t shipped yet, but we willsend you and email when it done.",
      yourorder: "Your order is confirmed",
      placeorders: "Place order",
      estimated: "Estimated delivery",
      revorder: "Review Your Order",
      cash: "Cash on Delivery",
      continue: "Continue",
      addcard: "Add card",
      expiredate: "Expire date",
      entercardname: "Enter Card Name",
      cardname: "Kartın adı",
      cardnum: "Card Number",
      debit: "Debit/Credit Card",
      selpayment: "Select a payment method",
      payment: "Payment Method",
      address: "Address",
      grandtotal: "Grand Total",
      delcharge: "Delivery Charge",
      apply: "Apply",
      discount: "Enter Discount Code",
      del: "Delete",
      edit: "Edit",
      updateaddress: "Update Address",
      useaddress: "Use as my default address",
      aze: "Azərbaijan",
      state: "State",
      addpinkod: "Enter Pin Code",
      pinkod: "Pin Code",
      baku: "Baku",
      city: "City",
      area: "Area, Colony, Street, Sector, Village",
      flat: "Flat, House no., Building, Company, Apartment",
      addmobilenumber: "Enter Mobile Number",
      mobilenumber: "Mobile Number",
      addaddress: "Add a new address",
      deliveryhere: "Delivery here",
      shipadddel1:
        "Is the address you'd like to use displayed below? If so, click the corresponding 'Deliver to this address's button. Or you can enter a new delivery address.",
      shipadddel: "Select a delivery address",
      homepage: "Homepage",
      category: "Categories",
      womencollection: "Women’s Collection",
      classicexclusive: "Classic Exclusive",
      upto40: "UPTO 40% OFF",
      shop_now: "Shop Now",
      shop_category: "Shop by Categories",
      ourbestseller: "Our Bestseller",
      addtocart: "Add to Cart",
      dealsmonth: "Deals of the Month",
      dealmonth:
        "Everything you want to get is much cheaper now with the discounts of the month! Don't miss out on this month-only campaign. Big discounts on hundreds of products are waiting for you. Start shopping now and enjoy the savings!s",
      days: "Days",
      hours: "Hours",
      mins: "Mins",
      secs: "Secs",
      wievproducts: "View All Products",
      customersays: "What our Customer say’s",
      feedbacks:
        "I appreciate your efforts. Your dedication and quality in your work is always noticed. I wish you more success!",
      football: "Football player",
      hr: "Human resources",
      fashiondesigner: "Fashion designer",
      actor: "Actor",
      instastory: "Our Instagram Stories",
      freeshipping: "Free shipping",
      freeshippings: "Free shipping for order above $150",
      MoneyGuarantee: "Money Guarantee",
      moneyexchange: "Within 30 days for an exchange",
      onlinesupport: "Online support",
      hoursday: "24 hours a day, 7 days a week",
      Flexpay: "Flexible Payment",
      creditcards: "Pay with multiple credit cards",
      home: "Home",
      shop: "Shop",
      ourstory: "Our Story",
      blog: "Blog",
      contact: "Contact Us",
      info: "Information",
      myacc: "My Account",
      login: "Login",
      mycart: "My Cart",
      mywish: "My Wishlist",
      checkout: "Checkout",
      service: "Service",
      aboutus: "About us",
      careers: "Careers",
      delinfo: "Delivery Information",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      subscribe: "Subscribe",
      kristres: "Krist All Rights are reserved️ ",
      subsinfo:
        "Enter your email below to be the first to know about new collections and product launches.",
      allpro: "All Products",
      procategory: "Product Categories",
      filprice: "Filter by Price",
      filcolor: "Filter by Color",
      filsize: "Filter by Size",
      price: "Price",
      red: "Red",
      blue: "Blue",
      orange: "Orange",
      black: "Black",
      green: "Green",
      yellow: "Yellow",
      shotby: "Shot by latest",
      show: "Showing 1-16 of 72 results",
      description: "Description",
      additional: "Additional",
      reviews: "Reviews",
      color: "Color",
      colors: "Red, Blue, Orange, Black, Green, Yellow",
      customerrev: "Customer Reviews",
      size: "Size",
      addrev: "Add your Review",
      yourrate: "Your Rating",
      name: "Name",
      entername: "Enter Your Name",
      emailaddress: "Email Address",
      enteremail: "Enter Your Email",
      yourrev: "Your Review",
      submit: "Submit",
      relatedpro: "Related Products",
      youhave: "You have",
      itemcart: "items in your cart",
      subtotal: "Subtotal",
      shipaddress: "Shipping Address",
    },
  },
};

export default function Reducer(state = init, action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "SET_CATEGORY":
      return { ...state, category: action.payload };
    case "CATEGORY_FILTER":
      let newArr = [];
      newArr = state.products.filter((x) => x.category_id === action.payload);
      return { ...state, filteredCategories: newArr };
    case "BASKET":
      let totalAmount =
        state.totalAmount + action.payload.amount * action.payload.price;

      if (state.cartItems.find((x) => x.title === action.payload.title)) {
        let item = state.cartItems.find(
          (x) => x.title === action.payload.title
        );
        (item.amount += action.payload.amount),
          (item.subtotal += action.payload.amount * action.payload.price);
      } else {
        state.cartItems.push({
          ...action.payload,
          subtotal: action.payload.amount * action.payload.price,
        });
      }
      localStorage.setItem("basket", JSON.stringify(state.cartItems));
      localStorage.setItem("totalamount", JSON.stringify(totalAmount));
      return { ...state, totalAmount: totalAmount };
    case "BASKETITEMINC":
      let tempArr = state.cartItems;
      let item = tempArr.find((x) => x.title === action.payload.title);
      item.amount += 1;
      item.subtotal = item.amount * item.price;

      state.totalAmount = state.totalAmount + +item.price;
      console.log(tempArr);
      localStorage.setItem("basket", JSON.stringify(tempArr));
      localStorage.setItem("totalamount", JSON.stringify(state.totalAmount));

      return { ...state, cartItems: state.cartItems };
    case "BASKETDELETE":
      let filteredBasket = state.cartItems.filter(
        (x) => x.id !== action.payload
      );
      let filteredItem = state.cartItems.find((x) => x.id == action.payload);

      let updatedTotalAmount =
        state.totalAmount - filteredItem.amount * filteredItem.price;

      localStorage.setItem("basket", JSON.stringify(filteredBasket));
      localStorage.setItem("totalamount", JSON.stringify(updatedTotalAmount));
      return {
        ...state,
        cartItems: filteredBasket,
        totalAmount: updatedTotalAmount,
      };
    case "SIDEBAROPEN":
      return {
        ...state,
        sidebar: action.payload,
      };
    case "SIDEBARCLOSE":
      return {
        ...state,
        sidebar: action.payload,
      };
    case "SEARCHVISIBLE":
      return {
        ...state,
        searchVisible: action.payload,
      };
    case "SEARCHNOVISIBLE":
      return {
        ...state,
        searchVisible: action.payload,
      };
    case "SET_LANG":
      return { ...state, lang: action.payload };
    default:
      return state;
  }
}
