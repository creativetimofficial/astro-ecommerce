import React from 'react';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const Aside = () => {
  const link = '#0';
  const closeAside = () => {
    document.body.classList.remove('g-sidenav-pinned');
  };

  const linkTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      Coming Soon
    </Tooltip>
  );

  return (
    <aside
      className="sidenav z-index-10 navbar navbar-vertical navbar-expand-xs border-0 bg-slate-900 fixed-start "
      id="sidenav-main"
    >
      <div className="sidenav-header">
        <i
          className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-lg-none"
          aria-hidden="true"
          id="iconSidenav"
          onClick={() => closeAside()}
        />
        <a
          className="navbar-brand disabled d-flex align-items-center m-0"
          href={link}
          target="_blank"
        >
          <span className="ms-2 font-weight-bold text-lg">Elrond Wallet</span>
        </a>
      </div>
      <div
        className="collapse navbar-collapse px-4 mb-4 w-auto"
        id="sidenav-collapse-main"
      >
        <ul className="navbar-nav">
          <li className="nav-item mt-2">
            <div className="d-flex align-items-center nav-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                className="ms-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 003 3h15a3 3 0 01-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125zM12 9.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H12zm-.75-2.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75zM6 12.75a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5H6zm-.75 3.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zM6 6.75a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-3A.75.75 0 009 6.75H6z"
                  clipRule="evenodd"
                />
                <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 01-3 0V6.75z" />
              </svg>
              <span className="font-weight-normal text-md ms-2">Menu</span>
            </div>
          </li>
          <li className="nav-item border-start my-0 pt-2">
            <a
              className="nav-link disabled active position-relative ms-0 ps-2 py-2 "
              href={link}
            >
              <span className="nav-link-text ms-1">Dashboard</span>
            </a>
          </li>
          <li className="nav-item border-start my-0 pt-2">
            <OverlayTrigger
              placement="right"
              delay={{ show: 100, hide: 100 }}
              overlay={linkTooltip}
            >
              <a
                className="nav-link position-relative ms-0 ps-2 py-2 "
                href={link}
              >
                <span className="nav-link-text ms-1">Transactions</span>
              </a>
            </OverlayTrigger>
          </li>
          <li className="nav-item border-start my-0 pt-2">
            <OverlayTrigger
              placement="right"
              delay={{ show: 100, hide: 100 }}
              overlay={linkTooltip}
            >
              <a
                className="nav-link position-relative ms-0 ps-2 py-2 "
                href={link}
              >
                <span className="nav-link-text ms-1">Send</span>
              </a>
            </OverlayTrigger>
          </li>
          <li className="nav-item border-start my-0 pt-2">
            <OverlayTrigger
              placement="right"
              delay={{ show: 100, hide: 100 }}
              overlay={linkTooltip}
            >
              <a
                className="nav-link position-relative ms-0 ps-2 py-2 "
                href={link}
              >
                <span className="nav-link-text ms-1">Receive</span>
              </a>
            </OverlayTrigger>
          </li>
          <li className="nav-item border-start my-0 pt-2">
            <OverlayTrigger
              placement="right"
              delay={{ show: 100, hide: 100 }}
              overlay={linkTooltip}
            >
              <a
                className="nav-link position-relative ms-0 ps-2 py-2 "
                href={link}
              >
                <span className="nav-link-text ms-1">Sign Message</span>
              </a>
            </OverlayTrigger>
          </li>
          <li className="nav-item border-start my-0 pt-2">
            <OverlayTrigger
              placement="right"
              delay={{ show: 100, hide: 100 }}
              overlay={linkTooltip}
            >
              <a
                className="nav-link position-relative ms-0 ps-2 py-2 "
                href={link}
              >
                <span className="nav-link-text ms-1">Tokens</span>
              </a>
            </OverlayTrigger>
          </li>
          <li className="nav-item border-start my-0 pt-2">
            <OverlayTrigger
              placement="right"
              delay={{ show: 100, hide: 100 }}
              overlay={linkTooltip}
            >
              <a
                className="nav-link position-relative ms-0 ps-2 py-2 "
                href={link}
              >
                <span className="nav-link-text ms-1">NFTs</span>
              </a>
            </OverlayTrigger>
          </li>
          <li className="nav-item border-start my-0 pt-2">
            <OverlayTrigger
              placement="right"
              delay={{ show: 100, hide: 100 }}
              overlay={linkTooltip}
            >
              <a
                className="nav-link position-relative ms-0 ps-2 py-2 "
                href={link}
              >
                <span className="nav-link-text ms-1">Buy</span>
              </a>
            </OverlayTrigger>
          </li>
          <li className="nav-item mt-5">
            <div className="d-flex align-items-center nav-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                className="ms-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                <path
                  fillRule="evenodd"
                  d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z"
                  clipRule="evenodd"
                />
                <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
              </svg>

              <span className="font-weight-normal text-md ms-2">Staking</span>
            </div>
          </li>
          <li className="nav-item border-start my-0 pt-2">
            <OverlayTrigger
              placement="right"
              delay={{ show: 100, hide: 100 }}
              overlay={linkTooltip}
            >
              <a
                className="nav-link position-relative ms-0 ps-2 py-2 "
                href={link}
              >
                <span className="nav-link-text ms-1">Stake</span>
              </a>
            </OverlayTrigger>
          </li>
          <li className="nav-item border-start my-0 pt-2">
            <OverlayTrigger
              placement="right"
              delay={{ show: 100, hide: 100 }}
              overlay={linkTooltip}
            >
              <a
                className="nav-link position-relative ms-0 ps-2 py-2 "
                href={link}
              >
                <span className="nav-link-text ms-1">Delegate (Legacy)</span>
              </a>
            </OverlayTrigger>
          </li>
          <li className="nav-item border-start my-0 pt-2">
            <OverlayTrigger
              placement="right"
              delay={{ show: 100, hide: 100 }}
              overlay={linkTooltip}
            >
              <a
                className="nav-link position-relative ms-0 ps-2 py-2 "
                href={link}
              >
                <span className="nav-link-text ms-1">Validate</span>
              </a>
            </OverlayTrigger>
          </li>
          <li className="nav-item mt-5">
            <div className="d-flex align-items-center nav-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                className="ms-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM12.75 12a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V18a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V12z"
                  clipRule="evenodd"
                />
                <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
              </svg>
              <span className="font-weight-normal text-md ms-2">Issue</span>
            </div>
          </li>
          <li className="nav-item border-start my-0 pt-2">
            <OverlayTrigger
              placement="right"
              delay={{ show: 100, hide: 100 }}
              overlay={linkTooltip}
            >
              <a
                className="nav-link position-relative ms-0 ps-2 py-2 "
                href={link}
              >
                <span className="nav-link-text ms-1">Tokens</span>
              </a>
            </OverlayTrigger>
          </li>
        </ul>
      </div>
      <div className="sidenav-footer mx-4">
        <div className="card border-radius-md" id="sidenavCard">
          <div className="card-body  text-start  p-3 w-100">
            <div className="mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                className="text-primary"
                viewBox="0 0 24 24"
                fill="currentColor"
                id="sidenavCardIcon"
              >
                <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z" />
                <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
              </svg>
            </div>
            <div className="docs-info">
              <h6 className="font-weight-bold up mb-2">Need help?</h6>
              <p className="text-sm font-weight-normal">
                Please check our docs.
              </p>
              <a
                href="https://elrond-elements.com/docs/quick-start/"
                target="_blank"
                className="font-weight-bold text-sm mb-0 icon-move-right mt-auto w-100 mb-0"
              >
                Documentation
                <i
                  className="fas fa-arrow-right-long text-sm ms-1"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
