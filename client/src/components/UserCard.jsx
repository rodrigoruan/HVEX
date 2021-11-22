import React from 'react'
import axios from 'axios'
import ReactLoading from 'react-loading'
import PropTypes from 'prop-types'

import '../css/UserCard.css'

function UserCard ({ userURL }) {
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    axios.get(userURL).then(({ data }) => setUser(data))
  }, [])

  if (!user) return <ReactLoading type="cubes" color="10486D" />

  return (
    <div className="card">
      <div className="card-img-container">
        <img src={user.avatar_url} alt="Foto do Usuário" />
      </div>
      <div className="card-info-container">
        <div className="card-user">
          <p>{user.login}</p>
          <p>{`${user.public_repos} Repo. Públicos`}</p>
        </div>

        <p>{user.email}</p>

        <p>
          De: <span>{user.location || 'Não informado'}</span>
        </p>

        <p>
          Bio: <span>{user.bio || 'Não informado'}</span>
        </p>

        <a href={user.html_url} target="_blank" rel="noreferrer">
          Acessar perfil
        </a>
      </div>
    </div>
  )
}

export default UserCard

UserCard.propTypes = {
  userURL: PropTypes.string.isRequired
}
