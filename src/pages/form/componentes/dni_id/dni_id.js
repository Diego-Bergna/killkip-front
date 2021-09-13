import React from 'react';
import './dni_id.css';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
const DivPrueba1 = (props) => {

    function ingresarData(e) {
        props.setData({ box7: { ...props.data.box7, [e.target.name]: e.target.value } })
       
    }


    return (
        <div class="container10">
            <div class="dni_area">
                <div class="dni_titulo">
                    <p>
                        <b>DNI*<span icon={faAsterisk} /></b>
                    </p>
                </div>
                <div class="dni_imput">
                    <input type="text" placeholder='DNI' id='dniInput' name="dni" onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} />
                </div>
            </div>
            <div class="id_area">
                <div class="id_titulo">
                    <p>
                        <b>ID*<span icon={faAsterisk} /></b>
                    </p>
                </div>
                <div class="id_input">
                    <input type="text" placeholder='ID' id='idInput' name="id" onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData}/>
                </div>
            </div>
        </div>)
}


export default DivPrueba1;