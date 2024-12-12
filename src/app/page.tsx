import Hero from '@/Components/Hero/Hero';
import { NextPage } from 'next'
import Image from 'next/image';
import Link from 'next/link';


const Home = () => {
  return <div>
    <Hero imagePath={"/images/home.jpg"} title="Home" imageAlt="Home" />
  </div>
}

export default Home;