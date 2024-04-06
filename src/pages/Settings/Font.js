import Head from "../../components/Head";
import ThemeButton from "../../components/Setting/ThemeButton";

const FontSetting = ({ thema, font, click1, click2, click3, click4 }) => {
  return (
    <div>
      <Head text={"Font"} />
      <ThemeButton
        toggle={click1}
        thema={thema}
        font={font}
        text={"나눔 고딕"}
      />
      <ThemeButton toggle={click2} thema={thema} font={font} text={"개구"} />
      <ThemeButton
        toggle={click3}
        thema={thema}
        font={font}
        text={"썬플라워"}
      />
      <ThemeButton toggle={click4} thema={thema} font={font} text={"동글"} />
    </div>
  );
};

export default FontSetting;
