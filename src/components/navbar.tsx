import React, { useContext } from 'react';
// import { useLogout } from '../../../hooks/auth/useLogout';
import DashboardContext from './dashboardContext';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import useCopyToClipboard from '../../hooks/tools/copyToClipboard';

const Navbar = () => {
  const { getAddress } = useContext(DashboardContext);
  const [value, copy] = useCopyToClipboard();

  // const { logout } = useLogout();

  const elrondLink = [
    { name: 'Main Site', link: 'https://elrond.com' },
    { name: 'Explorer', link: 'https://explorer.elrond.com' },
    { name: 'Bridge', link: 'https://bridge.elrond.com' },
    { name: 'Docs', link: 'https://docs.elrond.com' },
    { name: 'Growth', link: 'https://growth.elrond.com' },
    { name: 'Maiar', link: 'https://maiar.com' },
    { name: 'Maiar Exchange', link: 'https://maiar.exchange' },
  ];

  const toggleAside = () => {
    document.body.classList.toggle('g-sidenav-pinned');
  };

  const copyAddressTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      {value ? 'Copied' : 'Copy Address'}
    </Tooltip>
  );

  return (
    <nav
      className="navbar navbar-main navbar-expand-lg px-0 shadow-none"
      id="navbarBlur"
      // eslint-disable-next-line react/no-unknown-property
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
                href={`https://explorer.elrond.com/accounts/${getAddress}`}
                className="text-white text-dark ms-1 text-sm text-decoration-underline"
                target="_blank"
              >
                <span className="d-none d-lg-block">{getAddress}</span>
                {/* <span className="d-lg-none">
                  {getAddress.substr(0, 7) + '...' + getAddress.substr(56, 61)}
                </span> */}
              </a>
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 100, hide: 100 }}
                overlay={copyAddressTooltip}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  width={18}
                  height={18}
                  strokeWidth={2}
                  className="ms-1 cursor-pointer"
                  onClick={() => copy(getAddress)}
                >
                  <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" />
                  <path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
                </svg>
              </OverlayTrigger>
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
                {elrondLink.map((data) => (
                  <li key={data.name}>
                    <a
                      className="dropdown-item border-radius-md"
                      href={data.link}
                      target="_blank"
                    >
                      <div className="d-flex py-1">
                        <div className="d-flex flex-column justify-content-center">
                          <h6 className="text-sm font-weight-normal mb-1">
                            {data.name}
                          </h6>
                          <p className="text-xs text-secondary d-flex align-items-center mb-0 ">
                            {data.link}
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
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
