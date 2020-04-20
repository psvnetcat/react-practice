import React from 'react'
import {render} from 'react-dom'
import data from './data/casos'

window.React = React

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
    </article>

console.log('equisde')

render(
    <Casos casos={data}/>,
    document.getElementById("react-container")
)