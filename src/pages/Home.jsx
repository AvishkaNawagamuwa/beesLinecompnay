import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, cardVariants, slideInLeft, slideInRight, cardHover, scaleUp, listContainer, listItem, floating } from '../lib/animationVariants'
import { Link } from 'react-router-dom'
import HeroCarousel from '../components/HeroCarousel'
import FeaturedProductsCarousel from '../components/FeaturedProductsCarousel'
import CertificationCarousel from '../components/CertificationCarousel'
import ScrollToTopButton from '../components/ScrollToTopButton'

export default function Home() {
    return (
        <div>
            {/* Hero Carousel - Full width, full height */}
            <HeroCarousel />

            {/* Who We Are Section */}
            <section className="py-20 bg-gradient-to-br from-white via-beige/10 to-cream/20">
                <div className="container-custom">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeInUp}
                        className="text-center mb-20"
                    >
                        <h2 className="section-title">Who We Are</h2>
                        <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
                        <p className="section-subtitle">
                            A trusted and professionally registered herbal export company
                        </p>
                    </motion.div>

                    {/* 2-Column Layout: Story + Registration Card */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 gap-12 items-start mb-16"
                    >
                        {/* Left: Company Story */}
                        <motion.div
                            variants={cardVariants}
                            className="space-y-6"
                        >
                            <div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Foundation</h3>
                                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                    Bees Line Exports is a professionally registered and established herbal export company dedicated to bringing authentic Sri Lankan Ayurvedic products to global markets. With a foundation built on trust, excellence, and international compliance standards, we serve as a reliable partner for distributors worldwide.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Our commitment extends beyond quality products—we're committed to transparency, reliability, and building long-term partnerships that thrive on mutual success and shared values.
                                </p>
                            </div>
                            <div className="pt-4">
                                <h4 className="text-xl font-semibold text-gray-900 mb-3">Our Commitment</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">GMP-certified manufacturing facilities</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">International quality and safety standards</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">Transparent business practices and compliance</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Right: Company Registration Card */}
                        <motion.div
                            variants={cardVariants}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="h-full"
                        >
                            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gold/20 relative overflow-hidden">
                                {/* Decorative accent */}
                                <div className="absolute top-0 right-0 w-40 h-40 bg-gold/5 rounded-full -mr-20 -mt-20"></div>

                                <div className="relative z-10">
                                    {/* Badge */}
                                    <div className="inline-block mb-6">
                                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold font-semibold text-sm">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            Registered Company
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Registration</h3>

                                    <div className="space-y-5 mb-8">
                                        <div className="border-b border-gray-200 pb-4">
                                            <p className="text-sm text-gray-600 font-semibold uppercase tracking-wide mb-1">Company Name</p>
                                            <p className="text-lg font-semibold text-gray-900">BEES LINE EXPORTS (PVT) LTD</p>
                                        </div>

                                        <div className="border-b border-gray-200 pb-4">
                                            <p className="text-sm text-gray-600 font-semibold uppercase tracking-wide mb-1">Company Number</p>
                                            <p className="text-lg font-semibold text-gold">PV 002310335</p>
                                        </div>

                                        <div className="border-b border-gray-200 pb-4">
                                            <p className="text-sm text-gray-600 font-semibold uppercase tracking-wide mb-1">Incorporated</p>
                                            <p className="text-lg font-semibold text-gray-900">30 November 2020</p>
                                        </div>

                                        <div>
                                            <p className="text-sm text-gray-600 font-semibold uppercase tracking-wide mb-1">Company Type</p>
                                            <p className="text-lg font-semibold text-gray-900">Private Company with Limited Liability</p>
                                            <p className="text-sm text-gray-600 mt-2">Companies Act No. 7 of 2007</p>
                                        </div>
                                    </div>

                                    <a
                                        href="https://images.unsplash.com/photo-1507842217343-583f20270319?w=400"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gold hover:bg-gold/90 transition-all duration-300 hover:shadow-lg"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                        View Registration Certificate
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* 3 Premium Tiles */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={staggerContainer}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20"
                    >
                        {[
                            {
                                icon: '🌿',
                                title: 'Herbal Expertise',
                                desc: "Rooted in Sri Lanka's rich Ayurvedic tradition, we combine ancient wisdom with modern manufacturing standards and international compliance."
                            },
                            {
                                icon: '✅',
                                title: 'Certified Quality',
                                desc: 'All products manufactured under GMP-certified facilities, ensuring the highest standards of safety, purity, and efficacy for global markets.'
                            },
                            {
                                icon: '🌍',
                                title: 'Export & Partnerships',
                                desc: 'Global reach with a network of trusted distributors, offering competitive pricing, reliable support, and consistent product availability worldwide.'
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{ y: -6, scale: 1.02 }}
                                className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group border border-gray-200 hover:border-gold/30"
                            >
                                {/* Decorative background */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>

                                <div className="relative z-10">
                                    <div className="text-5xl mb-5 inline-block">{item.icon}</div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Featured Products Carousel Section */}
            <section className="py-20 bg-gradient-to-br from-beige/20 to-cream/30">
                <div className="container-custom">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <h2 className="section-title">Featured Products</h2>
                        <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
                        <p className="section-subtitle">
                            Experience the best of Sri Lankan herbal wellness
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeInUp}
                    >
                        <FeaturedProductsCarousel />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeInUp}
                        className="text-center mt-12"
                    >
                        <Link to="/products" className="btn-primary inline-flex items-center gap-2">
                            View All Products
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <h2 className="section-title">Why Choose Bees Line Exports</h2>
                        <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={staggerContainer}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {[
                            { icon: '🎯', title: 'Authentic Products', desc: 'Sourced directly from Sri Lankan farms and manufacturers, ensuring genuine quality and traditional formulations.' },
                            { icon: '📦', title: 'Reliable Supply Chain', desc: 'Consistent product availability with efficient logistics and timely international delivery.' },
                            { icon: '💰', title: 'Competitive Pricing', desc: 'Direct export prices that give you strong margins while maintaining premium quality.' },
                            { icon: '📜', title: 'Complete Documentation', desc: 'All necessary export papers, certificates, and compliance documents provided.' },
                            { icon: '🔬', title: 'Lab Tested', desc: 'Every batch undergoes rigorous quality testing to ensure safety and effectiveness.' },
                            { icon: '🌟', title: 'Ongoing Support', desc: 'Dedicated account management and technical support for all our distribution partners.' }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{ y: -8, scale: 1.03 }}
                                className="bg-beige/30 rounded-xl p-6 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="text-4xl mb-4 relative z-10 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-3 relative z-10">{item.title}</h4>
                                <p className="text-gray-700 relative z-10">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Quality & Certifications Section */}
            <section className="py-20 bg-gradient-to-br from-cream/40 to-beige/20">
                <div className="container-custom">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <h2 className="section-title">Quality & Certifications</h2>
                        <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
                        <p className="section-subtitle">
                            International standards ensuring premium quality and safety
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeInUp}
                    >
                        <CertificationCarousel />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeInUp}
                        className="text-center mt-12"
                    >
                        <Link to="/quality" className="btn-secondary inline-flex items-center gap-2">
                            View All Certifications
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </Link>
                    </motion.div>

                    {/* Quality Commitment */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={staggerContainer}
                        className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg"
                    >
                        <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Quality Commitment</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { title: 'GMP-Aligned Processes', desc: 'All manufacturing follows Good Manufacturing Practice standards for consistent quality.' },
                                { title: 'HACCP Food Safety', desc: 'Hazard Analysis and Critical Control Points system ensures safety at every stage.' },
                                { title: 'Lab Testing', desc: 'Rigorous testing for purity, potency, and quality before export.' },
                                { title: 'Traceable Sourcing', desc: 'Complete supply chain transparency with export-ready packaging.' }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    className="flex items-start gap-4"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                                        <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                                        <p className="text-gray-600 text-sm">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Partners CTA Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeInUp}
                        className="bg-gradient-to-r from-gold/10 via-primary-100/10 to-gold/10 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
                    >
                        <div className="absolute inset-0 opacity-5">
                            <div className="absolute inset-0" style={{
                                backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)',
                                backgroundSize: '30px 30px'
                            }}></div>
                        </div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Become a Distribution Partner
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                                Join our growing network of international distributors and bring premium Sri Lankan herbal products to your market.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/partners" className="btn-primary">
                                    Learn About Partnership
                                </Link>
                                <Link to="/request-export" className="btn-secondary">
                                    Request Export Quote
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Scroll to Top Button */}
            <ScrollToTopButton />
        </div>
    )
}
