import PaymentDetails from './paymentDetails';
import ShippingInfo from './shippingInfo';
import BillingInfo from './billingInfo';
import OrderSummary from '../cart/orderSummary';
import CheckoutSingleItem from '../checkout/checkoutSingleItem';

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
  textColor: string
}

export default function CheckoutSummary({
 products,
 textColor
}: Props) {

  let subtotalCheckout = 0;
  products.map(product => 
    subtotalCheckout += product.price
  )

  return (
    <>
      <section>
        <div className="row">
          <div className="col-12 col-lg-6 p-3 p-md-5 bg-gray-100">
            <h5 className="mb-4">Contact information</h5>
            <div className="form-group">
              <label>Email address</label>
              <input type="email" className="form-control" placeholder="Enter your email address" />
            </div>

            <h5 className="mt-5 mb-4">Shipping address</h5>
            <ShippingInfo />

            <h5 className="mt-5 mb-4">Payment details</h5>
            <PaymentDetails />

            <h5 className="mt-5 mb-4">Billing information</h5>
            <BillingInfo />

            <hr className="dark horizontal"/>
            <button className="btn btn-dark float-end mt-2 mb-0">
              <svg className="me-1" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M2.80039 2.80005C2.02719 2.80005 1.40039 3.42685 1.40039 4.20005V4.90005H12.6004V4.20005C12.6004 3.42685 11.9736 2.80005 11.2004 2.80005H2.80039Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6004 6.30005H1.40039V9.80005C1.40039 10.5733 2.02719 11.2 2.80039 11.2H11.2004C11.9736 11.2 12.6004 10.5733 12.6004 9.80005V6.30005ZM2.80039 9.10005C2.80039 8.71344 3.11379 8.40005 3.50039 8.40005H4.20039C4.58699 8.40005 4.90039 8.71344 4.90039 9.10005C4.90039 9.48666 4.58699 9.80005 4.20039 9.80005H3.50039C3.11379 9.80005 2.80039 9.48666 2.80039 9.10005ZM6.30039 8.40005C5.91379 8.40005 5.60039 8.71344 5.60039 9.10005C5.60039 9.48666 5.91379 9.80005 6.30039 9.80005H7.00039C7.387 9.80005 7.70039 9.48666 7.70039 9.10005C7.70039 8.71344 7.387 8.40005 7.00039 8.40005H6.30039Z" fill="white"/>
              </svg>
              Proceed to payment

            </button>
          </div>
          <div className="col-12 col-lg-6 p-3 p-md-5 bg-dark bg-gradient rounded-end">
            <p className="text-white opacity-6 mb-0 text-end">Amount</p>
            <h3 className="text-white mb-4 text-end">${subtotalCheckout.toLocaleString()}</h3>
            {products.map((product, i) => 
                <CheckoutSingleItem
                  thumb_src={product.thumb_src}
                  thumb_alt={product.thumb_alt}
                  title={product.title}
                  color={product.color}
                  size={product.size}
                  price={product.price}
                />
            )}
            <OrderSummary subtotal={subtotalCheckout} textColor="white" />
          </div>
        </div>
      </section>
    </>
  );
};

