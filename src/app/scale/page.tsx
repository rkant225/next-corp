import Hero from '@/components/Hero/Hero';
import { NextPage } from 'next'

const Scale: NextPage = ({}) => {
  return <div>
      <Hero imagePath={"/images/scale.jpg"} title="Scale" imageAlt="Scale" />
  </div>
}

export default Scale;