export default function UpperNavbar() {
  return (
    <>
      <div className="w-100 bg-slate-900">
        <div className="container align-items-center d-flex">
          <ul className="navbar-nav">
            <li className="nav-item dropdown pe-2">
              <a href="javascript:;" className="nav-link dropdown-toggle text-white p-0" id="dropdownCurrency" data-bs-toggle="dropdown" aria-expanded="false">
                CAD
              </a>
              <ul className="dropdown-menu position-absolute px-2 py-3" aria-labelledby="dropdownCurrency" data-bs-popper="static">
                <li className="mb-2">
                  <a className="dropdown-item border-radius-md" href="javascript:;">
                    <p className="mb-0">EUR</p>
                  </a>
                </li>
                <li className="mb-2">
                  <a className="dropdown-item border-radius-md" href="javascript:;">
                    <p className="mb-0">USD</p>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item border-radius-md" href="javascript:;">
                    <p className="mb-0">RON</p>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="ms-md-auto p-0 d-flex align-items-center">
            <ul className="navbar-nav d-none d-lg-flex flex-row">
              <li className="nav-item px-3 py-3 border-radius-sm d-flex align-items-center">
                <a href="#" className="nav-link text-white p-0 text-sm">
                  Sign In
                </a>
              </li>
              <li className="nav-item px-3 py-3 border-radius-sm d-flex align-items-center">
                <a href="#" className="nav-link text-white p-0 text-sm">
                  Create an account
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>   
    </>
  );
};
