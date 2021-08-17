import React from "react";
import "./message.css";

function Message() {
  return (
    <div className="bodyMsg">
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div className="container">
        {/* Page header start */}
        <div className="page-title">
          <div className="row gutters" >
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <h5 className="title">Chat App</h5>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"> </div>
          </div>
        </div>
        {/* Page header end */}
        {/* Content wrapper start */}
        <div className="content-wrapper">
          {/* Row start */}
          <div className="row gutters">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="card m-0">
                {/* Row start */}
                <div className="row no-gutters">
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3">
                    <div className="users-container" style={{width:461}}>
                      <div className="chat-search-box">
                        <div className="input-group">
                          <input
                            className="form-control"
                            placeholder="Search"
                          />
                          <div className="input-group-btn">
                            <button type="button" className="btn btn-info">
                              <i className="fa fa-search" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <ul className="users">
                        <li className="person" data-chat="person1">
                          <div className="user">
                            <img
                              src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
                              alt="Retail Admin"
                            />
                            <span className="status busy" />
                          </div>
                          <p className="name-time">
                            <span className="name">Steve Bangalter</span>
                            <span className="time">15/02/2019</span>
                          </p>
                        </li>
                        <li className="person" data-chat="person1">
                          <div className="user">
                            <img
                              src="https://www.bootdey.com/img/Content/avatar/avatar1.png"
                              alt="Retail Admin"
                            />
                            <span className="status offline" />
                          </div>
                          <p className="name-time">
                            <span className="name">Steve Bangalter</span>
                            <span className="time">15/02/2019</span>
                          </p>
                        </li>
                        <li className="person active-user" data-chat="person2">
                          <div className="user">
                            <img
                              src="https://www.bootdey.com/img/Content/avatar/avatar2.png"
                              alt="Retail Admin"
                            />
                            <span className="status away" />
                          </div>
                          <p className="name-time">
                            <span className="name">Peter Gregor</span>
                            <span className="time">12/02/2019</span>
                          </p>
                        </li>
                        <li className="person" data-chat="person3">
                          <div className="user">
                            <img
                              src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
                              alt="Retail Admin"
                            />
                            <span className="status busy" />
                          </div>
                          <p className="name-time">
                            <span className="name">Jessica Larson</span>
                            <span className="time">11/02/2019</span>
                          </p>
                        </li>
                        <li className="person" data-chat="person4">
                          <div className="user">
                            <img
                              src="https://www.bootdey.com/img/Content/avatar/avatar4.png"
                              alt="Retail Admin"
                            />
                            <span className="status offline" />
                          </div>
                          <p className="name-time">
                            <span className="name">Lisa Guerrero</span>
                            <span className="time">08/02/2019</span>
                          </p>
                        </li>
                        <li className="person" data-chat="person5">
                          <div className="user">
                            <img
                              src="https://www.bootdey.com/img/Content/avatar/avatar5.png"
                              alt="Retail Admin"
                            />
                            <span className="status away" />
                          </div>
                          <p className="name-time">
                            <span className="name">Michael Jordan</span>
                            <span className="time">05/02/2019</span>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
           
                </div>
                {/* Row end */}
              </div>
            </div>
          </div>
          {/* Row end */}
        </div>
        {/* Content wrapper end */}
      </div>
    </div>
  );
}

export default Message;
