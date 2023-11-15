import { NavigateFunction, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

import ButtonPrimary from '@/components/buttons/ButtonPrimary';
import Menu from '@/components/Menu';

import './BigHeader.css';

interface BigHeaderProps {
    navigateTo: string;
}

const BigHeader: React.FC<BigHeaderProps> = ({ navigateTo }) => {
    const navigate: NavigateFunction = useNavigate();

    const [menuToggled, setMenuToggled] = useState<boolean>(false);

    const [expandHeader, setExpandHeader] = useState<boolean>(false);
    const [shrinkHeader, setShrinkHeader] = useState<boolean>(false);
    const [reachedGallery, setReachedGallery] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset: number = window.scrollY;
            const windowHeight: number = window.innerHeight;
            setExpandHeader(offset > windowHeight * 0 && offset < windowHeight * 0.7);
            setShrinkHeader((offset > windowHeight * 0.7 && offset < windowHeight * 1.4) || offset > windowHeight * 5);
            setReachedGallery(offset > windowHeight * 1.4 && offset < windowHeight * 2.0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => { window.removeEventListener('scroll', handleScroll);}
    }, []);


    return (
        <>
            <Menu menuToggled={menuToggled} setMenuToggled={setMenuToggled}/>
            <header className={
                `big-header
                ${expandHeader ? 'big-header--expanded' : ''}
                ${shrinkHeader ? 'big-header--shrank' : ''}
                ${reachedGallery ? 'big-header--reached-gallery' : ''}
                `
                }
            >
                <div className='big-header--hamburger__wrapper'>
                    <motion.button
                        className='big-header__hamburger'
                        type='button'
                        onClick={() => {setMenuToggled(true)}}
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    >
                        <FontAwesomeIcon icon={faBars} size='lg'/>
                    </motion.button>
                </div>
                <div className='big-header__logo'>
                    <h1>Explore Japan</h1>
                    <p>Made in Kyoto</p>
                </div>
                <div className='big-header--book-button__wrapper'>
                    <ButtonPrimary label='BOOK NOW' onClick={() => {navigate(navigateTo)}}/>
                </div>
            </header>
        </>
    );
}

export default BigHeader;
