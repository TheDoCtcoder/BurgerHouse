import React from 'react'
import Container from '../../elements/Container'
import products1 from '../../../medias/images/products/LastProducts-1.jpg'
import products2 from '../../../medias/images/products/LastProducts-2.jpg'
import products3 from '../../../medias/images/products/LastProducts-3.jpg'

export default function LastProducts() {
    return (
        <Container>
            <div className=' grid grid-rows-2 grid-cols-2 gap-x-9 gap-y-9  w-full h-96 px-11 my-20 text-white uppercase'>

                <div className=' bg-primary h-full row-span-2 rounded-md relative p-7' >
                    <img src={products1} className='absolute top-0 left-0 w-full h-full object-cover z-0 rounded-md' alt="un hamburger" />
                    <div className='relative' >
                        <span className='block font-bold text-lg'  > killer Burger </span>
                        <span className='text-2xl font-black'> Burger le plus populaire</span>
                    </div >

                </div>
                <div className=' bg-primary h-full rounded-md relative p-7'>
                    <img src={products2} className='absolute top-0 left-0 w-full h-full object-cover z-0 rounded-md' alt="un hamburger" />
                    <div className='relative'>
                        <span className='block font-bold text-lg' > Island Burger</span>
                        <span className='block text-2xl font-black'> plus de plaisir</span>
                        <span className='text-2xl font-black'> plus de goût</span>
                    </div>

                </div>
                <div className=' bg-primary h-full rounded-md relative p-7'>
                    <img src={products3} className='absolute top-0 left-0 w-full h-full object-cover z-0 rounded-md' alt="un hamburger" />
                    <div className='relative'>
                        <span className='block font-bold text-lg'> Orlando's Burger</span>
                        <span className=' text-2xl font-black' > frais & pimenté</span>
                    </div>

                </div>

            </div>
        </Container>

    )
}
