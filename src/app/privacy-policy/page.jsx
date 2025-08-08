import Footer from '@/Footer/Footer';
import Navbar from '@/Navbar/Navbar';
import React from 'react'
import Privacy from './Privacy/Privacy';
import { API_END_POINT } from '../apicommon/apicommon';

const page = async () => {
  try {
    const response = await fetch(
      `${API_END_POINT}/wp-json/wp/v2/pages?slug=privacy-policy&_embed&acf_format=standard`,
      { next: { revalidate: 50 } }
    );
    const datas = await response.json();
    return (
      <div className='bg-white'>
        <Navbar />
        {
          datas.map((val) => {
            return (
              <Privacy val={val} />
            )
          })
        }
        <Footer />
      </div>
    )
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div className='flex h-screen justify-center items-center text-center'>
      <div>
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        <h2 className='pt-5'>Network issue please check your connection!</h2>
      </div>
    </div>;
  }
}

export default page;
