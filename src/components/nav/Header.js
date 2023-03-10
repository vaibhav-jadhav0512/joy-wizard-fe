import React, { useState } from "react";
import {
  BookOutlined,
  LoginOutlined,
  FormOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("");
  let { user } = useSelector((state) => ({ ...state }));
  const onClick = (e) => {
    setCurrent(e.key);
    navigate(e.key);
  };
  const dispatch = useDispatch();
  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
  };
  const items = [
    {
      label: "Joy Wizard",
      key: "/",
      icon: <BookOutlined />,
    },
    user && {
      label: user.name,
      key: "SubMenu",
      icon: <SettingOutlined />,
      className: "float-end",
      children: [
        user &&
          user.role === "admin" && {
            label: "Dashboard",
            key: "/admin/dashboard",
          },
        user &&
          user.role === "subscriber" && {
            label: "Dashboard",
            key: "/",
          },
        {
          label: "Logout",
          key: "/login",
          icon: <LogoutOutlined />,
          onClick: logout,
        },
      ],
    },
    !user && {
      label: "Register",
      key: "register",
      icon: <FormOutlined />,
      className: "float-end",
    },
    !user && {
      label: "Login",
      key: "login",
      icon: <LoginOutlined />,
      className: "float-end",
    },
  ];
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      className="d-block"
    />
  );
};
export default Header;
