import OrderProductRow from "./orderProductRow";

interface Props {
  order: {
    orderNumber: string,
    products: 
    {
      id: string,
      status: string,
      dateModified: string;
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

export default function OrderHistoryCard({
  products,
  order
}: Props) {

  let orderHistoryCards = [];

  order.products.map(productDetails => {  
    let productStatus = "";
    let dateModified = "";

    products.map(product => {
      if (productDetails.id == product.id) {
        productStatus = productDetails.status;
        dateModified = productDetails.dateModified;
 
        orderHistoryCards.push(
          <OrderProductRow
            product={product} 
            status={productStatus}
            dateModified={dateModified}
          /> 
        )
      }
    })
  });

  return (
    <div className="card shadow-xs border p-3 p-md-4 mb-4">
      <div className="shadow-xs border rounded-3 mb-5">
        <div className="d-block d-md-flex justify-content-between align-items-center">
          <div className="d-block d-md-flex">
            <div className="d-flex d-md-block justify-content-between p-4 me-md-4">
              <p className="text-sm mb-0">Order Id</p>
              <h6>{order.orderNumber}</h6>
            </div>
            <div className="d-flex d-md-block justify-content-between p-4 me-md-4">
              <p className="text-sm mb-0">Date of placement</p>
              <h6>{order.date}</h6>
            </div>
            <div className="d-flex d-md-block justify-content-between p-4">
              <p className="text-sm mb-0">Amount</p>
              <h6>$2,570</h6>
            </div>
          </div>
          <button className="btn btn-dark btn-sm mb-md-0 ms-4 md-md-0 me-4" data-bs-toggle="modal" data-bs-target="#invoiceModal1">View invoice</button>
          <div className="modal fade" id="invoiceModal1" role="dialog" aria-labelledby="invoiceModal1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
              <div className="modal-content">
                <div className="card p-4">
                    <div className="card-header text-center">
                      <div className="row justify-content-between">
                        <div className="col-md-4 text-start">
                          <img className="mb-2 w-50 rounded-2" src="https://s3.amazonaws.com/creativetim_bucket/new_logo.png" alt="Logo" />
                          <h6>
                            St. Independence Embankment, 050105 Bucharest, Romania
                          </h6>
                          <small className="d-block text-muted">tel: +4 (074) 1090873</small>
                        </div>
                        <div className="col-lg-4 col-md-5 text-end">
                          <button type="button" className="btn-close float-end" data-bs-dismiss="modal" aria-label="Close"></button>
                          <h4 className="mt-7 mb-1">Billed to:</h4>
                          <span className="d-block">James Thompson</span>
                          <p className="text-sm">
                            Bld Mihail Kogalniceanu,<br />
                            7652 Bucharest,<br />
                            Romania
                          </p>
                        </div>
                      </div>
                      <div className="row justify-content-md-between">
                        <div className="col-md-4">
                          <h4 className="mt-5 text-start">Invoice no. <br /><small className="mr-2">#XK98321111</small></h4>
                        </div>
                        <div className="col-lg-4 col-md-5">
                          <div className="d-flex align-items-center mt-5 ms-auto float-end">
                            <div className="text-sm me-3 font-weight-bold">Invoice date:</div>
                            <div className="text-end">Jan 22, 2022</div>
                          </div>
                          <div className="d-flex align-items-center ms-auto float-end">
                            <div className="text-sm me-3 font-weight-bold">Due date:</div>
                            <div className="text-end">Feb 22, 2022</div>
                          </div>
                        </div>
                      </div>
                    </div>

                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <div className="table-responsive">
                        <table className="table text-right">
                          <thead className="bg-default">
                            <tr>
                              <th scope="col" className="text-right text-white">Item</th>
                              <th scope="col" className="text-right text-white">Qty</th>
                              <th scope="col" className="text-right text-white">Rate</th>
                              <th scope="col" className="text-right text-white">Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Premium Support</td>
                              <td>1</td>
                              <td>$ 9.00</td>
                              <td className="text-end">$ 9.00</td>
                            </tr>
                            <tr>
                              <td>Argon Dashboard PRO</td>
                              <td>3</td>
                              <td>$ 100.00</td>
                              <td className="text-end">$ 300.00</td>
                            </tr>
                            <tr>
                              <td>Parts for service</td>
                              <td>1</td>
                              <td>$ 89.00</td>
                              <td className="text-end">$ 89.00</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <th colSpan={3} className="h4">Total</th>
                              <th className="text-end h4">$ 398.00</th>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer text-right">
                  <div className="col-md-5 ms-auto text-end">
                    <h5>Thank you!</h5>
                    <p className="text-sm">If you encounter any issues related to the invoice you can contact us at:</p>
                    <h6 className="mb-0">
                      email:
                      <small className="text-muted"> support@cretive-tim.com</small>
                    </h6>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="text-secondary text-xs font-weight-bold border-light ps-2">Product</th>
              <th scope="col" className="text-secondary text-xs font-weight-bold border-light ps-2">Price</th>
              <th scope="col" className="text-secondary text-xs font-weight-bold border-light ps-2">Status</th>
              <th scope="col" className="text-secondary text-xs font-weight-bold border-light ps-2">Date</th>
              <th scope="col" className="text-secondary text-xs font-weight-bold border-light ps-2 text-end">Details</th>
            </tr>
          </thead>
          <tbody>
            {orderHistoryCards}
          </tbody>
        </table>
      </div>
    </div>
  );
}


