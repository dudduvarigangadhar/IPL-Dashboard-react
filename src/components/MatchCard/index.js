import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    matchStatus,
    result,
  } = matchCardDetails

  const competingStatus = matchStatus === 'Won' ? 'won' : 'lose'
  return (
    <li className="recent-match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-logo"
      />
      <p className="competing-team">{competingTeam}</p>
      <p className="competing-result">{result}</p>
      <p className={competingStatus}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
