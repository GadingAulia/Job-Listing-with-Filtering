import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import PersonList from './components/PersonList'
import Search from './components/Search'

import './css/main.css'


class Home extends Component {
    state = {
        filterList: []
    }

    render() {
        return (
            <div className="wrapper">
                <div className="header">
                    <img src={ require("./img/bg-header-desktop.svg") } alt="Desktop Header" />
                </div>
                <div className="content">
                    <Search filterList={ this.state.filterList } setFilterList={ this.setFilterList.bind(this) }/>
                    <PersonList filterList={ this.state.filterList } />
                </div>
            </div>
        )
    }

    setFilterList = newFilterList => {
        this.setState({
            filterList: newFilterList
        })
    }
}

ReactDOM.render(<Home />, document.getElementById('content'))