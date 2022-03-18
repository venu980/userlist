import './index.css'

const UserProfile = props => {
  const {userDetails} = props
  const {id, title, body} = userDetails

  return (
    <li className="lists">
      <div>
        <h1>{id}</h1>
      </div>
      <div>
        <p>{title}</p>
        <p> {body}</p>
      </div>
    </li>
  )
}

export default UserProfile
