import React, { Component } from 'react'

class CollapsibleComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { isExpanded: false }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault()

        this.setState(prevState => ({
            isExpanded: !prevState.isExpanded
        }))
    }

    render() {
        const isExpanded = this.state.isExpanded
        const label = this.props.label ? this.props.label + ' ' : ''

        const expandedElement = (
            <div>
                {this.props.expandTo}

                <small>
                    <a href="#expand" onClick={this.handleClick}>
                        <i className='fa fa-angle-up'></i>
                        Collapse all {label}
                    </a>
                </small>
            </div>
        )
        const collapsedElement = (
            <small>
                <a href="#expand" onClick={this.handleClick}>
                    Expand to see all {label}
                    <i className='fa fa-angle-down'></i>
                </a>
            </small>
        )

        return isExpanded ? expandedElement : collapsedElement
    }
}

export default CollapsibleComponent
