import { FaNetworkWired, FaComputer } from 'react-icons/fa6'
import { IoGameController } from 'react-icons/io5'
import { GiElectric } from 'react-icons/gi'
import { BiRfid } from 'react-icons/bi'
import { Image } from '@nextui-org/react'

export const parcours = [
    {
        date: '10/2023 - 07/2024',
        entreprise: 'Created my SaaS - Outdamage.gg',
        objectif: '• League Of Legends SaaS',
        icon: <Image src='/storage/outdamage_logo_100.avif' width={20} height={20} alt='outdamage logo' classNames={{wrapper: '!max-w-[40px] w-full h-full flex items-center justify-center'}}></Image>,
        color: '#38bdf8'
    },
    {
        date: '07/2017 - 08/2021',
        entreprise: 'Metaleak',
        objectif: '• Semi professional player (PUBG) • Streamer ( twitch )',
        icon: <span className='w-full h-full'><IoGameController /></span>,
        color: '#f43f5e'
    },

    {
        date: '06/2014 - 07/2014',
        entreprise: 'Hœnheim, 67800 RF Conception',
        objectif: '• Creation of boxes for receiving RFID chips',
        icon: <BiRfid className='w-full h-full' />,
        color: '#38bdf8'
    },

    {
        date: '11/2013 – 12/2013',
        entreprise: 'Mundolsheim, 67450 OCI Informatique',
        objectif: '• Preparation and repair of computers in an after-sales service ',
        icon: <FaComputer />,
        color: '#6366f1'
    },

    {
        date: '06/2013 – 07/2013',
        entreprise: 'Schiltigheim, 67300 ECAM Strasbourg',
        objectif: '• Network administrator • Manage the school’s computer network ',
        icon: <FaNetworkWired />,
        color: '#2dd4bf'
    },

    {
        date: '11/2012 – 12/2012',
        entreprise: 'Schiltigheim, 67300 ECAM Strasbourg',
        objectif: '• Network administrator • Manage the school’s computer network ',
        icon: <FaNetworkWired />,
        color: '#2dd4bf'
    },

    {
        date: '06/2012 – 07/2012',
        entreprise: 'Schiltigheim, 67300 Lebas System',
        objectif: '• Preparation of cabinet components • Electrical cabinet assembler',
        icon: <GiElectric />,
        color: '#fde047'
    },

    {
        date: '01/2012 – 02/2012',
        entreprise: 'Schiltigheim, 67300 Lebas System',
        objectif: '• Preparation of cabinet components • Electrical cabinet assembler',
        icon: <GiElectric />,
        color: '#fde047'
    }
]

export const formations = [
    
    {
        date: '08/2021 – ',
        ecole: 'Developer Web at OpenClassRooms',
        etude: '• Developer web • FullStack'
    },

    {
        date: '09/2016 – 07/2017',
        ecole: 'Mulhouse 68200 à Power House Gaming',
        etude: '• Streamer • Semi professional player (PUBG) • Caster LAN '
    },

    {
        date: '06/2015',
        ecole: 'Schiltigheim, Lycée Charles de foucault',
        etude: '• Etudes Système Electronique et Numérique – Baccalauréat Professionnel'
    },

    {
        date: '09/2011 – 07/2014',
        ecole: 'Schiltigheim, Lycée Charles de foucault',
        etude: '• Etudes Système Electronique et Numérique - Brevet d’études Professionnel'
    },
]