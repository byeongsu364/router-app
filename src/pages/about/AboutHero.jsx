import React from 'react'
import { aboutSlides } from '../../data/aboutSlide'

import { Swiper, SwiperSlide } from 'swiper/react'           // Swiper 컴포넌트
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './AboutHero.css'
const AboutHero = () => {
    return (
        <div className="about-slider-wrap">
            <Swiper
                slidesPerView={3}
                loop
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {aboutSlides.map(({ id, img, title, subtitle, href }) => {
                    const card = (
                        <figure className="slide-card">
                            <div
                                className="slide-bg"
                                role="img"
                                aria-label={title}
                            />

                            <div className="slide-overlay" />
                            <figcaption className="slide-caption">
                                <h2>{title}</h2>
                                <p>{subtitle}</p>
                            </figcaption>
                        </figure>
                    )
                    return (

                        <SwiperSlide key={id} >
                            <a style={{ backgroundImage: `url(${img})` }}
                                href={href}
                                className="slide-link"
                            >
                                {card}
                            </a>
                        </SwiperSlide>
                    )
                }
                )}
            </Swiper>
        </div>
    )
}

export default AboutHero