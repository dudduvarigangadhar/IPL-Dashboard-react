import './index.css'

const LatestMatch = props => {
  const {eachLatestMatch} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    venue,
    result,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = eachLatestMatch
  return (
    <li className="latest-match-card-container">
      <div className="latest-match-card">
        <div className="competing-team-container">
          <p className="competing-match-team-name">{competingTeam}</p>
          <p>{date}</p>
          <p className="competing-match-venue">{venue}</p>
          <p>{result}</p>
        </div>
        <div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="latest-match-image"
          />
        </div>

        <div className="competing-innings">
          <p className="innings-heading">First Innings</p>
          <p className="match-result">{firstInnings}</p>
          <p className="innings-heading">Second Innings</p>
          <p className="match-result">{secondInnings}</p>
          <p className="innings-heading">Man Of The Match</p>
          <p className="match-result">{manOfTheMatch}</p>
          <p className="innings-heading">Umpires</p>
          <p className="match-result">{umpires}</p>
        </div>
      </div>
    </li>
  )
}

export default LatestMatch
