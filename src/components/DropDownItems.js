import BuyNowIcon from "./../components/icons/BuyNowIcon";
import ImportNowIcon from "../components/icons/ImportNow";
import OurServicesIcon from "../components/icons/OurServicesIcon";
import InfoIcon from "./icons/InfoIcon";
import NavbarAuctionIcon from "./icons/NavbarAuctionIcon";
import LiveAuction from "../pages/LiveAuction";

const DropDownItems = [
    {
      name: "Auctions",
      icon: <NavbarAuctionIcon />,
      options: [
        {
          name: "Live Auctions",
          href: "/live-auctions",
        },
        {
          name: "Upcoming Auctions",
          href: "/upcoming-auctions",
        },
      ],
    },
    {
      name: "Buy Now",
      icon: <BuyNowIcon />,
      options: [
        {
          name: "All Cars",
          href: "/fixed-price-cars",
        },
        {
          name: "New Cars",
          href: "/fixed-price-new-cars",
        },
        {
          name: "Used Cars",
          href: "/fixed-price-used-cars",
        },
        {
          name: "Electric Cars",
          href: "/fixed-price-electric-cars",
        },
      ],
    },
    {
      name: "Import Now",
      icon: <ImportNowIcon />,
      options: [
        {
          "name" : "All Cars",
          "href" : "/imported-cars"
        },
      ],
    },
    {
      name : "Our Services",
      icon : <OurServicesIcon />,
      options : [
        {
          "name" : "Request an order",
          "href" : "#"
        },
        {
          "name" : "Finance Options",
          "href" : "#"
        },
        {
          "name" : "Compare",
          "href" : "#"
        },
        {
          "name" : "Insurance plans",
          "href" : "#"
        },
        
      ]
    },
    {
        name: "Info",
        icon: <InfoIcon />,
        options: [
          {
            "name" : "Biddex Inspection ",
            "href" : "#"
          },
          {
            "name" : "About Us",
            "href" : "#"
          },
          {
            "name" : "How it works",
            "href" : "#"
          },
          {
            "name" : "FAQs",
            "href" : "#"
          },
        ],
      },
  ];

  export default DropDownItems