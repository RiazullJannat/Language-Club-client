import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const imgUrls = [
    'https://i.ibb.co/FgsK111/19199505.jpg',
    'https://i.ibb.co/p0z5KyZ/10251756.jpg',
];

const Banner = () => {
    return (
        <div className="card bg-base-200 shadow-xl transform hover:scale-105 transition-transform my-10">
            <div className="md:flex gap-5">
                {/* Swiper Section */}
                <figure className="md:w-1/2">
                    <Swiper
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView="auto"
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 1000, 
                            disableOnInteraction: false, 
                        }}
                        modules={[EffectCoverflow, Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        {imgUrls.map((img, ind) => (
                            <SwiperSlide key={ind}>
                                <img
                                    src={img}
                                    className="w-full h-64 object-cover rounded-lg"
                                    alt={`Slide ${ind + 1}`}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </figure>

                {/* Text Section */}
                <div className="flex flex-col justify-center items-center my-5">
                    <h1 className="card-title text-2xl text-center md:text-4xl font-bold">Step Into a World Without Language Barriers</h1>
                    <p className="text-gray-600"></p>
                    <div className="card-actions mt-4">
                        <a className="btn btn-primary w-full">
                            Get Started 
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
