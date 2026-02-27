import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { motion } from 'framer-motion';

export default function WhatsAppFloat() {
    return (
        <motion.a
            href="https://wa.me/919876543210?text=Hi%2C%20I%20am%20interested%20in%20admission%20at%20Sri%20Karthikeya%20Tuition%20Hub"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-float"
            aria-label="Chat on WhatsApp"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: 'spring', stiffness: 200 }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
        >
            <WhatsAppIcon sx={{ fontSize: 32 }} />
        </motion.a>
    );
}
