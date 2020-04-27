import React from 'react';
// hacer esto: onNewColor = f => f es un default, en caso de que la función de inverse data flow sea indeterminada
const AddColorForm = ({onNewColor = f => f}) => {
    let _nombre

    const submit = e => {
        e.preventDefault()
        // llamada a la funcion externa (desacopla los componentes)
        onNewColor(_nombre.value)
        _nombre.value = ''
        _nombre.focus()
    }

    return (
        <form onSubmit={submit}>
            <div className={"field"}>
                <label className={"label"}>Name</label>
                <div className={"control"}>
                    <input className={"input is-primary"} ref={input => _nombre = input} type="text"
                           placeholder="color title..."/>
                </div>
            </div>
            <button className={"button"}>add</button>
        </form>
    )
}


export default AddColorForm