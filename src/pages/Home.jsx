import React from 'react';
import { Link } from 'react-router-dom';
 
import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import StaffCard from '../components/StaffCard';
import ClassTimings from '../components/ClassTimings';
import { staffData } from '../data/staffData';

// MUI Icons
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BrushIcon from '@mui/icons-material/Brush';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ScienceIcon from '@mui/icons-material/Science';
import CalculateIcon from '@mui/icons-material/Calculate';
import TranslateIcon from '@mui/icons-material/Translate';
import ComputerIcon from '@mui/icons-material/Computer';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

import heroImg from '../assets/images/hero_classroom.png';
import subalakshmi from '../assets/images/subalakshmi.png';


import './Home.css';

/* ─── Data ─── */
const stats = [
    { icon: <GroupsIcon />, value: 500, suffix: '+', label: 'Happy Students' },
    { icon: <AutoStoriesIcon />, value: 15, suffix: '+', label: 'Courses Offered' },
    { icon: <WorkspacePremiumIcon />, value: 10, suffix: '+', label: 'Years Experience' },
    { icon: <EmojiEventsIcon />, value: 95, suffix: '%', label: 'Pass Rate' },
];

const classes = [
    {
        icon: <SchoolIcon />,
        title: 'Class I – V',
        subtitle: 'Primary Section',
        desc: 'Strong foundation in core subjects with interactive learning methods and personalized attention.',
        color: '#3b82f6',
    },
    {
        icon: <AutoStoriesIcon />,
        title: 'Class VI – VIII',
        subtitle: 'Middle School',
        desc: 'In-depth subject mastery, critical thinking development and exam preparation strategies.',
        color: '#8b5cf6',
    },
    {
        icon: <CalculateIcon />,
        title: 'Class IX – X',
        subtitle: 'High School',
        desc: 'Focused board exam preparation with comprehensive study plans and practice tests.',
        color: '#06b6d4',
    },
];


const testimonials = [
    {
        name: 'Mrs. Lakshmi',
        role: 'Parent of Class VIII Student',
        text: 'My son\'s marks improved drastically after joining Sri Karthikeya. The teachers are very dedicated and caring. Highly recommended!',
        rating: 5,
    },
    {
        name: 'Mr. Ravi Kumar',
        role: 'Parent of Class V Student',
        text: 'The skill development programs are excellent. My daughter loves the art and computer classes. The overall environment is very positive.',
        rating: 5,
    },
    {
        name: 'Mrs. Priya',
        role: 'Parent of Class X Student',
        text: 'Best tuition center in the area! The structured approach to board exam preparation gave my child the confidence to score well.',
        rating: 5,
    },
    {
        name: 'Mr. Suresh',
        role: 'Parent of Class III Student',
        text: 'Wonderful teaching methodology. The morning batch timing is very convenient. My child enjoys studying here.',
        rating: 5,
    },
];



/* ─── Stat Counter ─── */
function StatCard({ icon, value, suffix, label, delay }) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
    return (
        <motion.div
            ref={ref}
            className="stat-card glass-card"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay }}
        >
            <div className="stat-card__icon">{icon}</div>
            <div className="stat-card__value">
                {inView && <CountUp end={value} duration={2.5} />}
                {suffix}
            </div>
            <div className="stat-card__label">{label}</div>
        </motion.div>
    );
}

