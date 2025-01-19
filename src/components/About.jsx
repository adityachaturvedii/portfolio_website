import React from 'react'

export const About = () => {
    return (
        <div name="about" className='w-full  md: min-h-screen bg-black'>
            <div className='max-w-screen-lg p-4 w-full h-full mx-auto flex flex-col justify-center items-center text-white md:items-start'>
                <div className='py-6 sm:text-center'>
                    <h2 className='text-4xl sm:text-5xl font:bold inline border-b-4 border-gray-500'>About</h2>
                </div>

                <p className='text-xl sm:text-2xl mt-4'> I am a Machine Learning Engineer at Proxmed Pty Ltd, specializing in developing and deploying innovative healthcare
                    diagnostic solutions with a focus on computer vision. Since joining Proxmed in October 2023, I have applied my expertise
                    in Python and machine learning algorithms to create impactful tools that enhance healthcare services.
                </p>
            </div>

        </div>
    )
}
