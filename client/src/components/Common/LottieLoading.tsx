import { motion } from 'framer-motion';
import Lottie from 'lottie-react';

import type { AnimationProps } from 'framer-motion';

import loadingAnimation from '../../lottie/triangle-loading.json';

export interface LottieLoadingProps extends AnimationProps {
    animationKey: string,
    height: number,
    width: number,
    className?: string
};

function LottieLoading({ animationKey, className="", height, width, initial, animate, transition }: LottieLoadingProps) {

    const defaultAnimationOptions: AnimationProps = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        transition: {
            duration: .8
        }
    };

    return(
        <motion.div 
            key={animationKey}
            className={className}
            initial={initial ?? defaultAnimationOptions.initial} 
            animate={animate ?? defaultAnimationOptions.animate} 
            transition={transition ?? defaultAnimationOptions.transition}
        >
            <Lottie animationData={loadingAnimation} height={height} width={width} />
        </motion.div>
    );
};

export default LottieLoading;