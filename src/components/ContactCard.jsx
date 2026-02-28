import React from 'react';
import { motion } from 'framer-motion';

const ContactCard = ({ icon, label, value, link, type, delay }) => {
    return (
        <motion.a
            href={link}
            target={type === 'external' ? '_blank' : '_self'}
            rel={type === 'external' ? 'noopener noreferrer' : ''}
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

            <style jsx>{`
                .contact-card-v3 {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                    padding: 1.5rem;
                    border-radius: 1.5rem;
                    text-decoration: none;
                    background: white;
                    border: 1px solid rgba(0, 0, 0, 0.05);
                    transition: all 0.3s ease;
                }

                .contact-icon-wrapper {
                    width: 60px;
                    height: 60px;
                    border-radius: 1.25rem;
                    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    box-shadow: 0 8px 16px rgba(59, 130, 246, 0.2);
                }

                .contact-info-text {
                    display: flex;
                    flex-direction: column;
                }

                .contact-label {
                    font-size: 0.85rem;
                    color: #94a3b8;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .contact-value {
                    font-size: 1.15rem;
                    color: #1e293b;
                    font-weight: 700;
                }
            `}</style>
        </motion.a>
    );
};

export default ContactCard;
