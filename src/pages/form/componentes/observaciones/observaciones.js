import React from 'react';
import './observaciones.css';

const DivPrueba1 = (props) => {
    function ingresarData(e){
        props.setData({box6:{...props.data.box6,[e.target.name]:e.target.value}})
      
       }
    return (
        <div class="container9">

            <div class="texto">
                <textarea  onChange={ingresarData}  placeholder='Type here' onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} name="textarea" type="text"></textarea>
            </div>
            <div class="observaciones">
                <p>
                    <b>Observaciones</b>
                </p>
            </div>
        </div>
    )
}


export default DivPrueba1;