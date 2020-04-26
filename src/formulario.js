import React from 'react';

// hacer esto: onNewColor = f => f es un default, en caso de que la función de inverse data flow sea indeterminada
const AddColorForm = ({onNewColor = f => f}) => {
    let _title, _color

    const submit = e => {
        e.preventDefault()
        // llamada a la funcion externa (desacopla los componentes)
        onNewColor(_title.value, _color.value)
        _title.value = ''
        _color.value = '#000000'
        _title.focus()
    }

    return (
        <form onSubmit={submit}>
            <input ref={input => _title = input}
                   type="text"
                   placeholder="color title..." required/>
            <input ref={input => _color = input}
                   type="color" required/>
            <button>ADD</button>
        </form>
    )
}

export default AddColorForm