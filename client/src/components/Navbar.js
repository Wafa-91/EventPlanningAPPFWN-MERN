import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Switch, Route } from "react-router";
import { Link, useHistory } from "react-router-dom";
import Dashbord from "./admin/Dashbord";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../js/actions/user";

import { Dropdown, ButtonGroup, NavDropdown, Nav } from "react-bootstrap";

function Navbar() {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.userReducer.user);
  return (
    <div>
      <div className="navv">
        {/*  Meta  */}
        <meta charSet="UTF-8" />
        <title>Smooth navigation</title>
        {/*  Styles  */}
        <link rel="stylesheet" href="styles/index.processed.css" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <header className="main-header" style={{ left: -45 }}>
          <div className="container">
            <nav
              className="navbar navbar-expand-lg main-nav px-0"
              style={{
                width: 1350,
                height: 56,
                marginTop: -26,
                backgroundColor: "whitesmoke",
              }}
            >
              {/* <a className="navbar-brand" href="/mojo">
                <img src="http://rajeshdas.com/assets/images/logo.svg" alt="rajeshdas.com" />
              </a> */}
              <ul
                className="navbar-nav ml-auto text-uppercase f1"
                style={{ marginTop: -36, paddingLeft: 20 }}
              >
                <li>
                  <svg
                    className="iconNav"
                    preserveAspectRatio="xMidYMid meet"
                    data-bbox="0 0.1 72.349 97.425"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0.1 72.349 97.425"
                    role="presentation"
                    aria-hidden="true"
                  >
                    <g>
                      <path d="M28.5 28.4c5.8 14.2 5.5 31.3 6.1 46.5.3 7.3.4 14.6-1.2 21.7-.1.4.1.8.5.9.4.1.8-.1.9-.5 1.6-7.3 1.6-14.7 1.2-22.1-.5-15.3-.1-32.6-6-46.9-.4-.9-1.9-.5-1.5.4z"></path>
                      <path d="M36.2 86.2c.3-9.2 4.9-15.9 10.2-22.9 5-6.8 10.8-13 17.3-18.3.8-.6-.3-1.6-1.1-1.1-7.2 5.7-13.1 12.7-18.6 20-5.2 6.9-9.2 13.5-9.4 22.3 0 .4.3.8.8.8s.8-.4.8-.8z"></path>
                      <path d="M52.6 55.5c1.1-5.2-.1-11.5-2.2-16.3-.4-.9-1.7-.1-1.3.8 1.9 4.5 3.1 10.4 2 15.2-.2.9 1.3 1.3 1.5.3z"></path>
                      <path d="M43.9 65.9c-.4-4.5-.6-9-1-13.4-.1-1-1.6-1-1.5 0 .4 4.5.6 9 1 13.4.1 1 1.6 1 1.5 0z"></path>
                      <path d="M46.3 63.4c6.3-1.3 12.5-3 18.6-5 .9-.3.5-1.8-.4-1.5-6.1 2-12.3 3.7-18.6 5-.9.3-.5 1.7.4 1.5z"></path>
                      <path d="M40.1 72.4c5.2-.7 10.4-.3 15.4 1.3.4.1.8-.1.9-.5s-.1-.8-.5-.9c-5.1-1.6-10.5-2.1-15.8-1.4-.9.1-1 1.6 0 1.5z"></path>
                      <path d="M29.3 27.7C21 20.8 23.3 6.5 32 1.4L30.9.5c-.6 3.8.4 7 1.2 10.7 1.2 5.8.8 11.8-3 16.7-.6.8.5 1.8 1.1 1.1 2.4-3 3.8-6.6 4-10.5.5-6-2.7-11.7-1.8-17.5.1-.4-.1-.8-.6-.9-.2 0-.4 0-.5.1-9.6 5.6-12.1 21.1-3 28.7.7.5 1.8-.6 1-1.2z"></path>
                      <path d="M33 37.6c1.3-7.5 4.3-15.4 11.8-18.6l-1.1-.5c1.7 8.7-4.1 15.5-11.5 19.1-.9.4-.1 1.7.8 1.3 8.1-3.9 14-11.5 12.2-20.8-.1-.4-.5-.6-.9-.5-.1 0-.1 0-.2.1-7.8 3.3-11.2 11.6-12.5 19.5-.2 1 1.2 1.4 1.4.4z"></path>
                      <path d="M28.8 29.1c-7.5 1.5-16.4 1.6-22.2-4.3L6.5 26c7.6-4.6 15.9-1.9 22 3.9.3.3.8.3 1.1 0 .3-.3.3-.7 0-1C23 22.7 14 19.8 5.8 24.8c-.4.2-.5.7-.3 1l.1.1c6.1 6.3 15.5 6.2 23.6 4.7 1-.2.6-1.7-.4-1.5z"></path>
                      <path d="M63.8 40.3c.8-1.6 2.9-2.3 4.5-1.4s2.3 2.9 1.4 4.5c-.8 1.6-2.9 2.3-4.5 1.4-1.5-.8-2.2-2.7-1.5-4.3"></path>
                      <path d="M64.5 40.7c1.5-2.5 5.7-.9 4.5 2.1-.4 1.2-1.7 1.9-2.9 1.6-.1 0-.2-.1-.3-.1-1.3-.7-1.9-2.2-1.3-3.6.3-.9-1.1-1.3-1.5-.4-.7 2.1.3 4.4 2.3 5.3 2 .8 4.2-.2 5-2.2v-.1c.9-1.9.1-4.1-1.8-5h-.1c-1.9-.9-4.2-.2-5.4 1.6-.2.4-.1.8.3 1s.9.2 1.2-.2z"></path>
                      <path d="M40.3 47.6c-1.2 1.1-1.3 2.9-.2 4.1.2.3.5.5.9.7 1.8.7 3.9-1.2 3.6-3.1s-1-2.7-3.7-2l-.6.3z"></path>
                      <path d="M39.8 47c-1.4 1.3-1.6 3.4-.4 4.9 1.1 1.4 3.2 1.7 4.6.6.2-.1.4-.3.5-.5 1.3-1.4 1.3-3.6.1-5-1.2-1.2-3.3-.8-4.6 0-.4.2-.5.7-.3 1 .2.4.7.5 1 .3.7-.4 1.9-.8 2.6-.3.7.8.8 1.9.2 2.7-.7 1.1-2.3 1.5-3.1.3-.6-.9-.5-2.1.3-2.9.8-.6-.2-1.7-.9-1.1z"></path>
                      <path d="M66.5 54.1c-1.6-.2-2.1 1.9-1.7 3.2s2.1 2.2 3.5 2.3 3-.5 3.3-1.9c.1-1.1-.4-2.1-1.3-2.7-.9-.5-1.9-.8-3-.9h-.8z"></path>
                      <path d="M66.5 53.4c-2-.1-2.8 2.1-2.5 3.8.3 2.1 2.6 3.3 4.6 3.2s4.1-1.4 3.7-3.6c-.5-2.6-3.3-3.1-5.5-3.4-.9-.1-1.3 1.3-.4 1.5 1.1.1 2.1.3 3.1.7.8.4 1.6 1.2 1.3 2.1-.3.7-.9 1.1-1.6 1.2-1.2.2-2.4-.2-3.3-1.1-.6-.8-.7-2.9.7-2.9.4 0 .7-.4.7-.8-.2-.4-.5-.7-.8-.7z"></path>
                      <path d="M57.9 70.9c-2.4.6-2.1 2.4-1.6 3.7.7 1.2 2.1 1.9 3.4 1.6.6-.1 1.2-.3 1.7-.7.9-.9 1.1-2.3.4-3.4-.7-1.1-1.9-1.6-3.2-1.4l-.7.2z"></path>
                      <path d="M57.7 70.2c-1.6.3-2.7 1.9-2.4 3.5 0 .2.1.3.1.5.6 2.1 2.8 3.3 4.9 2.7 1.8-.3 3-2.1 2.7-3.9-.1-.4-.2-.7-.3-1-1.1-2-3-2.2-5-1.8-1 .1-.6 1.6.4 1.4s2.1-.3 2.9.6c.8.7.8 1.9.1 2.7-.3.3-.7.5-1.2.6-1.3.3-2.6-.4-3-1.6-.4-.7-.1-1.7.7-2 .2-.1.4-.1.6-.2.4-.2.5-.6.3-1s-.5-.5-.8-.5z"></path>
                      <path d="M48.9 35.9c-2.4.6-2.1 2.4-1.6 3.7.7 1.2 2.1 1.9 3.4 1.6.6-.1 1.2-.3 1.7-.7.9-.9 1.1-2.3.4-3.4-.7-1.1-1.9-1.6-3.2-1.4l-.7.2z"></path>
                      <path d="M48.7 35.2c-1.6.3-2.7 1.9-2.4 3.5 0 .2.1.3.1.5.6 2.1 2.8 3.3 4.9 2.7 1.8-.3 3-2.1 2.7-3.9-.1-.4-.2-.7-.3-1-1.1-2-3-2.2-5-1.8-1 .1-.6 1.6.4 1.4s2.1-.3 2.9.6c.8.7.8 1.9.1 2.7-.3.3-.7.5-1.2.6-1.3.3-2.6-.4-3-1.6-.4-.7-.1-1.7.7-2 .2-.1.4-.1.6-.2.4-.2.5-.6.3-1s-.5-.5-.8-.5z"></path>
                      <path d="M35.5 69.4C30.8 54.2 17.3 39.3.8 38.7c-.5 0-.8.3-.8.7.2 16.5 16.9 36.8 34.8 31.9.4-.1.6-.5.5-.9s-.5-.6-.9-.5c-10.7 2.9-20.9-4.5-26.9-12.8C4.8 53.5 3 49.5 2 45.2c-.8-3.9-1.2-5.4 3.4-4.5 2.7.6 5.2 1.5 7.6 2.8 9.6 4.9 17.8 16.3 20.9 26.4.1.4.5.6.9.5.5-.2.8-.6.7-1z"></path>
                      <path d="M.7 41c11.9 8.6 23 19 33.5 29.2.3.3.8.3 1.1 0 .3-.3.3-.7 0-1C24.7 58.9 13.5 48.4 1.5 39.7c-.8-.6-1.5.7-.8 1.3z"></path>
                    </g>
                  </svg>
                </li>
                <li className="name" styleName={{ color: "pink" }}>
                  {" "}
                  Bel Event
                </li>
                <li>
                  {/* <svg style={{width:30,height:100,paddingTop:30}}data-bbox="0 0 50 50" data-type="shape" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><g><path d="M25 48.077c-5.924 0-11.31-2.252-15.396-5.921 2.254-5.362 7.492-8.267 15.373-8.267 7.889 0 13.139 3.044 15.408 8.418-4.084 3.659-9.471 5.77-15.385 5.77m.278-35.3c4.927 0 8.611 3.812 8.611 8.878 0 5.21-3.875 9.456-8.611 9.456s-8.611-4.246-8.611-9.456c0-5.066 3.684-8.878 8.611-8.878M25 0C11.193 0 0 11.193 0 25c0 .915.056 1.816.152 2.705.032.295.091.581.133.873.085.589.173 1.176.298 1.751.073.338.169.665.256.997.135.515.273 1.027.439 1.529.114.342.243.675.37 1.01.18.476.369.945.577 1.406.149.331.308.657.472.98.225.446.463.883.714 1.313.182.312.365.619.56.922.272.423.56.832.856 1.237.207.284.41.568.629.841.325.408.671.796 1.02 1.182.22.244.432.494.662.728.405.415.833.801 1.265 1.186.173.154.329.325.507.475l.004-.011A24.886 24.886 0 0 0 25 50a24.881 24.881 0 0 0 16.069-5.861.126.126 0 0 1 .003.01c.172-.144.324-.309.49-.458.442-.392.88-.787 1.293-1.209.228-.232.437-.479.655-.72.352-.389.701-.78 1.028-1.191.218-.272.421-.556.627-.838.297-.405.587-.816.859-1.24a26.104 26.104 0 0 0 1.748-3.216c.208-.461.398-.93.579-1.406.127-.336.256-.669.369-1.012.167-.502.305-1.014.44-1.53.087-.332.183-.659.256-.996.126-.576.214-1.164.299-1.754.042-.292.101-.577.133-.872.095-.89.152-1.791.152-2.707C50 11.193 38.807 0 25 0"></path></g></svg> */}
                </li>
                {user ? null:<li style={{ paddingTop: 50, paddingLeft: 8, color: "teal" }}>
                  {" "}
                  <Link to="/signIn" style={{ color: "#000000c4" }}>
                    Connexion
                  </Link>
                </li>}
              </ul>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#mainMenu"
                aria-controls="mainMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar icon-bar-1" />
                <span className="icon-bar icon-bar-2" />
                <span className="icon-bar icon-bar-3" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="mainMenu"
                style={{ paddingRight: 77 }}
              >
                <ul className="navbar-nav ml-auto text-uppercase f1">
                  <li style={{ marginTop: 20 }}>
                    <Link to="/">Accueil</Link>
                  </li>
                  <li style={{ marginTop: 20 }}>
                    <a href="/about2">A propos</a>
                  </li>
                  <li style={{ marginTop: 20 }}>
                    <Link to="/services">services</Link>
                  </li>
                  <li style={{ marginTop: 20 }}>
                    <a href="/gallery">gallerie</a>
                  </li>
             

                  <li style={{ marginTop: 20 }}>
                    <Link to="/contact">contact</Link>
                  </li>
                  <li style={{ marginTop: 20 }}>
                    <Link to="/avis">Avis</Link>
                  </li>
                  {user && user.isAdmin ? (
                    <li style={{ marginTop: 20 }}>
                      <Link to="/dashbord"> Tableau de bord</Link>
                    </li>
                  ) : null}

                  {user ? (
                    <li style={{ marginTop: 10 }}>
                      <Link to="/basket">
                        {" "}
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Shopping_Cart_Flat_Icon_Vector.svg/1200px-Shopping_Cart_Flat_Icon_Vector.svg.png"
                          width="50"
                          height="50"
                        ></img>
                      </Link>
                    </li>
                  ) : null}
                  {user ? (
                    <li style={{ marginTop: 20 }}>
                      <Dropdown as={ButtonGroup}>
                        <img
                          style={{
                            backgroundSize: "32px 32px",
                            borderRadius: "50%",
                            height: "32px",
                            width: "32px",
                          }}
                          src={user.imageUrl}
                          alt=""
                          aria-hidden="true"
                          data-noaft=""
                        />

                        <Dropdown.Toggle
                          split
                          variant="light"
                          id="dropdown-split-basic"
                        />

                        <Dropdown.Menu>
                          <Dropdown.Item>
                            {" "}
                            <Link to="/userProfile"> <svg style={{marginRight:8}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
</svg>Mon compte</Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <button
                              onClick={() => {
                                dispatch(logout());
                                history.push("/");
                              }}
                            >
                              {" "}
                              <svg  style={{marginRight:8}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
  <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
</svg>    Déconnexion
                            </button>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                  ) : null}
                </ul>
              </div>
            </nav>
          </div>
          {/* /.container */}
        </header>
        {/*

    Wow! What do you want to build?

    You have so many possibilities right now... Looking for something to kick off?
    How about a simple folio page to show off everything you're going to make!
   
  */}
        {/* Bootstrap core JavaScript
    ================================================== */}
        {/* Placed at the end of the document so the pages load faster */}
        {/* Scripts */}
      </div>
    </div>
  );
}

export default Navbar;
