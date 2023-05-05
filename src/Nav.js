import colorLogo from './images/color-logo.png'
import whiteLogo from './images/minimal-logo.png'


const Nav = ({ minimal, setShowModal, showModal, setIsSignUp }) => {

    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(false)
    }

    const authToken = true

    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={minimal ? colorLogo : whiteLogo} />
            </div>
            {!authToken && !minimal && <button
            className='nav-button'
            onClick={handleClick}
            disabled={showModal}
            >Log In</button>}

        </nav>
    )
}

export default Nav
