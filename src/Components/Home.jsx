import { Rohe } from "./Rohe";
import { poster } from "./Poster";


import React from "react";


export function Home (){
    return <div className="Home">
        <Rohe>
            <poster title="React Hooks" subtitle="A practical guide to mastering React Hooks">
                <span className="btn-btn-home">Click on the hooks on navabr</span>
            </poster>
        </Rohe>
    </div>
}