import React, { Component } from 'react'
import Person from '../Person'

import data from './data.json'

class PersonList extends Component {

    render() {
        let users = data.map(user => <Person user={ user } key={ user.id } filterList={ this.props.filterList } />)

        return (
            <div className="person__list">
                { users }
            </div>
        )
    }
}

export default PersonList