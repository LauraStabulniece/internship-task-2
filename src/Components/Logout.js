import React from "react";
import { useDispatch, useSelector } from "react-redux";
import '../Components/Logout.css'
import { logout, selectUser } from "../app/reducers/userSlice";

function Logout() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    }
    return (
        <div className="logout">
            <h1 className="welcomeText">Welcome,<span className="userName">{user.name}!</span></h1>
            <button className="logoutBtn" onClick={(e) => handleLogout(e)}>Logout</button>
        </div>
    )
}

export default Logout