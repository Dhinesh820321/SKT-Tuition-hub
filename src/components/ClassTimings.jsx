import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SchoolIcon from '@mui/icons-material/School';
import ExtensionIcon from '@mui/icons-material/Extension';
import './ClassTimings.css';

// Animated Counter for percentages
const AnimatedCounter = ({ from = 0, to = 100, duration = 1.5, delay = 0 }) => {
    const [count, setCount] = useState(from);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.1 });

    useEffect(() => {
        if (inView) {
            const controls = animate(from, to, {
                duration: duration,
                delay: delay,
                ease: "easeOut",
                onUpdate: (value) => {
                    setCount(Math.round(value));
                }
            });
            return controls.stop;
        }
    }, [inView, from, to, duration, delay]);

    return <span ref={ref}>{count}%</span>;
};

// Motion Variants
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

export default function ClassTimings() {
    return (
        <section className="timings-section-dark" id="timings">
            <div className="timings-bg-glow" />

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                {/* ─── SECTION TITLE ─── */}
                <motion.div
                    className="timings-header-dark"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                >
                    <h2 className="premium-title">
                        Class <span className="gold-text">Timings</span>
                    </h2>
                    <div className="title-underline-glow">
                        <motion.div
                            className="underline-fill"
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                        />
                    </div>
                    <p className="premium-subtitle">
                        Structured Learning for Academic & Skill Excellence
                    </p>
                </motion.div>

                {/* ─── CARDS CONTAINER ─── */}
                <motion.div
                    className="timings-grid-dark"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {/* ─── REGULAR COACHING ─── */}
                    <motion.div className="timing-card-premium glass-dark" variants={fadeUp} whileHover={{ y: -8 }}>
                        <div className="card-top-accent gold-gradient" />
                        <div className="card-header-dark">
                            <div className="icon-wrapper-gold">
                                <SchoolIcon fontSize="large" sx={{ color: '#d4af37' }} />
                            </div>
                            <h3>Regular Coaching – Weekdays</h3>
                        </div>

                        <div className="card-body-dark">
                            {/* Morning Batch */}
                            <motion.div
                                className="batch-row-dark"
                                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                            >
                                <div className="batch-info-dark">
                                    <h4>Morning Batch</h4>
                                    <div className="time-badge gold-border">
                                        <AccessTimeIcon fontSize="small" />
                                        <span>6:00 AM - 8:00 AM</span>
                                    </div>
                                </div>
                                <div className="progress-container">
                                    <div className="progress-labels">
                                        <span>Filling Status</span>
                                        <span className="progress-value gold-text">
                                            <AnimatedCounter to={100} delay={0.4} />
                                        </span>
                                    </div>
                                    <div className="progress-track">
                                        <motion.div
                                            className="progress-fill gold-gradient-bg"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '100%' }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Evening Batch */}
                            <motion.div
                                className="batch-row-dark"
                                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                            >
                                <div className="batch-info-dark">
                                    <h4>Evening Batch</h4>
                                    <div className="time-badge gold-border">
                                        <AccessTimeIcon fontSize="small" />
                                        <span>6:00 PM - 9:00 PM</span>
                                    </div>
                                </div>
                                <div className="progress-container">
                                    <div className="progress-labels">
                                        <span>Filling Status</span>
                                        <span className="progress-value gold-text">
                                            <AnimatedCounter to={100} delay={0.6} />
                                        </span>
                                    </div>
                                    <div className="progress-track">
                                        <motion.div
                                            className="progress-fill gold-gradient-bg"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '100%' }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* ─── WEEKEND SKILL DEVELOPMENT ─── */}
                    <motion.div className="timing-card-premium glass-dark float-delay" variants={fadeUp} whileHover={{ y: -8 }}>
                        <div className="card-top-accent blue-gradient" />
                        <div className="card-header-dark">
                            <div className="icon-wrapper-blue">
                                <ExtensionIcon fontSize="large" sx={{ color: '#3b82f6' }} />
                            </div>
                            <h3>Weekend Skill Development</h3>
                        </div>

                        <div className="card-body-dark">
                            {[
                                { name: "Morning", time: "10:00 AM - 12:00 PM" },
                                { name: "Afternoon", time: "2:00 PM - 5:00 PM" },
                                { name: "Evening", time: "6:00 PM - 8:00 PM" }
                            ].map((batch, idx) => (
                                <motion.div
                                    className="batch-row-dark"
                                    key={idx}
                                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(59, 130, 246, 0.3)' }}
                                    style={{ borderBottom: idx === 2 ? 'none' : '1px solid rgba(255,255,255,0.05)' }}
                                >
                                    <div className="batch-info-dark">
                                        <h4>{batch.name}</h4>
                                        <div className="time-badge blue-border">
                                            <AccessTimeIcon fontSize="small" />
                                            <span>{batch.time}</span>
                                        </div>
                                    </div>
                                    <div className="progress-container">
                                        <div className="progress-labels">
                                            <span>Enrolled Status</span>
                                            <span className="progress-value blue-text">
                                                <AnimatedCounter to={100} delay={0.5 + (idx * 0.2)} />
                                            </span>
                                        </div>
                                        <div className="progress-track">
                                            <motion.div
                                                className="progress-fill blue-purple-gradient-bg"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: '100%' }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, delay: 0.5 + (idx * 0.2), ease: "easeOut" }}
                                                onAnimationComplete={() => {
                                                    // Optional subtle pulse when complete handled in CSS
                                                }}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
