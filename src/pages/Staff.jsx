import React from 'react';
 
import { motion } from 'framer-motion';
import StaffCard from '../components/StaffCard';
import PageTransition from '../components/PageTransition';
import { TypeAnimation } from 'react-type-animation';
import './Staff.css';

import { staffData } from '../data/staffData';

const Staff = () => {
    return (
        <PageTransition>
            <div className="staff-page">
                <div className="staff-hero animated-gradient">
                    <div className="container">
                        <motion.div
                            className="staff-header"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="staff-title">Our Expert Staff</h1>
                            <div className="title-underline-container">
                                <motion.div
                                    className="title-underline"
                                    initial={{ width: 0 }}
                                    animate={{ width: "100px" }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                />
                            </div>
                            <p className="staff-subtitle">
                                <TypeAnimation
                                    sequence={[
                                        'Meet our dedicated team of professionals.',
                                        1000,
                                        'Committed to nurturing curiosity and excellence.',
                                        1000,
                                        'Experts in their respective subjects.',
                                        1000
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                />
                            </p>
                        </motion.div>
                    </div>
                </div>

                <div className="section-padding">
                    <div className="container">
                        <div className="staff-grid">
                            {staffData.map((staff, index) => (
                                <StaffCard
                                    key={staff.id}
                                    {...staff}
                                    delay={index * 0.1}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>


        </PageTransition>
    );
};

export default Staff;
