import ProductBadge from './productBadge';
import ProductRating from './productRating';
import ProductSizes from './productSizes';


interface Props {
  thumb_src: string;
  title: string;
  price: number;
  colors: string[];
  rating: number;
  reviews: number;
  stock: boolean;
}

export default function ProductQuickview({
  thumb_src,
  title,
  price,
  colors,
  rating,
  reviews,
  stock
}: Props) {

  return (
    <>
    <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal2">
      Product Quickview 2
    </button>
    <div className="modal fade" id="exampleModal2" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
        <div className="modal-content">
          <div className="card card-product">
            <div className="card-body d-block d-lg-flex p-4">
              <button type="button" className="btn-close text-dark position-absolute end-0 me-4" data-bs-dismiss="modal" aria-label="Close"></button>
              <div className="w-100 w-lg-50 text-center">
                {(thumb_src) && 
                <img className="w-100 rounded-3 mb-4 mt-5 mt-lg-0" src={`${import.meta.env.BASE_URL}${thumb_src}`} />
                }
                <a className="text-body" href="#">View details</a>
              </div>
              <div className="w-100 w-lg-50 ps-4 text-center">
                <div className="d-flex justify-content-center">
                  {(title.length != 0) && 
                    <h3 className="mt-md-5 mb-3 text-center">{title}</h3>
                  }
                </div>
                {(price) && 
                  <>
                    <h4 className="text-center">${price.toLocaleString()}</h4>
                    <input className="opacity-0 d-none" defaultValue={price} />
                    <div className="d-flex justify-content-center mb-3">
                      <div className="d-flex align-items-center justify-content-center">
                      {(rating != 0) && 
                        <ProductRating rating={rating} reviews={reviews} />
                      }
                      </div>
                    </div>
                  </>
                }

                <p className="text-center px-5">As we live, our hearts turn colder. Cause pain is what we go through as we become older.</p>
                
                {(colors.length != 0) && 
                  <>
                    <h6 className="mt-4">Color</h6>
                    {(colors) &&
                      <ProductBadge colors={colors} />
                    }
                  </>
                }
                
                <h6 className="mt-4">Size</h6>
                <div className="row mb-2">
                  <div className="col-6">
                    <div className="form-check">
                      <input className="form-check-input rounded-2" type="radio" name="flexRadioDefault" id="18l" />
                      <label className="cursor-pointer label-lg" htmlFor="18l">
                        <h6>2 Places</h6>
                        <p className="mb-0">That’s what I do</p>
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-check">
                      <input className="form-check-input rounded-2" type="radio" name="flexRadioDefault" id="20l" />
                      <label className="cursor-pointer label-lg" htmlFor="20l">
                        <h6>4 Places</h6>
                        <p className="mb-0">That’s what I’m here for</p>
                      </label>
                    </div>
                  </div>
                </div>

                <p className="mt-md-7 mb-4">What should I buy? <span data-bs-toggle="tooltip" data-bs-placement="top" title="More information related to sizes" data-container="body" data-animation="true"><i className="fas fa-question-circle ms-1"></i></span></p>
              
                <div className="d-block text-center">
                  <button className="btn btn-dark btn-lg w-100">Add to Cart</button>
                  <p className="mb-0 d-inline text-xl">
                    <i className="fas fa-shield-alt me-2"></i>
                    Premium Quality
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
