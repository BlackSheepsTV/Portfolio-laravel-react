import React from 'react'
import { parcours } from '../../Datas/Parcours'
import '../../utils/Styles/Parcours.scss'
import { useTheme } from '../../utils/Hooks'
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"

function Parcours() {

    const { theme } = useTheme()

    return (
        
        <VerticalTimeline lineColor={theme === 'dark' ? 'rgba(255,255,255, 0.2)' : 'rgb(243, 244, 246)'}>
            {parcours.map((item, index) => (
            <React.Fragment key={index}>
                <VerticalTimelineElement
                contentStyle={{
                    background:
                    theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                    boxShadow: "none",
                    borderTop: `2px solid ${item.color}`,
                    textAlign: "left",
                    padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                    borderRight:
                    theme === "light"
                        ? "0.4rem solid #9ca3af"
                        : "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                    position: 'relative',
                    display: 'flex',
                    background:
                    theme === "light" ? "white" : "#334155",
                    fontSize: "1.5rem",
                    color: item.color,
                    boxShadow: `0 0 0 4px ${item.color}, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)`
                }}
                >
                <h3 className="font-semibold capitalize">{item.entreprise}</h3>
                <p className="font-normal text-slate-400 !mt-0">{item.objectif}</p>
                </VerticalTimelineElement>
            </React.Fragment>
            ))}
        </VerticalTimeline>
    );
}

export default Parcours