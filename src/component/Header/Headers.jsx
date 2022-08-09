import h from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

const Headers = (props) => {
  return (
    <header>
      <Avatar size="large" icon={<UserOutlined />} />

      <div className={h.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login}{" "}
            <button className={h.btn} onClick={props.logOut}>
              Выйти{" "}
            </button>
          </div>
        ) : (
          <NavLink className={h.btn} to={"login/*"}>
            Войти
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Headers;
