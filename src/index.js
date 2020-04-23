import React from 'react'
import {render} from 'react-dom'
import data from '../data/casos'
import Casos from "./components/casos";

window.React = React

console.log(data)

render(
    <Casos casos={data}/>,
    document.getElementById("react-container")
)