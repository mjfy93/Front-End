import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    📚 Biblioteca
                </Link>
                
                <div className="nav-menu">
                    <Link to="/" className="nav-link">Inicio</Link>
                    
                    {user ? (

                        <>
                            <Link to="/library" className="nav-link">Mi Biblioteca</Link>
                            <Link to="/profile" className="nav-link">Mi Perfil</Link>
                            <button 
                                onClick={handleLogout}
                                className="nav-link logout-btn"
                            >
                                Cerrar Sesión
                            </button>
                            <span className="user-welcome">
                                ¡Hola, {user.username}!
                            </span>
                        </>
                    ) : (

                        <>
                            <Link to="/register" className="nav-link">Registrarse</Link>
                            <Link to="/login" className="nav-link">Iniciar Sesión</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;