import React from 'react';

type HeaderProps = {
    username: string,
}

const PageHeader = ({username}:HeaderProps) => {
  return (
    <div id={`page-header-container`}>
      <h1>Header, I barely knew her!</h1>
      <p>{`Hello, ${username}`}</p>
    </div>
  )
}

export default PageHeader