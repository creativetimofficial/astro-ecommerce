import React, { useContext, useEffect, useState } from 'react';
import DashboardContext from '../dashboardContext';
import NavTabsInit from '../navTabsInit';
import ReactPaginate from 'react-paginate';

const Tokens = () => {
  const { getTokens, getMetaESDT } = useContext(DashboardContext);
  const [tabActive, setTabActive] = useState<any[]>([]);
  const [tokensTab, setTokensTab] = useState(true);

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState<any[]>([]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    if (tokensTab) {
      setTabActive(getTokens);
    } else {
      setTabActive(getMetaESDT);
    }
  }, [getMetaESDT, getTokens, tokensTab]);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(tabActive.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(tabActive.length / itemsPerPage));
  }, [itemOffset, tabActive]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % tabActive.length;
    setItemOffset(newOffset);
  };

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

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
      ).toLocaleString();
    }
  };

  useEffect(() => {
    NavTabsInit();
  }, []);

  return (
    <>
      <div className="card border shadow-xs h-100">
        <div className="card-header pb-0 p-3">
          <div className="row mb-sm-0 mb-2">
            <div className="col-md-12 d-flex align-items-center justify-content-between">
              <div className="nav-wrapper w-70 position-relative end-0 mb-4 mt-2">
                <ul className="nav nav-pills nav-fill p-1" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link text-sm mb-0 px-0 py-1 font-weight-bold text-primary active"
                      data-bs-toggle="tab"
                      href="#tokens-tab"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="true"
                      onClick={() => setTokensTab(true)}
                    >
                      Tokens
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link text-sm mb-0 px-0 py-1"
                      data-bs-toggle="tab"
                      href="#esdt-tab"
                      role="tab"
                      aria-controls="dashboard"
                      aria-selected="false"
                      onClick={() => setTokensTab(false)}
                    >
                      Meta ESDT
                    </a>
                  </li>
                </ul>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#1b46c2"
                width={18}
                height={18}
                className="mb-4"
              >
                <path
                  fillRule="evenodd"
                  d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="card-body p-3 pt-0">
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="tokens-tab"
              role="tabpanel"
              aria-labelledby="tokens-tab"
              tabIndex={0}
            >
              <ul className="list-group mb-4 mt-2">
                {currentItems.map(
                  (token: any, i: React.Key | null | undefined) => (
                    <li
                      className="list-group-item border-0 d-flex align-items-center px-0 mb-2"
                      key={i}
                    >
                      <div className="avatar avatar-sm rounded-circle me-3">
                        <img
                          src={`https://media.elrond.com/tokens/asset/${token.identifier}/logo.svg`}
                          alt={`${token.identifier}`}
                          className="w-100"
                        />
                      </div>
                      <div className="d-flex align-items-start flex-column justify-content-center">
                        <h6 className="mb-0 font-weight-semibold text-lg">
                          {token.name}
                        </h6>
                        <p className="mb-0 text-xs text-secondary">
                          {token.identifier}
                        </p>
                        <p className="mb-0 mt-2 font-weight-bold text-sm text-dark">
                          {getValueFromBalance(token.balance, token.decimals)} (
                          <span>
                            {token.valueUsd
                              ? formatter.format(token.valueUsd)
                              : '$0'}
                          </span>
                          )
                        </p>
                      </div>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary ms-auto mb-0"
                      >
                        Send
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="esdt-tab"
              role="tabpanel"
              aria-labelledby="esdt-tab"
              tabIndex={0}
            >
              <ul className="list-group mb-4 mt-2">
                {getMetaESDT.map(
                  (token: any, i: React.Key | null | undefined) => (
                    <li
                      className="list-group-item border-0 d-flex align-items-center px-0 mb-2"
                      key={i}
                    >
                      <div className="avatar avatar-sm rounded-circle me-3">
                        <img
                          src={`${token.assets.pngUrl}`}
                          alt={`${token.name}`}
                          className="w-100"
                        />
                      </div>
                      <div className="d-flex align-items-start flex-column justify-content-center">
                        <h6 className="mb-0 font-weight-semibold text-lg">
                          {token.name}
                        </h6>
                        <p className="mb-0 text-xs text-secondary">
                          {token.identifier}
                        </p>
                        <p className="mb-0 mt-2 font-weight-bold text-sm text-dark">
                          {getValueFromBalance(token.balance, token.decimals)} (
                          <span>
                            {token.valueUsd
                              ? formatter.format(token.valueUsd)
                              : ''}
                          </span>
                          )
                        </p>
                      </div>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary ms-auto mb-0"
                      >
                        Send
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Tokens;
