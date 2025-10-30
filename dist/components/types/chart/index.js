"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chart = Chart;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("./styles");
const _contexts_1 = require("@contexts");
const dynamic_1 = __importDefault(require("next/dynamic"));
const lodash_1 = __importDefault(require("lodash"));
const ApexChart = (0, dynamic_1.default)(() => import("react-apexcharts").then((mod) => mod.default), { ssr: false });
function Chart(props) {
    const { content: themeContent } = (0, _contexts_1.useTheme)();
    const monitor = props.content || [];
    const series = lodash_1.default.map(props.yAxis, (value, key) => ({
        name: key || "",
        data: lodash_1.default.map(monitor, (data) => lodash_1.default.isFunction(value) ? value(data) : 0),
    }));
    const options = {
        colors: lodash_1.default.map(props.colors || [], (value) => themeContent[value] || value || themeContent.secondary),
        dataLabels: { enabled: false },
        stroke: { curve: "smooth", width: 2, },
        fill: { gradient: { opacityFrom: 0.9, opacityTo: 0.8 } },
        legend: { show: false },
        chart: { toolbar: { show: false } },
        yaxis: {
            min: props.min,
            max: props.max,
            labels: { style: { colors: lodash_1.default.map(monitor, () => themeContent.t6) } }
        },
        xaxis: {
            categories: lodash_1.default.map(monitor, (data) => lodash_1.default.isFunction(props.xAxis) ? props.xAxis(data) : ""),
            labels: { style: { colors: lodash_1.default.map(monitor, () => themeContent.t6) } }
        },
    };
    return ((0, jsx_runtime_1.jsx)(styles_1.Container, { children: (0, jsx_runtime_1.jsx)(ApexChart, { options: options, series: series, type: "area", height: props.height || 200, width: "100%" }) }));
}
