import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';

import heroImg from '../assets/images/hero_classroom.png';
import studentsImg from '../assets/images/students_learning.png';
import scienceImg from '../assets/images/gallery_science.png';
import artsImg from '../assets/images/gallery_arts.png';
import founderImg from '../assets/images/founder.png';

import './Gallery.css';

const images = [
    { src: heroImg, title: 'Our Classroom', category: 'campus' },
    { src: studentsImg, title: 'Students Learning', category: 'students' },
    { src: scienceImg, title: 'Science Lab', category: 'activities' },
    { src: artsImg, title: 'Art & Craft', category: 'activities' },
    { src: founderImg, title: 'Our Faculty', category: 'campus' },
    { src: heroImg, title: 'Interactive Sessions', category: 'students' },
    { src: studentsImg, title: 'Group Activities', category: 'activities' },
    { src: scienceImg, title: 'Experiments', category: 'activities' },
    { src: artsImg, title: 'Creative Corner', category: 'activities' },
];

const categories = ['all', 'campus', 'students', 'activities'];

export default function Gallery() {
    const [selected, setSelected] = useState(null);
    const [filter, setFilter] = useState('all');

    const filtered = filter === 'all' ? images : images.filter(img => img.category === filter);

    return (
        <PageTransition>
            {/* Header */}
            <section className="gallery-hero animated-gradient">
                <div className="gallery-hero__content">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Our <span className="gold-accent">Gallery</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Moments of learning, growth, and joy at Sri Karthikeya Tuition Hub
                    </motion.p>
                </div>
            </section>

            <section className="gallery section-padding">
                <div className="container">
                    {/* Filter */}
                    <ScrollReveal>
                        <div className="gallery__filters">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    className={`gallery__filter ${filter === cat ? 'gallery__filter--active' : ''}`}
                                    onClick={() => setFilter(cat)}
                                >
                                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                </button>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Grid */}
                    <motion.div className="gallery__grid" layout>
                        <AnimatePresence>
                            {filtered.map((img, i) => (
                                <motion.div
                                    key={`${img.title}-${i}`}
                                    className="gallery__item"
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
                                    style={{ gridRow: i % 3 === 0 ? 'span 2' : 'span 1' }}
                                    onClick={() => setSelected(img)}
                                >
                                    <img src={img.src} alt={img.title} />
                                    <div className="gallery__item-overlay">
                                        <ZoomInIcon sx={{ fontSize: 32 }} />
                                        <span>{img.title}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        className="lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelected(null)}
                    >
                        <motion.div
                            className="lightbox__content"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="lightbox__close" onClick={() => setSelected(null)}>
                                <CloseIcon />
                            </button>
                            <img src={selected.src} alt={selected.title} />
                            <p className="lightbox__title">{selected.title}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </PageTransition>
    );
}
