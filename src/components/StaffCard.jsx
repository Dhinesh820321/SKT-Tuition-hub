import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './StaffCard.css';

const StaffCard = ({ id, name, subjects, shortExpertise, photo, delay }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <motion.div
            className="staff-card-v3-container"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <div className={`flip-card-inner ${isFlipped ? 'is-flipped' : ''}`}>
                {/* Front Side */}
                <div className="flip-card-front glass-morphism">
                    <div className="card-top-gradient"></div>
                    <div className="photo-wrapper">
                        <div className="photo-circle-outer">
                            {photo ? (
                                <img src={photo} alt={name} className="staff-photo-img" />
                            ) : (
                                <div className="photo-placeholder-v3">{name.charAt(0)}</div>
                            )}
                        </div>
                        <div className="photo-glow-ring"></div>
                    </div>

                    <div className="card-info-front">
                        <h3 className="staff-name-v3">{name}</h3>
                        <p className="staff-expertise-v3">{shortExpertise}</p>
                        <div className="hover-hint">Hover to flip</div>
                    </div>

                    <div className="glow-border-v3"></div>
                </div>

                {/* Back Side */}
                <div className="flip-card-back glass-morphism">
                    <h3 className="back-name">{name}</h3>
                    <div className="subjects-list-v3">
                        <p className="subjects-title">Expertise:</p>
                        <div className="subjects-tags">
                            {subjects.slice(0, 4).map((sub, i) => (
                                <span key={i} className="back-subject-tag">{sub}</span>
                            ))}
                            {subjects.length > 4 && <span>+ more</span>}
                        </div>
                    </div>


                    <Link to={`/staff/${id}`} className="full-profile-btn ripple-button">
                        View Full Profile <ArrowForwardIcon sx={{ fontSize: 16 }} />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default StaffCard;
