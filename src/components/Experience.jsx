import React from 'react'
import python from '../assets/python.png'
import reactImage from '../assets/react.svg'
import pytorch from '../assets/pytorch.png'
import monai from '../assets/monai.png'
import opencv from '../assets/opencv.png'
import bash from '../assets/bash.png'
import git from '../assets/git.png'
export const Experience = () => {
    const techs = [
        {
            id: 1,
            src: python,
            title: 'Python',
            style: 'shadow-blue-600'
        },
        {
            id: 2,
            src: reactImage,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 3,
            src: pytorch,
            title: 'PyTorch',
            style: 'shadow-blue-600'
        }, 
        {
            id: 4,
            src: monai,
            title: 'MONAI',
            style: 'shadow-blue-600'
        },         
        {
            id: 5,
            src: opencv,
            title: 'OpenCV',
            style: 'shadow-blue-600'
        } ,
        {
            id: 6,
            src: bash,
            title: 'Bash',
            style: 'shadow-blue-600'
        } ,
        {
            id: 7,
            src: git,
            title: 'Git',
            style: 'shadow-blue-600'
        }
    ]

    return (
        <div name='experience' className='w-full md:min-h-screen bg-black'>
            <div className='max-w-screen-lg p-4 w-full h-full mx-auto flex flex-col justify-center items-center text-white md:items-start'>
                <div>
                    <h2 className='text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-500'>Experience</h2>
                    <p className='py-6 text-xl text-gray-300'>These are some of the technologies I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 text-center py-8 px-12 sm:px-0'>
                    {techs.map(({ id, src, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-110 duration-300 py-6 px-8 rounded-lg ${style} cursor-pointer`}>
                            <img src={src} alt={title} className='w-24 h-24 mx-auto object-contain' />
                            <p className='text-2xl mt-4'>{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
