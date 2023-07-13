export default function OrderSummary() {
  return (
    <>
      <div className="form-group">
        <label>Card Number</label>
        <input type="text" className="form-control" placeholder="EUR89BTRL1234XXXXX" />
      </div>
      <div className="row">
        <div className="col-8">
          <div className="form-group">
            <label>Expiration date (MM/YY)</label>
            <input type="text" className="form-control" placeholder="11/27" />
          </div>
        </div>
        <div className="col-4">
          <div className="form-group">
            <label>CVC</label>
            <input type="text" className="form-control" placeholder="112" />
          </div>
        </div>
      </div>
    </>
  );
}