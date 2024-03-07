'use client'
import dynamic from "next/dynamic";
import ReactApexChart from "react-apexcharts";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false })



const Chart = ()=> {

    const option = {
        series: [44,55],
        chart: {
            type: 'donut',
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            enabled: false,
            position: 'right',
            offsetY: 0
        }
    }

    

    return (

        <div className="flex w-full">
            <ReactApexChart options={option} series={option.series}
                type="donut"
            />
        </div>
    )
}

export default Chart;