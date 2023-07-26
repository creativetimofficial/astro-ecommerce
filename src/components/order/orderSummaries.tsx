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
      <div className="d-block d-md-flex justify-content-between align-items-center mb-4"> 
        <div className="d-block">
          <h3>Order #{order.orderNumber}</h3>
          <p className="mb-0 text-dark mt-4 mt-md-0">Order Placed <b>{order.date}</b></p>
        </div>
        <button className="btn btn-dark btn-sm">View invoice</button>
      </div>

      {orderCards}
      <div className="card shadow-xs border p-3 p-md-4 mb-4">
        <div className="row">
          <div className="col-12 col-lg-3 mt-4 mt-md-0">
            <h5 className="text-base">Billing Address</h5>
            <p className="text-sm mb-0 opacity-8 pe-md-7">{order.address}</p>
          </div>
          <div className="col-12 col-lg-3 mt-4 mt-lg-0">
            <h5 className="text-base">Payment information</h5>
            <div className="d-flex">
              <svg width="49" height="32" viewBox="0 0 49 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_152_7843)">
                <path d="M22.1996 20.8737H19.6074L21.2288 10.8484H23.8209L22.1996 20.8737Z" fill="#00579F"/>
                <path d="M31.5982 11.0936C31.0869 10.8907 30.276 10.6667 29.2732 10.6667C26.7133 10.6667 24.9106 12.0318 24.8996 13.9835C24.8783 15.4234 26.1902 16.2232 27.1714 16.7033C28.1743 17.1939 28.5153 17.5141 28.5153 17.9514C28.5051 18.623 27.7049 18.9326 26.9585 18.9326C25.9236 18.9326 25.3691 18.773 24.5263 18.3993L24.185 18.2392L23.8223 20.4896C24.4302 20.7666 25.5504 21.0124 26.7133 21.0232C29.4332 21.0232 31.204 19.6792 31.225 17.5994C31.2353 16.4582 30.5426 15.5837 29.0491 14.8691C28.1424 14.4104 27.5872 14.1011 27.5872 13.6318C27.5978 13.2051 28.0568 12.7681 29.0803 12.7681C29.923 12.7467 30.5422 12.9492 31.0112 13.1519L31.2457 13.2584L31.5982 11.0936Z" fill="#00579F"/>
                <path d="M35.0438 17.3221C35.2573 16.7461 36.0787 14.5171 36.0787 14.5171C36.068 14.5385 36.2918 13.9305 36.4198 13.5573L36.601 14.4211C36.601 14.4211 37.0918 16.8208 37.1984 17.3221C36.7933 17.3221 35.5558 17.3221 35.0438 17.3221ZM38.2436 10.8484H36.2385C35.6202 10.8484 35.1504 11.0295 34.8836 11.6802L31.0332 20.8735H33.7531C33.7531 20.8735 34.2009 19.6362 34.2972 19.3697C34.5956 19.3697 37.2415 19.3697 37.6254 19.3697C37.6998 19.7217 37.9347 20.8735 37.9347 20.8735H40.3348L38.2436 10.8484Z" fill="#00579F"/>
                <path d="M17.4429 10.8484L14.9043 17.6847L14.6269 16.2982C14.1575 14.6984 12.6856 12.9602 11.043 12.096L13.3683 20.863H16.1095L20.184 10.8484H17.4429Z" fill="#00579F"/>
                <path d="M12.5473 10.8484H8.37665L8.33398 11.051C11.5873 11.8829 13.742 13.8883 14.6272 16.2986L13.7206 11.6911C13.5713 11.0508 13.1126 10.8695 12.5473 10.8484Z" fill="#FAA61A"/>
                </g>
                <rect x="0.833984" y="0.5" width="47" height="31" rx="5.5" stroke="#DDE0E5"/>
                <defs>
                <clipPath id="clip0_152_7843">
                  <rect width="32" height="32" fill="white" transform="translate(8.33398)"/>
                </clipPath>
                </defs>
              </svg>

              <p className="text-sm ms-3">
                <b>Visa {order.payment.cardNumber}</b> <br/>
                <small>Expiry {order.payment.expiringDate}</small>
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
    </div>
    </>
  );
};