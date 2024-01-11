import React, { useContext } from 'react';
// import { useQuery } from 'react-query';
import Item from '../Item/Item';
import SidebarFilter from './SidebarFilter/SidebarFilter';
import { AuthContext } from '../../Authprovider/Authprovider';

const ShopCategorys = (props) => {

    // const { data: products = [], refetch } = useQuery({
    //     queryKey: ['products'],
    //     queryFn: async () => {
    //         const res = await fetch('Products.JSON')
    //         const data = await res.json();
    //         return data;
    //     }
    // })
    const { products, result } = useContext(AuthContext)
    console.log(result);

    return (
        <div className='flex w-full'>
            <div className='w-[16%]'>
                <SidebarFilter />
            </div>
            <div className='w-[80%] grid gap-y-14 sm:grid-col-1 md:grid-cols-3 xl:grid-cols-4 my-10 ml-10'>
                {
                    result.map(product => {
                        if (props.category === product.category) {
                            return <Item
                                key={product.id}
                                product={product}
                            ></Item>
                        }
                        // if (props.category === product.category && props.productCategory === product.productCategory) {
                        //     return <Item
                        //         key={product.id}
                        //         product={product}
                        //     ></Item>
                        // }
                        else {
                            return null;
                        }
                    })
                }

                {/* {result} */}
            </div>
        </div>
    );
};

export default ShopCategorys;