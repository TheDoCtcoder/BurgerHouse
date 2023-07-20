import React from 'react'
import Logo from '../../../medias/svg/Logo-burger-house.svg'
import Icone from '../../../medias/svg/ico-bag-clickAndCollect.svg'
import Bouton from '../../elements/Bouton'

export default function Header() {
    return (
        <div className=' relative z-10 flex items-center justify-between py-10 ' >
            <div className='w-full'>
                <img src={Logo} alt='Burger House App' className='w-64' />
            </div>
            <div className=' text-secondary w-full   '>
                <div className='flex items-center justify-end'>
                <img src={Icone} alt='' className='w-5 h-5 mr-1'></img>
                <span>Commandez votre repas en ligne</span>
                </div>
                <div className="mt-5 flex items-center justify-end  ">
                    <Bouton className='mr-3 tracking-widest '>
                        Inscription
                    </Bouton>
                    <Bouton className='tracking-widest' color="secondary">
                        Connexion
                    </Bouton>
                    {/* bouton */}
                </div>
               
            </div>

        </div>
    )
}
