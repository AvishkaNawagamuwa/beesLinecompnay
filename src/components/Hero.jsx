import { motion } from 'framer-motion'

export default function Hero({ title, subtitle, children, className = '', bgImage = '', bgOverlay = 'linear-gradient(135deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.50) 100%)' }) {
    const defaultBg = 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1920&q=80'
    const imageSrc = bgImage || defaultBg

    if (bgImage) {
        // Hero with background image
        return (
            <section className="relative h-64 md:h-80 lg:h-96 flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('${imageSrc}')`
                    }}
                />

                {/* Overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: bgOverlay
                    }}
                />

                {/* Content */}
                <div className="relative z-10 container-custom text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        {title && (
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                                {title}
                            </h1>
                        )}
                        {subtitle && (
                            <p className="text-lg md:text-xl text-white/95 drop-shadow-md">
                                {subtitle}
                            </p>
                        )}
                        {children}
                    </motion.div>
                </div>
            </section>
        )
    }

    // Fallback to simple hero without background image
    return (
        <section className={`pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-beige/30 to-cream ${className}`}>
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    {title && (
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                            {title}
                        </h1>
                    )}
                    {subtitle && (
                        <p className="text-lg md:text-xl text-gray-600 mb-8">
                            {subtitle}
                        </p>
                    )}
                    {children}
                </motion.div>
            </div>
        </section>
    )
}
