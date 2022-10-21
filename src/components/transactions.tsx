import React, { useContext, useEffect, useState } from 'react';
import DashboardContext from './dashboardContext';
import ReactPaginate from 'react-paginate';

const Transactions = () => {
  const { getTransactions, getAddress } = useContext(DashboardContext);

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState<any[]>([]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(getTransactions.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(getTransactions.length / itemsPerPage));
  }, [itemOffset, getTransactions]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % getTransactions.length;
    setItemOffset(newOffset);
  };

  const getValueFromBalance = (balance: string, decimals: number) => {
    const position = balance.length - decimals;
    if (position < 0) {
      let size = Math.abs(position);
      let zeros = '';
      while (size > 0) {
        zeros += '0';
        size--;
      }
      return `0.${zeros}${balance}`;
    } else {
      return parseFloat(
        balance.substring(0, position) + '.' + balance.substring(position)
      ).toFixed(4);
    }
  };

  return (
    <>
      <div className="card shadow-xs border">
        <div className="card-header border-bottom pb-0">
          <div className="row mb-3">
            <div className="col-lg-4 col-md-12">
              <h6 className="font-weight-semibold text-lg mb-0">
                Recent transactions
              </h6>
              <p className="text-sm mb-sm-0 mb-2">
                These are details about the last transactions
              </p>
            </div>
            <div className="col-lg-8 col-md-12 d-flex flex-column flex-lg-row align-items-end align-items-lg-center justify-content-end">
              <div className="input-group ms-auto w-md-50 w-lg-30 me-lg-2 mt-3 mt-lg-0">
                <span className="input-group-text text-body py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search"
                />
              </div>
              <button
                type="button"
                className="btn btn-sm btn-primary btn-icon d-flex align-items-center my-2 my-lg-0"
              >
                <span className="btn-inner--icon">
                  <svg
                    width={16}
                    height={16}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="d-block me-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </span>
                <span className="btn-inner--text">Download CSV</span>
              </button>
              <a
                href={`https://explorer.elrond.com/accounts/${getAddress}`}
                target="_blank"
                className="btn btn-sm ms-2 btn-white btn-icon d-flex align-items-center mb-0"
              >
                <span className="btn-inner--icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width={16}
                    height={16}
                    className="d-block me-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span className="btn-inner--text">View More</span>
              </a>
            </div>
          </div>
        </div>
        <div className="card-body px-0 py-0">
          <div className="table-responsive p-0">
            <table className="table align-items-center justify-content-center mb-0">
              <thead className="bg-gray-100">
                <tr>

                  <th className="text-secondary text-xs font-weight-semibold opacity-7">
                    Product
                  </th>
                  <th className="text-secondary text-xs font-weight-semibold opacity-7 ps-2">
                    Category
                  </th>
                  <th className="text-secondary text-xs font-weight-semibold opacity-7 ps-2">
                    Price
                  </th>
                  <th className="text-secondary text-xs font-weight-semibold opacity-7 ps-2">
                    Amount
                  </th>
                  <th className="text-center text-secondary text-xs font-weight-semibold opacity-7" />
                </tr>
              </thead>
              <tbody>

                  <tr>
                    <td>
                      <div className="d-flex">
                        <img className="w-5 ms-3" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/adidas-hoodie.jpg" alt="hoodie" />
                        <h6 className="ms-3 my-auto">BKLGO Full Zip Hoodie</h6>
                      </div>
                    </td>

                    <td>
                      <p className="text-sm font-weight-normal mb-0">
                       Clothing
                      </p>
                    </td>

                    <td>
                      <span className="text-sm font-weight-normal">
                      $1,321
                      </span>
                    </td>

                    <td className="align-items-center">
                      1222
                    </td>
               
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex">
                      <img className="w-5 ms-3" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/macbook-pro.jpg" alt="mac" />
                        <h6 className="ms-3 my-auto">MacBook Pro</h6>
                      </div>
                    </td>

                    <td>
                      <p className="text-sm font-weight-normal mb-0">
                       Clothing
                      </p>
                    </td>

                    <td>
                      <span className="text-sm font-weight-normal">
                      $1,321
                      </span>
                    </td>

                    <td className="align-items-center">
                      1222
                    </td>
               
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* <div className="card-footer">
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={1}
            pageCount={pageCount}
            previousClassName="page-item"
            nextClassName="page-item"
            previousLinkClassName="page-link font-weight-bold"
            nextLinkClassName="page-link font-weight-bold"
            breakClassName="page-item"
            breakLinkClassName="page-link font-weight-bold"
            previousLabel="<"
            renderOnZeroPageCount={undefined}
            className="pagination justify-content-end mb-0"
            pageClassName="page-item"
            pageLinkClassName="page-link font-weight-normal"
            activeClassName="active"
          />
        </div> */}
      </div>
    </>
  );
};

export default Transactions;
