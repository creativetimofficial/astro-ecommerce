import React from 'react';
import ProductBadge from './productBadge';
import ProductRating from '../reviews/reviewRating';
import ProductAccordion from './productAccordion';
import ProductImages from './productImages';

interface Props {
  title: string;
  price: number;
  images: ({
    src: string;
    alt: string;
  })[];
  colors: string[];
  rating: number;
  reviews: number;
  full_description: string;
  data: Map<string,string>
}

export default function productOverviewGallery({
  title,
  price,
  images,
  colors,
  rating,
  full_description,
  reviews,
  data
}: Props) {
  
  return (
    <>
    <div className="card card-product card-plain">
      <div className="row">
        {(images.length != 0) && 
          <ProductImages images={images}/>
        }
        <div className="col-12 col-lg-6 mt-5 mt-lg-0">
          {(title.length != 0) && 
            <h2>{title}</h2>
          }
          {(price.length != 0) && 
            <>
              <div className="d-flex mb-3">
                <h4 className="font-weight-normal">${price.toLocaleString()}</h4>
                <input className="opacity-0" defaultValue={price} />
              </div>
            </>
          }
          <p className="mt-4">{full_description}</p>

          {(rating != 0) && 
            <div className="d-flex align-items-center">
              <ProductRating rating={rating} reviews={reviews} />
              <span className="ms-2">100 reviews</span>
            </div>
          }
          
          {(colors.length != 0) && 
            <>
              <h6 className="mt-4">Color:</h6>
              {(colors) &&
                <ProductBadge colors={colors} />
              }
            </>
          }
          
          <div className="d-flex align-items-center mt-4">
            <button className="btn btn-dark btn-lg mb-0 me-4">Add to Cart</button>
            <a href="#favorite">
              <i id="heart1" className="far fa-heart text-2xl" ></i>
            </a>
          </div>
            <ProductAccordion data={data} />
        </div>
      </div>
    </div>
    </>
  );
};
