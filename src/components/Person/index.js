import React, { Component } from 'react'

import './css/main.css'
import './css/mobile.css'

class Person extends Component {
    state = {
        isVisible: true
    }

    userSkills = []

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.checkVisibility(nextProps.filterList)
    }

    render() {
        if (!this.state.isVisible)
            return ''

        const isNewSpan = this.props.user.new && <span className="person__account-info person__account-info--green">New!</span>
        const isFeaturedSpan = this.props.user.featured && <span className="person__account-info person__account-info--black">Featured</span>
        this.userSkills = [this.props.user.role, this.props.user.level].concat(this.props.user.languages).concat(this.props.user.tools)

        return (
            <div className={ "person__block" + (this.props.user.featured ? " person__block--featured" : '') }>
                <div className="person__main-info">
                    <img className="person__ava" src={ require('' + this.props.user.logo) } alt="Person Ava" />
                    <div className="person__info">
                        <div className="person__company">
                            <p className="person__company-name">{ this.props.user.company }</p>
                            { isNewSpan }
                            { isFeaturedSpan }
                        </div>
                        <div className="person__job">
                            <h2 className="person__job-name">{ this.props.user.position }</h2>
                        </div>
                        <div className="person__extra-info">
                            <span className="person__extra-info-data person__extra-info">{ this.props.user.postedAt }</span>
                            <span className="extra-info__circle"></span>
                            <span className="person__extra-info-data person__extra-info-data-circle">{ this.props.user.contract }</span>
                            <span className="extra-info__circle"></span>
                            <span className="person__extra-info-data person__extra-info">{ this.props.user.location }</span>
                        </div>
                    </div>
                </div>
                <div className="person__skills-list">
                    {
                        this.userSkills.map((skill, index) => <span key={ this.props.user.id.toString() + index.toString() } className="person__skill">{skill}</span>)
                    }
                </div>
            </div>
        )
    }

    checkVisibility = filterList => {
        let matchFound = 0

        for (let filter of filterList)
            if (this.userSkills.includes(filter))
                matchFound++

        this.setState({
            isVisible: filterList.length ? matchFound === filterList.length : true
        })
    }
}

export default Person