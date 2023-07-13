export default function StoreNavigationDoubleColumn() {
  return (
    <>
    <div className="row mt-5">
      <div className="col-12 col-lg-6 mb-4 mb-lg-0">
        <h6 className="w-100 pb-3 border-bottom">Clothing</h6>
        <div className="d-flex pt-2">
          <ul className="nav flex-column ms-n3">
            <li className="nav-item">
              <a className="nav-link text-body" href="#" target="_blank">
                Tops
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-body" href="#" target="_blank">
                Dresses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-body" href="#" target="_blank">
                Pants
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-body" href="#" target="_blank">
                Denim
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-body" href="#" target="_blank">
                Sweaters
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-body" href="#" target="_blank">
                T-Shirts
              </a>
            </li>
          </ul>
          <ul className="nav flex-column ms-6 ms-md-11 ms-lg-10">
            <li className="nav-item">
              <a className="nav-link text-body" href="#" target="_blank">
                Jackets
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-body" href="#" target="_blank">
                Activewear
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-body" href="#" target="_blank">
                Shorts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-body" href="#" target="_blank">
                Swimwear
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-body" href="#" target="_blank">
                Browse All
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-6 col-lg-3">
        <h6 className="w-100 pb-3 border-bottom">Accessories</h6>
        <ul className="nav flex-column ms-n3 pt-2">
          <li className="nav-item">
            <a className="nav-link text-body" href="#" target="_blank">
              Shoes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-body" href="#" target="_blank">
              Jewelry
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-body" href="#" target="_blank">
              Handbags
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-body" href="#" target="_blank">
              Socks
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-body" href="#" target="_blank">
              Hats
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-body" href="#" target="_blank">
              Browse All
            </a>
          </li>
        </ul>
      </div>
      <div className="col-6 col-lg-3">
      <h6 className="w-100 pb-3 border-bottom ">Categories</h6>
        <ul className="nav flex-column ms-n3 pt-2">
          <li className="nav-item">
            <a className="nav-link text-body" href="#" target="_blank">
              New Arrivals
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-body" href="#" target="_blank">
              Sale
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-body" href="#" target="_blank">
              Basic Tee
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-body" href="#" target="_blank">
              Artwork Tees
            </a>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
};
