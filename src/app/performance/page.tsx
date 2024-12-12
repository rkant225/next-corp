import Hero from '@/components/Hero/Hero';
import { NextPage } from 'next'


const Performance: NextPage = ({}) => {
  return <div>
    <Hero imagePath={"/images/performance.jpg"} title="Performance" imageAlt="performance" />
  </div>
}

export default Performance;