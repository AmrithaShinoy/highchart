import React, { Component } from 'react'
import ReactHighcharts from 'react-highcharts/ReactHighstock.src'
//import priceData from './assets/btcdata1.json'
import data from './assets/data.json'
import moment from 'moment'

export default class App extends Component {
  render() {
    const options = {style: 'currency', currency: 'USD'};
    const numberFormat = new Intl.NumberFormat('en-US', options);
    const priceData = Array.from (data.response,(item)=>([Date.parse(item.day),item.bookingvalue]));
    
    const configPrice = {
      yAxis: [{
        offset: 20,
        labels: {
          formatter: function () { return numberFormat.format(this.value) },
          x: -15,
          style: { "color": "#000", "position": "absolute"},
          align: 'left'
        },
      }, ],

      xAxis: { type: 'date',},
    
      series: [{
        name: 'Booking Value',
        type: 'spline',
  
        data: priceData,
        tooltip: {
          valueDecimals: 2
        },}]
    };
    return (
      <div>
         <ReactHighcharts config = {configPrice}></ReactHighcharts>
      </div>
    )
  }
}
