import PaymentDetails from './paymentDetails';
import ShippingInfo from './shippingInfo';
import BillingInfo from './billingInfo';
import OrderSummary from '../cart/orderSummary';
import CheckoutSingleItemDark from '../checkout/checkoutSingleItemDark';
import ReviewRating from '../reviews/reviewRating';

interface Props {
  products: ({
    thumb_src: string;
    thumb_alt: string;
    color: string;
    title: string;
    price: number;
    size: string;
    stock: string;
    subtotal: number;
    shipping: number;
    tax: number;
  })[];
}

export default function CheckoutSummary({
  products,
}: Props) {

  let subtotalCheckout = 0;
  products.map(product => 
    subtotalCheckout += product.price
  )

  return (
    <>
      <section>
        <div className="row">
          <div className="col-12 col-lg-6 p-lg-5">
            <small className="text-white opacity-6">Amount due</small>
            <h3 className="text-white">${subtotalCheckout.toFixed(2)}</h3>
            {products.map((product, i) => 
                <CheckoutSingleItemDark
                  thumb_src={product.thumb_src}
                  thumb_alt={product.thumb_alt}
                  title={product.title}
                  color={product.color}
                  size={product.size}
                  price={product.price}
                />
            )}
            <OrderSummary subtotal={subtotalCheckout}/>
          </div>
          <div className="col-12 col-lg-6 p-3 p-md-5">
            <button className="btn btn-dark btn-lg w-100">
              <i className="fab fa-apple me-2"></i>
              Pay
            </button>
            <div className="mt-2 mb-4 position-relative text-center">
              <p className="text-sm font-weight-bold mb-2 text-secondary text-border d-inline z-index-2 bg-white px-3">or</p>
            </div>
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

            <div className="accordion">
              <div className="accordion" id="accordionRental">
                <div className="accordion-item mb-3">
                  <h5 className="accordion-header" id="headingOne">
                    <button className="accordion-button border-bottom font-weight-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                      Payment details
                      <i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
                      <i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
                    </button>
                  </h5>
                  <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionRental">
                    <div className="accordion-body text-sm opacity-8">
                      <PaymentDetails />
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3">
                  <h5 className="accordion-header" id="headingTwo">
                    <button className="accordion-button border-bottom font-weight-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Shipping Info
                      <i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
                      <i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
                    </button>
                  </h5>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionRental">
                    <div className="accordion-body text-sm opacity-8">
                      <ShippingInfo />
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3">
                  <h5 className="accordion-header" id="headingThree">
                    <button className="accordion-button border-bottom font-weight-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Billing address
                      <i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
                      <i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
                    </button>
                  </h5>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionRental">
                    <div className="accordion-body text-sm opacity-8">
                      <BillingInfo />
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3">
                  <h5 className="accordion-header" id="headingFour">
                    <button className="accordion-button border-bottom font-weight-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      Review
                      <i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
                      <i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
                    </button>
                  </h5>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionRental">
                    <div className="accordion-body text-sm opacity-8">
                      <ReviewRating />
                    </div>
                  </div>
                </div>
              </div>
            </div>            
          </div>
        </div>
      </section>
    </>
  );
};

