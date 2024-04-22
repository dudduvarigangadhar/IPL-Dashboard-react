import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    id: '',
    teamBannerUrl: '',
    latestMatchDetails: [],
    recentMatchesDetails: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const latestMatchDetails = data.latest_match_details
    const recentMatches = data.recent_matches

    const updatedLatestMatchDetails = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }

    const updatedRecentMatches = recentMatches.map(eachMatch => ({
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      matchStatus: eachMatch.match_status,
      result: eachMatch.result,
      id: eachMatch.id,
    }))

    this.setState({
      teamBannerUrl: data.team_banner_url,
      id: {id},
      isLoading: false,
    })
    this.setState({latestMatchDetails: updatedLatestMatchDetails})
    this.setState({recentMatchesDetails: updatedRecentMatches})
  }

  teamMatchesRender = () => {
    const {
      teamBannerUrl,
      id,
      latestMatchDetails,
      recentMatchesDetails,
      isLoading,
    } = this.state

    return (
      <div className={`${id.id} team-matches-container`}>
        <div>
          {isLoading ? (
            <div>
              <Loader type="Oval" color="#00BFFf" height={50} width={50} />
            </div>
          ) : (
            <div>
              <div className="team-result-container">
                <img
                  src={teamBannerUrl}
                  alt="team banner"
                  className="team-banner-image"
                />
                <p className="latest-matches">Latest Matches</p>
              </div>
              <div>
                <ul>
                  <LatestMatch
                    eachLatestMatch={latestMatchDetails}
                    key={latestMatchDetails.id}
                  />
                </ul>
              </div>
              <div>
                <ul className="recent-match-details-container">
                  {recentMatchesDetails.map(eachMatch => (
                    <MatchCard
                      matchCardDetails={eachMatch}
                      key={eachMatch.id}
                    />
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  render() {
    return this.teamMatchesRender()
  }
}

export default TeamMatches
