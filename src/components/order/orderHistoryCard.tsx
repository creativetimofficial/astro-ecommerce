interface Props {
  // product: ({
  //   id: string;
  //   thumb_src: string;
  //   thumb_alt: string;
  //   title: string;
  //   price: number;
  //   description: string;
  //   quantity: number;
  // });
  // status: string;
  // address: string;
  // email: string;
  // phoneNumber: string;
}

export default function OrderHistoryCard({
  product,
  status,
  address,
  email,
  phoneNumber
}: Props) {

 

  return (
    <>
      <div className="bg-gray-100 rounded-3 mt-5 mb-4">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <div className="p-4 me-4">
              <h6>Data placed</h6>
              <p className="text-sm mb-0">January 22, 2022</p>
            </div>
            <div className="p-4 me-4">
              <h6>Order number</h6>
              <p className="text-sm mb-0">XK98321111</p>
            </div>
            <div className="p-4">
              <h6>Total amount</h6>
              <p className="font-weight-bold text-sm mb-0">$299.00</p>
            </div>
          </div>
          <button className="btn btn-white mb-0 me-4" data-bs-toggle="modal" data-bs-target="#invoiceModal">View invoice</button>
          <div className="modal fade" id="invoiceModal" role="dialog" aria-labelledby="invoiceModal" aria-hidden="true">
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

      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="text-secondary text-xs font-weight-semibold opacity-7 border-light ps-2">Product</th>
            <th scope="col" className="text-secondary text-xs font-weight-semibold opacity-7 border-light ps-2">Price</th>
            <th scope="col" className="text-secondary text-xs font-weight-semibold opacity-7 border-light ps-2">Status</th>
            <th scope="col" className="text-secondary text-xs font-weight-semibold opacity-7 border-light ps-2 text-end">Info</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="d-flex align-items-center text-sm text-secondary py-3">
              <img className="w-10 rounded-3 shadow-xs" src="https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=274&q=80" alt="ss" />
              <p className="text-sm text-dark font-weight-bold mb-0 ms-3">iMac</p>
            </th>
            <td className="text-sm text-secondary pt-3">$70.00</td>
            <td className="text-sm text-secondary pt-3">Delivered Sep 03, 2022</td>
            <td className="text-sm text-secondary pt-3 text-end">
              <a href="#" className="text-primary">ViewProduct</a>
            </td>
          </tr>
          <tr>
            <th scope="row" className="d-flex align-items-center text-sm text-secondary py-3">
              <img className="w-10 rounded-3 shadow-xs" src="https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=274&q=80" alt="ss" />
              <p className="text-sm text-dark font-weight-bold mb-0 ms-3">iMac</p>
            </th>
            <td className="text-sm text-secondary pt-3">$28.00</td>
            <td className="text-sm text-secondary pt-3">Delivered Sep 03, 2022</td>
            <td className="text-sm text-secondary pt-3 text-end">
              <a href="#" className="text-primary">ViewProduct</a>
            </td>
          </tr>
          <tr>
            <th scope="row" className="d-flex align-items-center text-sm text-secondary py-3">
              <img className="w-10 rounded-3 shadow-xs" src="https://images.unsplash.com/photo-1612810806695-30f7a8258391?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=274&q=80" alt="ss" />
              <p className="text-sm text-dark font-weight-bold mb-0 ms-3">iMac</p>
            </th>
            <td className="text-sm text-secondary pt-3">$140.00</td>
            <td className="text-sm text-secondary pt-3">Delivered Sep 03, 2022</td>
            <td className="text-sm text-secondary pt-3 text-end">
              <a href="#" className="text-primary">ViewProduct</a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}


