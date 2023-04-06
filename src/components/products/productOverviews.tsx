import React from 'react';
import ProductBadge from './productBadge';

interface Props {
  colors: string[];
}

export default function productOverviews({

  colors,
 
}: Props) {
  
  return (
    <>

      <div className="d-flex align-items-center mb-4">
        <h4 className="mb-0">Products Overview</h4>
        <span className="badge badge-pill badge-md badge-success mx-2">&#x2713; Auto Layout</span>
        <span className="badge badge-pill badge-md badge-success">&#x2713; Components</span>
      </div>
      <p>Components and blocks for Product Overviews</p>
      <div className="row mb-5">
        <div className="col-2 card-product">
          <h5 className="text-uppercase">Buttons</h5>
          <div className="border border-dashed border-radius-md p-3">
          <div className="d-flex justify-content-between">
            <div className="form-check">
              <input className="form-check-input rounded-2" type="radio" name="flexRadioDefault" id="input16782951146970" disabled />
              <label className="cursor-pointer" for="input16782951146970">XXS</label>
            </div>
            <div className="form-check">
              <input className="form-check-input rounded-2" type="radio" name="flexRadioDefault" id="input16782951146970"/>
              <label className="cursor-pointer" for="input16782951146970">XXS</label>
            </div>
          </div>



            {(colors.length != 0) && 
              <>
                <ProductBadge colors={colors} />  
              </>
            }
          </div>
        </div>
      </div>

    </>
  );
};
