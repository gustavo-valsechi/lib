"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { Container } from "./styles";
import { useTheme } from "contexts";
import dynamic from "next/dynamic";
import _ from "lodash";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
export function Chart(props) {
    const { content: themeContent } = useTheme();
    const monitor = props.content || [];
    const series = _.map(props.yAxis, (value, key) => ({
        name: key || "",
        data: _.map(monitor, (data) => _.isFunction(value) ? value(data) : 0),
    }));
    const options = {
        colors: _.map(props.colors || [], (value) => themeContent[value] || value || themeContent.secondary),
        dataLabels: { enabled: false },
        stroke: { curve: "smooth", width: 2, },
        fill: { gradient: { opacityFrom: 0.9, opacityTo: 0.8 } },
        legend: { show: false },
        chart: { toolbar: { show: false } },
        yaxis: {
            min: props.min,
            max: props.max,
            labels: { style: { colors: _.map(monitor, () => themeContent.t6) } }
        },
        xaxis: {
            categories: _.map(monitor, (data) => _.isFunction(props.xAxis) ? props.xAxis(data) : ""),
            labels: { style: { colors: _.map(monitor, () => themeContent.t6) } }
        },
    };
    return (_jsx(Container, { children: _jsx(ApexChart, { options: options, series: series, type: "area", height: props.height || 200, width: "100%" }) }));
}
