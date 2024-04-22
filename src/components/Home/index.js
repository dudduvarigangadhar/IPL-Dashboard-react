import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamApiData: [], isLoading: true}

  componentDidMount() {
    this.getTeamApi()
  }

  getTeamApi = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    // console.log(teams)
    const updatedTeamData = teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({teamApiData: updatedTeamData, isLoading: false})
  }

  render() {
    const {teamApiData, isLoading} = this.state
    // console.log(teamApiData)
    return (
      <div className="home-bg-container">
        <div className="ipl-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="home-main-heading">IPL Dashboard</h1>
        </div>
        <ul className="ipl-team-container">
          {isLoading ? (
            <div>
              <Loader type="TailSpin" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            teamApiData.map(eachTeam => (
              <TeamCard teamDetails={eachTeam} key={eachTeam.id} />
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default Home
