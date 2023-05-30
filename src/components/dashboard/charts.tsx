/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import {
  Navbar,
  MobileNav,
  Button,
  IconButton,
  Typography,
  Input,
} from "@material-tailwind/react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

function NavItem({ children, ...rest }) {
  return (
    <li {...rest}>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="gray"
        className="mtr-font-normal mtr-transition-colors hover:mtr-text-gray-900"
      >
        {children}
      </Typography>
    </li>
  );
}

export function HeroSectionFour() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  const ariaChartData = {
    series: [
      {
        name: "Line 1",
        data: [100, 105, 110, 115, 110, 120, 125],
      },
      {
        name: "Line 2",
        data: [70, 75, 80, 85, 82, 90, 92],
      },
      {
        name: "Line 3",
        data: [50, 55, 60, 57, 70, 75, 72],
      },
    ],
    options: {
      dataLabels: {
        enabled: false,
      },
      colors: ["#64b5f6", "#2196f3", "#1976d2"],
      xaxis: {
        axisBorder: {
          show: false,
        },
      },
      legend: {
        show: false,
      },
      chart: {
        toolbar: {
          show: false,
        },
      },
      grid: {
        borderColor: "#eceff1",
      },
      stroke: {
        width: 1.5,
      },
    },
  };


  const menuOpenIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="mtr-h-6 mtr-w-6 mtr-mx-auto"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );

  const menuCloseIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className="mtr-h-6 mtr-w-6 mtr-mx-auto"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );

  return (
    <>
        <div className="mtr-container mtr-mx-auto -mtr-mt-28 mtr-px-4 mtr-pb-16">
          <div className="mtr-relative mtr-mx-auto mtr-max-w-screen-lg mtr-rounded-2xl mtr-bg-white mtr-pt-8 mtr-pr-2.5 mtr-shadow-2xl mtr-shadow-gray-500/40">
            <Typography variant="h6" className="mtr-pl-6">
              Users over time
            </Typography>
            <Chart
              type="area"
              series={ariaChartData.series}
              options={ariaChartData.options}
              height={400}
            />
          </div>
        </div>
    </>
  );
}

export default HeroSectionFour;
