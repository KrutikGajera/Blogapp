import React, { useState } from "react";
import "./Stayle.css";

import Categories from "./Categories_button";

import Img from "./Image";
import MapData from "./MapData";

function Home() {
  return (
    <div>
      <section>
        <div className="container-fluid">
          <nav className="navbar navbar-expand nav">
            <div className="navbar-nav">
              {Categories.map((val) => {
                return (
                  <>
                    <a className="btn btn1">{val.cat}</a>
                  </>
                );
              })}
            </div>
            <a className="profile-name profile-button" href="#">
              Krutik
            </a>
            <a className="navbar-brand">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdJsKFBNFSrizdFURENg7OCy-R8pxzWOKLYX2JfJIBqeJYayEXbl6zBqq7YDoyH-wZ2j4&usqp=CAU"
                alt="sorry"
                className="profile-img"
              />
            </a>
          </nav>
        </div>
      </section>
      <section>
        <div className="container content1 p1">
          {Img.map((response) => {
            return (
              <>
                <MapData {...response}></MapData>
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Home;
