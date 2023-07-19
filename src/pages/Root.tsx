import React, {useEffect} from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import {Sidebar} from "../components/index.tsx";
import {useLocation} from "react-router";

const Root: React.FC = () => {

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname == "/") {
      navigate("/servers")
    }
  }, [])

  console.log(location.pathname)
  return (
    <div className="flex">
      {location.pathname !== "/auth" && <Sidebar/>}
      <Outlet/>
    </div>
  );
}

export default Root;
