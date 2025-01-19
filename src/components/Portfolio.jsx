import React from 'react'
import p1 from "../assets/p1.jpeg"
import p2 from "../assets/p2.jpg"
import p3 from "../assets/p3.jpg"
import p4 from "../assets/p4.jpg"
import { FaGithub } from 'react-icons/fa'
import styles from './Portfolio.module.css'

export const Portfolio = () => {
    const projects = [
        {
            id: 1,
            image: p1,
            github: "https://github.com/adityachaturvedii",
            title: "Project 1"
        },
        {
            id: 2,
            image: p2,
            github: "https://github.com/adityachaturvedii",
            title: "Project 2"
        },
        {
            id: 3,
            image: p3,
            github: "https://github.com/adityachaturvedii",
            title: "Project 3"
        },
        {
            id: 4,
            image: p4,
            github: "https://github.com/adityachaturvedii",
            title: "Project 4"
        }
    ]
  return (
    <div name="portfolio" className='w-full  md: min-h-screen bg-black'>
        <div className='max-w-screen-lg p-4 w-full h-full mx-auto flex flex-col justify-center items-center text-white md:items-start'>
            <div className='pb-8'>
                <h2 className='text-4xl sm:text-5xl font:bold inline border-b-4 border-gray-500'>Portfolio</h2>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {projects.map(({id, image, github, title})=>(
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg overflow-hidden'>
                        <img 
                            src={image} 
                            alt={title}
                            className='w-full h-48 object-cover hover:scale-105 duration-200'
                        />
                        <div className='p-4'>
                            <h3 className='text-xl font-semibold mb-2'>{title}</h3>
                            <div className='flex items-center justify-between'>
                                <a 
                                    href={github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className='flex items-center gap-2 hover:text-gray-400'
                                >
                                    <div className={styles.githubIcon}>
                                        <FaGithub size={25} />
                                    </div>
                                    <span>View Code</span>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    </div>
  )
}
