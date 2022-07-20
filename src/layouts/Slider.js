import React from 'react';
import book1 from '../image/banner-image/book-1.jpg'
import book2 from '../image/banner-image/book-2.webp'
import book3 from '../image/banner-image/book-cover-mockup_125540-572.webp'

const Slider = () => {
    return (
        <div class="carousel w-full h-96">
            <div id="slide1" class="carousel-item relative w-full">
                <img className='w-full' src={book1} alt='ff' />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" class="btn btn-circle">❮</a>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
                <img src={book2} className='w-full' alt='fff' />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">❮</a>
                    <a href="#slide3" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full">
                <img src={book3} class="w-full" alt='kfkfkfk' />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle">❮</a>
                    <a href="#slide4" class="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;