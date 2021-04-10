import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loginUser, setLoginUser] = useContext(UserContext);
    return (
        <div className="container" >
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <h2>Fresh T-shirt Store</h2>
                    </Link>
                    <button className="navbar-toggler">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse flex" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/home">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/orders">
                                    Orders
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/admin">
                                    Admin
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/deals">
                                    Deals
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/login" >Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link active">{loginUser.email}
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;