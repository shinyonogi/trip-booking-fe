import { NavigateFunction, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import ButtonPrimary from '../../buttons/ButtonPrimary';

import './BigHeader.css';

const BigHeader: React.FC = () => {
    const navigate: NavigateFunction = useNavigate();
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset: number = window.scrollY;
            const windowHeight: number = window.innerHeight;
            setIsScrolled(offset > windowHeight * 0.20 && (offset < windowHeight * 2.0 || offset > windowHeight * 4.0));
        };

        window.addEventListener('scroll', handleScroll);

        return () => { window.removeEventListener('scroll', handleScroll);}
    }, []);


    return (
        <>
            <header className={`big-header ${isScrolled ? 'big-header--scrolled' : ''}`}>
                <button className='big-header__hamburger' type='button'>
                    <FontAwesomeIcon icon={faBars} size='lg'/>
                </button>
                <div className='big-header__logo'>
                    <h1>Explore Japan</h1>
                    <p>Made in Kyoto</p>
                </div>
                <ButtonPrimary label='BOOK NOW' onClick={() => navigate('/')}/>
            </header>
        </>
    );
}

export default BigHeader;
