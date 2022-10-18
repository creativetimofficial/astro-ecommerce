import React, { useContext, useEffect, useState } from 'react';
import DashboardContext from '../dashboardContext';

import { Line } from 'react-chartjs-2';
import type { ChartOptions } from 'chart.js';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ScriptableContext,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const ElrondChart = () => {
  const { getElrondChart, getTodayEGLDPrice } = useContext(DashboardContext);
  const [egldTodayPrice, setEgldTodayPrice] = useState(getTodayEGLDPrice.price);
  const [priceIncreaseColor, setPriceIncreaseColor] = useState('success');
  const [fillIncreaseColor, setFillIncreaseColor] = useState('#67C23A');
  const [priceIncrease, setPriceIncrease] = useState(0);

  const getPreviousDay = (date = new Date()) => {
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
    const previous = new Date(date.getTime());
    previous.setDate(date.getDate() - 1);
    const previousDay = months[previous.getMonth()] + ' ' + previous.getDate();

    return previousDay;
  };

  const yesterday = getPreviousDay();
  const oldPrice = getElrondChart[yesterday];

  useEffect(() => {
    setPriceIncrease(
      parseFloat((((egldTodayPrice - oldPrice) / oldPrice) * 100).toFixed(2))
    );
  }, [egldTodayPrice, oldPrice]);

  useEffect(() => {
    if (priceIncrease < 0) {
      setPriceIncreaseColor('danger');
      setFillIncreaseColor('#ea4e3d');
    }
  }, [getElrondChart, priceIncrease]);

  const optionsLine: ChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      // show legends for our graph
      legend: {
        display: false,
        position: 'top',
        align: 'end',
        labels: {
          boxWidth: 7,
          boxHeight: 7,
          pointStyle: 'circle',
          usePointStyle: true,
          color: '#59647e',
          font: {
            weight: '500',
          },
        },
      },
      tooltip: {
        boxPadding: 4,
        boxWidth: 8,
        boxHeight: 8,
        usePointStyle: true,
        backgroundColor: 'white',
        bodyColor: '#59647e',
        titleColor: '#59647e',
        padding: 12,
        borderColor: 'rgba(89, 100, 126, .2)',
        borderWidth: 1,
        bodyFont: {
          weight: '500',
        },
      },
    },
    //   show the x and y scales

    scales: {
      x: {
        grid: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          display: true,
          color: '#59647e',
          font: {
            size: 12,
            family: 'Montserrat ,sans-serif',
          },
        },
      },
      y: {
        display: true,
        grid: {
          borderDash: [5, 5],
          drawBorder: false,
          display: true,
          color: 'rgba(89, 100, 126, .1)',
        },
        ticks: {
          stepSize: 1,
          display: true,
          callback: (value: any) => {
            return value;
          },
          color: '#59647e',
          font: {
            size: 12,
            family: 'Montserrat ,sans-serif',
          },
        },
      },
    },
    // show tooltip on hover near the points
    interaction: {
      intersect: false,
      mode: 'index',
    },
    //   animate in
    animation: {
      duration: 1,
    },
  };

  const data = () => {
    return {
      labels: [],
      datasets: [
        {
          label: 'Volume',
          data: getElrondChart,
          fill: 'start',
          backgroundColor: (context: ScriptableContext<'line'>) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 230, 0, 50);
            gradient.addColorStop(1, 'rgba(27,70,194, 0.4)');
            gradient.addColorStop(0.2, 'rgba(72, 72, 176, 0.0)');
            gradient.addColorStop(0, 'rgba(155, 119, 255, 0)');
            return gradient;
          },
          borderColor: '#1b46c2',
          borderWidth: 2,
          pointRadius: 3,
          pointBorderColor: '#1b46c2',
          pointBackgroundColor: '#1b46c2',
          tension: 0.3,
        },
      ],
    };
  };

  return (
    <>
      <div className="card shadow-xs border">
        <div className="card-header pb-0">
          <div className="d-sm-flex align-items-center mb-3">
            <div>
              <h6 className="font-weight-semibold text-lg mb-0">
                Elrond eGold
              </h6>
              <p className="text-sm mb-sm-0 mb-2">
                Details about the price evolution.
              </p>
            </div>
            <div className="ms-auto d-flex">
              <div
                className="btn-group"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio3"
                  autoComplete="off"
                />
                <label
                  className="btn btn-white py-2 px-3 mb-0"
                  htmlFor="btnradio3"
                >
                  Week
                </label>
              </div>
            </div>
          </div>
          <div className="d-sm-flex align-items-center">
            <h6 className="mb-0 font-weight-semibold">
              1 EGLD = {egldTodayPrice ? '$' + egldTodayPrice : ''}
            </h6>
            <span
              className={`badge badge-sm border border-${priceIncreaseColor} text-${priceIncreaseColor} bg-${priceIncreaseColor} border-radius-sm ms-sm-3 px-2`}
            >
              {priceIncrease} %
            </span>
          </div>
        </div>
        <div className="card-body p-3 mt-7">
          <div className="chart mt-n6" style={{ height: '300px' }}>
            <Line data={data()} options={optionsLine as any} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ElrondChart;
