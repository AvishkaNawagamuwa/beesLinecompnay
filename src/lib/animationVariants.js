// Page & Section Animations
export const pageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export const pageTransition = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
}

// Fade Animations
export const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export const fadeInDown = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
}

// Scale Animations
export const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
}

export const scaleUpSmooth = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
}

// Stagger animations
export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.08,
            duration: 0.5
        }
    }
}

export const staggerContainerFast = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.05
        }
    }
}

// Card animations
export const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export const cardHover = {
    rest: { y: 0, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' },
    hover: {
        y: -8,
        boxShadow: '0 20px 25px rgba(212, 175, 55, 0.15)',
        transition: { duration: 0.3 }
    }
}

export const cardTilt = {
    rest: { rotateY: 0 },
    hover: { rotateY: 5 }
}

// Text animations
export const textReveal = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.05,
            duration: 0.4
        }
    })
}

export const titleReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: 'easeOut'
        }
    }
}

// Slide animations
export const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

// Bounce animations
export const bounce = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 10
        }
    }
}

export const bounceSmall = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 150,
            damping: 12
        }
    }
}

// Rotate animations
export const rotateIn = {
    hidden: { opacity: 0, rotate: -10 },
    visible: { opacity: 1, rotate: 0, transition: { duration: 0.6 } }
}

// Floating animation
export const floating = {
    animate: {
        y: [0, -10, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
        }
    }
}

export const floatingSmall = {
    animate: {
        y: [0, -5, 0],
        transition: {
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut'
        }
    }
}

// Icon animations
export const iconPulse = {
    animate: {
        scale: [1, 1.1, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
        }
    }
}

export const iconRotate = {
    animate: {
        rotate: 360,
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: 'linear'
        }
    }
}

// List item animations
export const listItem = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
}

export const listContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.05
        }
    }
}

// Button hover animations
export const buttonHover = {
    whileHover: {
        scale: 1.05,
        transition: { duration: 0.2 }
    },
    whileTap: {
        scale: 0.95,
        transition: { duration: 0.1 }
    }
}

// Blur fade in
export const blurFadeIn = {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    visible: {
        opacity: 1,
        filter: 'blur(0px)',
        transition: { duration: 0.6 }
    }
}

// Expansion animation
export const expand = {
    hidden: { opacity: 0, height: 0 },
    visible: {
        opacity: 1,
        height: 'auto',
        transition: { duration: 0.4 }
    }
}

export default {
    pageVariants,
    pageTransition,
    fadeInUp,
    fadeInDown,
    fadeInLeft,
    fadeInRight,
    fadeIn,
    scaleUp,
    scaleUpSmooth,
    staggerContainer,
    staggerContainerFast,
    cardVariants,
    cardHover,
    cardTilt,
    textReveal,
    titleReveal,
    slideInLeft,
    slideInRight,
    bounce,
    bounceSmall,
    rotateIn,
    floating,
    floatingSmall,
    iconPulse,
    iconRotate,
    listItem,
    listContainer,
    buttonHover,
    blurFadeIn,
    expand
}
