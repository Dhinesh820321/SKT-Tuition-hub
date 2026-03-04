import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { staffData } from '../data/staffData';
import PageTransition from '../components/PageTransition';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StarIcon from '@mui/icons-material/Star';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

import './StaffProfile.css';

const Particles = () => {
    const [particles] = useState(() => {
        if (typeof window === 'undefined') return [];
        return [...Array(15)].map((_, i) => ({
            id: i,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
            opacity: Math.random() * 0.3 + 0.1,
            animY: Math.random() * -200 - 100,
            animOpacity: Math.random() * 0.5 + 0.2,
            duration: Math.random() * 8 + 8
        }));
    });

    if (particles.length === 0) return null;

    return (
        <div className="particles-container">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="particle"
                    initial={{
                        x: p.x,
                        y: p.y,
                        scale: p.scale,
                        opacity: p.opacity
                    }}
                    animate={{
                        y: [null, p.animY],
                        opacity: [null, p.animOpacity, 0]
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    );
};

// Motion Variants
const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
};

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const zoomIn = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};


const StaffProfile = () => {
    const { id } = useParams();
    const staff = staffData.find(s => s.id === id);

    if (!staff) {
        return (
            <div className="dark-profile-page flex-center">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Expert Not Found</h2>
                    <Link to="/staff" className="premium-btn ripple-button">
                        <ArrowBackIcon /> Back to Staff List
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <PageTransition>
            <div className="dark-profile-page">
                <div className="dark-profile-bg"></div>
                <Particles />

                <div className="profile-container container">
                    {/* BACK NAVIGATION */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="back-btn-wrapper"
                    >
                        <Link to="/staff" className="back-link-premium">
                            <ArrowBackIcon fontSize="small" /> Back to Staff List
                        </Link>
                    </motion.div>

                    {/* ─── HERO PROFILE SECTION ─── */}
                    <motion.div className="profile-hero" variants={staggerContainer} initial="hidden" animate="show">
                        <motion.div className="hero-img-col" variants={zoomIn}>
                            <div className="hero-image-wrapper">
                                <div className="star-orbit-system">
                                    <div className="orbit-glow-aura"></div>
                                    <div className="orbit-guide"></div>
                                    <div className="star-orbit-primary">
                                        <div className="star-trail-primary"></div>
                                        <div className="star-head-primary"></div>
                                    </div>
                                    <div className="star-orbit-secondary">
                                        <div className="star-trail-secondary"></div>
                                        <div className="star-head-secondary"></div>
                                    </div>
                                </div>
                                {staff.photo ? (
                                    <img src={staff.photo} alt={staff.name} className="profile-img" />
                                ) : (
                                    <div className="profile-placeholder">{staff.name.charAt(0)}</div>
                                )}
                            </div>
                        </motion.div>

                        <div className="hero-text-col">
                            <motion.div variants={slideInLeft} className="role-tag-premium">
                                {staff.role}
                            </motion.div>

                            <h1 className="staff-name-animated">
                                {staff.name.split('').map((char, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0, filter: 'blur(10px)', letterSpacing: '8px' }}
                                        animate={{ opacity: 1, filter: 'blur(0px)', letterSpacing: '0px' }}
                                        transition={{ delay: 0.3 + (i * 0.04), duration: 0.8, ease: "easeOut" }}
                                    >
                                        {char === ' ' ? '\u00A0' : char}
                                    </motion.span>
                                ))}
                            </h1>

                            <motion.p variants={fadeUp} className="staff-bio-premium">
                                {staff.bio}
                            </motion.p>
                        </div>
                    </motion.div>

                    {/* ─── CONTENT GRID SECTION ─── */}
                    <motion.div
                        className="profile-grid-advanced"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {/* LEFT COLUMN: Experience & Strengths */}
                        <motion.div className="grid-left" variants={staggerContainer}>
                            <motion.div className="content-card glass-panel" variants={fadeUp} whileHover={{ y: -5 }}>
                                <h3 className="card-heading">
                                    <WorkspacePremiumIcon sx={{ color: '#8b5cf6' }} />
                                    Experience & Background
                                    <div className="animated-underline"></div>
                                </h3>
                                <p className="card-text">{staff.experience}</p>

                                <div className="specialization-box glass-inner">
                                    <div className="spec-icon">
                                        <AutoStoriesIcon />
                                    </div>
                                    <div className="spec-info">
                                        <span className="spec-label">Specialization</span>
                                        <span className="spec-value">{staff.specialization}</span>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div className="content-card glass-panel" variants={fadeUp} whileHover={{ y: -5 }}>
                                <h3 className="card-heading">
                                    <EmojiEventsIcon sx={{ color: '#f59e0b' }} />
                                    Key Strengths
                                    <div className="animated-underline"></div>
                                </h3>
                                <div className="strengths-list">
                                    {['Interactive Learning', 'Conceptual Clarity', 'Doubt Clearing Sessions', 'Regular Performance Tests'].map((item, i) => (
                                        <motion.div className="strength-item" key={i} whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.05)' }}>
                                            <CheckCircleIcon className="check-icon" /> {item}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* RIGHT COLUMN: Skills & Subjects */}
                        <motion.div className="grid-right" variants={staggerContainer}>
                            <motion.div className="content-card glass-panel" variants={fadeUp} whileHover={{ y: -5 }}>
                                <h3 className="card-heading">
                                    <StarIcon sx={{ color: '#3b82f6' }} />
                                    Core Skills
                                    <div className="animated-underline"></div>
                                </h3>
                                <div className="skills-container">
                                    {staff.skills.map((skill, i) => (
                                        <div className="skill-wrapper" key={i}>
                                            <div className="skill-header">
                                                <span className="skill-name">{skill.name}</span>
                                                <span className="skill-percent">{skill.level}%</span>
                                            </div>
                                            <div className="progress-bg">
                                                <motion.div
                                                    className="progress-fill"
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    transition={{ duration: 1.2, delay: 0.2 + (i * 0.15), ease: "easeOut" }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div className="content-card glass-panel" variants={fadeUp} whileHover={{ y: -5 }}>
                                <h3 className="card-heading">
                                    <AutoStoriesIcon sx={{ color: '#ec4899' }} />
                                    Subjects Handled
                                    <div className="animated-underline"></div>
                                </h3>
                                <div className="subjects-tags">
                                    {staff.subjects.map((sub, i) => (
                                        <motion.span
                                            key={i}
                                            className="subject-tag-premium glass-inner"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.1 * i }}
                                            whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 92, 246, 0.2)", borderColor: "rgba(139, 92, 246, 0.4)" }}
                                        >
                                            {sub}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* ─── CTA SECTION ─── */}
                    <motion.div
                        className="cta-section-premium"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <motion.div className="cta-glass glass-panel" whileHover={{ boxShadow: "0 20px 50px rgba(59,130,246,0.15)" }}>
                            <h2>Start Your Learning Journey with {staff.name}</h2>
                            <p>Admissions are open! Secure a spot in the upcoming batches and pave the way to academic excellence.</p>
                            <Link to="/admission" className="premium-btn ripple-button">Apply for Admission</Link>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </PageTransition>
    );
};

export default StaffProfile;
