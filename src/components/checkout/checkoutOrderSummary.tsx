import StoreNavbar from './storeNavbar';
import OrderSummary from '../cart/orderSummary';

interface Props {
  title: string;
  full_description: string;
  subtotal: number;

}

export default function CheckoutSummary({
  title,
  full_description,
  subtotal
}: Props) {

  return (
    <>
      <section>
        <div className="row">
          <div className="col-6 p-5">
            <h5 className="mb-4">Contact information</h5>
            <div className="form-group">
              <label>Email address</label>
              <input type="email" className="form-control" placeholder="name@example.com" />
            </div>
            <h5 className="mt-5 mb-4">Payment details</h5>
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
            <h5 className="mt-5 mb-4">Shipping address</h5>
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
            <h5 className="mt-5 mb-4">Billing information</h5>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" checked />
              <label className="custom-control-label">Same as shipping information</label>
            </div>
          </div>
          <div className="col-6 p-5 bg-dark rounded-end">
            <small className="text-white opacity-6">Amount due</small>
            <h3 className="text-white">$232.00</h3>

            <OrderSummary subtotal={subtotal}/>
          </div>
        </div>
      </section>
    </>
  );
};

