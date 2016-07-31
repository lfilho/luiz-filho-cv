import React, { Component } from 'react'
import Chart from '../../Chart'

class Languages extends Component {
    render() {
        const languages = this.props.data.map((entry, i) => (
            <li key={i}>
                <i className='fa-li fa fa-language'></i>
                <span> {entry.name} — {entry.level}</span>
            </li>
        ))

        const chartOptions = {
            series: [{ data: [ 1,2,3 ]}]
        }

        return (
            <section>
                <h2 id='languages'>Languages</h2>

                Chart:
                <Chart container='language-chart' options={chartOptions}/>

                <ul className='languages fa-ul flex-container'>
                    {languages}
                </ul>
            </section>
        )
    }
}

export default Languages
