import ProductCartItem from './productCartItem';
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
      <div className="container mt-5">
        <h2 className="mb-5">Shopping Cart</h2>
        <div className="row">
          <div className="col-12 col-lg-7">
            {products.map((product, i) => 
              <>
              {i != 0 &&
                <hr className="horizontal dark my-4" />  
              }
                <ProductCartItem
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
          <div className="col-12 col-lg-5 mt-5 mt-lg-0">
            <div className="card shadow-xs border bg-gray-100">
              <div className="card-body p-lg-5">
                <h5 className="mb-4">Order Summary</h5>
                <OrderSummary 
                  subtotal={subtotal}
                />
                <button className="btn btn-primary btn-lg w-100 mb-0">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
