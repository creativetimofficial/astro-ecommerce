interface Props {
  title: string;
}

export default function ProductOverview({
  title,
}: Props) {

  return (
    <>
      <div className="card card-product card-plain">
        <div className="d-flex border-bottom pb-3">
          {(title.length != 0) && 
            <h2 className="mb-3">{title}</h2>
          }
          <div className="d-flex ms-auto align-items-center">
            <div className="dropdown">
              <button className="btn btn-link mb-0 dropdown-toggle" type="button" id="sortButton" data-bs-toggle="dropdown" aria-expanded="false">
                Sort
              </button>
              <ul className="dropdown-menu" aria-labelledby="sortButton">
                <li><a className="dropdown-item" href="javascript:;">Most Popular</a></li>
                <li><a className="dropdown-item" href="javascript:;">Best Rating</a></li>
                <li><a className="dropdown-item" href="javascript:;">Newest</a></li>
                <li><a className="dropdown-item" href="javascript:;">Price: Low to High</a></li>
                <li><a className="dropdown-item" href="javascript:;">Price: High to Low</a></li>
              </ul>
            </div>
            <a href="#"><i className="fab fa-sketch"></i></a>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 col-md-4">
            <ul className="list-unstyled ms-3">
              <li className="mb-2"><a href="#">Totes</a></li>
              <li className="mb-2"><a href="#">Backpacks</a></li>
              <li className="mb-2"><a href="#">Travel Bags</a></li>
              <li className="mb-2"><a href="#">Hip Bags</a></li>
              <li className="mb-2"><a href="#">Laptop Sleeves</a></li>
            </ul>
            <div className="accordion" id="accordionArrivals">
              <div className="accordion-item">
                <h5 className="accordion-header" id="headingThree">
                  <button className="accordion-button border-bottom border-top font-weight-bold py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Color
                    <i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
                    <i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
                  </button>
                </h5>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionArrivals">
                  <div className="accordion-body text-sm opacity-8">
                    <div className="form-check justify-content-start ">
                      <input className="form-check-input me-2" type="checkbox" value="" id="customCheck1" />
                      <label className="custom-control-label mb-0">White</label>
                    </div>
                    <div className="form-check justify-content-start ">
                      <input className="form-check-input me-2" type="checkbox" value="" id="customCheck2" />
                      <label className="custom-control-label mb-0">Beige</label>
                    </div>
                    <div className="form-check justify-content-start ">
                      <input className="form-check-input me-2" type="checkbox" value="" id="customCheck3" checked />
                      <label className="custom-control-label mb-0">Blue</label>
                    </div>
                    <div className="form-check justify-content-start ">
                      <input className="form-check-input me-2" type="checkbox" value="" id="customCheck4" />
                      <label className="custom-control-label mb-0">Brown</label>
                    </div>
                    <div className="form-check justify-content-start ">
                      <input className="form-check-input me-2" type="checkbox" value="" id="customCheck5" />
                      <label className="custom-control-label mb-0">Green</label>
                    </div>
                    <div className="form-check justify-content-start ">
                      <input className="form-check-input me-2" type="checkbox" value="" id="customCheck6" />
                      <label className="custom-control-label mb-0">Purple</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h5 className="accordion-header" id="headingFour">
                  <button className="accordion-button border-bottom font-weight-bold py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Category
                    <i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
                    <i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
                  </button>
                </h5>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionArrivals">
                  <div className="accordion-body text-sm opacity-8">
                    <div className="form-check justify-content-start ">
                      <input className="form-check-input me-2" type="checkbox" value="" id="customCheck7" />
                      <label className="custom-control-label mb-0">New Arrivals</label>
                    </div>
                    <div className="form-check justify-content-start ">
                      <input className="form-check-input me-2" type="checkbox" value="" id="customCheck8" />
                      <label className="custom-control-label mb-0">Sale</label>
                    </div>
                    <div className="form-check justify-content-start ">
                      <input className="form-check-input me-2" type="checkbox" value="" id="customCheck9" checked />
                      <label className="custom-control-label mb-0">Travel</label>
                    </div>
                    <div className="form-check justify-content-start ">
                      <input className="form-check-input me-2" type="checkbox" value="" id="customCheck10" />
                      <label className="custom-control-label mb-0">Organization</label>
                    </div>
                    <div className="form-check justify-content-start ">
                      <input className="form-check-input me-2" type="checkbox" value="" id="customCheck11" />
                      <label className="custom-control-label mb-0">Accessories</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h5 className="accordion-header" id="headingFifth">
                  <button className="accordion-button border-bottom font-weight-bold py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifth" aria-expanded="false" aria-controls="collapseFifth">
                    Size
                    <i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
                    <i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
                  </button>
                </h5>
                <div id="collapseFifth" className="accordion-collapse collapse" aria-labelledby="headingFifth" data-bs-parent="#accordionArrivals">
                  <div className="accordion-body text-sm opacity-8">
                    <div className="form-check justify-content-start ">
                      <input className="form-check-input me-2" type="checkbox" value="" id="customSize1" />
                      <label className="custom-control-label mb-0">XXS</label>
                    </div>
                    <div className="form-check justify-content-start ">
                      <input className="form-check-input me-2" type="checkbox" value="" id="customSize2" />
                      <label className="custom-control-label mb-0">XS</label>
                    </div>
                    <div className="form-check justify-content-start ">
                      <input className="form-check-input me-2" type="checkbox" value="" id="customSize3" />
                      <label className="custom-control-label mb-0">S</label>
                    </div>
                    <div className="form-check justify-content-start ">
                      <input className="form-check-input me-2" type="checkbox" value="" id="customSize4" />
                      <label className="custom-control-label mb-0">M</label>
                    </div>
                    <div className="form-check justify-content-start ">
                      <input className="form-check-input me-2" type="checkbox" value="" id="customSize5" />
                      <label className="custom-control-label mb-0">L</label>
                    </div>
                    <div className="form-check justify-content-start ">
                      <input className="form-check-input me-2" type="checkbox" value="" id="customSize6" />
                      <label className="custom-control-label mb-0">XL</label>
                    </div>
                    <div className="form-check justify-content-start ">
                      <input className="form-check-input me-2" type="checkbox" value="" id="customSize7" />
                      <label className="custom-control-label mb-0">XXL</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8">
            <div className="d-flex border border-3 rounded-3 border-dashed h-100"></div>
          </div>
        </div>
      </div>
    </>
  );
};
