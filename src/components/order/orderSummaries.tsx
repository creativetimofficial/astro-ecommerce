import OrderCardProduct from './orderCardProduct';
import OrderSummary from '../cart/orderSummary';

interface Props {
  order: {
    orderNumber: string,
    products: 
    {
      id: string,
      status: string,
      quantity: number
    }[],
    address: string,
    email: string,
    date: string,
    payment: {
      cardNumber: string;
      expiringDate: string;
    },
    phoneNumber: string,
  }
  products: ({
    id: string;
    thumb_src: string;
    thumb_alt: string;
    title: string;
    price: number;
    description: string;
  })[];
}

export default function OrderSummaries({
  order,
  products
}: Props) {

  let orderCards = [];

   products.map(product => {  
    let status = "";
    let orderQuantity = 0;

    order.products.map(productDetails => {
      if (productDetails.id == product.id) {
        status = productDetails.status;
        orderQuantity = productDetails.quantity
      }
    })
    orderCards.push(
      <OrderCardProduct 
        product={product} 
        status={status}
        quantity={orderQuantity}
        address={order.address} 
        email={order.email} 
        phoneNumber={order.phoneNumber} 
      /> 
    )
  });

  let subtotal = 0;
  products.map(product => 
    subtotal += product.price
  )

  return (
    <>
    <div className="p-3 p-md-5 bg-gray-100 rounded-2">
      <div className="d-block d-md-flex justify-content-between mb-4"> 
        <div className="d-block d-md-flex align-items-baseline">
          <h3 className="mb-0 me-3">Order #{order.orderNumber}</h3>
          <a className="text-sm text-primary" href="#">View invoice <i className="fas fa-long-arrow-right"></i></a>
        </div>
        <p className="mb-0 text-dark mt-4 mt-md-0">Order Placed <b>{order.date}</b></p>
      </div>

      {orderCards}

      <div className="row bg-gray-200 p-2 p-md-4 mx-1 rounded-2">
        <div className="col-12 col-lg-3 mt-4 mt-md-0">
          <h5 className="text-base">Billing Address</h5>
          <p className="text-sm mb-0 opacity-8 pe-md-7">{order.address}</p>
        </div>
        <div className="col-12 col-lg-3 mt-4 mt-lg-0">
          <h5 className="text-base">Payment information</h5>
          <div className="d-flex">
            <i className="fab fa-cc-visa text-2xl text-primary me-2 mt-1"></i>
            <p className="text-sm">
              <b>Ending with {order.payment.cardNumber}</b> <br/>
              <small>Expires {order.payment.expiringDate}</small>
            </p>
          </div>
        </div>
        
        <div className="col-12 col-lg-6">
          <OrderSummary 
            subtotal={subtotal} 
            textColor=""  
          />
        </div>
      </div>
    </div>
    </>
  );
};