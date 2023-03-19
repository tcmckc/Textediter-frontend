export default function Logout(props) {
	const handleLogout = async () => {
		props.setToken("");
		props.setEmail("");
		console.log("Logging out");
	}

    return (
		<div>
			<button className="btn-small" onClick={handleLogout}>Logout</button>
		</div>
    );
}
