import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'
import { certificates } from '../data/certificates'

// Import Swiper styles
import 'swiper/css'

export default function CertificationCarousel() {
    return (
        <div className="py-8 relative">

            <Swiper
                modules={[Autoplay]}
                spaceBetween={40}
                slidesPerView={2}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                speed={1000}
                breakpoints={{
                    480: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 60,
                    },
                    1280: {
                        slidesPerView: 6,
                        spaceBetween: 60,
                    },
                }}
                className="certification-carousel"
            >
                {certificates.map((cert) => (
                    <SwiperSlide key={cert.id}>
                        <motion.div
                            whileHover={{ y: -8, scale: 1.05 }}
                            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                            className="cursor-pointer"
                        >
                            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 aspect-square flex flex-col items-center justify-center group">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-contain relative z-10"
                                />
                            </div>
                            <p className="text-center text-xs font-semibold text-gray-600 mt-4 group-hover:text-gold transition-colors duration-300 line-clamp-2">
                                {cert.title}
                            </p>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <style jsx>{`
        .certification-carousel {
          padding: 2rem 0;
        }
      `}</style>
        </div>
    )
}
