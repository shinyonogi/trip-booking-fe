import { useNavigate } from "react-router-dom";
import { Variants, motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './Menu.css';


interface VariantDefinition extends Variants {
    hidden: { opacity: number; x?: number };
    visible: {
        opacity: number;
        x?: number;
        transition: {
            opacity?: { duration: number };
            x?: { duration: number };
        };
    };
}

type MenuProps = {
    menuToggled: boolean;
    setMenuToggled: React.Dispatch<React.SetStateAction<boolean>>;
};

const Menu: React.FC<MenuProps> = ({menuToggled, setMenuToggled}) => {
    const navigate = useNavigate();

    const variants: VariantDefinition = {
        hidden: { opacity: 0, x: -window.innerWidth },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            x: { duration: 0.1 },
            opacity: { duration: 0.5 },
          },
        }
    };

    return (
    <>
        <motion.div
            className={'menu'}
            initial="hidden"
            animate={menuToggled ? "visible" : "hidden"}
            variants={variants}
        >
            <div className="menu__header">
                <motion.div
                    className="menu__header__return__wrapper"
                    onClick={() => {setMenuToggled(false)}}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                >
                    <button className="menu__header__return" type='button'>
                        <FontAwesomeIcon  icon={faArrowLeft} />
                    </button>
                    <p>Close Menu</p>
                </motion.div>
                <div className="menu__header__logo">
                    <h1>Explore Japan</h1>
                    <p>Made in Kyoto</p>
                </div>
            </div>
            <ul className="menu__list">
                <motion.li className="menu__list__item"
                    onClick={() => {setMenuToggled(false)}}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                >
                    <span>-</span>Home<span>-</span>
                </motion.li>
                <motion.li
                    className="menu__list__item"
                    onClick={() => {navigate('/kyoto')}}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                >
                    <span>-</span>About<span>-</span>
                </motion.li>
                <motion.li
                    className="menu__list__item"
                    onClick={() => {navigate('/kyoto')}}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                >
                    <span>-</span>Contact<span>-</span>
                </motion.li>
                <motion.li
                    className="menu__list__item"
                    onClick={() => {navigate('/kyoto')}}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                >
                    <span>-</span>Blog<span>-</span>
                </motion.li>
                <motion.li
                    className="menu__list__item"
                    onClick={() => {navigate('/kyoto')}}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                >
                    <span>-</span>Career<span>-</span>
                </motion.li>
            </ul>

        </motion.div>
    </>
  );
}

export default Menu;
