import React from 'react'
import Container from '../../elements/Container'
import HeadingTitles from '../../elements/DisplayTitles/HeadingTitles'
import Heading from '../../elements/DisplayTitles/Heading'
import Bouton from '../../elements/Bouton'
import Product1 from '../../../medias/images/products/Product-1.jpg'
import Product2 from '../../../medias/images/products/Product-2.jpg'
import Product3 from '../../../medias/images/products/Product-3.jpg'

export default function Products() {
    return (

        <Container>

            <HeadingTitles>
                Toujours des délicieux Burgers
            </HeadingTitles>

            <Heading theme="secondary" >
                Choisissez et savourez
            </Heading>
            <p className=' text-center'>
                Consequuntur voluptates modi, magnam quod quis, molestiae sint excepturi ex eveniet reprehenderit, veritatis ea natus accusantium dolore quasi eum! Vero nesciunt inventore harum voluptate eius, nisi vel deleniti! Nesciunt, in?
            </p>
            <div className=" grid grid-cols-3 gap-x-1 mb-20 mt-10">

                <div className=" w-full h-full  ">

                    <div className="relative w-full  h-72">
                        <img src={Product1} alt="" className=' bg-primary absolute top-0 left-0 w-full h-full object-cover z-0' />
                    </div>

                    <div className=" flex  flex-col items-center justify-center px-5  pb-5">
                        <Heading variant="h3">
                            Lorem, ipsum dolor.
                        </Heading>
                        <p className="text-center">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, sed!
                        </p>
                        <Bouton color="danger" className="font-secondary">
                            Commandez
                        </Bouton>
                    </div>
                </div>
                <div className=" w-full h-full  ">

                    <div className="relative w-full  h-72">
                        <img src={Product2} alt="" className=' bg-primary absolute top-0 left-0 w-full h-full object-cover z-0' />
                    </div>

                    <div className=" flex  flex-col items-center justify-center px-5  pb-5">
                        <Heading variant="h3">
                            Lorem, ipsum dolor.
                        </Heading>
                        <p className="text-center">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, sed!
                        </p>
                        <Bouton color="danger" className="font-secondary">
                            Commandez
                        </Bouton>
                    </div>
                </div>
                <div className=" w-full h-full ">

                    <div className="relative w-full  h-72">
                        <img src={Product3} alt="" className=' bg-primary absolute top-0 left-0 w-full h-full object-cover z-0' />
                    </div>

                    <div className=" flex  flex-col items-center justify-center px-5  pb-5">
                        <Heading variant="h3">
                            Lorem, ipsum dolor.
                        </Heading>
                        <p className="text-center">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, sed!
                        </p>
                        <Bouton color="danger" className="font-secondary">
                            Commandez
                        </Bouton>
                    </div>
                </div>

                

            </div>

        </Container>
    )
}
