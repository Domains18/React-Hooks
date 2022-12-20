import React from 'react';
import { Link } from 'react-router-dom';
export function Nav (){
    return (
        <div className="nav">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/usestate">UseState Hook</Link>
            <Link className="nav-link" to="/useeffect">UseEffect Hook</Link>
            <Link className="nav-link" to="/usecontext">UseContext Hook</Link>
            <Link className="nav-link" to="/usecallback">UseCallback Hook</Link>
            <Link className="nav-link" to="/usememo">UseMemo Hook</Link>
            <Link className="nav-link" to="/useRef">UseRef Hook</Link>
            <Link className="nav-link" to="/useReducer">UseReducer Hook</Link>
            <Link className="nav-link" to ="useTransition">UseTransition Hook</Link>
        </div>
    )
}