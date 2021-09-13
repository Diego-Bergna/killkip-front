import React, { useState } from 'react';
import './nombres.css';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';

const DivPrueba = (props) => {

    function ingresarData(e) {
        props.setData({ box0: { ...props.data.box0, [e.target.name]: e.target.value } })

    }



    const expression = {
        name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        lastName: /^[a-zA-ZÀ-ÿ]{1,40}$/,
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/,
        charge: /^[a-zA-ZÀ-ÿ\s]{1,40}$/
    }
    /*/  const [apellido1, changeLastName1] = useState({ value: '', valid: null });
      const [apellido2, changeLastName2] = useState({ value: '', valid: null });
      const [nombres, changeNames] = useState({ value: '', valid: null });
      const [cargo, changeCharge] = useState({ value: '', valid: null });
      const [fecha, changeDate] = useState({ value: '', valid: null });
      const [formulario, changeFomulario] = useState(null);*/
    return (

        <div class="container6">
            <div class="Nombre_evaluado">
                <div class="Titulo">
                    Nombre del evaluado* <span icon={faAsterisk} />
                </div>
                <div class='contenedorDiv'>
                    <div class="Apellido1">
                        <div>
                            <input
                                //state={apellido1}
                                //changeState={changeLastName1}
                                type="text"
                                className="inputFormulario"
                                onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData}
                                // label="Apellido 1"
                                placeholder="Apellido 1"
                                name="apellido1"
                            //leyendError="Ingrese un valor valido solo caracteres A-Z-a-z"
                            //regularExpresion={expression.lastName}
                            />
                        </div>
                    </div>
                    <div class="Apellido2">
                        <input
                            //state={apellido2}
                            //changeState={changeLastName2}
                            type="text"
                            className="inputFormulario"
                            onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData}
                            // label="Apellido 2"
                            placeholder="Apellido 2"
                            name="apellido2"
                        //leyendError="Ingrese un valor valido solo caracteres A-Z-a-z"
                        //regularExpresion={expression.lastName}
                        />
                    </div>
                    <div class="Nombres">
                        <input
                            //state={nombres}
                            //changeState={changeNames}
                            type="text"
                            className="inputFormulario"
                            // label="Nombres"
                            placeholder="Nombres"
                            onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData}
                            name="nombres"
                        //leyendError="Ingrese un valor valido solo caracteres A-Z-a-z"
                        //regularExpresion={expression.name}
                        />
                    </div>
                </div>
            </div>
            <div class="cargo_fecha">
                <div class="area-cargo">
                    <div class="titulo-carrgo">
                        Cargo* <span icon={faAsterisk} />
                    </div>
                    <div class="input-cargo">
                        <input
                            //state={cargo}
                            //changeState={changeCharge}
                            className="inputFormulario1"
                            type="text"
                            onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData}
                            placeholder="Cargo"
                            name="cargo"
                        //leyendError="Ingrese un valor valido solo caracteres A-Z-a-z"
                        //regularExpresion={expression.charge}
                        />
                    </div>
                </div>
                <div class="area-fecha">
                    <div class="titulo-fecha">
                        Fecha*
                        <span icon={faAsterisk} />
                    </div>
                    <div class="input-fecha">
                        <input
                            //state={fecha}
                            //changeState={changeDate}
                            className="inputFormularioDate"
                            type='date'
                            onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData}
                            name='fecha'
                        //leyendError='Ingrese una fecha'
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DivPrueba;