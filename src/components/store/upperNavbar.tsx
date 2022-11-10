interface Props {
  title: string;

}

export default function UpperNavbar({
  title,

}: Props) {

  return (
    <>
      <div className="container bg-slate-900 rounded-top">
        <ul className="navbar-nav d-none d-lg-flex">
          <li className="nav-item dropdown pe-2 d-flex align-items-center">
            <a href="javascript:;" className="nav-link text-white p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              CAD
            </a>
            <ul className="dropdown-menu px-2 py-3" aria-labelledby="dropdownMenuButton" data-bs-popper="static">
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
        <div className="ms-md-auto p-0 d-flex align-items-center w-sm-20">
          <ul className="navbar-nav d-none d-lg-flex">
            <li className="nav-item px-3 py-3 border-radius-sm d-flex align-items-center">
              <a href="#" className="nav-link text-white p-0">
                Sign In
              </a>
            </li>
            <li className="nav-item px-3 py-3 border-radius-sm d-flex align-items-center">
              <a href="#" className="nav-link text-white p-0">
                Create an account
              </a>
            </li>
          </ul>
        </div>
      </div>   
    </>
  );
};
