interface Props {
  title: string;
}

export default function OrderSummary({

}: Props) {

  return (
    <>
      <div className="form-group">
        <label>Address</label>
        <input type="text" className="form-control" placeholder="Street, no" />
      </div>
      <div className="row">
        <div className="col-4">
          <div className="form-group">
            <label>City</label>
            <input type="text" className="form-control" placeholder="Enter city" />
          </div>
        </div>
        <div className="col-4">
          <div className="form-group">
            <label>State</label>
            <input type="text" className="form-control" placeholder="Enter your country" />
          </div>
        </div>
        <div className="col-4">
          <div className="form-group">
            <label>Postal Code</label>
            <input type="text" className="form-control" placeholder="Your postal code" />
          </div>
        </div>
      </div>
    </>
  );
}