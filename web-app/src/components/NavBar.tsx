import React from 'react';
import Tab from './Tab';
import { Section } from '../types';

interface NavBarProps {
    sections: Array<Section>|undefined,
    setCurrentSection: (section:string) => void
}

const NavBar = ({sections, setCurrentSection}:NavBarProps) => {
    const handleClick = (tabKey: string|undefined): void => {

    }
    return (
        <div className={`tabs-container`}>{
            sections?.map(e => 
                <Tab key={`${e.tabId}`} handleClick={() => handleClick(e.tabId)} content={e.tabContent} />
            )
        }</div>
    )
}

export default NavBar