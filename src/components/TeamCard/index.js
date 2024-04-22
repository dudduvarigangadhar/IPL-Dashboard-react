import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  return (
    <Link to={`/team-matches/${id}`} className="link-route">
      <li className="list-container">
        <div className="team-card">
          <img className="team-logo" src={teamImageUrl} alt={name} />
          <p className="team-name">{name}</p>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
