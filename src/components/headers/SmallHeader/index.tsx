import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import './SmallHeader.css';

interface SmallHeaderProps {
    navigateTo: string;
}

const SmallHeader: React.FC<SmallHeaderProps> = ({ navigateTo }) => {
    const navigate: NavigateFunction = useNavigate();

    return (
        <>
            <header className='small-header'>
                <motion.div
                    className='small-header--button small-header--button__back'
                    onClick={() => {navigate(-1)}}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                >
                    <button type='button'>
                        <FontAwesomeIcon icon={faArrowLeft}/>
                    </button>
                    <p>Go Back</p>
                </motion.div>
                <div className='small-header__logo'>
                    <h1>Explore Japan</h1>
                    <p>Made in Kyoto</p>
                </div>
                <motion.div
                    className='small-header--button small-header--button__forward'
                    onClick={() => {navigate(navigateTo)}}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                >
                    <p>Go Forward</p>
                    <button type='button'>
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </button>
                </motion.div>
            </header>
        </>
    );
}

export default SmallHeader;
