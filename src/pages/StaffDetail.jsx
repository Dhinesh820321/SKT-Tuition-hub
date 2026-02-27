import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import StarIcon from '@mui/icons-material/Star';

// We can reuse some of the data from the Home page or define it centrally
export const staffData = [
    {
        id: 'subalakshmi',
        name: 'K. Subalakshmi',
        role: 'Senior Educator',
        subjects: ['Tamil', 'Science', 'Handwriting', 'Spoken English', 'Phonics', 'Dolls Making'],
        experience: '12+ Years in primary & middle school education. Expert in creative teaching and skill development.',
        bio: 'Mrs. Subalakshmi is known for her innovative teaching methods and dedication to nurturing young minds. She leads our weekend skill development programs with a focus on holistic growth.',
        email: 'subalakshmi@srikarthikeya.in',
        phone: '+91 98765 43210'
    },
    {
        id: 'radha',
        name: 'K. Radha',
        role: 'Language Specialist',
        subjects: ['Hindi', 'Spoken Hindi'],
        experience: '10 Years of experience in teaching Hindi as a second language and spoken Hindi coaching.',
        bio: 'Mrs. Radha specializes in making language learning easy and enjoyable. Her conversational approach helps students gain confidence in spoken Hindi quickly.',
        email: 'radha@srikarthikeya.in',
        phone: '+91 98765 43211'
    },
    {
        id: 'arulselvi',
        name: 'V. Arulselvi',
        role: 'Math & Logic Expert',
        subjects: ['Maths', 'Abacus'],
        experience: '8 Years experience in mathematical education and certified Abacus trainer.',
        bio: 'Mrs. Arulselvi is passionate about removing the fear of mathematics. Her expertise in Abacus helps students improve their calculation speed and concentration.',
        email: 'arulselvi@srikarthikeya.in',
        phone: '+91 98765 43212'
    },
    {
        id: 'vaishnavi',
        name: 'T. Vaishnavi',
        role: 'Subject Educator',
        subjects: ['Science', 'English'],
        experience: '6 Years experience in teaching core subjects with a focus on conceptual clarity.',
        bio: 'Ms. Vaishnavi focuses on building strong foundations in Science and English. Her interactive teaching style keeps students engaged and curious about the world around them.',
        email: 'vaishnavi@srikarthikeya.in',
        phone: '+91 98765 43213'
    }
];

export default function StaffDetail() {
    const { id } = useParams();
    const staff = staffData.find(s => s.id === id);

    if (!staff) {
        return (
            <div className="container" style={{ padding: '100px 20px', textAlign: 'center' }}>
                <h2>Staff member not found</h2>
                <Link to="/" className="hero__btn hero__btn--primary" style={{ marginTop: '20px', display: 'inline-block' }}>
                    Back to Home
                </Link>
            </div>
        );
    }

    return (
        <PageTransition>
            <div className="staff-detail-page">
                {/* Header Spacer */}
                <div style={{ height: '80px' }} />

                <div className="container" style={{ paddingBottom: '60px' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="back-link"
                        style={{ marginBottom: '30px' }}
                    >
                        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-600)', fontWeight: '600' }}>
                            <ArrowBackIcon fontSize="small" /> Back to Our Staff
                        </Link>
                    </motion.div>

                    <div className="staff-detail__grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 400px) 1fr', gap: '50px' }}>
                        {/* Profile Sidebar */}
                        <ScrollReveal direction="left">
                            <div className="staff-sidebar glass-card" style={{ padding: '30px', position: 'sticky', top: '100px' }}>
                                <div className="staff-detail__photo" style={{ width: '100%', aspectRatio: '1', borderRadius: '20px', background: 'var(--primary-100)', marginBottom: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                                    {/* Placeholder for photo until generated */}
                                    <div style={{ fontSize: '100px', opacity: 0.2 }}>👤</div>
                                </div>
                                <h1 style={{ fontSize: '1.8rem', color: 'var(--primary-800)', marginBottom: '5px' }}>{staff.name}</h1>
                                <p style={{ color: 'var(--gold-500)', fontWeight: '600', marginBottom: '20px' }}>{staff.role}</p>

                                <div className="staff-contact-info" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                    <a href={`tel:${staff.phone}`} className="contact-item" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: '12px', background: 'var(--primary-50)', color: 'var(--primary-700)', fontWeight: '500' }}>
                                        <PhoneIcon fontSize="small" /> {staff.phone}
                                    </a>
                                    <a href={`mailto:${staff.email}`} className="contact-item" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: '12px', background: 'var(--primary-50)', color: 'var(--primary-700)', fontWeight: '500' }}>
                                        <EmailIcon fontSize="small" /> {staff.email}
                                    </a>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Main Content */}
                        <ScrollReveal direction="right">
                            <div className="staff-main-content">
                                <section style={{ marginBottom: '40px' }}>
                                    <h2 style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', color: 'var(--primary-800)' }}>
                                        <StarIcon sx={{ color: 'var(--gold-400)' }} /> About
                                    </h2>
                                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--gray-600)' }}>{staff.bio}</p>
                                </section>

                                <section style={{ marginBottom: '40px' }}>
                                    <h2 style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', color: 'var(--primary-800)' }}>
                                        <WorkspacePremiumIcon sx={{ color: 'var(--primary-500)' }} /> Experience
                                    </h2>
                                    <div style={{ padding: '20px', borderRadius: '16px', background: 'var(--white)', border: '1px solid var(--gray-200)' }}>
                                        <p style={{ color: 'var(--gray-700)', fontWeight: '500' }}>{staff.experience}</p>
                                    </div>
                                </section>

                                <section>
                                    <h2 style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: 'var(--primary-800)' }}>
                                        <SchoolIcon sx={{ color: 'var(--primary-500)' }} /> Subjects Handled
                                    </h2>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                                        {staff.subjects.map((sub, i) => (
                                            <motion.span
                                                key={i}
                                                whileHover={{ scale: 1.05 }}
                                                style={{ padding: '10px 20px', borderRadius: '30px', background: 'linear-gradient(135deg, var(--primary-500), var(--primary-700))', color: 'white', fontWeight: '600', fontSize: '0.9rem', boxShadow: '0 4px 10px rgba(59, 130, 246, 0.2)' }}
                                            >
                                                {sub}
                                            </motion.span>
                                        ))}
                                    </div>
                                </section>

                                <div style={{ marginTop: '50px', padding: '40px', borderRadius: '24px', background: 'linear-gradient(135deg, var(--primary-800), var(--primary-900))', color: 'white', textAlign: 'center' }}>
                                    <h3 style={{ marginBottom: '15px' }}>Interested in joined {staff.name}'s batch?</h3>
                                    <p style={{ marginBottom: '25px', opacity: 0.9 }}>Contact us today to check availability and schedule a free demo session.</p>
                                    <Link to="/contact" className="hero__btn hero__btn--primary" style={{ display: 'inline-block' }}>
                                        Book an Inquiry
                                    </Link>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>

            <style>{`
        .staff-detail-page {
            background: linear-gradient(to bottom, #f8fafc, #eff6ff);
            min-height: 100vh;
        }
        @media (max-width: 900px) {
            .staff-detail__grid {
                grid-template-columns: 1fr !important;
            }
            .staff-sidebar {
                position: static !important;
            }
        }
      `}</style>
        </PageTransition>
    );
}
