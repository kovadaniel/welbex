import { forwardRef } from 'react';
import cl from './BlueButton.module.css'
import { motion } from 'framer-motion';

const BlueButton = forwardRef(({children, className, ...props}, ref) => {
    return (
        <motion.button 
            className={cl.button + (className ? ' ' + className : '')}
            ref={ref}
            {...props}
            >
            {children}
        </motion.button>
    );
})

export default BlueButton;