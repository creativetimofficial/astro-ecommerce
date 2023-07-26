import ProductCartItem2 from './productCartItem2';
import OrderSummary from './orderSummary';

interface Props {
  products: ({
    thumb_src: string;
    thumb_alt: string;
    color: string;
    title: string;
    price: number;
    size: string;
    stock: boolean
    subtotal: number;
    shipping: number;
    tax: number;
  })[];
}

export default function ShoppingCart({
  products
}: Props) {
  let subtotal = 0;
  products.map(product => 
    subtotal += product.price
  )

  return (
    <>
      <div className="container">
        <h2 className="mb-3 text-center">Shopping Cart</h2>
        <h5 className="text-center mb-5">You are eligible for Free Shipping.</h5>
        <div className="row">
          <div className="col-12">
          {products.map((product, i) => 
              <>
              {i != 0 &&
                <hr className="horizontal dark my-4" />  
              }
                <ProductCartItem2
                  thumb_src={product.thumb_src}
                  thumb_alt={product.thumb_alt}
                  title={product.title}
                  color={product.color}
                  size={product.size}
                  price={product.price}
                  stock={product.stock}
                />
              </>
            )}
          </div>
          <div className="col-12 col-lg-7 col-md-8 mx-auto mt-4">
            <div className="card shadow-xs border bg-gray-100">
              <div className="card-body p-lg-5">
                <OrderSummary 
                  subtotal={subtotal}
                />
              </div>
            </div>
            <div className="d-block d-md-flex">
              <button className="btn btn-white btn-lg w-100 mt-4 me-4">Countinue Shopping</button>
              <button className="btn btn-dark btn-lg w-100 mt-md-4">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
