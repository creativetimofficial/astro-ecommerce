import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import { useLoggingIn } from '../../../hooks/auth/useLoggingIn';
import Wallet from './wallet';
import { useAccount } from '../../../hooks/auth/useAccount';
import DashboardContext from './dashboardContext';
import Aside from './aside';

interface IELrondData {
  getElrondChart?: string[];
  getTodayEGLDPrice?: string;
  getWalletBalance?: string;
  getAddressLegacyDelegation?: string[];
  getAddressDelegation?: string[];
  getAddress?: string;
  getTokens?: string[];
  getTransactions?: string[];
  getMetaESDT?: string[];
}

export const Dashboard = () => {
  const { isLoggedIn, isLoggingIn } = useLoggingIn();
  const address = "erd16x7le8dpkjsafgwjx0e5kw94evsqw039rwp42m2j9eesd88x8zzs75tzry";

  const [receivedStatsAPI, setReceivedStatsAPI] =
    useState<IELrondData | null>();
  const [elrondAddress, setElrondAddress] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (address.length > 0) {
      setElrondAddress(address);
    }
  }, [address]);

  useEffect(() => {
    const getElrondPrice = (data: any) => {
      let return_data = {} as any;
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'June',
        'July',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec',
      ];

      data.map((item: any) => {
        const temp_data = new Date(item[0]);
        const temp_data_f =
          months[temp_data.getMonth()] + ' ' + temp_data.getDate();
        const temp_price = item[2];

        if (return_data[temp_data_f]) {
          if (temp_price > return_data[temp_data_f]) {
            return_data[temp_data_f] = temp_price;
          }
        } else {
          return_data[temp_data_f] = temp_price;
        }
      });
      return return_data;
    };

    const getApiData = (addrs: string) => {
      const urls = [
        `https://api.coingecko.com/api/v3/coins/elrond-erd-2/ohlc?vs_currency=usd&days=7`,
        `https://api.elrond.com/economics?fields=price`,
        `https://api.elrond.com/accounts/${addrs}`,
        `https://api.elrond.com/accounts/${addrs}/delegation-legacy`,
        `https://api.elrond.com/accounts/${addrs}/delegation`,
        `https://api.elrond.com/accounts/${addrs}/tokens`,
        `https://api.elrond.com/accounts/${addrs}/transactions`,
        `https://api.elrond.com/accounts/${addrs}/nfts?type=MetaESDT`,
      ];

      Promise.all(
        urls.map((url) => fetch(url).then((resp) => resp.json()))
      ).then((data) =>
        setReceivedStatsAPI({
          getElrondChart: getElrondPrice(data[0]),
          getTodayEGLDPrice: data[1],
          getWalletBalance: data[2],
          getAddressLegacyDelegation: data[3],
          getAddressDelegation: data[4],
          getAddress: addrs,
          getTokens: data[5],
          getTransactions: data[6],
          getMetaESDT: data[7],
        })
      );
    };

    if (elrondAddress !== '') {
      getApiData(elrondAddress);
    }

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    // if (!isLoggedIn && !isLoggingIn) {
    //   Router.push('/');
    // }
  }, [elrondAddress, isLoggedIn, isLoggingIn]);

  if (loading) {
    return (
      <header className="header-2">
        <div className="page-header overflow-visible mb-0 align-items-center min-vh-100 bg-slate-900">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-7 mx-auto d-flex justify-content-center flex-column text-center">
                <h1 className="mb-4 display-4 font-weight-bolder text-white">
                  Welcome to your Elrond Wallet
                </h1>
                <h4 className="font-weight-normal text-white">
                  We are loading your data...
                </h4>
                <div className="d-flex justify-content-center mt-4">
                  <div className="dot-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <>

        <DashboardContext.Provider value={receivedStatsAPI as any}>
          <Aside />
          <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
            <Wallet />
          </main>
        </DashboardContext.Provider>
    </>
  );
};