/* ─── Home Page ─── */
export default function Home() {
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 600], [0, 200]);
    const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

    return (
        <PageTransition>
            {/* ─── HERO SECTION ─── */}
            <section className="hero" id="hero">
                <motion.div className="hero__bg-image" style={{ y: heroY }}>
                    <img src={heroImg} alt="Sri Karthikeya Classroom" />
                    <div className="hero__overlay animated-gradient" />
                </motion.div>

                {/* Floating Shapes */}
                <div className="hero__shapes">
                    <div className="hero__shape hero__shape--1" />
                    <div className="hero__shape hero__shape--2" />
                    <div className="hero__shape hero__shape--3" />

                    {/* Floating education icons */}
                    <motion.div className="floating-icon icon-1" animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}>
                        <SchoolIcon sx={{ fontSize: 40, opacity: 0.2, color: 'white' }} />
                    </motion.div>
                    <motion.div className="floating-icon icon-2" animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}>
                        <AutoStoriesIcon sx={{ fontSize: 35, opacity: 0.15, color: 'white' }} />
                    </motion.div>
                    <motion.div className="floating-icon icon-3" animate={{ rotate: [0, 360] }} transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}>
                        <CalculateIcon sx={{ fontSize: 30, opacity: 0.1, color: 'white' }} />
                    </motion.div>
                    <motion.div className="floating-icon icon-4" animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}>
                        <BrushIcon sx={{ fontSize: 35, opacity: 0.15, color: 'white' }} />
                    </motion.div>
                </div>

                <motion.div className="hero__content" style={{ opacity: heroOpacity }}>
                    <motion.div
                        className="hero__badge"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <StarIcon sx={{ fontSize: 16 }} />
                        <span>Premier Coaching Center in Mannampandal</span>
                    </motion.div>

                    <motion.h1
                        className="hero__title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                    >
                        Sri Karthikeya Tuition Hub
                        <span className="hero__title-accent"> Regular & Weekend Skill Institute</span>
                    </motion.h1>

                    <div className="hero__typing">
                        <TypeAnimation
                            sequence={[
                                'CBSE | Matric | State Board',
                                2000,
                                'Weekend Skill Development Course',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', fontWeight: '700', color: 'var(--gold-200)' }}
                        />
                    </div>

                    <motion.p
                        className="hero__subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        CBSE | Matric | State Board
                        <br />
                        <span style={{ color: 'var(--gold-300)', fontWeight: '600' }}>Weekend Skill Development Course</span>
                    </motion.p>

                    <motion.div
                        className="hero__actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                    >
                        <Link to="/admission" className="hero__btn hero__btn--primary ripple-button">
                            Enroll Now <ArrowForwardIcon sx={{ fontSize: 20 }} />
                        </Link>
                        <Link to="/contact" className="hero__btn hero__btn--secondary ripple-button">
                            Contact Us
                        </Link>
                    </motion.div>
                </motion.div>

                <div className="hero__scroll-indicator">
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                        <span />
                    </motion.div>
                </div>
            </section>

            {/* ─── STATS SECTION ─── */}
            <section className="stats section-padding">
                <div className="container">
                    <div className="stats__grid">
                        {stats.map((s, i) => (
                            <StatCard key={i} {...s} delay={i * 0.15} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── ABOUT / FOUNDER ─── */}
            <section className="about section-padding" id="about">
                <div className="container">
                    <ScrollReveal>
                        <h2 className="section-title">About Our <span className="gold-accent">Founder</span></h2>
                        <div className="section-divider" />
                        <p className="section-subtitle">
                            A visionary educator dedicated to shaping the future of every child
                        </p>
                    </ScrollReveal>

                    <div className="about__grid">
                        <ScrollReveal direction="left" delay={0.2}>
                            <div className="about__image-wrapper">
                                <img src={subalakshmi} alt="Founder" className="about__image" />
                                <div className="about__image-border" />
                                <div className="about__image-dots" />
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="right" delay={0.3}>
                            <div className="about__content">
                                <h3 className="about__name">Our Founder</h3>
                                <p className="about__role">Director & Chief Educator</p>
                                <p className="about__text">
                                    With over a decade of experience in education, our founder established
                                    Sri Karthikeya Tuition Hub with a singular vision — to provide affordable,
                                    high-quality coaching that transforms students' academic journeys.
                                </p>
                                <p className="about__text">
                                    Every child deserves the best education. Our personalized approach ensures
                                    that each student receives individual attention, building confidence alongside
                                    knowledge. From foundational learning to board exam mastery, we guide students
                                    at every step.
                                </p>
                                <div className="about__highlights">
                                    <div className="about__highlight">
                                        <span className="about__highlight-number">10+</span>
                                        <span>Years in Education</span>
                                    </div>
                                    <div className="about__highlight">
                                        <span className="about__highlight-number">500+</span>
                                        <span>Students Mentored</span>
                                    </div>
                                    <div className="about__highlight">
                                        <span className="about__highlight-number">95%</span>
                                        <span>Pass Rate</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ─── CLASSES ─── */}
            <section className="classes section-padding" id="classes">
                <div className="container">
                    <ScrollReveal>
                        <h2 className="section-title">Our <span className="gold-accent">Classes</span></h2>
                        <div className="section-divider" />
                        <p className="section-subtitle">
                            Structured curriculum designed for academic excellence across all levels
                        </p>
                    </ScrollReveal>

                    <div className="classes__grid">
                        {classes.map((cls, i) => (
                            <ScrollReveal key={i} delay={i * 0.15}>
                                <motion.div
                                    className="class-card glass-card"
                                    whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <div className="class-card__icon" style={{ background: `${cls.color}15`, color: cls.color }}>
                                        {cls.icon}
                                    </div>
                                    <h3 className="class-card__title">{cls.title}</h3>
                                    <p className="class-card__subtitle">{cls.subtitle}</p>
                                    <p className="class-card__desc">{cls.desc}</p>
                                    <Link to="/admission" className="class-card__link">
                                        Learn More <ArrowForwardIcon sx={{ fontSize: 16 }} />
                                    </Link>
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CLASS TIMINGS ─── */}
            <ClassTimings />

            {/* ─── WEEKEND SKILL DEVELOPMENT ─── */}
            <section className="skills-section section-padding" id="skills">
                <div className="container">
                    <ScrollReveal>
                        <h2 className="section-title">Weekend Skill <span className="gold-accent">Development</span></h2>
                        <div className="section-divider" />
                        <p className="section-subtitle">
                            Unlock your child's potential with our specialized weekend courses
                        </p>
                    </ScrollReveal>

                    <div className="skills__grid">
                        {[
                            { icon: <TranslateIcon />, title: 'Phonics', desc: 'English & Tamil phonetics for clear pronunciation' },
                            { icon: <TranslateIcon />, title: 'Spoken English', desc: 'Fluency and communication skills training' },
                            { icon: <TranslateIcon />, title: 'Spoken Hindi', desc: 'Conversational Hindi for all levels' },
                            { icon: <BrushIcon />, title: 'Handwriting', desc: 'Print, Cursive, and Lucida styles' },
                            { icon: <CalculateIcon />, title: 'Abacus', desc: 'Speed calculation and mental arithmetic' },
                            { icon: <BrushIcon />, title: 'Drawing', desc: 'Creative arts and sketching techniques' },
                            { icon: <SportsEsportsIcon />, title: 'Dolls Making', desc: 'Learn to make 10 different types of dolls' },
                            { icon: <AutoStoriesIcon />, title: 'All Subjects', desc: 'Tamil, English, Maths, Science, Social, Hindi' },
                        ].map((skill, i) => (
                            <ScrollReveal key={i} delay={i * 0.1} direction="scale">
                                <motion.div
                                    className="skill-card glass-card weekend-skill-card"
                                    whileHover={{ y: -10, scale: 1.02 }}
                                >
                                    <div className="skill-card__glow" />
                                    <div className="skill-card__icon">{skill.icon}</div>
                                    <h4 className="skill-card__title">{skill.title}</h4>
                                    <p className="skill-card__desc">{skill.desc}</p>
                                    <div className="skill-card__border-anim" />
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── STAFF SECTION ─── */}
            <section className="staff section-padding" id="staff">
                <div className="container">
                    <ScrollReveal>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <h2 className="section-title" style={{ display: 'inline-block', position: 'relative' }}>
                                Our Expert <span style={{ background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Staff</span>
                                <motion.div
                                    className="gradient-underline"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '100%' }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    style={{
                                        height: '4px',
                                        background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #f59e0b)',
                                        borderRadius: '2px',
                                        marginTop: '8px'
                                    }}
                                />
                            </h2>
                            <p className="section-subtitle" style={{ maxWidth: '600px', margin: '20px auto 0' }}>
                                Learn from the best minds dedicated to shaping the next generation of leaders and thinkers.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="staff-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '3rem',
                    }}>
                        {staffData.map((staff, index) => (
                            <StaffCard
                                key={staff.id}
                                {...staff}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── TESTIMONIALS ─── */}
            <section className="testimonials section-padding" id="testimonials">
                <div className="container">
                    <ScrollReveal>
                        <h2 className="section-title">What Parents <span className="gold-accent">Say</span></h2>
                        <div className="section-divider" />
                        <p className="section-subtitle">
                            Trusted by hundreds of families across Mannampandal
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            spaceBetween={24}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 4000, disableOnInteraction: false }}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            className="testimonials__swiper"
                        >
                            {testimonials.map((t, i) => (
                                <SwiperSlide key={i}>
                                    <div className="testimonial-card glass-card">
                                        <FormatQuoteIcon className="testimonial-card__quote" />
                                        <p className="testimonial-card__text">{t.text}</p>
                                        <div className="testimonial-card__stars">
                                            {Array.from({ length: t.rating }).map((_, j) => (
                                                <StarIcon key={j} sx={{ fontSize: 18, color: '#d4a843' }} />
                                            ))}
                                        </div>
                                        <div className="testimonial-card__author">
                                            <div className="testimonial-card__avatar">
                                                {t.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h5>{t.name}</h5>
                                                <span>{t.role}</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </ScrollReveal>
                </div>
            </section>

            {/* ─── CONTACT PREVIEW ─── */}
            <section className="contact-preview section-padding">
                <div className="container">
                    <ScrollReveal>
                        <div className="contact-preview__card">
                            <div className="contact-preview__content">
                                <h2>Ready to Give Your Child the <span className="gold-accent">Best Education?</span></h2>
                                <p>
                                    Admissions are open for the academic year. Don't miss the opportunity to
                                    enroll your child in the most trusted tuition center in Mannampandal.
                                </p>
                                <div className="contact-preview__actions">
                                    <Link to="/admission" className="hero__btn hero__btn--primary ripple-button">
                                        Apply Now <ArrowForwardIcon sx={{ fontSize: 20 }} />
                                    </Link>
                                    <a href="tel:+919876543210" className="contact-preview__phone">
                                        <PhoneIcon sx={{ fontSize: 20 }} />
                                        +91 98765 43210
                                    </a>
                                </div>
                            </div>
                            <div className="contact-preview__info">
                                <motion.a href="https://maps.app.goo.gl/Z3Bhrd7JwSk122hRA" target="_blank" rel="noreferrer" whileHover={{ scale: 1.05 }} className="contact-preview__info-item">
                                    <LocationOnIcon />
                                    <div>
                                        <h5>Visit Us</h5>
                                        <p>📍Mayiladuthurai District, Mannampandal, Tamil Nadu</p>
                                    </div>
                                </motion.a>
                                <motion.a href="mailto:info@srikarthikeya.in" whileHover={{ scale: 1.05 }} className="contact-preview__info-item">
                                    <EmailIcon />
                                    <div>
                                        <h5>Email Us</h5>
                                        <p>📧srikarthikeyatuitionhub@gmail.com</p>
                                    </div>
                                </motion.a>
                                <motion.a href="tel:+919876543210" whileHover={{ scale: 1.05 }} className="contact-preview__info-item">
                                    <PhoneIcon />
                                    <div>
                                        <h5>Call Us</h5>
                                        <p>📞 +91  76399 61310 </p>
                                    </div>
                                </motion.a>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </PageTransition>
    );
}
