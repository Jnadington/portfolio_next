import { motion } from 'framer-motion';
import React from 'react'

function Projects() {
    const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen relative flex overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl"> 
            Projects
        </h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#89F819]/50">
            {projects.map((project, i) => (
                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                    <motion.img
                        initial={{
                            y: -300,
                            opacity: 0,
                        }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        src="https://i.postimg.cc/yx3NVfv9/IMG-1585.jpg"
                        alt=""
                    />
                    <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                        <h4 className="text-4xl font-semibold text-center">
                            <span className="underline decoration-[#89F819]/50">
                                Case Study {i + 1} of {projects.length}:
                            </span>
                             UPS Clone
                        </h4>
                        <p>This is a project that is amazing and you'll love it. If you don't check out this project you will be missing out multiple lifetime's worth of knowledge.</p>
                    </div>
                </div>

            ))}
      
        </div>
        <div className="w-full absolute top-[30%] bg-[#89F819]/10 left-0 h-[500px] -skew-y-12"/>
    </div>
  )
}

export default Projects