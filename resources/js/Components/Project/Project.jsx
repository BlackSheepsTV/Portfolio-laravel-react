import { useState } from 'react'
import '../../utils/Styles/Parcours.scss'
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react"
import { projects } from '../../Datas/Project'
import {Button} from "@nextui-org/react"
import {MdNavigateBefore, MdNavigateNext } from 'react-icons/md'

export default function Parcours() {

    const [cardToShow, setCardToShow] = useState(0)

    const showNextCard = () => {
        if (cardToShow < projects.length - 1) {
            setCardToShow(cardToShow + 1)
        } else {
            setCardToShow(0)
        }
    }
    
    const showPreviousCard = () => {
        if (cardToShow > 0) {
            setCardToShow(cardToShow - 1)
        } else {
            setCardToShow(projects.length - 1)
        }
    }

    return (
        <>
        <div className='flex justify-center items-center gap-4'>
            <Button aria-label="previous" size='sm' className='' color="primary" onClick={showPreviousCard} style={{paddingLeft: '0px', paddingRight: '0px', minWidth: 'auto', height: 'auto'}}>
                <MdNavigateBefore className='w-[25px] h-[25px]' />
            </Button>
            <p className='font-bold'>{cardToShow + 1}</p>
            <Button aria-label="next" size='sm' color="primary" onClick={showNextCard} style={{paddingLeft: '0px', paddingRight: '0px', minWidth: 'auto', height: 'auto'}}>
                <MdNavigateNext className='w-[25px] h-[25px]' />
            </Button>
        </div>
        {projects.map((project, index) => (
            cardToShow === index && (
                <Card className="py-4 bg-gray-100 dark:bg-slate-800 " key={index}>
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <p className="text-tiny uppercase font-bold">{project.name}</p>
                        <small className="text-default-500">{project.company}</small>
                        <h4 className="font-bold text-large">{project.techno}</h4>
                    </CardHeader>
                    <CardBody className="flex items-center overflow-visible py-2 gap-4">
                        <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src={project.img}
                        width={720}
                        />

                        <p className='w-full text-sm' dangerouslySetInnerHTML={{ __html: project.desc.replace(/\n/g, '<br>') }}></p>

                    </CardBody>
                </Card>
            )
        ))}
    </> 
    )
}