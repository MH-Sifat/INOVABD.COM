import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useQuery } from 'react-query';
import Item from '../../Item/Item';
import './NewCollection.css';


const NewCollection = () => {

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('Products.JSON')
            const data = await res.json();
            return data;
        }
    })

    console.log(products);

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", top: "40%", right: 5, zIndex: 5 }
                }
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", top: "40%", left: 3, zIndex: 5, }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                    
                }
            }
        ]
    };


    return (
        <div>
            <div className="mt-14">
                <div className="flex flex-col w-full mb-8">
                    <div className="divider text-red-500 px-2 md:px-12 text-xl sm:text-2xl font-semibold">INOVA FASHION</div>
                </div>
                <Slider {...settings}>
                    {
                        products.map(product => <Item
                            key={product.id}
                            product={product}
                        ></Item>)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default NewCollection;