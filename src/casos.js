import Caso from "./caso";
import React from 'react';
import AddColorForm from "./formulario";


const logColor = (title, color) =>
    console.log(`New Color: ${title} | ${color}`)

const Casos = ({casos}) =>
    <article>
        <header>
            <h1>Lista de casos</h1>
        </header>
        <div className="lista-casos">
            {casos.map((caso, i) =>
                <Caso key={i} {...caso} />)
            }
        </div>
        <AddColorForm onNewColor={logColor}/>
    </article>

export default Casos