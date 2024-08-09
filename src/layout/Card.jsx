import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import layout from "../layout.css";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../features/user/userSlice";

const Card = () => {
  const { users } = useSelector((state) => state.userDetail);
  const dispatch = useDispatch();
  const { id } = useParams();
  // const [users, setUsers] = useState("");
  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((response) => response.json())

      .then((data) => {
        console.log(data);
        dispatch(setUsers(data));
      })
      .catch((error) => console.log(error));
  }, []);

  return setUsers === null ? (
    <h1>Loading............</h1>
  ) : (
    <div
      className="card"
      style={{
        padding: "2rem",
        marginBottom: "5rem",
        width: "28rem",
        justifyContent: "flex",
        displaycontent: "center",
        border: "2px solid black",
        flexDirection: "column",
      }}
    >
      <img className="Profilepic" src={users?.image} alt="" />
      <p1>Name : {users?.firstName}</p1>
      <p1> Email : {users?.email}</p1>
      <p1>Age : {users?.age}</p1>
      <p1>Gender : {users?.gender}</p1>
      <p1>Phone Number : {users?.phone}</p1>
    </div>
  );
};

export default Card;
