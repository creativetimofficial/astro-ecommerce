import React from 'react';

interface Props {
  img_src: string;
  title: string;
}

export default function ProductOverview({
  img_src,
  title,

}: Props) {

  return (
    <>
    <div className="card card-plain">
      <div className="row">
        <div className="col-4">
          <img className="w-100 rounded-2" src="https://images.unsplash.com/photo-1611930021592-a8cfd5319ceb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="first image" />
        </div>
        <div className="col-4">
          <img className="w-100 rounded-2" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="first image" />
          <img className="w-100 mt-4 rounded-2" src="https://images.unsplash.com/photo-1513116476489-7635e79feb27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="first image" />
        </div>
        <div className="col-4">
          <img className="w-100 rounded-2" src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="first image" />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-8 border-end">
          <h2>Basic Tee 6-Pack</h2>
          <p className="">The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.</p>
          <h6>Highlights</h6>
          <ul className="text-sm">
            <li className="mb-2">Hand cut and sewn locally</li>
            <li className="mb-2">Dyed with our proprietary colors</li>
            <li className="mb-2">Pre-washed & pre-shrunk</li>
            <li className="mb-2">Ultra-soft 100% cotton</li>
          </ul>
          <h6>Details</h6>
          <p>The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.</p>
        </div>
        <div className="col-4">
          <h3 className="font-weight-normal">$129</h3>
          <h3 className="sr-only">Reviews</h3>
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center">
              <svg className="text-dark h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>
              <svg className="text-dark h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>
              <svg className="text-dark h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>
              <svg className="text-dark h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>
              <svg className="text-light h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>
            </div>
            <div className="d-flex">
              <p className="sr-only">4 out of 5 stars</p>
              <a href="#" className="ms-3 text-sm font-weight-medium text-primary">117 reviews</a>
            </div>
          </div>
          <h6 className="mt-5">Colors:</h6>
          <div className="d-flex">
            <span className="badge filter bg-white d-block"></span>
            <span className="badge filter bg-gradient-light d-block"></span>
            <span className="badge filter bg-gradient-primary d-block"></span>
          </div>
          <div className="mt-4 d-flex justify-content-between align-items-center">
            <h6 className="mb-0">Size:</h6>
            <a href="#" className="text-primary mb-0">Size guide</a>
          </div>
          <div className="row text-center my-4">
            <div className="col-3 mb-4">
              <button className="border w-100 rounded-1 px-3 py-4">XXS</button>
            </div>
            <div className="col-3 mb-4">
              <button className="border w-100 rounded-1 px-3 py-4">XS</button>
            </div>
            <div className="col-3 mb-4">
              <button className="border w-100 rounded-1 px-3 py-4">S</button>
            </div>
            <div className="col-3 mb-4">
              <button className="border w-100 rounded-1 px-3 py-4">M</button>
            </div>
            <div className="col-3">
              <button className="border w-100 rounded-1 px-3 py-4">L</button>
            </div>
            <div className="col-3">
              <button className="border w-100 rounded-1 px-3 py-4">XL</button>
            </div>
            <div className="col-3">
              <button className="border w-100 rounded-1 px-3 py-4">2XL</button>
            </div>
            <div className="col-3">
              <button className="border w-100 rounded-1 px-3 py-4">3Xl</button>
            </div>
          </div>
          <button className="btn btn-primary btn-lg w-100">Add to cart</button>
        </div>
      </div>
    </div>
    </>
  );
};
