import Nav from "../Nav"


const Home = () => {

    const handleClick = () => {
        console.log("clicked")
    }
    const authToken = false
    return (
        <div className="overlay">
            <Nav minimal={false} authToken={authToken}/>
            <div className="home">
                <h1>Swipe Right</h1>
                <button className="primary-button" onClick={handleClick}>
                    {authToken ? 'Signout' : 'Create Account'}
                </button>
            </div>
        </div>
    )
}

export default Home
