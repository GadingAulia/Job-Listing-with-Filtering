import React, { Component } from 'react'

import Skill from '../Skill'
import SkillInput from '../SkillInput'

import './css/main.css'

class Search extends Component {
    state = {
        skills: [],
    }

    render() {
        return (
            <div className="search__block">
                <div className="filters-name__block">
                    { this.state.skills }

                    <SkillInput addSkill={ this.addSkill.bind(this) } />
                </div>
                <div className="clear__block">
                    <button className="clear__button" onClick={ this.clear }>Clear</button>
                </div>
            </div>
        )
    }

    _updateFilterList = _ => {
        this.props.setFilterList(this.state.skills.map(el => el.props.skillName))
    }

    clear = _ => {
        this.setState({
            skills: []
        }, _ => {
            this._updateFilterList()
        })
    }

    addSkill = skill => {
        this.setState({
            skills: this.state.skills.concat([<Skill skillName={ skill } removeSkill={ this.removeSkill.bind(this) } key={ this.state.skills.length } skillIndex={ this.state.skills.length } />])
        }, _ => {
            this._updateFilterList()
        })
    }

    removeSkill = skillIndex => {
        const updatedSkills = this.state.skills.slice()
        updatedSkills.splice(updatedSkills.findIndex(el => el.props.skillIndex === skillIndex), 1)
        this.setState({
            skills: updatedSkills.map((el, index) => <Skill skillName= { el.props.skillName } removeSkill= { this.removeSkill.bind(this) } key={ index } skillIndex={ index } />)
        }, _ => {
            this._updateFilterList()
        })
    }
}

export default Search