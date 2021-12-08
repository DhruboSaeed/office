import React from "react";
import { Redirect } from "react-router-dom";


//Product
import UserList from "../components/Home";


const alllRoutes = [

  { path: "/users/list", component: UserList },
];

export { alllRoutes };
