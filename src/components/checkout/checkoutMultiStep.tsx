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
            <small className="text-white opacity-6">Amount due</small>
            <h3 className="text-white">$232.00</h3>

            <OrderSummary subtotal={subtotal}/>
          </div>
          <div className="col-6 p-5">
            <h5 className="mb-4">Contact information</h5>
            <div className="form-group">
              <label>Email address</label>
              <input type="email" className="form-control" placeholder="name@example.com" />
            </div>
            <div className="form-group">
              <label>Phone number</label>
              <input type="text" className="form-control" placeholder="Your Phone number" />
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" checked />
              <label className="custom-control-label">I have read the terms and conditions and agree to the sale of my personal information to the highest bidder.</label>
            </div>
            <button className="btn btn-lg btn-light w-100 mt-4" disabled>Continue</button>


            <h5 className="mt-5 mb-4">Payment details</h5>
           
            <h5 className="mt-5 mb-4">Shipping address</h5>
            
            <h5 className="mt-5 mb-4">Billing address</h5>
            
            <h5 className="mt-5 mb-4">Review</h5>
            
          </div>
        </div>
      </section>
    </>
  );
};

