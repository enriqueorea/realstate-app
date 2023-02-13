import GridViewIcon from "@mui/icons-material/GridView";
import MapsHomeWorkOutlinedIcon from "@mui/icons-material/MapsHomeWorkOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export const propertyReferralsInfo = [
  {
    title: "Social Media",
    percentage: 64,
    color: "#6C5DD3",
  },
  {
    title: "Marketplace",
    percentage: 40,
    color: "#7FBA7A",
  },
  {
    title: "Websites",
    percentage: 50,
    color: "#FFCE73",
  },
  {
    title: "Digital Ads",
    percentage: 80,
    color: "#FFA2C0",
  },
  {
    title: "Others",
    percentage: 15,
    color: "#F45252",
  },
];

export const sidebarLinks = [
  {
    title: "Dashboard",
    path: "/",
    icon: GridViewIcon,
  },
  {
    title: "Properties",
    path: "/properties",
    icon: MapsHomeWorkOutlinedIcon,
  },
  {
    title: "Agents",
    path: "/agents",
    icon: PeopleAltOutlinedIcon,
  },
  {
    title: "Reviews",
    path: "/reviews",
    icon: StarBorderRoundedIcon,
  },
  {
    title: "Messages",
    path: "/messages",
    icon: ChatOutlinedIcon,
  },
  {
    title: "My Profile",
    path: "/profile",
    icon: AccountCircleOutlinedIcon,
  },
];
