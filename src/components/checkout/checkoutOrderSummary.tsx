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
          <div className="col-12 col-lg-6 p-3 p-md-5">
            <h5 className="mb-4">Contact information</h5>
            <div className="form-group">
              <label>Email address</label>
              <input type="email" className="form-control" placeholder="name@example.com" />
            </div>
            <h5 className="mt-5 mb-4">Payment details</h5>
            <PaymentDetails />

            <h5 className="mt-5 mb-4">Shipping address</h5>
            <ShippingInfo />

            <h5 className="mt-5 mb-4">Billing information</h5>
            <BillingInfo />

            <hr className="dark horizontal"/>
            <button className="btn btn-primary float-end mt-2 mb-0">Pay now</button>
          </div>
          <div className="col-12 col-lg-6 p-3 p-md-5 bg-dark bg-gradient rounded-end">
            <small className="text-white opacity-6">Amount due</small>
            <h3 className="text-white mb-4">${subtotalCheckout.toFixed(2)}</h3>
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

