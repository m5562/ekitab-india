"use client";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../../../config/axios";

const page = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axiosInstance.get("/users/all").then((res) => {
      setUsers(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {console.log(users)}
      {users ? (
        users.map((user) => {
          return (
            <div
              key={user.id}
              className="grid grid-cols-[1fr,1fr,1fr,100px] *:truncate"
            >
              <div>{user.id}</div>
              <div>{user.name}</div>
              <div>{user.email}</div>
              <div>{user.points}</div>
            </div>
          );
        })
      ) : (
        <span>Nothing to see here</span>
      )}
    </div>
  );
};

export default page;
