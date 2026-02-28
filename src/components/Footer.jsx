import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import logo from '../assets/logo.png';
import './Footer.css';

export default function Footer() {
    const fadeUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <footer className="footer-v3">
            <div className="footer-container-v3">
                <div className="footer-grid-v3">
                    {/* LEFT SIDE: BRANDING */}
                    <motion.div className="footer-brand-v3" {...fadeUp}>
                        <Link to="/" className="footer-logo-wrapper">
                            <motion.img
                                src={logo}
                                alt="Sri Karthikeya"
                                className="footer-logo-img"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            />
                        </Link>
                        <h3 className="footer-brand-name">Sri Karthikeya Tution Hub</h3>
                        <p className="footer-brand-desc">
                            CBSE | Matric | State Board | Weekend Skill Development
                        </p>
                        <div className="footer-social-links">
                            <motion.a href="#" whileHover={{ y: -5, scale: 1.1 }} className="social-icon"><FacebookIcon /></motion.a>
                            <motion.a href="https://www.instagram.com/srikarthikeya_tuition_hub20254?igsh=NXNsb2dpZDJ6dnR3" whileHover={{ y: -5, scale: 1.1 }} className="social-icon"><InstagramIcon /></motion.a>
                            <motion.a href="#" whileHover={{ y: -5, scale: 1.1 }} className="social-icon"><YouTubeIcon /></motion.a>
                            <motion.a href="https://wa.me/917639961310" whileHover={{ y: -5, scale: 1.1 }} className="social-icon wa"><WhatsAppIcon /></motion.a>
                        </div>
                    </motion.div>

                    {/* CENTER: QUICK LINKS */}
                    <motion.div className="footer-links-v3" {...fadeUp} transition={{ delay: 0.2 }}>
                        <h4>Quick Links</h4>
                        <ul className="links-list-v3">
                            <li><Link to="/">Home</Link></li>
                            <li><a href="/#classes">Our Classes</a></li>
                            <li><Link to="/staff">Our Staff</Link></li>
                            <li><Link to="/admission-form">Admission</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </motion.div>

                    {/* RIGHT SIDE: CONTACT INFO */}
                    <motion.div className="footer-contact-v3" {...fadeUp} transition={{ delay: 0.4 }}>
                        <h4>Contact Info</h4>
                        <ul className="contact-info-list">
                            <li>
                                <div className="icon-circle-v3"><LocationOnIcon /></div>
                                <span>Mayiladuthurai-Mannampandal-
                                    Tamil Nadu</span>
                            </li>
                            <li>
                                <div className="icon-circle-v3"><PhoneIcon /></div>
                                <a href="tel:+917639961310">+91 76399 61310</a>
                            </li>
                            <li>
                                <div className="icon-circle-v3"><WhatsAppIcon /></div>
                                <a href="https://wa.me/917639961310">+91 76399 61310</a>
                            </li>
                            <li>
                                <div className="icon-circle-v3"><EmailIcon /></div>
                                <a href="mailto:srikarthikeyatuitionhub@gmail.com">srikarthikeyatuitionhub@gmail.com</a>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* COPYRIGHT SECTION */}
                <div className="footer-bottom-v3">
                    <motion.div
                        className="footer-divider-v3"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                    ></motion.div>
                    <div className="copyright-text">
                        © {new Date().getFullYear()} Sri Karthikeya Tution Hub. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
