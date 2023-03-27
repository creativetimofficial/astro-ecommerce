import data from '../../../public/data.json';
import CardProduct from '../products/cardProduct';

const currencies = []
data.currencies.forEach(currency => {
  currencies.push(
    <li className="mb-2">
      <a className="dropdown-item border-radius-md" href="javascript:;">
        <span>{currency}</span>
      </a>
    </li>
  )
})

export default function storeNavigationGrid() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white rounded-2 top-0 mt-4 z-index-3 shadow py-2 start-0 end-0 position-absolute">
        <div className="container-fluid">
          <a
            className="navbar-brand font-weight-bolder ms-lg-0 ms-3 "
            href="../../../pages/dashboards/default.html"
          >
            Corporate UI
          </a>
          <button
            className="shadow-none navbar-toggler ms-2 collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navigation"
            aria-controls="navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="mt-2 navbar-toggler-icon">
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </span>
          </button>
          <div
            className="pt-3 pb-2 navbar-collapse w-100 py-lg-0 collapse"
            id="navigation"
          >
            <ul className="me-auto navbar-nav navbar-nav-hover">
              <li className="mx-2 nav-item dropdown dropdown-hover">
                <a
                  role="button"
                  className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center text-dark"
                  id="dropdownMenuPages"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Furniture
                  <img
                    src="/down-arrow.svg"
                    alt="down-arrow"
                    className="arrow ms-1 d-lg-block d-none"
                  />
                  <img
                    src="/down-arrow-dark.svg"
                    alt="down-arrow"
                    className="arrow ms-1 d-lg-none d-block"
                  />
                </a>
                <div
                  className="p-4 mt-0 dropdown-menu dropdown-menu-animation dropdown-2xl mt-lg-3 border-radius-lg ms-n2"
                  aria-labelledby="dropdownMenuPages"
                >
                  <div className="d-flex overflow-scroll">
                    {data.products.map(product => 
                        <div className="col-md-6 col-lg-3 me-4">
                          <CardProduct 
                            thumb_src = {product.thumb_src}
                            thumb_alt = {product.thumb_alt}
                            title = {product.title}
                            position = "center"
                            imageHeight = "height-200"
                          />
                        </div>
                      )}
                  </div>
                </div>
              </li>
              <li className="mx-2 nav-item">
                <a
                  role="button"
                  className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                >
                  Home Care
                </a>
              </li>
              <li className="mx-2 nav-item">
                <a
                  role="button"
                  className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center "
                  id="dropdownMenuBlocks"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Aromatherapy
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-md-auto  justify-content-end">
              <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                <a href="javascript:;" className="p-0 nav-link" id="">
                  <div className="sidenav-toggler-inner">
                    <i className="bg-white sidenav-toggler-line"></i>
                    <i className="bg-white sidenav-toggler-line"></i>
                    <i className="bg-white sidenav-toggler-line"></i>
                  </div>
                </a>
              </li>
              <li className="px-3 nav-item d-flex align-items-center">
                <a href="javascript:;" className="p-0 nav-link">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.33398 7.33331V13.3333C1.33398 13.8637 1.5447 14.3725 1.91977 14.7475C2.29484 15.1226 2.80355 15.3333 3.33398 15.3333H12.6673C13.1978 15.3333 13.7065 15.1226 14.0815 14.7475C14.4566 14.3725 14.6673 13.8637 14.6673 13.3333V7.33331H1.33398Z" fill="#64748b"/>
                    <path d="M15.3333 4.66665H13.0533L10.5787 0.333313L9.42133 0.99998L11.518 4.66665H4.482L6.57867 0.99998L5.42133 0.333313L2.94667 4.66665H0.666667C0.489856 4.66665 0.320286 4.73688 0.195262 4.86191C0.0702379 4.98693 0 5.1565 0 5.33331C0 5.51012 0.0702379 5.67969 0.195262 5.80472C0.320286 5.92974 0.489856 5.99998 0.666667 5.99998H15.3333C15.5101 5.99998 15.6797 5.92974 15.8047 5.80472C15.9298 5.67969 16 5.51012 16 5.33331C16 5.1565 15.9298 4.98693 15.8047 4.86191C15.6797 4.73688 15.5101 4.66665 15.3333 4.66665Z" fill="#64748b"/>
                  </svg>
                </a>
              </li>
              <li className="px-3 nav-item d-flex align-items-center">
                <a href="javascript:;" className="p-0 nav-link">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.0547 1.33331C10.4848 1.33648 9.92126 1.45286 9.39675 1.67568C8.87225 1.89851 8.39725 2.22334 7.99935 2.63131C7.40867 2.02067 6.64913 1.60028 5.81805 1.42399C4.98696 1.24769 4.12217 1.32352 3.33445 1.64176C2.54673 1.96 1.87195 2.50616 1.39655 3.21028C0.921146 3.91439 0.666774 4.7444 0.666016 5.59397C0.666016 9.48997 7.32868 14.9646 7.61268 15.194C7.72199 15.2828 7.85853 15.3312 7.99935 15.3312C8.14017 15.3312 8.2767 15.2828 8.38602 15.194C8.67002 14.9646 15.3327 9.48997 15.3327 5.59397C15.329 4.46211 14.8765 3.37792 14.0745 2.5792C13.2726 1.78047 12.1866 1.33242 11.0547 1.33331Z" fill="#64748b"/>
                  </svg>
                </a>
              </li>
              <li className="nav-item dropdown px-3 d-flex align-items-center">
                <a href="javascript:;" className="p-0 nav-link" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99961 24.4C12.5342 24.4 15.3996 21.5346 15.3996 18C15.3996 14.4654 12.5342 11.6 8.99961 11.6C5.46499 11.6 2.59961 14.4654 2.59961 18C2.59961 21.5346 5.46499 24.4 8.99961 24.4ZM7.98854 15.5831C8.36595 14.9541 8.75655 14.8 8.99961 14.8C9.24265 14.8 9.63329 14.9541 10.0106 15.5831C10.238 15.962 10.7294 16.0849 11.1082 15.8575C11.4871 15.6302 11.61 15.1388 11.3826 14.76C10.8228 13.8269 9.98497 13.2 8.99961 13.2C8.01424 13.2 7.17641 13.8269 6.61656 14.76C6.38867 15.1398 6.21098 15.5595 6.08038 16H5.79961C5.35779 16 4.99961 16.3582 4.99961 16.8C4.99961 17.2418 5.35779 17.6 5.79961 17.6H5.81031C5.80315 17.7336 5.79961 17.8671 5.79961 18C5.79961 18.1329 5.80315 18.2664 5.81031 18.4H5.79961C5.35779 18.4 4.99961 18.7581 4.99961 19.2C4.99961 19.6418 5.35779 20 5.79961 20H6.08038C6.21098 20.4405 6.38867 20.8602 6.61656 21.24C7.17641 22.1731 8.01424 22.8 8.99961 22.8C9.98497 22.8 10.8228 22.1731 11.3826 21.24C11.61 20.8611 11.4871 20.3697 11.1082 20.1424C10.7294 19.9151 10.238 20.038 10.0106 20.4168C9.63329 21.0458 9.24265 21.2 8.99961 21.2C8.75655 21.2 8.36595 21.0458 7.98854 20.4168C7.91103 20.2876 7.84049 20.1481 7.77734 20H8.99961C9.44145 20 9.79961 19.6418 9.79961 19.2C9.79961 18.7581 9.44145 18.4 8.99961 18.4H7.41317C7.40418 18.268 7.39961 18.1345 7.39961 18C7.39961 17.8655 7.40418 17.732 7.41317 17.6H8.99961C9.44145 17.6 9.79961 17.2418 9.79961 16.8C9.79961 16.3582 9.44145 16 8.99961 16H7.77734C7.84049 15.8519 7.91103 15.7124 7.98854 15.5831Z" fill="#64748b"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.2343 15.8343C23.5467 15.5219 24.0533 15.5219 24.3657 15.8343L27 18.4686L29.6343 15.8343C29.9467 15.5219 30.4533 15.5219 30.7657 15.8343C31.0781 16.1467 31.0781 16.6532 30.7657 16.9657L27.5657 20.1657C27.2533 20.4781 26.7467 20.4781 26.4343 20.1657L23.2343 16.9657C22.9219 16.6532 22.9219 16.1467 23.2343 15.8343Z" fill="#64748b"/>
                  </svg>
                </a>
                <ul className="dropdown-menu dropdown-menu-end me-sm-n4" aria-labelledby="dropdownMenuButton">
                  {currencies}
                </ul>
              </li>
              <li className="nav-item d-flex align-items-center ps-2">
                <a href="javascript:;" className="px-0 nav-link font-weight-bold">
                  <span>Sign up</span>
                </a>
              </li>
              <li className="nav-item dropdown ps-3 d-flex align-items-center">
                <a href="javascript:;" className="px-0 nav-link font-weight-bold">
                  <span>Sign in</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
