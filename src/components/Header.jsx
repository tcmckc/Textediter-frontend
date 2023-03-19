import Logout from './Logout';

export default function Header(props) {
    if (props.email) {
      return (
        <header className="header-loggedIn">
          <p>You are logged in as: {props.email}</p>
          <Logout setToken={props.setToken} setEmail={props.setEmail} />
        </header>
      );
    } else {
      return (
        <header className="header">
          <h1>Welcome to TEXT EDITOR</h1>
          <p>Please login/register to continue.</p>
        </header>
      );
    }
  }
  