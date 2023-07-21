import { useContext } from "react";
import { RootContext } from "../context";
import { defaultAppearVariants, mobileScreenSize } from "../constants";
import { motion } from "framer-motion";
import useAppearance from "../hooks/useAppearance";

function PromotionItem({promotion, i}) {
    const width = useContext(RootContext);
    const [ref, controls] = useAppearance();


    if(width > mobileScreenSize){
        return (
            <motion.li 
                className="promotion"
                ref={ref}
                variants={defaultAppearVariants}
                initial={'hidden'}
                animate={controls}
                custom={i}
            >
                <div className="title">{promotion.title}</div>
                <div className="description">{promotion.description}</div>
            </motion.li>
        )
    } else{
        return (
            <motion.li 
                className="promotion"
                ref={ref}
                variants={defaultAppearVariants}
                initial={'hidden'}
                animate={controls}
                custom={i}
            >
                <div className="short-title">
                    {promotion.short}
                </div>
            </motion.li>
        )
    }
}

export default PromotionItem;