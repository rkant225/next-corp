import { NextPage } from 'next'
import Image from 'next/image'

interface Props {
    imagePath: string;
    title: string;
    imageAlt: string;
}

const Hero: NextPage<Props> = ({imagePath, title, imageAlt}) => {
  return <div className='relative h-screen'>
    <div className='absolute -z-10 inset-0' style={{    backgroundImage: 'linear-gradient(to right, black, yellow, red, black)'}}>
      <Image src={imagePath} alt={imageAlt} fill style={{ objectFit: 'cover', opacity: 0.8}}/>
    </div>

    <div className='pt-48 flex justify-center items-center h-screen'>
      <h1 className='text-6xl text-white'>{title}</h1>
    </div>
  </div>
}

export default Hero