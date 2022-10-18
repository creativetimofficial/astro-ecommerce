import React, { useContext, useEffect, useState } from 'react';
import DashboardContext from '../dashboardContext';

const InfoCards = () => {
  const {
    getAddressDelegation,
    getTodayEGLDPrice,
    getWalletBalance,
    getAddressLegacyDelegation,
  } = useContext(DashboardContext);
  const cryptoExtension = 'EGLD';
  const [totalEGLD, setTotalEGLD] = useState(0);
  const [stakedEGLD, setStakedEGLD] = useState(0);
  const [availableEGLD, setAvailableEGLD] = useState(0);
  const [legacyEGLD, setLegacyEGLD] = useState(0);

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
      ).toFixed(4);
    }
  };

  useEffect(() => {
    let sumEgld = 0;
    let claimEgld = 0;

    getAddressDelegation &&
      getAddressDelegation.map((data: any) => {
        sumEgld += parseInt(data.userActiveStake);
      });

    // getAddressDelegation &&
    //   getAddressDelegation.map((data: any) => {
    //     claimEgld += parseInt(data.claimableRewards);
    //   });

    let tsum = parseInt(getWalletBalance.balance) + sumEgld;
    let sum = parseFloat(getValueFromBalance(tsum.toString(), 18));
    sum = parseFloat(sum.toFixed(4));

    setLegacyEGLD(
      parseFloat(
        getValueFromBalance(getAddressLegacyDelegation.userActiveStake, 18)
      )
    );
    setAvailableEGLD(
      parseFloat(getValueFromBalance(getWalletBalance.balance, 18))
    );
    setTotalEGLD(sum);
    setStakedEGLD(parseFloat(getValueFromBalance(sumEgld.toString(), 18)));
  }, [
    getAddressDelegation,
    getAddressLegacyDelegation.userActiveStake,
    getWalletBalance.balance,
    totalEGLD,
  ]);

  return (
    <>
      <div className="row mt-n6 mb-5">
        <div className="flex-grow-1 col-md-4 w-lg-20">
          <div className="card blur border border-white mb-5 shadow-xs">
            <div className="card-body p-4">
              <div className="icon icon-shape bg-white shadow shadow-xs text-center border-radius-md d-flex align-items-center justify-content-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width={18}
                  height={18}
                  strokeWidth={2}
                >
                  <path d="M2.273 5.625A4.483 4.483 0 015.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 3H5.25a3 3 0 00-2.977 2.625zM2.273 8.625A4.483 4.483 0 015.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 6H5.25a3 3 0 00-2.977 2.625zM5.25 9a3 3 0 00-3 3v6a3 3 0 003 3h13.5a3 3 0 003-3v-6a3 3 0 00-3-3H15a.75.75 0 00-.75.75 2.25 2.25 0 01-4.5 0A.75.75 0 009 9H5.25z" />
                </svg>
              </div>
              <p className="text-sm mb-1">Total</p>
              <h4 className="mb-0 font-weight-bold">
                {totalEGLD} {cryptoExtension}
              </h4>
              <p className="mb-0 text-sm mt-1">
                {formatter.format(totalEGLD * getTodayEGLDPrice.price)}
              </p>
            </div>
          </div>
        </div>
        <div className="flex-grow-1  col-md-4 w-lg-20 ">
          <div className="card blur border border-white mb-4 shadow-xs">
            <div className="card-body p-4">
              <div className="icon icon-shape bg-white shadow shadow-xs text-center border-radius-md d-flex align-items-center justify-content-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width={18}
                  height={18}
                  strokeWidth={2}
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
              </div>
              <p className="text-sm mb-1">Available</p>
              <h4 className="mb-0 font-weight-bold">
                {availableEGLD} {cryptoExtension}
              </h4>
              <p className="mb-0 mt-1 text-sm">
                {formatter.format(availableEGLD * getTodayEGLDPrice.price)}
              </p>
            </div>
          </div>
        </div>
        <div className="flex-grow-1  col-md-4 w-lg-20 ">
          <div className="card blur border border-white mb-4 shadow-xs">
            <div className="card-body p-4">
              <div className="icon icon-shape bg-white shadow shadow-xs text-center border-radius-md d-flex align-items-center justify-content-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width={18}
                  height={18}
                  strokeWidth={2}
                >
                  <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875z" />
                  <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 001.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 001.897 1.384C6.809 12.164 9.315 12.75 12 12.75z" />
                  <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 15.914 9.315 16.5 12 16.5z" />
                  <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 19.664 9.315 20.25 12 20.25z" />
                </svg>
              </div>
              <p className="text-sm mb-1">Stake Delegation</p>
              <h4 className="mb-0 font-weight-bold">
                {stakedEGLD} {cryptoExtension}
              </h4>
              <p className="mb-0 mt-1 text-sm">
                {formatter.format(stakedEGLD * getTodayEGLDPrice.price)}
              </p>
            </div>
          </div>
        </div>
        <div className="flex-grow-1  col-md-4 w-lg-20 ">
          <div className="card blur border border-white mb-4 shadow-xs">
            <div className="card-body p-4">
              <div className="icon icon-shape bg-white shadow shadow-xs text-center border-radius-md d-flex align-items-center justify-content-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width={18}
                  height={18}
                  strokeWidth={2}
                >
                  <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875z" />
                  <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 001.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 001.897 1.384C6.809 12.164 9.315 12.75 12 12.75z" />
                  <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 15.914 9.315 16.5 12 16.5z" />
                  <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 19.664 9.315 20.25 12 20.25z" />
                </svg>
              </div>
              <p className="text-sm mb-1">My Legacy Delegations</p>
              <h4 className="mb-0 font-weight-bold">
                {legacyEGLD} {cryptoExtension}
              </h4>
              <p className="mb-0 mt-1 text-sm">
                {formatter.format(legacyEGLD * getTodayEGLDPrice.price)}
              </p>
            </div>
          </div>
        </div>
        <div className="flex-grow-1 col-md-4 w-lg-20">
          <div className="card blur border border-white mb-4 shadow-xs">
            <div className="card-body p-4">
              <div className="icon icon-shape bg-white shadow shadow-xs text-center border-radius-md d-flex align-items-center justify-content-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width={18}
                  height={18}
                  strokeWidth={2}
                >
                  <path d="M5.507 4.048A3 3 0 017.785 3h8.43a3 3 0 012.278 1.048l1.722 2.008A4.533 4.533 0 0019.5 6h-15c-.243 0-.482.02-.715.056l1.722-2.008z" />
                  <path
                    fillRule="evenodd"
                    d="M1.5 10.5a3 3 0 013-3h15a3 3 0 110 6h-15a3 3 0 01-3-3zm15 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2.25.75a.75.75 0 100-1.5.75.75 0 000 1.5zM4.5 15a3 3 0 100 6h15a3 3 0 100-6h-15zm11.25 3.75a.75.75 0 100-1.5.75.75 0 000 1.5zM19.5 18a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-sm mb-1">Staked Nodes</p>
              <h4 className="mb-0 font-weight-bold">0 EGLD</h4>
              <p className="mb-0 mt-1 text-sm">$0.00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoCards;
