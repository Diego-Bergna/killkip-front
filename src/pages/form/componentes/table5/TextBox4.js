import React from 'react';
import './table5.css';

const DivPrueba1 = (props) => {

    function ingresarData(e) {
        props.setData({ box5: { ...props.data.box5, [e.target.name]: e.target.value } })
        
    }
    return (

        <div class="container4">
            <div class="titulo4">
                <div class="titulo-texto4"><h1>Liderazgo*</h1></div>
            </div>
            <div class="cuerpo4">
                <div class="colaborador4">
                    <p>Colaborador del proyecto</p>
                </div>
                <div class="encargado4">
                    <p>Encargado del proyecto</p>
                </div>
                <div class="director4">
                    <p>Director del proyecto</p>
                </div>
                <div class="p14">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input5" name="input55" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p24">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input5" name="input56" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p34">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input5" name="input57" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p44">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input5" name="input58" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p54">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input5" name="input59" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p64">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input5" name="input60" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p74">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input5" name="input61" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p84">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input5" name="input62" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p94">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input5" name="input63" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p104">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input5" name="input64" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>

                <div class="p114">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input5" name="input65" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p124">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input5" name="input66" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p134">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input5" name="input67" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p144">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input5" name="input68" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p154">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input5" name="input69" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="act-org4">
                    <p>
                        <b>
                            COORDINACIÓN -<br /> Carisma, liderazgo natural, capacidad de mediar en <br />los conflictos internos y capacidad de mediar en los <br />conflictos con los clientes.
                        </b>
                    </p>
                </div>
                <div class="act-equip4">
                    <p>
                        <b>
                            COOPERACIÓN CON EL EQUIPO - <br />Colaboración en el desarrollo de trabajos de integrantes <br />de otros grupos. Trabajo en equipo. Capacidad de <br />compartir conocimiento y habilidades.
                        </b>
                    </p>
                </div>
                <div class="act-colab4">
                    <p>
                        <b>
                            CAPACIDAD DE ACEPTAR CRÍTICAS - <br />Capacidad de recibir críticas constructivas en forma<br /> abierta. Grado de adaptación a las mismas. Capacidad <br />de no ofenderse y aprovechar las críticas para mejorar.
                        </b>
                    </p>
                </div>
                <div class="predis4">
                    <p>
                        <b>
                            TRABAJO EN EQUIPO - <br /> Muestra aptitud para integrarse al equipo, se identifica<br /> fácilmente con los objetivos del equipo y se muestra <br />asequible al cambio.
                        </b>
                    </p>
                </div>
                <div class="punt4">
                    <p>
                        <b>
                            CREATIVIDAD - <br />Inquietud por avanzar y mejorar. Facilidad para ofrecersel<br /> como ejecutor de sus propuestas. Tiene empuje. Ofrece alternativas innovadoras para solucionar problemas.
                        </b>
                    </p>
                </div>
            </div>
        </div>)
}


export default DivPrueba1;