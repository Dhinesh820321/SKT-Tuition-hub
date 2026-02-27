import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ScrollReveal({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.6,
    once = true,
    className = '',
}) {
    const [ref, inView] = useInView({ triggerOnce: once, threshold: 0.15 });

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
            scale: direction === 'scale' ? 0.9 : 1,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            transition: {
                duration,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            variants={variants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
        >
            {children}
        </motion.div>
    );
}
