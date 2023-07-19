interface Props {
  product: ({
    id: string;
    thumb_src: string;
    thumb_alt: string;
    title: string;
    price: number;
    description: string;
  });
  quantity: number;
  status: string;
  address: string;
  email: string;
  phoneNumber: string;
}

export default function OrderCardProduct({
  product,
  status,
  address,
  email,
  quantity,
  phoneNumber
}: Props) {

  let widthClass = "";

  switch (status) {
    case "Order Placed":
      widthClass = " w-5"
      break;
    case "Processed":
      widthClass = " w-40"
      break;
    case "Shipped":
      widthClass = " w-70"
      break;
    case "Delivered":
      widthClass = " w-100"
      break;
  }

  return (
    <>
      <div className="card shadow-xs border p-3 p-md-4 mb-4">
        <div className="row border-bottom pb-4">
          <div className="col-12 col-md-6 col-lg-2">
            <img className="w-100 rounded-3 shadow-xs mb-3 mb-md-0" src={product.thumb_src} alt={product.thumb_alt} />
          </div>
          <div className="col-12 col-md-6 col-lg-5">
            <h5 className="text-base">{product.title}</h5>
            <h6 className="text-sm font-weight-bold">${product.price.toLocaleString()}</h6>
            <p className="text-sm mb-0 opacity-8">{product.description}</p>
            <p className="text-dark text-sm mt-2"><b>Quantity:</b> {quantity}</p>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mt-md-4 mt-lg-0">
            <h5 className="text-base">Delivery Address</h5>
            <p className="text-sm mb-0 opacity-8 pe-md-7">{address}</p>
          </div>
          <div className="col-12 col-md-6 col-lg-2 mt-4 mt-lg-0">
            <h5 className="text-base">Shipping updates</h5>
            <p className="text-sm mb-2 opacity-8">{email}</p>
            <p className="text-sm opacity-8">{phoneNumber}</p>
            <a className="btn btn-white btn-sm" href="#">Edit</a>
          </div>
        </div>
        <div className="mt-4">
          <h6 className="text-center">Preparing to ship on March 24, 2021</h6>
          <div className="progress my-4">
            <div className={`progress-bar bg-dark` + widthClass} role="progressbar"></div>
          </div>
          <div className="d-block d-md-flex justify-content-between">
            <p className="font-weight-semibold text-dark">Order placed</p>
            {status == "Order Placed" && 
            <>
              <p className="font-weight-semibold">Processed</p>
              <p className="font-weight-semibold">Shipped</p>
              <p className="font-weight-semibold">Delivered</p>
            </>
            }
            {status == "Processed" && 
            <>
              <p className="font-weight-semibold text-dark">Processed</p>
              <p className="font-weight-semibold">Shipped</p>
              <p className="font-weight-semibold">Delivered</p>
            </>
            }
            {status == "Shipped" && 
            <>
              <p className="font-weight-semibold text-dark">Processed</p>
              <p className="font-weight-semibold text-dark">Shipped</p>
              <p className="font-weight-semibold">Delivered</p>
            </>
            }
            {status == "Delivered" && 
            <>
              <p className="font-weight-semibold text-dark">Processed</p>
              <p className="font-weight-semibold text-dark">Shipped</p>
              <p className="font-weight-semibold text-dark">Delivered</p>
            </>
            }
          </div>
        </div>
      </div>
    </>
  );
}