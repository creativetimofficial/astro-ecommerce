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
        <h2 className="mb-4">Shopping Cart</h2>
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
          <div className="col-12 col-md-7 ms-auto mt-4">
            <div className="card shadow-xs border bg-gray-100">
              <div className="card-body p-lg-5">
                <OrderSummary 
                  subtotal={subtotal}
                />
              </div>
            </div>
            <button className="btn btn-primary btn-lg w-100 mt-4">Checkout</button>
            <p className="text-center mb-0">or <a className="text-primary ms-2" href="#">continue shopping <i className="fas fa-arrow-right ms-1"></i></a></p>
          </div>
        </div>
      </div>
    </>
  );
};
