import { InViewHookResponse, useInView } from "react-intersection-observer";
import { motion, Variants } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTaxi, faHotel, faLocationDot, faUtensils, faPersonWalking, faComment, faWind } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import ButtonPrimary from "@/components/buttons/ButtonPrimary";

import './KyotoOptionsSection.css';

interface VariantDefinition extends Variants {
    hidden: { opacity: number; y?: number };
    visible: {
        opacity: number;
        y?: number;
        transition: {
            opacity?: { duration: number };
            y?: { duration: number };
        };
    };
}

const KyotoOptionsSection: React.FC = () => {
    const navigate = useNavigate();

    const [ref, inView]: InViewHookResponse = useInView({
        threshold: 0.05,
        triggerOnce: false
    });

    const variants: VariantDefinition = {
        hidden: { opacity: 0, y: 100 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            opacity: {duration: 1},
            y: {duration: 1}
          }
        }
    };

    return (
        <>
            <section className='kyoto-options'>
                <h2 className="kyoto-options__title">Plans We Offer</h2>
                <motion.div
                    className="kyoto-options__container"
                    ref={ref}
                    initial='hidden'
                    animate={inView ? 'visible' : 'hidden'}
                    variants={variants}
                >
                    <div className="kyoto-options__option__wrapper">
                        <div className="kyoto-options__option">
                            <h3 className="kyoto-options__option__title">1 Day</h3>
                            <div className="kyoto-options__option__line-bottom"></div>
                            <ul className="kyoto-options__option__list">
                                <li>
                                    <h4><FontAwesomeIcon icon={faTaxi} className='option__item__list__icon'/> Taxi: </h4>
                                    <p><strong>Full-day</strong> service.</p>
                                </li>
                                <li>
                                    <h4><FontAwesomeIcon icon={faHotel} className='option__item__list__icon'/> Hotel: </h4>
                                    <p><strong>4-star</strong> central location.</p>
                                </li>
                                <li>
                                    <h4><FontAwesomeIcon icon={faLocationDot} className='option__item__list__icon'/> Sightseeing Plan: </h4>
                                    <ul>
                                        <li><p>Kinkaku-ji, Kiyomizu-dera, and Yasaka Shrine.</p></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="kyoto-options__option--button__wrapper">
                                <ButtonPrimary label="Choose 1 Day" onClick={() => navigate('/')}/>
                            </div>
                        </div>
                    </div>
                    <div className="kyoto-options__option__wrapper">
                        <div className="kyoto-options__option">
                            <h3 className="kyoto-options__option__title">3 Days</h3>
                            <div className="kyoto-options__option__line-bottom"></div>
                            <ul className="kyoto-options__option__list">
                                <li>
                                    <h4><FontAwesomeIcon icon={faTaxi} className='option__item__list__icon'/> Taxi: </h4>
                                    <p><strong>3-day</strong> service.</p>
                                </li>
                                <li>
                                    <h4><FontAwesomeIcon icon={faHotel} className='option__item__list__icon'/> Hotel: </h4>
                                    <p><strong>Historical inn</strong> or <strong>Ryokan</strong>.</p>
                                </li>
                                <li>
                                    <h4><FontAwesomeIcon icon={faLocationDot} className='option__item__list__icon'/> Sightseeing Plan: </h4>
                                    <ul>
                                        <li>
                                            <p><strong>Day 1: </strong>Kinkaku-ji, Ryoan-ji, Kitano Tenmangu.</p>
                                        </li>
                                        <li>
                                            <p><strong>Day 2: </strong>Kiyomizu-dera, Yasaka Shrine, Gion.</p>
                                        </li>
                                        <li>
                                            <p><strong>Day 3: </strong>Arashiyama, Togetsukyo Bridge, Tofuku-ji.</p>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="kyoto-options__option--button__wrapper">
                                <ButtonPrimary label="Choose 3 Days" onClick={() => navigate('/')}/>
                            </div>
                        </div>
                    </div>
                    <div className="kyoto-options__option__wrapper">
                        <div className="kyoto-options__option">
                            <h3 className="kyoto-options__option__title">Custom Plan</h3>
                            <div className="kyoto-options__option__line-bottom"></div>
                            <ul className="kyoto-options__option__list">
                                <li>
                                    <h4><FontAwesomeIcon icon={faTaxi} className='option__item__list__icon'/> Taxi: </h4>
                                    <p>Half-day to 3-day options.</p>
                                </li>
                                <li>
                                    <h4><FontAwesomeIcon icon={faHotel} className='option__item__list__icon'/> Hotel: </h4>
                                    <p>Luxury to guesthouse choices.</p>
                                </li>
                                <li>
                                    <h4><FontAwesomeIcon icon={faLocationDot} className='option__item__list__icon'/> Sightseeing: </h4>
                                    <p>30+ Spots.</p>
                                </li>
                                <li>
                                    <h4><FontAwesomeIcon icon={faUtensils} className='option__item__list__icon'/> Dining: </h4>
                                    <p>Kyoto cuisine, vegan, market tour.</p>
                                </li>
                                <li>
                                    <h4><FontAwesomeIcon icon={faPersonWalking} className='option__item__list__icon'/> Activities :</h4>
                                    <p>Tea ceremony, kimono, Maiko transformation.</p>
                                </li>
                                <li>
                                    <h4><FontAwesomeIcon icon={faComment} className='option__item__list__icon'/> Guide: </h4>
                                    <p>Multilingual options.</p>
                                </li>
                                <li>
                                    <h4><FontAwesomeIcon icon={faWind} className='option__item__list__icon'/> Seasonal Options: </h4>
                                    <p>Recommendations for cherry blossom season, autumn leaves, and snowy landscapes.</p>
                                </li>
                            </ul>
                            <div className="kyoto-options__option--button__wrapper">
                                <ButtonPrimary label="Custom Plan" onClick={() => navigate('/')}/>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </>
    );
};

export default KyotoOptionsSection;
