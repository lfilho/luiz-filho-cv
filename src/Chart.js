import React, { Component } from 'react'
import Highcharts from 'highcharts'

class Chart extends Component {
    componentDidMount() {
        this.props.options.credits = false

        if (this.props.modules) {
            this.props.modules.forEach(module => module(Highcharts))
        }
        console.log('mounted')
        const type = this.props.type || 'Chart'
        this.chart = new Highcharts[type](
            this.props.container,
            this.props.options
        )
    }

    componentWillUnmount() {
        this.chart.destroy()
    }

    render() {
        return <div id={this.props.container}></div>
    }
}

export default Chart
