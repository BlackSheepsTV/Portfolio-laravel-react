import { useEffect, useState } from 'react'
import { skills } from '../../Datas/Skill'
import '../../utils/Styles/Skill.scss'
import { useTheme } from '../../utils/Hooks'

import {Tabs, Tab, Button} from "@nextui-org/react"
import { motion } from "framer-motion"

const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.06 * index,
      },
    }),
  };

function Skill() {

    const { theme } = useTheme()

    return ( 

        <div className="w-full flex flex-wrap flex-col gap-4 items-center">
            <Tabs className='flex justify-center' radius={'md'} aria-label="Tabs radius">
                {Object.entries(skills).map(([key, value], index) => (
                    <Tab className={`flex flex-wrap gap-2 justify-center ${'w-full sm:max-w-md'}`} key={index} title={key}>
                        
                        {Object.entries(value).map(([valueKey, value2], index) => (
                            <motion.div 
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                            once: true,
                            }}
                            custom={index}
                            key={index}
                            >
                                <Button className={theme === 'dark' && 'bg-slate-800'} disableAnimation radius="md" style={{cursor: 'default'}}>
                                    {value2 && <div className='skill-svg' style={{ color: value2.color }}>
                                        {value2.svg}
                                    </div>}
                                    {valueKey}
                                </Button> 
                            </motion.div>))}
                    </Tab>
                ))}
            </Tabs>
        </div>
    )
}

export default Skill