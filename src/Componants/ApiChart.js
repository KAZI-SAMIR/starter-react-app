import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class ApiChart extends Component {

	// Set up states for loading data
	constructor(props){
		super(props);
		this.state ={ data: [] }
	}

	// Call API upon component mount
	componentDidMount() {
		const endpoint = "https://data.cityofnewyork.us/resource/rc75-m7u3.json";

		fetch(endpoint)
			.then(response => response.json())
			.then(data => {
				this.setState( {data: data} )
			})
	}

	// Change data structure
	transformData (data) {
		let plot_data = [];

		let x = [];
		let y = [];
		data.map(each => {
			x.push(each.date_of_interest)
			y.push(each.case_count)
		})
		plot_data['x'] = x;
		plot_data['y'] = y;

		console.log(plot_data)

		return plot_data
	}

	render() {
		return (
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={{width: 320, height: 240, title: 'A Fancy Plot'}}
      />
		)
	}
}

export default ApiChart;