import DialogsContainer from "./component/Dialogs/DialogsContainer";
import { Route, Routes } from "react-router-dom";
import TeleContainer from "./component/Tele/TeleContainer";
import UzersContainer from "./component/Uzers/UzersContainer";
import ProfailContainer from "./component/Profail/ProfileContainer";
import Login from ".//component/Login/Login.jsx";
import Preolader from "./component/common/Preloader/Preloader";
import ContactContainer from "./component/Contact/ContactContainer";
import { NavLink } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import HeaderContainer from "./component/Header/HeaderContainer";

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Breadcrumb, Layout, Menu, Avatar, Col, Row } from "antd";
import React, { useState } from "react";
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Профиль", "1", <NavLink to="/profail/:uzerId"></NavLink>),
  getItem("Друзья", "2", <NavLink to="/uzers"></NavLink>),
  getItem("Контакты", "sub1", <UserOutlined />, [
    getItem("Сообщения", "3", <NavLink to="/dialogs"></NavLink>),
    getItem("Номер", "4", <NavLink to="/contact"></NavLink>),
    getItem("Контакты друзей", "5", <NavLink to="/tele"></NavLink>),
  ]),
  // getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  // getItem('Files', '9', <FileOutlined />),
];

const APP2 = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo" />

        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Row>
          <Col span={20}></Col>
          <Col span={4}>
            {" "}
            <HeaderContainer />
          </Col>
        </Row>
        {/* <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        /> */}
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>
              <NavLink to="/uzers">Друзья</NavLink>
            </Breadcrumb.Item>

            <Breadcrumb.Item>
              <NavLink to="/profail/:uzerId">Профиль</NavLink>
            </Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Routes>
              {/* <Suspense fallback={<div>Loading...</div>}> */}
              <Route path="/profail/:uzerId" element={<ProfailContainer />} />
              {/* </Suspense> */}

              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/contact/*" element={<ContactContainer />} />
              <Route path="/tele/*" element={<TeleContainer />} />
              <Route path="/uzers/*" element={<UzersContainer />} />
              <Route path="/login/*" element={<Login />} />
              <Route path="/proloader/*" element={<Preolader />} />
            </Routes>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Titarenko Alexandr ©2022 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default APP2;

//   <Breadcrumb.Item></Breadcrumb.Item>
//   <Breadcrumb.Item><NavLink  to="/uzers" >Друзья</NavLink></Breadcrumb.Item>
//   <Breadcrumb.Item><NavLink  to="/dialogs">Сообщения</NavLink></Breadcrumb.Item>
//   <Breadcrumb.Item><NavLink  to="/contact">Контакты</NavLink></Breadcrumb.Item>
//   <Breadcrumb.Item><NavLink  to="/tele">Телефон</NavLink></Breadcrumb.Item>

//   <Routes>
//   <Route path='/profail/:uzerId' element={ <ProfailContainer/>}/>
//   <Route path='/dialogs/*' element={<DialogsContainer/>} />
//   <Route path='/contact/*' element={<ContactContainer/>} />
//   <Route path='/tele/*' element={<TeleContainer/>} />
//   <Route path='/uzers/*' element={<UzersContainer/>} />
//   <Route path='/login/*' element={<Login/>} />
//   <Route path='/proloader/*' element={<Preolader/>} />
// </Routes>
