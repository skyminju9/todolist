import Calendar from "../components/Home/Calendar";
import Head from "../components/Head";
import Todo from "../components/Home/Todo";
import Icon from "../components/Icon";

const Home = () => {
  return (
    <div>
      <Head text={"To Do"} />
      <Calendar />
      {/* <Todo /> */}
      <Icon />
    </div>
  );
};

export default Home;
