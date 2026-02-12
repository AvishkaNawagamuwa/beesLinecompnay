import { motion } from 'framer-motion'

export default function Hero({ title, subtitle, children, className = '', bgImage = null }) {
    return (
        <section className={`relative w-full min-h-[450px] md:min-h-[550px] pt-24 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-br from-gray-600 to-gray-800 ${className}`}>
            {/* Background Image */}
            {bgImage && (
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        backgroundImage: `url('${bgImage}')`,
                        backgroundAttachment: 'fixed',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                />
            )}

            {/* Overlay - Dark for better contrast */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="container-custom relative z-10 h-full flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto px-4"
                >
                    {title && (
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
                            {title}
                        </h1>
                    )}
                    {subtitle && (
                        <p className="text-lg md:text-xl text-white/95 mb-8 leading-relaxed" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>
                            {subtitle}
                        </p>
                    )}
                    {children}
                </motion.div>
            </div>
        </section>
    )
}
