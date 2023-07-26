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
            <img className="w-100 rounded-3 mb-3 mb-md-0" src={`${import.meta.env.BASE_URL}${product.thumb_src}`} alt={product.thumb_alt} />
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
            <div className="d-block text-center">
              <div className="icon icon-shape icon-sm bg-dark text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3 mx-auto">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.7071 6.70711C12.0976 6.31658 12.0976 5.68342 11.7071 5.29289C11.3166 4.90237 10.6834 4.90237 10.2929 5.29289L7 8.5858L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.3166 4.29289 8.7071L6.29289 10.7071C6.68342 11.0976 7.31658 11.0976 7.70711 10.7071L11.7071 6.70711Z" fill="white"/>
                </svg>
              </div>
              <p className="font-weight-semibold text-dark">Order placed</p>
            </div>
            {status == "Order Placed" && 
            <>
              <div className="d-block text-center">
                <div className="icon icon-shape icon-sm bg-secondary text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3 mx-auto">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4C2.89543 4 2 4.89543 2 6V7H18V6C18 4.89543 17.1046 4 16 4H4Z"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18 9H2V14C2 15.1046 2.89543 16 4 16H16C17.1046 16 18 15.1046 18 14V9ZM4 13C4 12.4477 4.44772 12 5 12H6C6.55228 12 7 12.4477 7 13C7 13.5523 6.55228 14 6 14H5C4.44772 14 4 13.5523 4 13ZM9 12C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14H10C10.5523 14 11 13.5523 11 13C11 12.4477 10.5523 12 10 12H9Z"></path>
                  </svg>
                </div>
                <p className="font-weight-semibold">Processed</p>
              </div>
              <div className="d-block text-center">
                <div className="icon icon-shape icon-sm bg-secondary text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3 mx-auto">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5 12.875C6.5 13.4963 5.99632 14 5.375 14C4.75368 14 4.25 13.4963 4.25 12.875C4.25 12.2537 4.75368 11.75 5.375 11.75C5.99632 11.75 6.5 12.2537 6.5 12.875Z" fill="white"/>
                    <path d="M11.75 12.875C11.75 13.4963 11.2463 14 10.625 14C10.0037 14 9.5 13.4963 9.5 12.875C9.5 12.2537 10.0037 11.75 10.625 11.75C11.2463 11.75 11.75 12.2537 11.75 12.875Z" fill="white"/>
                    <path d="M2.75 3.5C2.33579 3.5 2 3.83579 2 4.25V11.75C2 12.1642 2.33579 12.5 2.75 12.5H3.53751C3.71123 11.6442 4.46789 11 5.375 11C6.28211 11 7.03877 11.6442 7.21249 12.5H8C8.41423 12.5 8.75 12.1642 8.75 11.75V4.25C8.75 3.83579 8.41423 3.5 8 3.5H2.75Z" fill="white"/>
                    <path d="M11 5.75C10.5858 5.75 10.25 6.08579 10.25 6.5V11.0375C10.3712 11.0129 10.4966 11 10.625 11C11.5321 11 12.2888 11.6442 12.4625 12.5H13.25C13.6642 12.5 14 12.1642 14 11.75V8C14 7.80108 13.9209 7.61032 13.7803 7.46967L12.2803 5.96967C12.1397 5.82902 11.9489 5.75 11.75 5.75H11Z" fill="white"/>
                  </svg>
                </div>
                <p className="font-weight-semibold">Shipped</p>
              </div>
              <div className="d-block text-center">
                <div className="icon icon-shape icon-sm bg-secondary text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3 mx-auto">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.7071 6.70711C12.0976 6.31658 12.0976 5.68342 11.7071 5.29289C11.3166 4.90237 10.6834 4.90237 10.2929 5.29289L7 8.5858L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.3166 4.29289 8.7071L6.29289 10.7071C6.68342 11.0976 7.31658 11.0976 7.70711 10.7071L11.7071 6.70711Z" fill="white"/>
                  </svg>
                </div>
                <p className="font-weight-semibold">Delivered</p>
              </div>
            </>
            }
            {status == "Processed" && 
            <>
              <div className="d-block text-center">
                <div className="icon icon-shape icon-sm bg-dark text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3 mx-auto">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.7071 6.70711C12.0976 6.31658 12.0976 5.68342 11.7071 5.29289C11.3166 4.90237 10.6834 4.90237 10.2929 5.29289L7 8.5858L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.3166 4.29289 8.7071L6.29289 10.7071C6.68342 11.0976 7.31658 11.0976 7.70711 10.7071L11.7071 6.70711Z" fill="white"/>
                  </svg>
                </div>
                <p className="font-weight-semibold text-dark">Processed</p>
              </div>
              <div className="d-block text-center">
                <div className="icon icon-shape icon-sm bg-secondary text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3 mx-auto">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5 12.875C6.5 13.4963 5.99632 14 5.375 14C4.75368 14 4.25 13.4963 4.25 12.875C4.25 12.2537 4.75368 11.75 5.375 11.75C5.99632 11.75 6.5 12.2537 6.5 12.875Z" fill="white"/>
                    <path d="M11.75 12.875C11.75 13.4963 11.2463 14 10.625 14C10.0037 14 9.5 13.4963 9.5 12.875C9.5 12.2537 10.0037 11.75 10.625 11.75C11.2463 11.75 11.75 12.2537 11.75 12.875Z" fill="white"/>
                    <path d="M2.75 3.5C2.33579 3.5 2 3.83579 2 4.25V11.75C2 12.1642 2.33579 12.5 2.75 12.5H3.53751C3.71123 11.6442 4.46789 11 5.375 11C6.28211 11 7.03877 11.6442 7.21249 12.5H8C8.41423 12.5 8.75 12.1642 8.75 11.75V4.25C8.75 3.83579 8.41423 3.5 8 3.5H2.75Z" fill="white"/>
                    <path d="M11 5.75C10.5858 5.75 10.25 6.08579 10.25 6.5V11.0375C10.3712 11.0129 10.4966 11 10.625 11C11.5321 11 12.2888 11.6442 12.4625 12.5H13.25C13.6642 12.5 14 12.1642 14 11.75V8C14 7.80108 13.9209 7.61032 13.7803 7.46967L12.2803 5.96967C12.1397 5.82902 11.9489 5.75 11.75 5.75H11Z" fill="white"/>
                  </svg>
                </div>
                <p className="font-weight-semibold">Shipped</p>
              </div>
              <div className="d-block text-center">
                <div className="icon icon-shape icon-sm bg-secondary text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3 mx-auto">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.99961 3.99998C3.99961 2.6745 5.07413 1.59998 6.39961 1.59998C7.0143 1.59998 7.575 1.83106 7.99961 2.2111C8.42425 1.83106 8.98489 1.59998 9.59961 1.59998C10.9251 1.59998 11.9996 2.6745 11.9996 3.99998C11.9996 4.28049 11.9514 4.54975 11.863 4.79998H12.7996C13.6833 4.79998 14.3996 5.51632 14.3996 6.39998C14.3996 7.28363 13.6833 7.99998 12.7996 7.99998H8.79961V7.19998C8.79961 6.75815 8.44145 6.39998 7.99961 6.39998C7.55779 6.39998 7.19961 6.75814 7.19961 7.19998V7.99998H3.19961C2.31595 7.99998 1.59961 7.28363 1.59961 6.39998C1.59961 5.51632 2.31595 4.79998 3.19961 4.79998H4.13618C4.04773 4.54975 3.99961 4.28049 3.99961 3.99998ZM7.19961 4.79998V3.99998C7.19961 3.55815 6.84143 3.19998 6.39961 3.19998C5.95779 3.19998 5.59961 3.55815 5.59961 3.99998C5.59961 4.4418 5.95779 4.79998 6.39961 4.79998H7.19961ZM9.59961 4.79998C10.0414 4.79998 10.3996 4.4418 10.3996 3.99998C10.3996 3.55815 10.0414 3.19998 9.59961 3.19998C9.15777 3.19998 8.79961 3.55815 8.79961 3.99998V4.79998H9.59961Z" fill="white"/>
                    <path d="M7.20039 8.80005H2.40039V12.8C2.40039 13.6837 3.11673 14.4 4.00039 14.4H7.20039V8.80005Z" fill="white"/>
                    <path d="M8.80078 14.4H12.0008C12.8845 14.4 13.6008 13.6837 13.6008 12.8V8.80005H8.80078V14.4Z" fill="white"/>
                  </svg>
                </div>
                <p className="font-weight-semibold">Delivered</p>
              </div>
            </>
            }
            {status == "Shipped" && 
            <>
              <div className="d-block text-center">
                <div className="icon icon-shape icon-sm bg-dark text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3 mx-auto">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.7071 6.70711C12.0976 6.31658 12.0976 5.68342 11.7071 5.29289C11.3166 4.90237 10.6834 4.90237 10.2929 5.29289L7 8.5858L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.3166 4.29289 8.7071L6.29289 10.7071C6.68342 11.0976 7.31658 11.0976 7.70711 10.7071L11.7071 6.70711Z" fill="white"/>
                  </svg>
                </div>
                <p className="font-weight-semibold text-dark">Processed</p>
              </div>
              <div className="d-block text-center">
                <div className="icon icon-shape icon-sm bg-dark text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3 mx-auto">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.7071 6.70711C12.0976 6.31658 12.0976 5.68342 11.7071 5.29289C11.3166 4.90237 10.6834 4.90237 10.2929 5.29289L7 8.5858L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.3166 4.29289 8.7071L6.29289 10.7071C6.68342 11.0976 7.31658 11.0976 7.70711 10.7071L11.7071 6.70711Z" fill="white"/>
                  </svg>
                </div>
                <p className="font-weight-semibold text-dark">Shipped</p>
              </div>
              <div className="d-block text-center">
                <div className="icon icon-shape icon-sm bg-secondary text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3 mx-auto">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.99961 3.99998C3.99961 2.6745 5.07413 1.59998 6.39961 1.59998C7.0143 1.59998 7.575 1.83106 7.99961 2.2111C8.42425 1.83106 8.98489 1.59998 9.59961 1.59998C10.9251 1.59998 11.9996 2.6745 11.9996 3.99998C11.9996 4.28049 11.9514 4.54975 11.863 4.79998H12.7996C13.6833 4.79998 14.3996 5.51632 14.3996 6.39998C14.3996 7.28363 13.6833 7.99998 12.7996 7.99998H8.79961V7.19998C8.79961 6.75815 8.44145 6.39998 7.99961 6.39998C7.55779 6.39998 7.19961 6.75814 7.19961 7.19998V7.99998H3.19961C2.31595 7.99998 1.59961 7.28363 1.59961 6.39998C1.59961 5.51632 2.31595 4.79998 3.19961 4.79998H4.13618C4.04773 4.54975 3.99961 4.28049 3.99961 3.99998ZM7.19961 4.79998V3.99998C7.19961 3.55815 6.84143 3.19998 6.39961 3.19998C5.95779 3.19998 5.59961 3.55815 5.59961 3.99998C5.59961 4.4418 5.95779 4.79998 6.39961 4.79998H7.19961ZM9.59961 4.79998C10.0414 4.79998 10.3996 4.4418 10.3996 3.99998C10.3996 3.55815 10.0414 3.19998 9.59961 3.19998C9.15777 3.19998 8.79961 3.55815 8.79961 3.99998V4.79998H9.59961Z" fill="white"/>
                    <path d="M7.20039 8.80005H2.40039V12.8C2.40039 13.6837 3.11673 14.4 4.00039 14.4H7.20039V8.80005Z" fill="white"/>
                    <path d="M8.80078 14.4H12.0008C12.8845 14.4 13.6008 13.6837 13.6008 12.8V8.80005H8.80078V14.4Z" fill="white"/>
                  </svg>
                </div>
                <p className="font-weight-semibold">Delivered</p>
              </div>
            </>
            }
            {status == "Delivered" && 
            <>
              <div className="d-block text-center">
                <div className="icon icon-shape icon-sm bg-dark text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3 mx-auto">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.7071 6.70711C12.0976 6.31658 12.0976 5.68342 11.7071 5.29289C11.3166 4.90237 10.6834 4.90237 10.2929 5.29289L7 8.5858L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.3166 4.29289 8.7071L6.29289 10.7071C6.68342 11.0976 7.31658 11.0976 7.70711 10.7071L11.7071 6.70711Z" fill="white"/>
                  </svg>
                </div>
                <p className="font-weight-semibold text-dark">Processed</p>
              </div>
              <div className="d-block text-center">
                <div className="icon icon-shape icon-sm bg-dark text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3 mx-auto">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.7071 6.70711C12.0976 6.31658 12.0976 5.68342 11.7071 5.29289C11.3166 4.90237 10.6834 4.90237 10.2929 5.29289L7 8.5858L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.3166 4.29289 8.7071L6.29289 10.7071C6.68342 11.0976 7.31658 11.0976 7.70711 10.7071L11.7071 6.70711Z" fill="white"/>
                  </svg>
                </div>
                <p className="font-weight-semibold text-dark">Shipped</p>
              </div>
              <div className="d-block text-center">
                <div className="icon icon-shape icon-sm bg-dark text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3 mx-auto">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.7071 6.70711C12.0976 6.31658 12.0976 5.68342 11.7071 5.29289C11.3166 4.90237 10.6834 4.90237 10.2929 5.29289L7 8.5858L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.3166 4.29289 8.7071L6.29289 10.7071C6.68342 11.0976 7.31658 11.0976 7.70711 10.7071L11.7071 6.70711Z" fill="white"/>
                  </svg>
                </div>
                <p className="font-weight-semibold text-dark">Delivered</p>
              </div>
            </>
            }
          </div>
        </div>
      </div>
    </>
  );
}