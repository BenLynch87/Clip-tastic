import React from "react";
import "./SideNavigation.css";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    SideNavigation = "0";
  } else {
    SideNavigation = "-50px";
  }
}

export default function SideNavigation() {
  return (
    <div class="wrapper">
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link active" href="/messagefeed">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Profile
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            FriendList
          </a>
        </li>
      </ul>
    </div>
  );
}
