import Link from "next/link"
export default function Footer() {
  return (
    <div className="bg-gray-300 mt-10">
      <div className='text-center lg:font-bold text-2xl font-Logo sm:order-2'>
        <Link href='/'><h1>Dial <span className='text-rose-700'>Sink</span></h1></Link>
      </div>
      <p className="text-center text-xs pt-2">All rights reserved By DailSink</p>
    </div>
  )
}
