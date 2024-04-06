import theme from "./Theme";

const ThemeButton = ({ toggle, thema, font, text }) => {
  return (
    <div>
      <div className="SettingOption">
        <button
          style={{
            border: 0,
            outline: 0,
            padding: 0,
            color:
              thema === "dark"
                ? `${theme.darkTheme.textColor}`
                : `${theme.lightTheme.textColor}`,
            backgroundColor:
              thema === "dark"
                ? `${theme.darkTheme.backgroundColor}`
                : `${theme.lightTheme.backgroundColor}`,
            width: "100%",
            height: "100%",
            fontFamily: `${font}`,
            fontSize: 16,
            textAlign: "start",
          }}
          onClick={toggle}
        >
          {text}
        </button>
      </div>
    </div>
  );
};

export default ThemeButton;
