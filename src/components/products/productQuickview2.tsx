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
      Product Quickview2
    </button>
    <div className="modal fade" id="exampleModal2" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="card card-product">
            <div className="card-body d-block d-lg-flex p-4">
              <button type="button" className="btn-close text-dark position-absolute end-0 me-4" data-bs-dismiss="modal" aria-label="Close"></button>
              <div className="w-70 w-md-60 w-lg-30 text-center">
                {(thumb_src) && 
                <img className="w-100 rounded-3 shadow-xs border mb-4" src={thumb_src} />
                }
                <a className="text-primary" href="#">View full details</a>
              </div>
              <div className="w-100 w-lg-70 ps-4 mt-5 mt-lg-0">
                <div className="d-flex justify-content-between">
                  {(title.length != 0) && 
                    <h4 className="mb-3">{title}</h4>
                  }
                </div>
                {(price) && 
                  <>
                    <div className="d-flex mb-3">
                      <h5 className="mb-0 pe-3">${price.toFixed(2)}</h5>
                      <div className="d-flex align-items-center border-start ps-3">
                      {(rating != 0) && 
                        <ProductRating rating={rating} reviews={reviews} />
                      }
                      </div>
                      <input className="opacity-0" defaultValue={price} />
                    </div>
                  </>
                }
                
                {(stock) ? 
                  <div className="d-flex align-items-center">
                    <i className="fas fa-check text-lg text-success"></i>
                    <p className="mb-0 ms-2 text-sm">In Stock</p>
                  </div>
                  :
                  <div className="d-flex align-items-center">
                    <i className="fas fa-minus-circle text-lg"></i>
                    <p className="mb-0 ms-2 text-sm">Out of Stock</p>
                  </div>
                }
                
                <h6 className="mt-4">Size:</h6>
                <div className="row mb-2">
                  <div className="col-6">
                    <div className="form-check">
                      <input className="form-check-input rounded-2" type="radio" name="flexRadioDefault" id="18l" />
                      <label className="cursor-pointer label-lg" htmlFor="18l">
                        <h6>18L</h6>
                        <p className="mb-0">Perfect for a reasonable amount of snacks.</p>
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-check">
                      <input className="form-check-input rounded-2" type="radio" name="flexRadioDefault" id="20l" />
                      <label className="cursor-pointer label-lg" htmlFor="20l">
                        <h6>20L</h6>
                        <p className="mb-0">Enough room for a serious amount of snacks.</p>
                      </label>
                    </div>
                  </div>
                </div>

                <p>What size should I buy? <span data-bs-toggle="tooltip" data-bs-placement="top" title="More information related to sizes" data-container="body" data-animation="true"><i className="fas fa-question-circle ms-1"></i></span></p>
              
                <div className="d-block text-center">
                  <button className="btn btn-primary btn-lg w-100">Add to Bag</button>
                  <p className="mb-0 d-inline text-xl">
                    <i className="fas fa-shield-alt me-2"></i>
                    Lifetime Guarantee
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
