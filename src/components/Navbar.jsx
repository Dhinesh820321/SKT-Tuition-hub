import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SchoolIcon from '@mui/icons-material/School';
import './Navbar.css';

const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/admission', label: 'Admission' },
    { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [location]);

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="navbar__container">
                <Link to="/" className="navbar__logo">
                    <SchoolIcon sx={{ fontSize: 32, color: scrolled ? '#1a56db' : '#fff' }} />
                    <div className="navbar__logo-text">
                        <span className="navbar__brand">Sri Karthikeya</span>
                        <span className="navbar__tagline">Tuition & Skill Development</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <ul className="navbar__links">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
                            >
                                {link.label}
                                {location.pathname === link.path && (
                                    <motion.div className="navbar__link-underline" layoutId="underline" />
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Link to="/admission" className="navbar__cta ripple-button">
                    Enroll Now
                </Link>

                {/* Mobile Toggle */}
                <button className="navbar__toggle" onClick={() => setMobileOpen(!mobileOpen)}>
                    {mobileOpen ? (
                        <CloseIcon sx={{ fontSize: 28, color: scrolled ? '#1a56db' : '#fff' }} />
                    ) : (
                        <MenuIcon sx={{ fontSize: 28, color: scrolled ? '#1a56db' : '#fff' }} />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className="navbar__mobile"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.path}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Link
                                    to={link.path}
                                    className={`navbar__mobile-link ${location.pathname === link.path ? 'navbar__mobile-link--active' : ''}`}
                                >
                                    {link.label}
                                </Link>
                            </motion.div>
                        ))}
                        <Link to="/admission" className="navbar__mobile-cta ripple-button">
                            Enroll Now
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
