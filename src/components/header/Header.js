import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ArrowDropDown } from "@mui/icons-material";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://ww1.freelogovectors.net/wp-content/uploads/2020/10/new_gmail_logo.png?lossy=1&w=2560&ssl=1"
          alt=""
        />
      </div>
      <div className="headerMiddle">
        <SearchIcon />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDown />
      </div>
      <div className="headerRight">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
