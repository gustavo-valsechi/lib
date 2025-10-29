export interface IChart {
    content: Array<any>;
    yAxis: Array<any>;
    xAxis: Array<any>;
    min?: number;
    max?: number;
    colors?: Array<string>;
    height?: number;
}
