import OrderCardProduct from './orderCardProduct';
import OrderSummary from '../cart/orderSummary';

interface Props {
  order: {
    orderNumber: number,
    ShippingStatus: Map<string,string>
    address: string,
    email: string,
    date: string,
    payment: {
      cardNumber: string;
      expiringDate: string;
    },
    phoneNumber: string,
    productQuantity: Map<string,number>,
  }
  products: ({
    id: string;
    thumb_src: string;
    thumb_alt: string;
    description: string;
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

export default function OrderSummaries({
  order,
  products
}: Props) {

  let orderCards = [];

   products.map(product => {  
    // Object.entries(order.products).map(([product]) => {  
      orderCards.push(
        <OrderCardProduct 
          product={product} 
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
    <div className="p-5 bg-gray-100 rounded-2">
      <div className="d-flex justify-content-between mb-4"> 
        <div className="d-flex align-items-baseline">
          <h3 className="mb-0 me-3">Order #{order.orderNumber}</h3>
          <a className="text-sm text-primary" href="#">View invoice <i className="fas fa-long-arrow-right"></i></a>
        </div>
        <p className="mb-0 text-dark">Order Placed <b>{order.date}</b></p>
      </div>

      {orderCards}

      

      <div className="row bg-gray-200 p-4 mx-1 rounded-2">
        <div className="col-3">
          <h5 className="text-base">Billing Address</h5>
          <p className="text-sm mb-0 opacity-8 pe-7">{order.address}</p>
        </div>
        <div className="col-3">
          <h5 className="text-base">Payment information</h5>
          <div className="d-flex">
            <i className="fab fa-cc-visa text-2xl text-primary me-2 mt-1"></i>
            <p className="text-sm">
              <b>Ending with {order.payment.cardNumber}</b> <br/>
              <small>Expires {order.payment.expiringDate}</small>
            </p>
          </div>
        </div>
        
        <div className="col-6">
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