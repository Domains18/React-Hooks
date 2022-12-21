import { Rohe } from "./Rohe";
import { Poster } from "./Poster";


import React from "react";


export function Home (){
    return <div>
        <Rohe className="hero">
            <Poster title="React Hooks" subtitle="A practical guide to mastering React Hooks">
                <span className="btn-btn-home">Click on the hooks on navabar</span>
            </Poster>
        </Rohe>
    </div>
}