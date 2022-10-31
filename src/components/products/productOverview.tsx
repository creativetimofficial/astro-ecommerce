import React from 'react';
import ProductBadge from './productBadge';
import ProductRating from './productRating'

interface Props {
  thumb_src: string;
  title: string;
  colors: string[];
  images: string[];
  full_description: string;
  price: string;
  highlights: string[];
  details: string;
  rating: number;
  reviews: number;
  sizes: Map<string,number>
}

export default function ProductOverview({
  thumb_src,
  title,
  colors,
  images,
  full_description,
  price,
  highlights,
  details,
  rating,
  reviews,
  sizes
}: Props) {

  return (
    <>
    <div className="card card-product card-plain">
      <div className="row">
        <div className="col-4">
          <img className="w-100 rounded-2" src={images[0]} alt="first image" />
        </div>
        <div className="col-4">
          <img className="w-100 rounded-2" src={images[1]} alt="first image" />
          <img className="w-100 mt-4 rounded-2" src={images[2]} alt="first image" />
        </div>
        <div className="col-4">
          <img className="w-100 rounded-2" src={images[3]} alt="first image" />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12 col-md-8 border-end">
          <h2>{title}</h2>
          <p>{full_description}</p>

          {(highlights.length != 0) && 
           <>
             <h6>Highlights</h6>
              <ul className="text-sm">
              {highlights.map(highlight => 
                <li className="mb-2">{highlight}</li>
              )}
              </ul>
           </>
          }
           {(details.length != 0) && 
            <>
              <h6>Details</h6>
              <p>{details}</p>
            </>
           }

        </div>
        <div className="col-12 col-md-4 ps-4">
          <form action="" method="post">
            <div className="d-flex">
              <h3 className="font-weight-normal">{price}</h3>
              <input className="opacity-0" defaultValue={price} />
            </div>
            <h3 className="sr-only">Reviews</h3>
            <ProductRating rating={rating} reviews={reviews} />
            <h6 className="mt-4">Colors:</h6>
            <div className="d-flex">
              {(colors) &&
                <ProductBadge colors={colors} />
              }
            </div>
            {(sizes.size != 0) && 
              <>
                <div className="mt-4 d-flex justify-content-between align-items-center">
                  <h6 className="mb-0">Size:</h6>
                  <a href="#" className="text-primary mb-0">Size guide</a>
                </div>
                <div className="d-flex flex-wrap text-center my-4">

                  {Object.entries(sizes).map(([size, amount]) => 
                  <div className="mb-3 me-3">
                    <div className="form-check">
                      {(amount != 0) ?
                        <input className="form-check-input rounded-2" type="radio" name="flexRadioDefault" id="customRadio1" />
                      : 
                        <input className="form-check-input rounded-2" disabled type="radio" name="flexRadioDefault" id="customRadio1" />
                      } 
                      <span className="position-absolute">{size}</span>
                    </div>
                  </div>
                  )}
                </div>
              </>
              }
            <button className="btn btn-primary btn-lg w-100" type="submit">Add to cart</button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};
