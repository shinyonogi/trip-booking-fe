import { useNavigate } from "react-router-dom";
import { Variants, motion } from "framer-motion";

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
};

const Menu: React.FC<MenuProps> = ({menuToggled}) => {
    const navigate = useNavigate();

    const variants: VariantDefinition = {
        hidden: { opacity: 0, x: -window.innerWidth },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            x: { duration: 0.1 },
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
            <ul className="menu__list">
                <li className="menu__item" onClick={() => {navigate('/')}}>Home</li>
                <li className="menu__item" onClick={() => {navigate('/')}}>About</li>
                <li className="menu__item" onClick={() => {navigate('/')}}>Contact</li>
                <li className="menu__item" onClick={() => {navigate('/')}}>Blog</li>
                <li className="menu__item" onClick={() => {navigate('/')}}>Careers</li>
            </ul>
        </motion.div>
    </>
  );
}

export default Menu;
