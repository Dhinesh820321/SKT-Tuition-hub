import React from 'react';
import { motion } from 'framer-motion';
import './ContactCard.css';

const ContactCard = ({ icon, label, value, link, type, delay }) => {
    return (
        <motion.a
            href={link}
            target={type === 'external' ? '_blank' : '_self'}
            rel={type === 'external' ? 'noopener noreferrer' : undefined}
            className="contact-card-v3 glass-morphism"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
        >
            <motion.div
                className="contact-icon-wrapper"
                whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
            >
                {icon}
            </motion.div>
            <div className="contact-info-text">
                <span className="contact-label">{label}</span>
                <span className="contact-value">{value}</span>
            </div>
        </motion.a>
    );
};

export default ContactCard;
