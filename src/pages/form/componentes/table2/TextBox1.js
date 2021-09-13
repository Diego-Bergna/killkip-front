import React from 'react';
import './table2.css';

const DivPrueba1 = (props) => {
    function ingresarData(e) {
        props.setData({ box2: { ...props.data.box2, [e.target.name]: e.target.value } })

    }
    return (

        <div class="container1">
            <div class="titulo1">
                <div class="titulo-texto1">
                    <h1>Factor Humano<br />Actitudes*</h1>
                </div>
            </div>
            <div class="cuerpo1">
                <div class="colaborador1">
                    <p><b>Colaborador del proyecto</b></p>
                </div>
                <div class="encargado1">
                    <p><b>Encargado del proyecto</b></p>
                </div>
                <div class="director1">
                    <p><b>Director del proyecto</b></p>
                </div>
                <div class="p11">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input2" name="input13" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p21">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input2" name="input14" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p31">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input2" name="input15" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p41">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input2" name="input16" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p51">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input2" name="input17" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p61">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input2" name="input18" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p71">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input2" name="input19" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p81">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input2" name="input20" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p91">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input2" name="input21" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p101">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input2" name="input22" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p111">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input2" name="input23" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p121">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input2" name="input24" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p131">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input2" name="input25" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p141">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input2" name="input26" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p151">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input2" name="input27" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="act-org1">
                    <p>
                        <b>ACTITUD HACIA LA ORGANIZACIÓN - <br /> Sentimiento de pertenencia a la compañia y adhedsion <br />a sus  lineamiento. Lealtad para con la oraganización. Disponibilidad para extender el horario de trabajo ante <br />una necesidad puntual. </b>
                    </p>
                </div>
                <div class="act-equip1">
                    <p>
                        <b>ACTITUD HACIA EL EQUIPO DE TRABAJO - <br /> Relación con los superiores inmediatos y no inmediatos. <br /> Respeto, sinceridad y colaboración.</b>
                    </p>
                </div>
                <div class="act-colab1">
                    <p>
                        <b>ACTITUD HACIA LOS COLABORADORES - <br /> Forma en la que se maneja con sus compañeros inmediatos. Camaradería. Se considera la relación más allá de lo estrictamente laboral.</b>
                    </p>
                </div>
                <div class="predis1">
                    <p>
                        <b>PREDISPOSICIÓN - <br />Se muestra predispuesto hacia la tarea. Manifiesta una <br />actitud positiva frente a los diferentes requerimientos con entusiasmo y motivación.</b>
                    </p>
                </div>
                <div class="punt1">
                    <p>
                        <b>PUNTUALIDAD - <br /> Puntualidad en horario laboral y reuniones.</b>
                    </p>
                </div>
            </div>
        </div>)
}


export default DivPrueba1;