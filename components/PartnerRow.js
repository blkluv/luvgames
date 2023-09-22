import Link from '../components/Link'
import Image from 'next/image'
import placeholder from '../public/static/images/placeholder.png'
import openai from '../public/static/images/partners/openai.png'
import microsoft from '../public/static/images/partners/microsoft.png'
//import aha from '../public/static/images/partners/aha.png'
import linkedin from '../public/static/images/partners/linkedin.png'

export const PartnerRow = () => {
  return (
    <div className="flex w-full flex-row items-center justify-around">
      <Link
        href="https://www.fightcancer.org/"
        className="h-min w-auto max-w-[15vw] lg:max-w-[8rem]"
      >
        <Image src={openai} alt="Open AI" draggable="false" />
      </Link>
      <div className="flex h-min w-auto max-w-[15vw] flex-col items-center gap-1 lg:max-w-[8rem] lg:gap-0">
        <Image src={microsoft} alt="Microsoft" draggable="false" />
      </div>
      <div className="flex h-min w-auto max-w-[15vw] flex-col items-center gap-1 lg:max-w-[8rem] lg:gap-0">
        <Image src={linkedin} alt="Roslyn Mental Health Awareness Club" draggable="false" />
        <span className="select-none text-center text-xs font-semibold leading-3 text-black lg:whitespace-nowrap lg:text-base"></span>
      </div>
    </div>
  )
}
