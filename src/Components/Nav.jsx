import React from 'react';
import { Link } from 'react-router-dom';
export function Nav () {
    return (
        <div className='nav'>
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/usestate">UseState </Link>
            <Link className="nav-link" to="/useeffect">UseEffect </Link>
            <Link className="nav-link" to="/usecontext">UseContext </Link>
            <Link className="nav-link" to="/usecallback">UseCallback </Link>
            <Link className="nav-link" to="/usememo">UseMemo</Link>
            <Link className="nav-link" to="/useRef">UseRef</Link>
            <Link className="nav-link" to="/useReducer">UseReducer </Link>
            <Link className="nav-link" to ="useTransition">UseTransition</Link>
        </div>
    )
}