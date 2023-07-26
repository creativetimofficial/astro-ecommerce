import PaymentDetails from './paymentDetails';
import ShippingInfo from './shippingInfo';
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
      <section className="bg-gray-100 px-2">
        <div className="row">
          <div className="col-12 col-lg-6 p-3 p-md-5">
            <button className="btn btn-white w-100">
              <i className="fab fa-apple me-2"></i>
              Apple Pay
            </button>
            <div className="mt-2 mb-4 position-relative text-center">
              <p className="text-sm font-weight-bold mb-2 text-secondary text-border d-inline z-index-2 bg-white px-3">or</p>
            </div>
            <h5 className="mb-4">Contact information</h5>
            <div className="form-group">
              <label>Email address</label>
              <input type="email" className="form-control" placeholder="Enter your email address" />
            </div>
            <div className="form-group">
              <label>Phone number</label>
              <input type="text" className="form-control" placeholder="Enter your phone number" />
            </div>
            
            <PaymentDetails />

            <ShippingInfo />
            

            <button className="btn btn-dark w-100 mt-4">Continue</button>        
          </div>
          <div className="col-12 col-lg-6 p-lg-5">
            <small className="opacity-6">Amount</small>
            <h3 className="mb-5">${subtotalCheckout.toLocaleString()}</h3>
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
        </div>
      </section>
    </>
  );
};

