import React from "react";
import { useEffect } from "react";
// import Spinner from '../components/Spinner'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Count from "../components/count";
// import {
//   ProSidebar,
//   SidebarHeader,
//   SidebarFooter,
//   SidebarContent,
// } from "react-pro-sidebar";
// import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import List from "../components/Alluser";
const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <>
      {/* <h1 style={{border:2,padding:30,width:"100%"}}>Welcome {user && user.name} to Home page</h1>
      <ProSidebar style={{ position: "absolute", height: " 60%",alignContent:"left"}}>
        <SidebarHeader style={{margin:50}}>Users Dashboard</SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem >Dashboard</MenuItem>
            <SubMenu title="Components">
              <MenuItem>Component 1</MenuItem>
              <MenuItem>Component 2</MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>
        <SidebarFooter style={{margin:50}}>
         this is the home page
        </SidebarFooter>
      </ProSidebar> */}
      <Count />
      <List />
    </>
  );
};

export default Home;
