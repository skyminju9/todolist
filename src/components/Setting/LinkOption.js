import { Link } from "react-router-dom";

import theme from "./Theme";

const LinkOption = ({ goto, text, thema }) => {
  return (
    <Link style={{ textDecoration: "none" }} to={`/setting/${goto}`}>
      <div
        className="SettingOption"
        style={{
          color:
            thema === "dark"
              ? `${theme.darkTheme.textColor}`
              : `${theme.lightTheme.textColor}`,
        }}
      >
        {text}
      </div>
    </Link>
  );
};

export default LinkOption;
