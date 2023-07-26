export default function OrderSummary() {
  return (
    <>
      <div className="form-group">
        <label>Card Number</label>
        <input type="text" className="form-control" placeholder="Enter your card number" />
      </div>
      <div className="row">
        <div className="col-8">
          <div className="form-group">
            <label>Expiration date (MM/YY)</label>
            <input type="text" className="form-control" placeholder="Enter the date" />
          </div>
        </div>
        <div className="col-4">
          <div className="form-group">
            <label>CVC</label>
            <input type="text" className="form-control" placeholder="Enter the 3 digits" />
          </div>
        </div>
      </div>
    </>
  );
}