import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

import { Outlet,  } from "react-router-dom";


const Dashboard = () => {
  // const { id } = useParams();
  // const [users, setUsers] = useState("");
  // useEffect(() => {
  //   fetch("https://dummyjson.com/users")
  //     .then((response) => response.json())

  //     // .then((data) => {
  //     //   console.log(data[1].id);
  //     //   //setUsers(data);
  //     // })
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <>
      <Navbar />
      <h1>{}</h1>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Outlet />
      </div>
      {/* <Card /> */}
    </>
  );
};

export default Dashboard;
