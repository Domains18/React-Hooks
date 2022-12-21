


import react from 'react';

export function Poster({ title, subtitle, children}){
    return <div className="banner">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <div>{children}</div>
    </div>
}