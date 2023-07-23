import React from 'react'
import Container from '../../elements/Container'
import Assiette from '../../../medias/images/background/Assiette-burger-frites.png'
import Burger from '../../../medias/images/background/Burger.png'
import Sauce from '../../../medias/images/background/Sauce-pimente.png'
import Heading from '../../elements/DisplayTitles/Heading'

export default function Booking() {
  return (
    <Container>
      <div className=" relative mb-20 ">
        <img src={Burger} alt="Un hamburger" className=' absolute -top-20 -left-36  z-10' />
        <img src={Sauce} alt="Une sauce" className='absolute bottom-0 left-0' />
        <img src={Assiette} alt="Une assiette" className='absolute -bottom-52 -right-96' />
        <div className=" max-w-3xl mx-auto px-10 py-20">
          <Heading variant="h3" alignement="center">
            Réservation
          </Heading>
          <Heading alignement="center" theme="secondary" className="mt-5 ">
            Réservez votre table
          </Heading>
          <form className='grid grid-cols-2  gap-x-7 gap-y-6 mt-20 ' >

            <div>
              <label htmlFor="name">
                Nom
              </label>
              <input
                type="text"
                name='name'
                id='name'
                autoComplete='off'
                className='focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-5'
                placeholder='Jhon Doe'
              />
            </div>

            <div>
              <label htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name='email'
                id='email'
                autoComplete='off'
                className='focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-5'
                placeholder='burger@delicious.be'
              />
            </div>

            <div>
              <label htmlFor="date">
                Date
              </label>
              <input
                type="date"
                name='date'
                id='date'
                autoComplete='off'
                className='focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-5'
              />
            </div>

            <div>
              <label htmlFor="time">
                Heure
              </label>
              <input
                type="time"
                name='time'
                id='time'
                autoComplete='off'
                className='focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-5'
              />
            </div>

            <div>
              <label htmlFor="customer">
                Nombre de personne(s)
              </label>
              <input
                type="number"
                name='customer'
                id='customer'
                autoComplete='off'
                className='focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-5'
                placeholder='4'
              />
            </div>

            <div>
              <label htmlFor="button" className='invisible'>
                Réserver votre repas
              </label>
              <input
                type="button"
                name='button'
                id='button'              
                className=' bg-red-custom hover:bg-red-custom-hover w-full cursor-pointer text-white font-secondary tracking-widest uppercase  py-5 rounded-md animate'
                value="Réserver votre repas"
            
              />
            </div>



          </form>

        </div>
      </div>
    </Container>
  )
}
