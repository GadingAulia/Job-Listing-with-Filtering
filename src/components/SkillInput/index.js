import React, { Component } from 'react'

class SkillInput extends Component {
    state = {
        skillName: ''
    }

    render() {
        return (
            <input type="text" name="filter-name__input" className="filter-name__input" value={ this.state.skillName } onChange={ this.setValue } onKeyDown={ this.filter } />
        )
    }

    setValue = e => {
        this.setState({
            skillName: e.target.value
        })
    }

    addSkill = _ => {
        this.props.addSkill(this.state.skillName)
        this.setState({
            skillName: ''
        })
    }

    filter = e => {
        if (e.keyCode === 13)
        {
            if (this.state.skillName.length !== 0)
                this.addSkill()
        }
    }
}

export default SkillInput