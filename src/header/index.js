import './header.css';

const Header = (props) => {
    return (
        <div className="navbar navbar-fixed">
            <div className="nav-brand">
                GIS Developer Dave
            </div>

            <div className="nav-list">
                <div className="nav-list-item">
                    <a className="nav-link" href="#about">About</a>
                </div>

                <div className="nav-list-item">
                    <a className="nav-link" href="#projects">Projects</a>
                </div>

                <div className="nav-list-item">
                    <a className="nav-link" href="#styles-section">Mapbox Styles</a>
                </div>

                <div className="nav-list-item">
                    <a className="nav-link" href="#blog">Blog</a>
                </div>

            </div>
        </div>
    )
}


export default Header;