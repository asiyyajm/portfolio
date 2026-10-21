import './index.scss';
import Logo from '../../assets/images/logo-s.png';

const Loader = () => {
    return (
        <div className="loader-screen">
            <div className="loader-container">
                <svg
                    className="loader-ring"
                    viewBox="0 0 200 200"
                >
                    <circle
                        cx="100"
                        cy="100"
                        r="85"
                    />
                </svg>

                <img
                    src={Logo}
                    alt="ASIYA Logo"
                    className="loader-logo"
                />
            </div>
        </div>
    );
};

export default Loader;
