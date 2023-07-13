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
  sizes: Map<string,number>
}

export default function ProductQuickview({
  thumb_src,
  title,
  price,
  colors,
  rating,
  reviews,
  sizes
}: Props) {

  return (
    <>
    <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Product Quickview
    </button>
    <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
        <div className="modal-content">
          <div className="card card-product">
            <div className="card-body d-block d-lg-flex p-4">
              <button type="button" className="btn-close text-dark position-absolute me-4 end-0" data-bs-dismiss="modal" aria-label="Close"></button>
              {(thumb_src) && 
              <img className="w-70 w-md-60 w-lg-30 rounded-3 shadow-xs border mb-4 mb-md-0" src={thumb_src} />
              }
              <div className="w-100 w-lg-70 ps-4 mt-md-5 mt-lg-0">
                <div className="d-flex align-items-center justify-content-between">
                  {(title.length != 0) && 
                    <h4 className="mb-0">{title}</h4>
                  }
                </div>
                {(price) && 
                  <>
                    <div className="d-flex mb-3">
                      <h6>${price.toFixed(2)}</h6>
                      <input className="opacity-0" defaultValue={price} />
                    </div>
                  </>
                }
                {(rating != 0) && 
                  <ProductRating rating={rating} reviews={reviews} />
                }
                {(colors.length != 0) && 
                  <>
                    <h6 className="mt-4">Color:</h6>
                    {(colors) &&
                      <ProductBadge colors={colors} />
                    }
                  </>
                }
                {(sizes.size != 0) && 
                  <ProductSizes sizes={sizes}/>
                }
                <div className="d-block text-center">
                  <button className="btn btn-primary btn-lg w-100">Add to Bag</button>
                  <a className="text-primary" href="#">View full details</a>
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
