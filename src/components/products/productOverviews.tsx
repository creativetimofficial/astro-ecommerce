import React from 'react';
import ProductBadge from './productBadge';
import ProductRating from './productRating';
import ProductAccordion from './productAccordion';

interface Props {
  title: string;
  price: string;
  images: string[];
  colors: string[];
  rating: number;
  reviews: number;
  full_description: string;
  data: Map<string,string>
}

export default function ProductOverviews({
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
        <div className="col-12 col-md-6">
          <img className="w-90 rounded-2" src={images[0]} alt="first image" />
          <div className="d-flex mt-4">
            <img className="w-20 me-4 rounded-2" src={images[0]} alt="first image" />
            <img className="w-20 me-4 rounded-2" src={images[1]} alt="first image" />
            <img className="w-20 me-4 rounded-2" src={images[2]} alt="first image" />
            <img className="w-20 rounded-2" src={images[3]} alt="first image" />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <h2>{title}</h2>
          <div className="d-flex">
            <h3 className="font-weight-normal">{price}</h3>
            <input className="opacity-0" defaultValue={price} />
          </div>
          <ProductRating rating={rating} reviews={reviews} />
          <p className="mt-4">{full_description}</p>
          <h6 className="mt-4">Color:</h6>
          {(colors) &&
            <ProductBadge colors={colors} />
          }
          <div className="d-flex align-items-center mt-4">
            <button className="btn btn-primary btn-lg mb-0 me-4">Add to Bag</button>
            <a href="#">
              <i className="far fa-heart text-2xl"></i>
            </a>
          </div>
            {/* <ProductAccordion data={data} /> */}
        </div>
      </div>
    </div>
    </>
  );
};
