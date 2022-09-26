
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';


const sponsorList = [
    {
        imgUrl: 'assets/images/about/c1.png',
        imgAlt: 'c1',
    },
    {
        imgUrl: 'assets/images/about/c2.png',
        imgAlt: 'c2',
    },
    {
        imgUrl: 'assets/images/about/c3.png',
        imgAlt: 'c3',
    },
    {
        imgUrl: 'assets/images/about/c4.png',
        imgAlt: 'c4',
    },
    {
        imgUrl: 'assets/images/about/c5.png',
        imgAlt: 'c5',
    },
    {
        imgUrl: 'assets/images/about/c6.png',
        imgAlt: 'c6',
    },
    {
        imgUrl: 'assets/images/about/c7.png',
        imgAlt: 'c7',
    },
]


const Sponsor = () => {
    return (
        <div className="sponsor-section section-bg">
            <div className="container">
                <div className="section-wrapper">
                    <div className="sponsor-slider">
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={2}
                            loop={'true'}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            breakpoints={{
                                0: {
                                    width: 0,
                                    slidesPerView: 1,
                                },
                                768: {
                                    width: 768,
                                    slidesPerView: 3,
                                },
                                1200: {
                                    width: 1200,
                                    slidesPerView: 5.5,
                                },
                            }}
                        >
                            {sponsorList.map((val, i) => (
                                <SwiperSlide key={i}>
                                    <div className="sponsor-iten">
                                        <div className="sponsor-thumb">
                                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Sponsor;