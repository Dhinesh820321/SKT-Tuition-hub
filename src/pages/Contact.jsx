import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';

import './Contact.css';

const contactInfo = [
    {
        icon: <LocationOnIcon />,
        title: 'Visit Us',
        lines: ['Mayiladuthurai District','Mannampandal', 'Tamil Nadu, India'],
    },
    {
        icon: <PhoneIcon />,
        title: 'Call Us',
        lines: ['+91 76399 61310'],
        link: 'tel:+917639961310',
       
    },
    {
        icon: <EmailIcon />,
        title: 'Email Us',
        lines: ['srikarthikeyatuitionhub@gmail.com'],
        link: 'mailto:srikarthikeyatuitionhub@gmail.com',
    },
    {
        icon: <AccessTimeIcon />,
        title: 'Working Hours',
        lines: ['Morning: 6:00 AM – 8:00 AM', 'Evening: 6:00 PM – 9:00 PM'],
    },
];

export default function Contact() {
    const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) return;

        const msg = encodeURIComponent(
            `*Contact Inquiry*\n\n👤 ${form.name}\n📞 ${form.phone}\n📧 ${form.email || 'N/A'}\n💬 ${form.message}`
        );
        window.open(`https://wa.me/917639961310?text=${msg}`, '_blank');
        setSent(true);
    };

    return (
        <PageTransition>
            {/* Header */}
            <section className="contact-hero animated-gradient">
                <div className="contact-hero__content">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Get in <span className="gold-accent">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        We'd love to hear from you. Reach out for any queries or visit us!
                    </motion.p>
                </div>
            </section>

            <section className="contact section-padding">
                <div className="container">
                    {/* Contact Cards */}
                    <div className="contact__cards">
                        {contactInfo.map((info, i) => (
                            <ScrollReveal key={i} delay={i * 0.1} direction="scale">
                                <motion.div
                                    className="contact-info-card glass-card"
                                    whileHover={{ y: -6, boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }}
                                >
                                    <div className="contact-info-card__icon">{info.icon}</div>
                                    <h4>{info.title}</h4>
                                    {info.lines.map((line, j) => (
                                        info.link ? (
                                            <a key={j} href={info.link}>{line}</a>
                                        ) : (
                                            <p key={j}>{line}</p>
                                        )
                                    ))}
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>

                    {/* Form + Map */}
                    <div className="contact__grid">
                        <ScrollReveal direction="left" delay={0.2}>
                            <div className="contact__form-wrapper glass-card">
                                {!sent ? (
                                    <form className="contact__form" onSubmit={handleSubmit}>
                                        <h3>Send us a Message</h3>
                                        <div className="contact__field">
                                            <TextField
                                                fullWidth label="Your Name" name="name" required
                                                value={form.name} onChange={handleChange}
                                                variant="outlined" size="small"
                                            />
                                        </div>
                                        <div className="contact__row">
                                            <TextField
                                                fullWidth label="Phone Number" name="phone" required
                                                value={form.phone} onChange={handleChange}
                                                variant="outlined" size="small"
                                            />
                                            <TextField
                                                fullWidth label="Email (Optional)" name="email"
                                                value={form.email} onChange={handleChange}
                                                variant="outlined" size="small"
                                            />
                                        </div>
                                        <div className="contact__field">
                                            <TextField
                                                fullWidth label="Your Message" name="message" required
                                                value={form.message} onChange={handleChange}
                                                variant="outlined" size="small"
                                                multiline rows={4}
                                            />
                                        </div>
                                        <Button
                                            type="submit" variant="contained" size="large" fullWidth
                                            endIcon={<SendIcon />}
                                            className="ripple-button"
                                            sx={{
                                                background: 'linear-gradient(135deg, #1a56db, #1d4ed8)',
                                                borderRadius: '12px', padding: '12px',
                                                fontWeight: 600, fontSize: '1rem', textTransform: 'none',
                                                boxShadow: '0 6px 24px rgba(26, 86, 219, 0.3)',
                                                '&:hover': {
                                                    background: 'linear-gradient(135deg, #1d4ed8, #1e3a8a)',
                                                    boxShadow: '0 8px 30px rgba(26, 86, 219, 0.4)',
                                                },
                                            }}
                                        >
                                            Send via WhatsApp
                                        </Button>
                                    </form>
                                ) : (
                                    <motion.div
                                        className="contact__sent"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ type: 'spring' }}
                                    >
                                        <CheckCircleIcon sx={{ fontSize: 64, color: '#22c55e' }} />
                                        <h3>Message Sent!</h3>
                                        <p>We'll get back to you shortly.</p>
                                        <Button variant="outlined" onClick={() => setSent(false)} sx={{ mt: 2, borderRadius: '12px' }}>
                                            Send Another
                                        </Button>
                                    </motion.div>
                                )}
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="right" delay={0.3}>
                            <div className="contact__map glass-card">
                                <iframe
                                    title="Sri Karthikeya Location"

                                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3915.151724346669!2d79.68196397504659!3d11.102067789067169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDA2JzA3LjQiTiA3OcKwNDEnMDQuMyJF!5e0!3m2!1sen!2sin!4v1772191406133!5m2!1sen!2sin" 
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, borderRadius: '16px' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Direct WhatsApp CTA */}
                    <ScrollReveal delay={0.2}>
                        <div className="contact__whatsapp-cta">
                            <WhatsAppIcon sx={{ fontSize: 40, color: '#25d366' }} />
                            <div>
                                <h3>Chat with Us Instantly</h3>
                                <p>Got quick questions? Message us on WhatsApp for an immediate response.</p>
                            </div>
                            <a
                                href="https://wa.me/917639961310?text=Hi%2C%20I%20have%20a%20query%20about%20Sri%20Karthikeya%20Tuition%20Hub"
                                target="_blank"
                                rel="noreferrer"
                                className="hero__btn hero__btn--primary ripple-button"
                                style={{ whiteSpace: 'nowrap' }}
                            >
                                Open WhatsApp
                            </a>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </PageTransition>
    );
}
