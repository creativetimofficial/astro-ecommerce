interface Props {
  title: string;
}

export default function OrderSummary({

}: Props) {

  return (
    <>
      <div className="form-group">
        <label>Address</label>
        <input type="text" className="form-control" placeholder="Your Address" />
      </div>
      <div className="row">
        <div className="col-4">
          <div className="form-group">
            <label>City</label>
            <input type="text" className="form-control" placeholder="Miami" />
          </div>
        </div>
        <div className="col-4">
          <div className="form-group">
            <label>State / Province</label>
            <input type="text" className="form-control" placeholder="California" />
          </div>
        </div>
        <div className="col-4">
          <div className="form-group">
            <label>Postal Code</label>
            <input type="text" className="form-control" placeholder="121001" />
          </div>
        </div>
      </div>
    </>
  );
}