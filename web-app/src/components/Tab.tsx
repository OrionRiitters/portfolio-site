import React from 'react';

interface TabProps {
    content?: string,
    handleClick: () => void
}

const Tab = ({content, handleClick}:TabProps) => {
  return (
    <div 
        className={`tab`}
        onClick={handleClick}
    >{ content }</div>
  )
}

export default Tab