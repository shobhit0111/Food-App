import React from "react";
import ReactDOM from "react-dom/client";
import AppLogo from "./public/Images/AppLogo.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={AppLogo} alt="logo" />
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestoCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        className="food-img"
        alt="food"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.cloudinaryImageId
        }
      />
      <h3>{resData.name}</h3>
      <h4>{resData.cuisines.join(", ")}</h4>
      <h4>{resData.avgRating}⭐</h4>
      <h4>{resData.costForTwo}</h4>
      <h4>{resData.sla.deliveryTime} mins</h4>
    </div>
  );
};

const resObj = [
  {
    id: "243625",
    name: "KFC",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/e2270129-d210-4a35-b044-73ae307c5280_243625.JPG",
    locality: "Deccan Gymkhana",
    areaName: "Deccan Gymkhana",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "Rolls & Wraps", "Fast Food"],
    avgRating: 4.2,
    parentId: "547",
    avgRatingString: "4.2",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 23,
      lastMileTravel: 2.2,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "2.2 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-06-11 00;00;00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "Rxawards/_CATEGORY-Burger.png",
          description: "Delivery!",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-Burger.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "20% OFF",
      subHeader: "UPTO ₹50",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},

    analytics: {
      cta: {
        link: "https;//www.swiggy.com/restaurants/kfc-deccan-gymkhana-pune-243625",
        type: "WEBLINK",
      },
    },
  },

  {
    id: "628118",
    name: "Hotel Dawath",
    cloudinaryImageId: "hpooldauljohuiap84a8",
    locality: "Narveer Tanaji Wadi",
    areaName: "Shivajinagar",
    costForTwo: "₹200 for two",
    cuisines: ["Indian", "Chinese", "Beverages"],
    avgRating: 3.4,
    parentId: "98713",
    avgRatingString: "3.4",
    totalRatingsString: "106",
    sla: {
      deliveryTime: 31,
      lastMileTravel: 1.7,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "1.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-09-19 23:30:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "70% OFF",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },

  {
    id: "21001",
    name: "Pizza Hut",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/1a74ecfe-ccf6-43b8-9288-eb91319bdce8_21001.jpg",
    locality: "F.C. Road",
    areaName: "Shivajinagar",
    costForTwo: "₹350 for two",
    cuisines: ["Pizzas"],
    avgRating: 4.1,
    parentId: "721",
    avgRatingString: "4.1",
    totalRatingsString: "12K+",
    sla: {
      deliveryTime: 27,
      lastMileTravel: 2,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "2.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-09-20 02:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
          description: "Delivery!",
        },
        {
          imageId: "Rxawards/_CATEGORY-Pizza.png",
          description: "Delivery!",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Delivery!",
                imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
              },
            },
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-Pizza.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "50% OFF",
      subHeader: "UPTO ₹100",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "4.2",
        ratingCount: "3.6K+",
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },

  {
    id: "42581",
    name: "Burger King",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/55d0daa1-ad2e-4893-be06-4709c5c68d49_42581.JPG",
    locality: "The Pavillion Mall",
    areaName: "Shivajinagar",
    costForTwo: "₹350 for two",
    cuisines: ["Burgers", "American"],
    avgRating: 4.2,
    parentId: "166",
    avgRatingString: "4.2",
    totalRatingsString: "12K+",
    sla: {
      deliveryTime: 45,
      lastMileTravel: 4.3,
      serviceability: "SERVICEABLE",
      slaString: "45-50 mins",
      lastMileTravelString: "4.3 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-09-20 02:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
          description: "Delivery!",
        },
        {
          imageId: "Rxawards/_CATEGORY-Burger.png",
          description: "Delivery!",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Delivery!",
                imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
              },
            },
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-Burger.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹99",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },

  {
    id: "323532",
    name: "Chinese Wok",
    cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
    locality: "Bibwewadi",
    areaName: "Koregaon Park",
    costForTwo: "₹300 for two",
    cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
    avgRating: 4.1,
    parentId: "61955",
    avgRatingString: "4.1",
    totalRatingsString: "3.0K+",
    sla: {
      deliveryTime: 47,
      lastMileTravel: 4.4,
      serviceability: "SERVICEABLE",
      slaString: "45-50 mins",
      lastMileTravelString: "4.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-09-19 23:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹169",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "3.0",
        ratingCount: "41",
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },

  {
    id: "506982",
    name: "McDonald's",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/a6317ac5-d089-45bf-a392-c5384cbdd1e8_506982.jpg",
    locality: "Narayan Peth",
    areaName: "Shaniwar Peth",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
    avgRating: 4.6,
    parentId: "630",
    avgRatingString: "4.6",
    totalRatingsString: "1.8K+",
    sla: {
      deliveryTime: 30,
      lastMileTravel: 1.9,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "1.9 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-09-20 00:45:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
          description: "Delivery!",
        },
        {
          imageId: "Rxawards/_CATEGORY-Burger.png",
          description: "Delivery!",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Delivery!",
                imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
              },
            },
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-Burger.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹199",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },

  {
    id: "5624",
    name: "Subway",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/3c2c022a-d0ea-4f0a-aec5-52546292aa0a_5624.JPG",
    locality: "F.C. Road",
    areaName: "Prabhat Road",
    costForTwo: "₹350 for two",
    cuisines: ["Healthy Food", "Salads", "Snacks", "Desserts", "Beverages"],
    avgRating: 4.2,
    parentId: "2",
    avgRatingString: "4.2",
    totalRatingsString: "18K+",
    sla: {
      deliveryTime: 35,
      lastMileTravel: 2,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "2.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-09-20 03:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "50% OFF",
      subHeader: "UPTO ₹100",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "3.9",
        ratingCount: "1.3K+",
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },

  {
    id: "485330",
    name: "La Pino'z Pizza",
    cloudinaryImageId: "kkhxj0otcsgziyt7vnl5",
    locality: "F.C. Road",
    areaName: "F.C. Road",
    costForTwo: "₹400 for two",
    cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
    avgRating: 4.1,
    parentId: "4961",
    avgRatingString: "4.1",
    totalRatingsString: "2.1K+",
    sla: {
      deliveryTime: 26,
      lastMileTravel: 2,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "2.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-09-20 02:45:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹159",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "4.0",
        ratingCount: "1.1K+",
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },

  {
    id: "750337",
    name: "Daily Kitchen - Homely Meals",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/741d7d41-1341-4358-b6e0-cc22b8e82f9a_750337.JPG",
    locality: "Dhole Patil Road",
    areaName: "Kalyani Nagar",
    costForTwo: "₹400 for two",
    cuisines: ["Home Food", "Indian", "North Indian", "Thalis"],
    avgRating: 4.2,
    parentId: "444382",
    avgRatingString: "4.2",
    totalRatingsString: "211",
    sla: {
      deliveryTime: 20,
      lastMileTravel: 3,
      serviceability: "SERVICEABLE",
      slaString: "15-25 mins",
      lastMileTravelString: "3.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-09-20 02:00:00",
      opened: true,
    },
    badges: {
      textExtendedBadges: [
        {
          iconId: "guiltfree/GF_Logo_android_3x",
          shortDescription: "options available",
          fontColor: "#7E808C",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                description: "",
                fontColor: "#7E808C",
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
              },
            },
          ],
        },
      },
    },
    aggregatedDiscountInfoV3: {
      header: "50% OFF",
      subHeader: "UPTO ₹100",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },

  {
    id: "20058",
    name: "SP's Biryani House",
    cloudinaryImageId: "b2jeywla2n5b8h25ey1p",
    locality: "Sadashiv Peth",
    areaName: "Sadashiv Peth",
    costForTwo: "₹900 for two",
    cuisines: ["Biryani", "Indian", "Maharashtrian"],
    avgRating: 4.4,
    parentId: "192891",
    avgRatingString: "4.4",
    totalRatingsString: "24K+",
    sla: {
      deliveryTime: 35,
      lastMileTravel: 1.9,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "1.9 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-09-19 23:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "FREE ITEM",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "4.0",
        ratingCount: "15K+",
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },

  {
    id: "11887",
    name: "Samudra Veg",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/6/d0807ef7-cc68-4cca-8032-c9eb44c9925e_11887.jpg",
    locality: "Erandwane",
    areaName: "Erandwane",
    costForTwo: "₹400 for two",
    cuisines: ["Chinese", "South Indian"],
    avgRating: 4.5,
    parentId: "176775",
    avgRatingString: "4.5",
    totalRatingsString: "47K+",
    sla: {
      deliveryTime: 33,
      lastMileTravel: 3.6,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "3.6 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-09-19 23:59:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "25% OFF",
      subHeader: "UPTO ₹250",
      discountTag: "SAVE BIG",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "4.2",
        ratingCount: "6.4K+",
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },

  {
    id: "386630",
    name: "Grameen Kulfi",
    cloudinaryImageId: "lxckywk7psobloagbpl7",
    locality: "Prabhat Road",
    areaName: "Shivaji Nagar",
    costForTwo: "₹120 for two",
    cuisines: ["Ice Cream", "Desserts"],
    avgRating: 4.7,
    veg: true,
    parentId: "12175",
    avgRatingString: "4.7",
    totalRatingsString: "287",
    sla: {
      deliveryTime: 21,
      lastMileTravel: 0.7,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "0.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-09-20 00:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "60% OFF",
      subHeader: "UPTO ₹120",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },

  {
    id: "639449",
    name: "Dum Safar Biryani",
    cloudinaryImageId: "fx0dti223czabpykykua",
    locality: "Jangali Maharaj Rd",
    areaName: "DECCAN MALL",
    costForTwo: "₹500 for two",
    cuisines: ["Biryani", "Kebabs", "Tandoor", "Indian", "Desserts"],
    avgRating: 4.1,
    parentId: "351013",
    avgRatingString: "4.1",
    totalRatingsString: "189",
    sla: {
      deliveryTime: 29,
      lastMileTravel: 2.2,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "2.2 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-09-19 23:30:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹150 OFF",
      subHeader: "ABOVE ₹699",
      discountTag: "FLAT DEAL",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resObj.map((restaurant) => (
          <RestoCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
