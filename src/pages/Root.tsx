import React from 'react';
import {Outlet} from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar.tsx";

const Root = () => {

  return (
    <div className="flex">
      <Sidebar/>
      <Outlet/>
    </div>
  );
}

export default Root;
