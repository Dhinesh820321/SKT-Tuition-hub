import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { TypeAnimation } from 'react-type-animation';
import './AdmissionForm.css';

const AdmissionForm = () => {
    const [formData, setFormData] = useState({
        studentName: '',
        parentName: '',
        studentClass: '',
        board: '',
        course: '',
        contactNumber: '',
        email: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [focusedField, setFocusedField] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setIsSubmitted(true);
        }, 800);
    };

    return (
        <PageTransition>
            <div className="admission-form-page">
                <div className="form-hero animated-gradient-v3">
                    <div className="container">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="form-page-title"
                        >
                            Enroll Your Child
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="form-page-subtitle"
                        >
                            <TypeAnimation
                                sequence={[
                                    'Take the first step towards academic excellence.',
                                    1000,
                                    "Secure your child's future with Sri Karthikeya.",
                                    1000,
                                    'Expert guidance for every student.',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </motion.p>
                    </div>
                </div>

                <div className="container form-container-v3">
                    <motion.div
                        className="form-glass-card"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <form onSubmit={handleSubmit} className="modern-form">
                            <div className="form-grid-v3">
                                {/* Student Name */}
                                <div className={`input-group-v3 ${focusedField === 'studentName' ? 'focused' : ''} ${formData.studentName ? 'has-value' : ''}`}>
                                    <label>Student Name</label>
                                    <input
                                        type="text"
                                        name="studentName"
                                        required
                                        value={formData.studentName}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('studentName')}
                                        onBlur={() => setFocusedField(null)}
                                    />
                                    <div className="focus-line"></div>
                                </div>

                                {/* Parent Name */}
                                <div className={`input-group-v3 ${focusedField === 'parentName' ? 'focused' : ''} ${formData.parentName ? 'has-value' : ''}`}>
                                    <label>Parent Name</label>
                                    <input
                                        type="text"
                                        name="parentName"
                                        required
                                        value={formData.parentName}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('parentName')}
                                        onBlur={() => setFocusedField(null)}
                                    />
                                    <div className="focus-line"></div>
                                </div>

                                {/* Class */}
                                <div className={`input-group-v3 ${focusedField === 'studentClass' ? 'focused' : ''} ${formData.studentClass ? 'has-value' : ''}`}>
                                    <label>Class</label>
                                    <select
                                        name="studentClass"
                                        required
                                        value={formData.studentClass}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('studentClass')}
                                        onBlur={() => setFocusedField(null)}
                                    >
                                        <option value=""></option>
                                       <option value="1">Class I</option>
                                        <option value="2">Class II</option>
                                        <option value="3">Class III</option>
                                        <option value="4">Class IV</option>
                                        <option value="5">Class V</option>
                                        <option value="6">Class VI</option>
                                        <option value="7">Class VII</option>
                                        <option value="8">Class VIII</option>
                                        <option value="9">Class IX</option>
                                        <option value="10">Class X</option>
                                    </select>
                                    <div className="focus-line"></div>
                                </div>

                                {/* Board */}
                                <div className={`input-group-v3 ${focusedField === 'board' ? 'focused' : ''} ${formData.board ? 'has-value' : ''}`}>
                                    <label>Board</label>
                                    <select
                                        name="board"
                                        required
                                        value={formData.board}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('board')}
                                        onBlur={() => setFocusedField(null)}
                                    >
                                        <option value=""></option>
                                        <option value="cbse">CBSE</option>
                                        <option value="matric">Matric</option>
                                        <option value="state">State Board</option>
                                    </select>
                                    <div className="focus-line"></div>
                                </div>

                                {/* Course */}
                                <div className={`input-group-v3 ${focusedField === 'course' ? 'focused' : ''} ${formData.course ? 'has-value' : ''}`}>
                                    <label>Select Course</label>
                                    <select
                                        name="course"
                                        required
                                        value={formData.course}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('course')}
                                        onBlur={() => setFocusedField(null)}
                                    >
                                        <option value=""></option>
                                        <option value="academic">Regular Coaching</option>
                                        <option value="skill">Weekend Skill Development</option>
                                        <option value="both">Both</option>
                                    </select>
                                    <div className="focus-line"></div>
                                </div>

                                {/* Contact Number */}
                                <div className={`input-group-v3 ${focusedField === 'contactNumber' ? 'focused' : ''} ${formData.contactNumber ? 'has-value' : ''}`}>
                                    <label>Contact Number (Active)</label>
                                    <input
                                        type="tel"
                                        name="contactNumber"
                                        required
                                        value={formData.contactNumber}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('contactNumber')}
                                        onBlur={() => setFocusedField(null)}
                                    />
                                    <div className="focus-line"></div>
                                </div>

                                {/* Email Address */}
                                <div className={`input-group-v3 full-width-v3 ${focusedField === 'email' ? 'focused' : ''} ${formData.email ? 'has-value' : ''}`}>
                                    <label>Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('email')}
                                        onBlur={() => setFocusedField(null)}
                                    />
                                    <div className="focus-line"></div>
                                </div>

                                {/* Message */}
                                <div className={`input-group-v3 full-width-v3 ${focusedField === 'message' ? 'focused' : ''} ${formData.message ? 'has-value' : ''}`}>
                                    <label>Specific Academic Needs / Message</label>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField(null)}
                                    ></textarea>
                                    <div className="focus-line"></div>
                                </div>
                            </div>

                            <motion.button
                                type="submit"
                                className="submit-btn-v3 ripple-button"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Submit Application <ArrowForwardIcon />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                {/* Success Modal */}
                <AnimatePresence>
                    {isSubmitted && (
                        <div className="modal-overlay-v3">
                            <motion.div
                                className="success-modal-v3"
                                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                            >
                                <button className="close-modal-v3" onClick={() => setIsSubmitted(false)}>
                                    <CloseIcon />
                                </button>
                                <div className="success-icon-v3">
                                    <CheckCircleOutlineIcon sx={{ fontSize: 80, color: '#10b981' }} />
                                </div>
                                <h2>Application Received!</h2>
                                <p>Thank you for choosing Sri Karthikeya. Our team will review your application and contact you within 24 hours.</p>
                                <button className="modal-cta-v3" onClick={() => setIsSubmitted(false)}>
                                    Done
                                </button>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </PageTransition>
    );
};

export default AdmissionForm;
