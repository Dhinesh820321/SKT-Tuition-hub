import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__wave">
                <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
                    <path
                        d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z"
                        fill="currentColor"
                    />
                </svg>
            </div>

            <div className="footer__content">
                <div className="footer__container">
                    {/* Brand */}
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <SchoolIcon sx={{ fontSize: 36, color: '#d4a843' }} />
                            <div>
                                <h3>Sri Karthikeya</h3>
                                <span>Tuition Hub – Mannampandal</span>
                            </div>
                        </div>
                        <p className="footer__desc">
                            Nurturing young minds with quality education since 2015.
                            Building a strong academic foundation for Classes I to X.
                        </p>
                        <div className="footer__socials">
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer__social" aria-label="Facebook">
                                <FacebookIcon />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer__social" aria-label="Instagram">
                                <InstagramIcon />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="footer__social" aria-label="YouTube">
                                <YouTubeIcon />
                            </a>
                            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="footer__social footer__social--whatsapp" aria-label="WhatsApp">
                                <WhatsAppIcon />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer__section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/admission">Admission</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Classes */}
                    <div className="footer__section">
                        <h4>Our Classes</h4>
                        <ul>
                            <li>Class I – V (Primary)</li>
                            <li>Class VI – VIII (Middle)</li>
                            <li>Class IX – X (High School)</li>
                            <li>Skill Development</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer__section">
                        <h4>Contact Info</h4>
                        <ul className="footer__contact">
                            <li>
                                <LocationOnIcon sx={{ fontSize: 18 }} />
                                <span>Mannampandal, Tamil Nadu</span>
                            </li>
                            <li>
                                <PhoneIcon sx={{ fontSize: 18 }} />
                                <a href="tel:+919876543210">+91 98765 43210</a>
                            </li>
                            <li>
                                <EmailIcon sx={{ fontSize: 18 }} />
                                <a href="mailto:info@srikarthikeya.in">info@srikarthikeya.in</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>© {new Date().getFullYear()} Sri Karthikeya Tuition Hub. All rights reserved.</p>
                    <p className="footer__credits">Crafted with ❤️ for quality education</p>
                </div>
            </div>
        </footer>
    );
}
