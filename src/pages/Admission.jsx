import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';

import './Admission.css';

const classes = [
    'Class I', 'Class II', 'Class III', 'Class IV', 'Class V',
    'Class VI', 'Class VII', 'Class VIII', 'Class IX', 'Class X',
];

const initialForm = {
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    class: '',
    address: '',
    message: '',
};

export default function Admission() {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const errs = {};
        if (!form.studentName.trim()) errs.studentName = 'Student name is required';
        if (!form.parentName.trim()) errs.parentName = 'Parent name is required';
        if (!form.phone.trim()) errs.phone = 'Phone number is required';
        else if (!/^[6-9]\d{9}$/.test(form.phone.trim())) errs.phone = 'Enter a valid 10-digit phone number';
        if (!form.class) errs.class = 'Please select a class';
        if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email';
        return errs;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }

        setSubmitted(true);

        // Redirect to WhatsApp after 2 seconds
        setTimeout(() => {
            const msg = encodeURIComponent(
                `*New Admission Inquiry*\n\n` +
                `👤 Student: ${form.studentName}\n` +
                `👨‍👩‍👦 Parent: ${form.parentName}\n` +
                `📞 Phone: ${form.phone}\n` +
                `📧 Email: ${form.email || 'N/A'}\n` +
                `📚 Class: ${form.class}\n` +
                `🏠 Address: ${form.address || 'N/A'}\n` +
                `💬 Message: ${form.message || 'N/A'}`
            );
            window.open(`https://wa.me/919876543210?text=${msg}`, '_blank');
        }, 2500);
    };

    return (
        <PageTransition>
            {/* Header */}
            <section className="admission-hero animated-gradient">
                <div className="admission-hero__content">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Admission <span className="gold-accent">Form</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Take the first step towards your child's bright future
                    </motion.p>
                </div>
            </section>

            <section className="admission section-padding">
                <div className="container">
                    <div className="admission__layout">
                        {/* Left Info */}
                        <ScrollReveal direction="left">
                            <div className="admission__info">
                                <h2>Why Choose <span className="gold-accent">Sri Karthikeya?</span></h2>
                                <div className="section-divider" style={{ margin: '1rem 0 1.5rem' }} />

                                <div className="admission__benefits">
                                    {[
                                        'Individual attention for every student',
                                        'Experienced and dedicated faculty',
                                        'Regular tests and progress reports',
                                        'Affordable fee structure',
                                        'Skill development programs',
                                        'Safe and nurturing environment',
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            className="admission__benefit"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                        >
                                            <CheckCircleIcon sx={{ color: '#22c55e', fontSize: 20 }} />
                                            <span>{item}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="admission__contact-info">
                                    <h4>Need Help?</h4>
                                    <p>Call us at <a href="tel:+919876543210">+91 98765 43210</a></p>
                                    <p>or WhatsApp us directly</p>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Form */}
                        <ScrollReveal direction="right" delay={0.2}>
                            <div className="admission__form-wrapper glass-card">
                                <AnimatePresence mode="wait">
                                    {!submitted ? (
                                        <motion.form
                                            key="form"
                                            className="admission__form"
                                            onSubmit={handleSubmit}
                                            initial={{ opacity: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                        >
                                            <h3>Fill Admission Form</h3>

                                            <div className="admission__field">
                                                <TextField
                                                    fullWidth
                                                    label="Student Name"
                                                    name="studentName"
                                                    value={form.studentName}
                                                    onChange={handleChange}
                                                    error={!!errors.studentName}
                                                    helperText={errors.studentName}
                                                    variant="outlined"
                                                    size="small"
                                                    InputProps={{
                                                        startAdornment: <PersonIcon sx={{ color: '#94a3b8', mr: 1, fontSize: 20 }} />,
                                                    }}
                                                />
                                            </div>

                                            <div className="admission__field">
                                                <TextField
                                                    fullWidth
                                                    label="Parent / Guardian Name"
                                                    name="parentName"
                                                    value={form.parentName}
                                                    onChange={handleChange}
                                                    error={!!errors.parentName}
                                                    helperText={errors.parentName}
                                                    variant="outlined"
                                                    size="small"
                                                    InputProps={{
                                                        startAdornment: <PersonIcon sx={{ color: '#94a3b8', mr: 1, fontSize: 20 }} />,
                                                    }}
                                                />
                                            </div>

                                            <div className="admission__row">
                                                <TextField
                                                    fullWidth
                                                    label="Phone Number"
                                                    name="phone"
                                                    value={form.phone}
                                                    onChange={handleChange}
                                                    error={!!errors.phone}
                                                    helperText={errors.phone}
                                                    variant="outlined"
                                                    size="small"
                                                    InputProps={{
                                                        startAdornment: <PhoneIcon sx={{ color: '#94a3b8', mr: 1, fontSize: 20 }} />,
                                                    }}
                                                />
                                                <TextField
                                                    fullWidth
                                                    label="Email (Optional)"
                                                    name="email"
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    error={!!errors.email}
                                                    helperText={errors.email}
                                                    variant="outlined"
                                                    size="small"
                                                />
                                            </div>

                                            <div className="admission__field">
                                                <TextField
                                                    fullWidth
                                                    select
                                                    label="Select Class"
                                                    name="class"
                                                    value={form.class}
                                                    onChange={handleChange}
                                                    error={!!errors.class}
                                                    helperText={errors.class}
                                                    variant="outlined"
                                                    size="small"
                                                    InputProps={{
                                                        startAdornment: <SchoolIcon sx={{ color: '#94a3b8', mr: 1, fontSize: 20 }} />,
                                                    }}
                                                >
                                                    {classes.map(c => (
                                                        <MenuItem key={c} value={c}>{c}</MenuItem>
                                                    ))}
                                                </TextField>
                                            </div>

                                            <div className="admission__field">
                                                <TextField
                                                    fullWidth
                                                    label="Address"
                                                    name="address"
                                                    value={form.address}
                                                    onChange={handleChange}
                                                    variant="outlined"
                                                    size="small"
                                                    multiline
                                                    rows={2}
                                                    InputProps={{
                                                        startAdornment: <HomeIcon sx={{ color: '#94a3b8', mr: 1, fontSize: 20, alignSelf: 'flex-start', mt: 0.5 }} />,
                                                    }}
                                                />
                                            </div>

                                            <div className="admission__field">
                                                <TextField
                                                    fullWidth
                                                    label="Any Message (Optional)"
                                                    name="message"
                                                    value={form.message}
                                                    onChange={handleChange}
                                                    variant="outlined"
                                                    size="small"
                                                    multiline
                                                    rows={2}
                                                />
                                            </div>

                                            <Button
                                                type="submit"
                                                variant="contained"
                                                size="large"
                                                fullWidth
                                                endIcon={<SendIcon />}
                                                className="ripple-button"
                                                sx={{
                                                    background: 'linear-gradient(135deg, #1a56db, #1d4ed8)',
                                                    borderRadius: '12px',
                                                    padding: '12px',
                                                    fontWeight: 600,
                                                    fontSize: '1rem',
                                                    textTransform: 'none',
                                                    boxShadow: '0 6px 24px rgba(26, 86, 219, 0.3)',
                                                    '&:hover': {
                                                        background: 'linear-gradient(135deg, #1d4ed8, #1e3a8a)',
                                                        boxShadow: '0 8px 30px rgba(26, 86, 219, 0.4)',
                                                    },
                                                }}
                                            >
                                                Submit Application
                                            </Button>
                                        </motion.form>
                                    ) : (
                                        <motion.div
                                            key="success"
                                            className="admission__success"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ type: 'spring', stiffness: 200 }}
                                        >
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: 0.2, type: 'spring' }}
                                            >
                                                <CheckCircleIcon sx={{ fontSize: 80, color: '#22c55e' }} />
                                            </motion.div>
                                            <h2>Application Submitted!</h2>
                                            <p>Thank you for your interest. You'll be redirected to WhatsApp shortly to confirm your inquiry.</p>
                                            <motion.div
                                                className="admission__success-bar"
                                                initial={{ width: '100%' }}
                                                animate={{ width: '0%' }}
                                                transition={{ duration: 2.5, ease: 'linear' }}
                                            />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </PageTransition>
    );
}
