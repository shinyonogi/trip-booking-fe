import { motion } from 'framer-motion';

import React from 'react';

type ButtonPrimaryProps = {
    label: string;
    onClick: () => void;
};

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ label, onClick }) => {
    return (
        <motion.div
            className='px-0.5 py-0.5 bg-black'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        >
            <button className='py-1.5 px-10 w-[calc(100%-1px)] h-[calc(100%-1px)] bg-black text-white border border-white font-normal text-lg hover:cursor-pointer focus:outline-none focus:ring' type='button' onClick={onClick}>
                <p className='button--text'>{label}</p>
            </button>
        </motion.div>
    );
};

export default ButtonPrimary;
