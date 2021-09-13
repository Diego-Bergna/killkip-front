import React from 'react';
import './table3.css';

const DivPrueba2 = (props) => {
    function ingresarData(e) {
        props.setData({ box3: { ...props.data.box3, [e.target.name]: e.target.value } })

    }
    return (

        <div class="container2">
            <div class="titulo2">
                <div class="titulo-texto2"><h1>Habilidades*</h1></div>
            </div>
            <div class="cuerpo2">
                <div class="colaborador2">
                    <p><b>Colaborador del proyecto</b></p>
                </div>
                <div class="encargado2">
                    <p><b>Encargado del proyecto</b></p>
                </div>
                <div class="director2">
                    <p><b>Director del proyecto</b></p>
                </div>
                <div class="p12">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input3" name="input28" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p22">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input3" name="input29" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p32">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input3" name="input30" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p42">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input3" name="input31" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p52">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input3" name="input32" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p62">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input3" name="input33" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p72">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input3" name="input34" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p82">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input3" name="input35" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p92">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input3" name="input36" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="resp2">
                    <p>
                        <b>
                            RESPUESTA BAJO PRESIÓN - <br /> Capacidad de mantener la calma y transmitirla a sus <br /> compañeros. Capacidad de tomar decisiones correctas <br /> bajo presión. Capacidad de sacar provecho de situaciones adversas. Capacidad de realización en estos casos.
                        </b>
                    </p>
                </div>
                <div class="org2">
                    <p>
                        <b>
                            ORGANIZACIÓN - <br /> Planifica sus actividades,  mantiene en orden sus tareas <br />incluso cuando maneja múltiples temas, hace uso de <br />indicadores y se preocupa por alcanzar las metas <br /> establecidas.
                        </b>
                    </p>
                </div>
                <div class="potencial2">
                    <p>
                        <b>
                            POTENCIAL Y CAPACIDAD DE APRENDIZAJE - <br /> Tiene perfil funcional. Inquietud y capacidad para <br />conocer las distintas herramientas necesarias para el <br />trabajo.
                        </b>
                    </p>
                </div>
                <div class="iniciativa2">
                    <p>
                        <b>
                            INICIATIVA - <br />Muestra nuevas ideas de mejora, se anticipa a las <br />dificultades y tiene gran capacidad para resolver problemas.
                        </b>
                    </p>
                </div>
                <div class="p102">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input3" name="input37" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p112">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input3" name="input38" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p122">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input3" name="input39" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
            </div>
        </div>)
}


export default DivPrueba2;