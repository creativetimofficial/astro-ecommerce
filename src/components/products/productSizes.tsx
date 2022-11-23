interface Props {
  sizes: Map<string,number>
}

export default function ProductSizes({
  sizes,
}: Props) {

  return (
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
  );
}
