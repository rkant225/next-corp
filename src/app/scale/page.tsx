import Hero from '@/Components/Hero/Hero';
import { NextPage } from 'next'

interface Props {}

const Scale: NextPage<Props> = ({}) => {
  return <div>
      <Hero imagePath={"/images/scale.jpg"} title="Scale" imageAlt="Scale" />
  </div>
}

export default Scale;