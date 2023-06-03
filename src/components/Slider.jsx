import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../assests/img1.png'
import img2 from '../assests/features 02.png'
// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <div className=' max-h-[350px] overflow-hidden'>
    <Swiper
      spaceBetween={10}
      slidesPerView={1.5}
    >
      <SwiperSlide>
        <img className='w-[20rem]' src={img1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img className='w-[20rem]' src={img1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img className='w-[20rem]' src={img1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img className='w-[20rem]' src={img1} alt="" />
      </SwiperSlide>
    </Swiper>
    </div>
  );
};