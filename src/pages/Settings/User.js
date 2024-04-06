import Head from "../../components/Head";

const UserSetting = () => {
  return (
    <div>
      <Head text={"User Infomation"} />
      <div className="SettingOption">이름 변경</div>
      <div className="SettingOption">연동 메일 변경</div>
      <div className="SettingOption">비밀번호 변경</div>
      <div className="SettingOption">푸시 알림 설정</div>
      <div className="SettingOption" style={{ color: "red" }}>
        계정 삭제
      </div>
    </div>
  );
};

export default UserSetting;
