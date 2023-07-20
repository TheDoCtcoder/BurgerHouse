import React from 'react'
import Illustration from '../../../medias/images/background/bg-food.jpg'
import Container from '../../elements/Container'
import Header from './Header'
import Products from '../../../medias/images/burger-hero-top.png'
import Bouton from '../../elements/Bouton'

export default function HeroTop() {
  return (
    <div className='bg-primary w-full ' >
      <div className='bg-repeat w-full h-full pb-40' style={{ backgroundImage: `url(${Illustration})` }}>
        <Container>
          <Header />
          <div className="w-full relative mt-28">
            <img src={Products} className=' absolute z-0 -top-64 right-0 w-6/12' alt='Un menu hamburger avec frites et coca-cola' />
            <div className='absolute right-80 top-40 bg-red-custom w-40 h-40 p-3  rounded-full'>
              <div className='w-full h-full rounded-full border-2 border-dashed border-white text-white flex items-center justify-center '>
                  <div className='text-center'>
                    <span className='block font-extrabold'>
                      <span className='text-5xl'>5</span>.49€
                    </span>
                    <span className=' tracking-widest uppercase text-sm'>seulement</span>
                    

                  </div>
              </div>
            </div>
            <div className=' relative z-10 text-secondary uppercase  '>
              <h1 className='mb-4 font-semibold '>C'est le moment de goûter au bon goût des hamburgers</h1>
              <h2 className=' font-secondary shadowTitleSecondary'>
                <span className=' text-8xl block'>Burger</span>
                <span className='text-6xl'>House</span><span className=' text-4xl ml-3'>Click<span className=' text-red-custom'>&</span>collect</span>
              </h2>
            </div>
          </div>
          <Bouton className='mt-5' color="secondary" theme="big" >
            Créer mon compte
          </Bouton>
        </Container>
      </div>
    </div>
  )
}
