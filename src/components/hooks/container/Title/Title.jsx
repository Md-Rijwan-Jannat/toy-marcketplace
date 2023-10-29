import Aos from "aos"
import { useEffect } from "react"
export const Title = ({title}) => {
  useEffect(() => {
    Aos.init()
}, [])
  return (
    <div data-aos="fade-up"
    data-aos-duration="3000" className='flex flex-col justify-center items-center w-full my-10'>
    <h2 className='text-3xl style text-rose-500'>{title}</h2>
    <hr className='w-1/3' />
</div>
  )
}
