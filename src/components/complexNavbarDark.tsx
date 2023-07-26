import data from '../../public/data.json';
import CardCategory from './products/cardCategory';


const ComplexNavbarDark = () => {
  return (
    <nav className="top-0 flex-wrap px-0 py-0 d-none d-lg-block navbar bg-slate-900 navbar-expand-lg">
      <div className="container py-2">
        <nav aria-label="breadcrumb">
          <div className="d-flex align-items-center">
            <span className="px-3 text-lg text-white font-weight-bold me-4">Astro Ecommerce</span>
          </div>
        </nav>
        <ul className="navbar-nav d-none d-lg-flex ms-12">
          <li className="nav-item px-3 py-3 border-radius-sm d-flex align-items-center">
            <a href="#" className="p-0 text-white nav-link">
              Store
            </a>
          </li>
          <li className="nav-item px-3 py-3 border-radius-sm bg-slate-800 d-flex align-items-center">
            <a href="#" className="p-0 text-white nav-link">
              Designers
            </a>
          </li>
          <li className="nav-item px-3 py-3 border-radius-sm d-flex align-items-center">
            <a href="#" className="p-0 text-white nav-link">
              Fashion
            </a>
          </li>
        </ul>
        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
          <ul className="navbar-nav ms-md-auto  justify-content-end">
            <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
              <a href="#" className="p-0 text-white nav-link" id="">
                <div className="sidenav-toggler-inner">
                  <i className="bg-white sidenav-toggler-line"></i>
                  <i className="bg-white sidenav-toggler-line"></i>
                  <i className="bg-white sidenav-toggler-line"></i>
                </div>
              </a>
            </li>
            <li className="px-3 nav-item d-flex align-items-center">
              <a href="#" className="p-0 text-white nav-link">
                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer fixed-plugin-button-nav" viewBox="0 0 24 24" fill="currentColor">
                  <path fill-rule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </li>
            <li className="nav-item dropdown pe-2 d-flex align-items-center">
              <a href="#" className="p-0 text-white nav-link" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="cursor-pointers">
                  <path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clip-rule="evenodd"></path>
                </svg>
              </a>
              <ul className="px-2 py-3 dropdown-menu dropdown-menu-end me-sm-n4" aria-labelledby="dropdownMenuButton">
                <li className="mb-2">
                  <a className="dropdown-item border-radius-md" href="#">
                    <div className="py-1 d-flex">
                      <div className="my-auto">
                        <img src={`${import.meta.env.BASE_URL}images/team-2.jpg`}  className="avatar avatar-sm  me-3 " alt="user image" />
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="mb-1 text-sm font-weight-normal">
                          <span className="font-weight-bold">New message</span> from Laur
                        </h6>
                        <p className="mb-0 text-xs text-secondary">
                          <i className="fa fa-clock me-1" aria-hidden="true"></i>
                          13 minutes ago
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="mb-2">
                  <a className="dropdown-item border-radius-md" href="#">
                    <div className="py-1 d-flex">
                      <div className="my-auto">
                        <img src={`${import.meta.env.BASE_URL}logo/logo-spotify.svg`} className="avatar avatar-sm bg-gradient-dark  me-3 " alt="logo spotify" />
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="mb-1 text-sm font-weight-normal">
                          <span className="font-weight-bold">New album</span> by Travis Scott
                        </h6>
                        <p className="mb-0 text-xs text-secondary">
                          <i className="fa fa-clock me-1" aria-hidden="true"></i>
                          1 day
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item border-radius-md" href="#">
                    <div className="py-1 d-flex">
                      <div className="avatar avatar-sm bg-gradient-secondary  me-3  my-auto">
                        <svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg">
                          <title>credit-card</title>
                          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fill-rule="nonzero">
                              <g transform="translate(1716.000000, 291.000000)">
                                <g transform="translate(453.000000, 454.000000)">
                                  <path className="color-background" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" opacity="0.593633743"></path>
                                  <path className="color-background" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="mb-1 text-sm font-weight-normal">
                          Payment successfully completed
                        </h6>
                        <p className="mb-0 text-xs text-secondary">
                          <i className="fa fa-clock me-1" aria-hidden="true"></i>
                          2 days
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item d-flex align-items-center ps-2">
              <a href="#" className="px-0 text-white nav-link font-weight-bold"></a>
            </li>
            <li className="nav-item dropdown pe-2 d-flex align-items-center">
              <a href="#" className="px-0 text-white nav-link font-weight-bold">
                <div className="avatar avatar-sm position-relative">
                  <img src={`${import.meta.env.BASE_URL}images/team-1.jpg`} alt="profile_image" className="w-100 border-radius-md" />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-0 horizontal w-100 dark" />
      <div className="container pt-3 pb-3">
        <ul className="navbar-nav d-none d-lg-flex">
          <li className="nav-item dropdown px-3 py-3 border-radius-sm bg-slate-800 d-flex align-items-center">
            <a href="#" className="p-0 text-white dropdown-toggle nav-link" id="dropdownProfile" data-bs-toggle="dropdown" aria-expanded="true">
              Store
            </a>
            <ul className="dropdown-menu dropdown-xl" aria-labelledby="dropdownProfile" data-bs-popper="static">
              <div className="row m-3">
                {data.categories.slice(0, 2).map(category => 
                  <div className="col-md-6">
                    <CardCategory
                      thumb_src = {category.thumb_src}
                      title = {category.title}
                      collection = {category.collection}
                    />
                  </div>
                )}
              </div>
            </ul>
          </li>
          <li className="nav-item dropdown px-3 py-3 border-radius-sm d-flex align-items-center">
            <a href="#" className="p-0 text-white nav-link">
              Messages
            </a>
          </li>
          <li className="nav-item dropdown px-3 py-3 border-radius-sm d-flex align-items-center">
            <a href="#" className="p-0 text-white nav-link">
              Pricing
            </a>
          </li>
          <li className="nav-item dropdown px-3 py-3 border-radius-sm d-flex align-items-center">
            <a href="#" className="p-0 text-white nav-link">
              Notifications
            </a>
          </li>
        </ul>
        <div className="p-0 ms-md-auto d-flex align-items-center">
          <div className="input-group border-dark">
            <span className="text-white input-group-text border-dark bg-dark">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="opacity-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
              </svg>
            </span>
            <input type="text" className="form-control max-width-200 border-dark bg-dark" placeholder="Search" onfocus="focused(this)" onfocusout="defocused(this)" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ComplexNavbarDark;
