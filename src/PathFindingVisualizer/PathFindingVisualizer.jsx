import React from "react";
import Node from "./Node/Node";

const PathFindingVisualizer = () => {

    const grid = [];
    for (let i = 0; i < 30; i++) {
        const row = [];
        for (let j = 0; j < 40; j++) {
            row.push(<Node row={i} col={j}/>);
        }
        grid.push(<div key={i} className="grid-row  flex flex-row">{row}</div>);
    }

    return (
        <div className="pathfinding-visualizer">
            {
                grid.map((row, index) => (
                    <div key={index} className="grid-row">
                        {row}
                    </div>
                ))
            }
        </div>
    );
}

export default PathFindingVisualizer;