import Hero from '@/Components/Hero/Hero';
import { NextPage } from 'next'

interface Props {}

const Performance: NextPage<Props> = ({}) => {
  return <div>
    <Hero imagePath={"/images/performance.jpg"} title="Performance" imageAlt="performance" />
  </div>
}

export default Performance;