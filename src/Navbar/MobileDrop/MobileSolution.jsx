"use client"
import { API_END_POINT } from '@/app/apicommon/apicommon';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const MobileSolution = () => {

    try {

        const [products, setProducts] = useState();
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null)

        useEffect(() => {
            const fetchProducts = async () => {
                try {
                    const response = await fetch(`${API_END_POINT}/wp-json/acf/options/theme-general-settings?&_embed&acf_format=standard`, {
                        next: { revalidate: 50 }
                    });
                    if (!response.ok) {
                        throw new Error('Failed to fetch data');
                    }
                    const datas = await response.json();
                    setProducts(datas);
                } catch (error) {
                    setError(error.message);
                } finally {
                    setLoading(false);
                }
            };

            fetchProducts();
        }, []);

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error}</p>;
        // console.log(products.header_menu[0].main_menu[1].sub_menu)

        return (
            <>
             {products.header_menu[0].main_menu[2].sub_menu.map((val)=>{return(<>
                <ul className="mobile_sub_menu">
                    <li ><Link className='capitalize text-gray-800 transition-colors duration-300 hover:text-orange-600' href={val.sub_menu_link} dangerouslySetInnerHTML={{__html : val.sub_menu_name}}></Link></li>
                </ul>
                </>)})}
            </>
        );

    } catch (error) {
        console.error(error)
    }

}

export default MobileSolution;
