import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { ReactComponent as HomeIcon } from "../assets/home.svg";
import { ReactComponent as NoteAltIcon } from "../assets/note_alt.svg";
import { ReactComponent as ForYouIcon } from "../assets/for_you.svg";
import "../css/Bottombar.css";

export const BottomBar = () => {
  return (
    <div className="BottomBar">
      <HomeIcon width="24px" height="24px" />
      <SearchIcon width="24px" height="24px" fill="#5A5A5A" />
      <NoteAltIcon width="24px" height="24px" />
      <ForYouIcon width="24px" height="24px" />
    </div>
  );
};
