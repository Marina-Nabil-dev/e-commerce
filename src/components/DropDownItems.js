import BuyNowIcon from "./../components/icons/BuyNowIcon";
import ImportNowIcon from "../components/icons/ImportNow";
import AuctionIcon from "../components/icons/AuctionIcon";
import OurServicesIcon from "../components/icons/OurServicesIcon";
import InfoIcon from "./icons/InfoIcon";
const DropDownItems = [
    {
      name: "Auctions",
      icon: <AuctionIcon />,
      options: [
        {
          name: "Live Auctions",
          href: "#",
        },
        {
          name: "Upcoming Auctions",
          href: "#",
        },
      ],
    },
    {
      name: "Buy Now",
      icon: <BuyNowIcon />,
      options: [
        {
          name: "All Cars",
          href: "#",
        },
        {
          name: "New Cars",
          href: "#",
        },
        {
          name: "Used Cars",
          href: "#",
        },
        {
          name: "Electric Cars",
          href: "#",
        },
      ],
    },
    {
      name: "Import Now",
      icon: <ImportNowIcon />,
      options: [
        {
          "name" : "All Cars",
          "href" : "#"
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