import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useNavigate } from "react-router-dom";
import "../css/Icon.css";
import { Link } from "react-router-dom";

const Icon = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleSearchClick = () => {
    navigate("/Search");
  };

  const handleSettingClick = () => {
    navigate("/Setting");
  };

  return (
    <div>
      <div className="Icon">
        <div className="home" onClick={handleHomeClick}>
          <Link to="/">
            <HomeOutlinedIcon fontSize="" />
          </Link>
        </div>
        <div className="search">
          <Link to="/Search">
            <SearchIcon fontSize="" />
          </Link>
        </div>
        <div className="note">
          <Link to="/Edit">
            <NoteAltOutlinedIcon fontSize="" />
          </Link>
        </div>
        <div className="person">
          <Link to="/Setting">
            <PersonOutlineIcon fontSize="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Icon;
