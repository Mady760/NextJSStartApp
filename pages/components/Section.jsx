import React from 'react'
import Image from 'next/image'

export default function section() {
  return (
    <section className='max-w-[1400px] mx-auto my-10 grid gap-10 lg:grid-cols-4 sm:grid-cols-2'>
      <div className='shadow-lg bg-slate-800 rounded-xl'>
      <div className='w-auto mb-4 '>
        <Image 
      src={'/Images/header.1.jpg'}
      height={1000}
      width={1000}
      className='rounded-xl'
      /></div>
      <h3 className='text-start my-4 px-4 font-bold text-xl text-white '>Post</h3>
      <div className='text-justify mb-6 my-4 px-4 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit saepe facilis dolore ratione perferendis sint molestiae voluptate, quaerat officia asperiores, doloremque maxime tempora commodi, nisi fugit dicta aliquid. Quae, molestias.</div>
      </div>
      <div className='shadow-lg bg-slate-800 rounded-xl'>
      <div className='w-auto mb-4 '>
        <Image 
      src={'/Images/header.1.jpg'}
      height={1000}
      width={1000}
      className='rounded-xl'
      /></div>
      <h3 className='text-start my-4 px-4 font-bold text-xl text-white '>Post</h3>
      <div className='text-justify mb-6 my-4 px-4 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit saepe facilis dolore ratione perferendis sint molestiae voluptate, quaerat officia asperiores, doloremque maxime tempora commodi, nisi fugit dicta aliquid. Quae, molestias.</div>
      </div>
      <div className='shadow-lg bg-slate-800 rounded-xl'>
      <div className='w-auto mb-4 '>
        <Image 
      src={'/Images/header.1.jpg'}
      height={1000}
      width={1000}
      className='rounded-xl'
      /></div>
      <h3 className='text-start my-4 px-4 font-bold text-xl text-white '>Post</h3>
      <div className='text-justify mb-6 my-4 px-4 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit saepe facilis dolore ratione perferendis sint molestiae voluptate, quaerat officia asperiores, doloremque maxime tempora commodi, nisi fugit dicta aliquid. Quae, molestias.</div>
      </div>
      <div className='shadow-lg bg-slate-800 rounded-xl'>
      <div className='w-auto mb-4 '>
        <Image 
      src={'/Images/header.1.jpg'}
      height={1000}
      width={1000}
      className='rounded-xl'
      /></div>
      <h3 className='text-start my-4 px-4 font-bold text-xl text-white '>Post</h3>
      <div className='text-justify mb-6 my-4 px-4 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit saepe facilis dolore ratione perferendis sint molestiae voluptate, quaerat officia asperiores, doloremque maxime tempora commodi, nisi fugit dicta aliquid. Quae, molestias.</div>
      </div>
    </section>
  )
}
