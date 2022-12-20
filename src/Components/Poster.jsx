


import react from 'react';

export function poster({ title, subtitle, children}){
    return <div className="poster">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{children}</p>
    </div>
}