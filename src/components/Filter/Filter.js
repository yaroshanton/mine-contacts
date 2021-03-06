import React from 'react'
import './Filter.css'

function Filter({ onChange }) {
    return (
        <div>
            <div className="wrapper">
                <p>Имя: </p>
                <input
                    type="text"
                    name="name"
                    onChange={onChange} />
            </div>
            <div className="wrapper">
                <p>Фамилия: </p>
                <input
                    type="text"
                    name="lastname"
                    onChange={onChange} />
            </div>
            <div className="wrapper">
                <p>Возраст: </p>
                <input
                    type="text"
                    name="age"
                    onChange={onChange} />
            </div>
            <div className="wrapper">
                <p>Пол: </p>
                <p className="wrapper_input"><input type="radio" name="sex" value="m" onChange={onChange}></input>м</p>
                <p className="wrapper_input"><input type="radio" name="sex" value="f" onChange={onChange}></input>ж</p>
            </div>
        </div >
    )
}

export default Filter;