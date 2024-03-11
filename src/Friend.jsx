export default function Friend({friend}){
    const {name, username, email} = friend;
    return (
        <div className="friend">
            <h4>Name: {name}</h4>
            <p>User Name: {username}</p>
            <p>Email: {email}</p>
        </div>
    )
}