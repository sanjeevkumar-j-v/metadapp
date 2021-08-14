import React from 'react';

function Header(props) {
    return (
      <div class="header navbar">
        <div class="header-container">
          <div class="nav-logo">
            <a>
              <b>
                <img src="assets/img/logo.png" alt="" />
              </b>
              <span class="logo">
                METADAPP
              </span>
            </a>
          </div>
          <ul class="nav-left">
            <li>
              <a class="sidenav-fold-toggler">
                <i class="lni-menu"></i>
              </a>
              <a class="sidenav-expand-toggler">
                <i class="lni-menu"></i>
              </a>
            </li>
          </ul>
          <ul class="nav-right">
            <li class="search-box">
              <input
                class="form-control"
                type="text"
                placeholder="Type to search..."
              />
              <i class="lni-search"></i>
            </li>
            <li class="massages dropdown dropdown-animated scale-left">
              <span class="counter">3</span>
              <a class="dropdown-toggle" data-toggle="dropdown">
                <i class="lni-envelope"></i>
              </a>
              <ul class="dropdown-menu dropdown-lg">
                <li>
                  <div class="dropdown-item align-self-center">
                    <h5>
                      <span class="badge badge-primary badge-pro float-right">
                        745
                      </span>
                      Messages
                    </h5>
                  </div>
                </li>
                <li>
                  <ul class="list-media">
                    <li class="list-item">
                      <a class="media-hover">
                        <div class="media-img">
                          <img src="assets/img/users/avatar-1.jpg" alt="" />
                        </div>
                        <div class="info">
                          <span class="title">Amanda Robertson</span>
                          <span class="sub-title">
                            Dummy text of the printing and typesetting industry.
                          </span>
                        </div>
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="media-hover">
                        <div class="media-img">
                          <img src="assets/img/users/avatar-2.jpg" alt="" />
                        </div>
                        <div class="info">
                          <span class="title">Danny Donovan</span>
                          <span class="sub-title">
                            It is a long established fact that a reader will
                          </span>
                        </div>
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="media-hover">
                        <div class="media-img">
                          <img src="assets/img/users/avatar-3.jpg" alt="" />
                        </div>
                        <div class="info">
                          <span class="title">Frank Handrics</span>
                          <span class="sub-title">
                            You have 87 unread messages
                          </span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="check-all text-center">
                  <span>
                    <a class="text-gray">
                      View All
                    </a>
                  </span>
                </li>
              </ul>
            </li>
            <li class="notifications dropdown dropdown-animated scale-left">
              <span class="counter">2</span>
              <a class="dropdown-toggle" data-toggle="dropdown">
                <i class="lni-alarm"></i>
              </a>
              <ul class="dropdown-menu dropdown-lg">
                <li>
                  <h5 class="n-title text-center">
                    <i class="lni-alarm"></i>
                    <span>Notifications</span>
                  </h5>
                </li>
                <li>
                  <ul class="list-media">
                    <li class="list-item">
                      <a class="media-hover">
                        <div class="media-img">
                          <div class="icon-avatar bg-primary">
                            <i class="lni-envelope"></i>
                          </div>
                        </div>
                        <div class="info">
                          <span class="title">5 new messages</span>
                          <span class="sub-title">4 min ago</span>
                        </div>
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="media-hover">
                        <div class="media-img">
                          <div class="icon-avatar bg-success">
                            <i class="lni-comments-alt"></i>
                          </div>
                        </div>
                        <div class="info">
                          <span class="title">4 new comments</span>
                          <span class="sub-title">12 min ago</span>
                        </div>
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="media-hover">
                        <div class="media-img">
                          <div class="icon-avatar bg-info">
                            <i class="lni-users"></i>
                          </div>
                        </div>
                        <div class="info">
                          <span class="title">3 Friend Requests</span>
                          <span class="sub-title">a day ago</span>
                        </div>
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="media-hover">
                        <div class="media-img">
                          <div class="icon-avatar bg-purple">
                            <i class="lni-comments-alt"></i>
                          </div>
                        </div>
                        <div class="info">
                          <span class="title">2 new messages</span>
                          <span class="sub-title">12 min ago</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="check-all text-center">
                  <span>
                    <a class="text-gray">
                      Check all notifications
                    </a>
                  </span>
                </li>
              </ul>
            </li>
            <li class="user-profile dropdown dropdown-animated scale-left">
              <a class="dropdown-toggle" data-toggle="dropdown">
                <img
                  class="profile-img img-fluid"
                  src="assets/img/avatar/avatar.jpg"
                  alt=""
                />
              </a>
              <ul class="dropdown-menu dropdown-md">
                <li>
                  <ul class="list-media">
                    <li class="list-item avatar-info">
                      <div class="media-img">
                        <img src="assets/img/avatar/avatar.jpg" alt="" />
                      </div>
                      <div class="info">
                        <span class="title text-semibold">Tomas Murray</span>
                        <span class="sub-title">UI/UX Desinger</span>
                      </div>
                    </li>
                  </ul>
                </li>
                <li role="separator" class="divider"></li>
                <li>
                  <a>
                    <i class="lni-cog"></i>
                    <span>Setting</span>
                  </a>
                </li>
                <li>
                  <a>
                    <i class="lni-user"></i>
                    <span>Profile</span>
                  </a>
                </li>
                <li>
                  <a>
                    <i class="lni-envelope"></i>
                    <span>Inbox</span>
                    <span class="badge badge-pill badge-primary badge-pro pull-right">
                      2
                    </span>
                  </a>
                </li>
                <li>
                  <a>
                    <i class="lni-lock"></i>
                    <span>Logout</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Header;