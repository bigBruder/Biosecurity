'use client';

import Image from 'next/image';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { anoxicFont } from '@/shared/lib/font';
import { Title2 } from '@/shared/ui/Title';

import slide1 from '../../images/home-page/slider/slide1.png';
import slide2 from '../../images/home-page/slider/slide2.png';
import slide3 from '../../images/home-page/slider/slide3.png';
import slide4 from '../../images/home-page/slider/slide4.png';
import slide5 from '../../images/home-page/slider/slide5.png';
import slide6 from '../../images/home-page/slider/slide6.png';
import css from './Slider.module.scss';

import 'swiper/scss';

const Slider = () => (
  <>
    <Title2 className={css.title}>
      Have you ever worked on a farm infected by a harmful disease?
    </Title2>
    <h4 className={css.subtitle}>
      We have, and we want to prevent you from having that experience. Non-compliance with
      biosecurity measures can lead to several serious consequences:
    </h4>
    <Swiper
      modules={[Pagination]}
      loop
      pagination={{
        clickable: true,
        el: '#paginationContainer',
        bulletClass: css.paginationButton,
        bulletActiveClass: css.paginationButtonActive,
      }}
    >
      <SwiperSlide className={css.slide}>
        <div className={css.imagesInner}>
          <div className={css.imageInner}>
            <Image className={css.img} src={slide2} alt='slide 2' />
            <span className={anoxicFont.className}>Spread of diseases and pests</span>
          </div>
          <div className={css.imageInner}>
            <Image className={css.img} src={slide1} alt='slide 1' />
            <span className={anoxicFont.className}>Economic impact</span>
          </div>
          <div className={css.imageInner}>
            <Image className={css.img} src={slide3} alt='slide 3' />
            <span className={anoxicFont.className}>Loss of consumer confidence</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className={css.slide}>
        <div className={css.imagesInner}>
          <div className={css.imageInner}>
            <Image className={css.img} src={slide4} alt='slide 4' />
            <span className={anoxicFont.className}>Spread of diseases and pests</span>
          </div>
          <div className={css.imageInner}>
            <Image className={css.img} src={slide5} alt='slide 5' />
            <span className={anoxicFont.className}>Economic impact</span>
          </div>
          <div className={css.imageInner}>
            <Image className={css.img} src={slide6} alt='slide 6' />
            <span className={anoxicFont.className}>Loss of consumer confidence</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className={css.slide}>
        <div className={css.imagesInner}>
          <div className={css.imageInner}>
            <Image className={css.img} src={slide4} alt='slide 4' />
            <span className={anoxicFont.className}>Spread of diseases and pests</span>
          </div>
          <div className={css.imageInner}>
            <Image className={css.img} src={slide5} alt='slide 5' />
            <span className={anoxicFont.className}>Economic impact</span>
          </div>
          <div className={css.imageInner}>
            <Image className={css.img} src={slide6} alt='slide 6' />
            <span className={anoxicFont.className}>Loss of consumer confidence</span>
          </div>
        </div>
      </SwiperSlide>
      <div id='paginationContainer' className={css.paginationContainer}></div>
    </Swiper>
    <span className={css.bottomDesc}>
      Our experience has shown us the importance of stringent biosecurity measures to prevent and
      control these risks effectively.
    </span>
  </>
);

export { Slider };
