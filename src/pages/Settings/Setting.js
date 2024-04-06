import React from "react";
import Icon from "../../components/Icon";
import "../../css/Icon.css";
import Head from "../../components/Head";

import ThemeButton from "../../components/Setting/ThemeButton";
import LinkOption from "../../components/Setting/LinkOption";

const Setting = ({ toggle, thema, font }) => {
  return (
    <div>
      <Head text={"Setting"} />
      <LinkOption goto={"user"} text={"유저 정보 변경"} thema={thema} />
      <LinkOption goto={"font"} text={"폰트"} thema={thema} />
      <ThemeButton
        toggle={toggle}
        thema={thema}
        font={font}
        text={"라이트 / 다크"}
      />
      <Icon />
    </div>
  );
};

export default Setting;
