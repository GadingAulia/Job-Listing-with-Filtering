import React, { Component } from 'react'
import './css/main.css'

class Skill extends Component {
    removeSkill = _ => {
        this.props.removeSkill(this.props.skillIndex)
    }

    render() {
        return (
            <div className="skill__block">
                <div className="skill-name__block">
                    <p>{ this.props.skillName }</p>
                </div>
                <div className="clear-skill__block" onClick={ this.removeSkill }>
                    <img src={ require('./img/icon-remove.svg') } alt="Icon Remove" />
                </div>
            </div>
        )
    }
}

export default Skill