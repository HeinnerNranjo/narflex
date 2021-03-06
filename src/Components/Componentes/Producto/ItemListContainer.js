import { useState, useEffect } from 'react';
import ProductItem from './ProductItem'
import { Grid } from '@mui/material';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ItemListContainer = ({title, products}) => {
    console.log("ItemListContainer")
    return(
        <>
        <h2>{title}</h2>
        <Grid container spacing={2}>
        <Swiper
            spaceBetween={20}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Pagination, Navigation]}
            navigation={true}            
        >
            {
                products.map( ({title, price, image, id, stock}) => {
                    return(
                        <SwiperSlide key={id}>
                            <ProductItem 
                                title={title} 
                                price={price} 
                                image={image} 
                                stock={stock} 
                                id={id}
                            />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
        </Grid>
        </>
    )
}

export default ItemListContainer