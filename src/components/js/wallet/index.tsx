import React from 'react';
import { Footer } from '../../Footer';
import Navbar from '../navbar';
import ElrondChart from './elrondChart';
import InfoCards from './infoCards';
import Tokens from './tokens';
import Transactions from './transactions';

const Wallet = () => {
  return (
    <>
      <div
        className="pt-0 pb-7 bg-cover"
        style={{
          backgroundImage: 'url("/corporate-ui/header-blue-purple.jpg")',
        }}
      >
        <Navbar />
      </div>
      <div className="container-fluid py-4 px-5">
        <InfoCards />
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex align-items-center mb-4">
              <h3 className="mb-1 font-weight-bold">Wallet Details</h3>
            </div>
            <div className="d-md-flex align-items-center mb-4">
              <div className="mb-md-0 mb-3">
                <h5 className="font-weight-semibold mb-1">
                  Price Evolution, Tokens & Transactions
                </h5>
                <p className="text-sm mb-0">
                  Get detailed information on your Elrond (EGLD) wallet.
                </p>
              </div>
              <button
                type="button"
                className="btn btn-sm btn-primary btn-icon d-flex align-items-center mb-0 ms-md-auto"
              >
                <span className="btn-inner--icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width={18}
                    height={18}
                    className="me-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.97 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06L8.25 4.81V16.5a.75.75 0 01-1.5 0V4.81L3.53 8.03a.75.75 0 01-1.06-1.06l4.5-4.5zm9.53 4.28a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V7.5a.75.75 0 01.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="btn-inner--text">Trade now</span>
              </button>
            </div>
          </div>
        </div>
        <hr className="horizontal mb-4 dark"></hr>
        <div className="row">
          <div className="col-md-12 col-lg-8 mt-4">
            <ElrondChart />
          </div>
          <div className="col-md-12 col-lg-4 mt-4">
            <Tokens />
          </div>
        </div>
        <div className="row mb-6">
          <div className="col-md-12 mt-4">
            <Transactions />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Wallet;
