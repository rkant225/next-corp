import Hero from '@/Components/Hero/Hero';
import { NextPage } from 'next'

interface Props {}

const Reliability: NextPage<Props> = ({}) => {
  return <div>
    <Hero imagePath={"/images/reliability.jpg"} title="Reliability" imageAlt="Reliability" />
  </div>
}

export default Reliability;