import whiteLogo from "./images/minimal-logo.png";
import colorLogo from "./images/color-logo.png";

const Nav = ({ authToken, minimal, setShowModal, showModal, setIsSignUp }) => {
    const handleClick = () => {
        setShowModal(true);
        setIsSignUp(false);
    };

    return (
        <nav>
            <div className="logo-container">
                <img
                    className="logo"
                    src={minimal ? colorLogo : whiteLogo}
                    alt="logo"
                />
            </div>
            {!authToken && !minimal && (
                <button
                    className="nav-button"
                    onClick={handleClick}
                    disabled={showModal}
                >
                    Log in
                </button>
            )}
        </nav>
    );
};
export default Nav;
