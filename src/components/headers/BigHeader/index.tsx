import { NavigateFunction, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import ButtonPrimary from '@/components/buttons/ButtonPrimary';

import './BigHeader.css';

const BigHeader: React.FC = () => {
    const navigate: NavigateFunction = useNavigate();
    const [expandHeader, setExpandHeader] = useState<boolean>(false);
    const [shrinkHeader, setShrinkHeader] = useState<boolean>(false);
    const [reachedGallery, setReachedGallery] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset: number = window.scrollY;
            const windowHeight: number = window.innerHeight;
            setExpandHeader(offset > windowHeight * 0 && offset < windowHeight * 0.6);
            setShrinkHeader((offset > windowHeight * 0.6 && offset < windowHeight * 1.1) || offset > windowHeight * 4);
            setReachedGallery(offset > windowHeight * 1.1 && offset < windowHeight * 4);
        };

        window.addEventListener('scroll', handleScroll);

        return () => { window.removeEventListener('scroll', handleScroll);}
    }, []);


    return (
        <>
            <header className={
                `big-header
                ${expandHeader ? 'big-header--scrolled-once' : ''}
                ${shrinkHeader ? 'big-header--scrolled-twice' : ''}
                ${reachedGallery ? 'big-header--reached-gallery' : ''}
                `
                }
            >
                <div className='big-header--hamburger__wrapper'>
                    <button className='big-header__hamburger' type='button'>
                        <FontAwesomeIcon icon={faBars} size='lg'/>
                    </button>
                </div>
                <div className='big-header__logo'>
                    <h1>Explore Japan</h1>
                    <p>Made in Kyoto</p>
                </div>
                <div className='big-header--book-button__wrapper'>
                    <ButtonPrimary label='BOOK NOW' onClick={() => navigate('/')}/>
                </div>
            </header>
        </>
    );
}

export default BigHeader;
