import React, { useContext } from 'react';
import DashboardContext from './dashboardContext';
import useCopyToClipboard from '../../hooks/tools/copyToClipboard';

const Navbar = () => {
  const { getAddress } = useContext(DashboardContext);
  const [value, copy] = useCopyToClipboard();

  const toggleAside = () => {
    document.body.classList.toggle('g-sidenav-pinned');
  };



  return (
    <nav
      className="navbar navbar-main navbar-expand-lg px-0 shadow-none"
      id="navbarBlur"
      navbar-scroll="true"
    >
      <div className="container-fluid py-1 px-5">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-transparent mb-1 pb-0 pt-1 px-0 me-sm-6 me-5">
            <li className="breadcrumb-item text-sm">
              <a className="opacity-5 text-white" href="#">
                Dashboard
              </a>
            </li>
            <li
              className="breadcrumb-item text-sm text-white active"
              aria-current="page"
            >
              Dashboard
            </li>
          </ol>
          <h6 className="font-weight-bold text-white mb-0">Dashboard</h6>
        </nav>
        <div
          className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
          id="navbar"
        >
          <ul className="navbar-nav ms-md-auto justify-content-end">
            <li className="nav-item d-xl-none pe-3 d-flex align-items-center">
              <a
                href="javascript:;"
                className="nav-link p-0"
                id="iconNavbarSidenav"
                onClick={() => toggleAside()}
              >
                <div className="sidenav-toggler-inner">
                  <i className="sidenav-toggler-line bg-white" />
                  <i className="sidenav-toggler-line bg-white" />
                  <i className="sidenav-toggler-line bg-white" />
                </div>
              </a>
            </li>
            <li className="nav-item pe-3 d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                width={18}
                height={18}
                strokeWidth={2}
              >
                <path d="M2.273 5.625A4.483 4.483 0 015.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 3H5.25a3 3 0 00-2.977 2.625zM2.273 8.625A4.483 4.483 0 015.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 6H5.25a3 3 0 00-2.977 2.625zM5.25 9a3 3 0 00-3 3v6a3 3 0 003 3h13.5a3 3 0 003-3v-6a3 3 0 00-3-3H15a.75.75 0 00-.75.75 2.25 2.25 0 01-4.5 0A.75.75 0 009 9H5.25z" />
              </svg>

              <a
                href="#"
                className="text-white text-dark ms-1 text-sm text-decoration-underline"
                target="_blank"
              />
                <span className="d-none d-lg-block">{getAddress}</span>
            </li>
            <li className="nav-item dropdown pe-2 d-flex align-items-center">
              <a
                href="#"
                className="nav-link p-0 text-body"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  strokeWidth={2}
                  height={18}
                  width={18}
                >
                  <path d="M6 3a3 3 0 00-3 3v2.25a3 3 0 003 3h2.25a3 3 0 003-3V6a3 3 0 00-3-3H6zM15.75 3a3 3 0 00-3 3v2.25a3 3 0 003 3H18a3 3 0 003-3V6a3 3 0 00-3-3h-2.25zM6 12.75a3 3 0 00-3 3V18a3 3 0 003 3h2.25a3 3 0 003-3v-2.25a3 3 0 00-3-3H6zM17.625 13.5a.75.75 0 00-1.5 0v2.625H13.5a.75.75 0 000 1.5h2.625v2.625a.75.75 0 001.5 0v-2.625h2.625a.75.75 0 000-1.5h-2.625V13.5z" />
                </svg>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end  px-2 py-3 me-sm-n4"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <a
                    className="dropdown-item border-radius-md"
                    href="#"
                    target="_blank"
                  >
                    <div className="d-flex py-1">
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="text-sm font-weight-normal mb-1">
                          Item
                        </h6>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item border-radius-md"
                    href="#"
                    target="_blank"
                  >
                    <div className="d-flex py-1">
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="text-sm font-weight-normal mb-1">
                          Item
                        </h6>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item border-radius-md"
                    href="#"
                    target="_blank"
                  >
                    <div className="d-flex py-1">
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="text-sm font-weight-normal mb-1">
                          Item
                        </h6>
                      </div>
                    </div>
                  </a>
                </li>

              </ul>
            </li>
            <li className="nav-item ps-2 d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                width={18}
                height={18}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg>

              <span
                className="ms-1 cursor-pointer text-white"
              
              >
                Close
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
