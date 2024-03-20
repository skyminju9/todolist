import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const Icon = () => {
<<<<<<< Updated upstream
=======
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

>>>>>>> Stashed changes
  return (
    <div>
      <div className="Icon">
        <div className="home" onClick={handleHomeClick}>
          <HomeOutlinedIcon fontSize="" />
        </div>
        <div className="search">
          <SearchIcon fontSize="" />
        </div>
        <div className="note">
          <NoteAltOutlinedIcon fontSize="" />
        </div>
        <div className="person">
          <PersonOutlineIcon fontSize="" />
        </div>
      </div>
    </div>
  );
};

export default Icon;
