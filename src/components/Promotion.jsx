import BlueButton from "./UI/BlueButton/BlueButton";
import { defaultAppearVariants } from "../constants";
import { motion } from "framer-motion";
import useAppearance from "../hooks/useAppearance";
import PromotionItem from "./PromotionItem";

function Promotion({promotions}) {
    const [ref1, controls1] = useAppearance();
    const [ref2, controls2] = useAppearance();
    const [ref3, controls3] = useAppearance();
    const [ref4, controls4] = useAppearance();


    return (
        <div className="promotion-section">
            <div className="promotion-title">
                <motion.div 
                    className="add"
                    ref={ref1}
                    variants={defaultAppearVariants}
                    initial={'hidden'}
                    animate={controls1}
                    custom={0}
                >
                    Зарабатывайте больше <span>c WELBEX</span>
                </motion.div>
                <motion.div 
                    className="add-description"
                    ref={ref2}
                    variants={defaultAppearVariants}
                    initial={'hidden'}
                    animate={controls2}
                    custom={1}
                >
                    Развиваем и контролируем продажи за вас
                </motion.div>
            </div>
            <div className="promotion-description">
                <motion.div 
                    className="title"
                    ref={ref3}
                    variants={defaultAppearVariants}
                    initial={'hidden'}
                    animate={controls3}
                    custom={2}
                >
                    <span>Вместе с </span>бесплатной консультацией <span>мы дарим:</span>
                </motion.div>
                <ul className="promotions">
                    {promotions.map((p, i) => 
                        <PromotionItem key={p.title}  promotion={p} i={3 + i}/>
                    )}
                </ul>
                <BlueButton 
                    className='consult-button'
                    ref={ref4}
                    variants={defaultAppearVariants}
                    initial={'hidden'}
                    animate={controls4}
                    custom={7}
                >
                    Получить консультацию
                </BlueButton>
            </div>
        </div>
    );
}

export default Promotion;