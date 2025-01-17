import { learningPath } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CustomButton from './CustomButton'

const CoursesOffered = () => {
  return (
    <div className='sm:px-16 px-6 py-10'>
     <h3 className='text-headline-3 lg:text-headline-2 text-secondary'>Our Learning Path</h3>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-9'>
        {learningPath.map(({ id, image, title, description, duration, url }) => (
            <div key={id} className='bg-extra rounded-lg pb-5 shadow-lg'>
                <div className='relative hover:grayscale lg:hover:scale-110'>
                    <Image src={image} alt={title} width={417} height={300}  className='object-contain' />
                </div>
                <p className='mt-3 px-5 text-headline-3 text-primary'>{title}</p>
                <p className='mt-3 px-5'>{description}</p>
                <p className='mt-3 px-5 font-semibold'>Duration: {duration}</p>

                <Link href={url} className='hidden'>
                    <CustomButton
                        title='Learn more'
                        btnType='button'
                        containerStyles='bg-secondary px-3 py-2 rounded-lg mt-3 ml-5'
                        textStyles='text-dark font-medium'
                    />
                </Link>
            </div>    
        ))}
      </div>        
    </div>
  )
}

export default CoursesOffered