import React from 'react';
import './table4.css';

const DivPrueba1 = (props) => {
    function ingresarData(e) {
        props.setData({ box4: { ...props.data.box4, [e.target.name]: e.target.value } })

    }
    return (

        <div class="container3">
            <div class="titulo3">
                <div class="titulo-texto3"><h1>Calidad*</h1></div>
            </div>
            <div class="cuerpo3">
                <div class="colaborador3">
                    <p><b>Colaborador del proyecto</b></p>
                </div>
                <div class="encargado3">
                    <p><b>Encargado del proyecto</b></p>
                </div>
                <div class="director3">
                    <p><b>Director del proyecto</b></p>
                </div>
                <div class="p13">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input4" name="input40" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p23">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input4" name="input41" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p33">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input4" name="input42" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p43">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input4" name="input43" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p53">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input4" name="input44" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p63">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input4" name="input45" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p73">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input4" name="input46" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p83">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input4" name="input47" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p93">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input4" name="input48" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p103">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input4" name="input49" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p113">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input4" name="input50" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p123">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input4" name="input51" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p133">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input4" name="input52" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p143">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input4" name="input53" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p153">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input4" name="input54" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="act-org3">
                    <p>
                        <b>
                            EXACTITUD EN EL TRABAJO - <br /> Coherencia entre el trabajo solicitado y el efectivamente realizado. Grado de perfeccionismo que demuestra en el <br />trabajo. El trabajo realizado cumple con lo requerido y <br />además es de buena calidad.
                        </b>
                    </p>
                </div>
                <div class="act-equip3">
                    <p>
                        <b>
                            GRADO DE CONOCIMIENTO TÉCNICO - <br />Conocimiento de las distintas herramientas necesarias <br />para desarrollar sus labores ( Programas, bases de <br />datos, leyes, normas, sistemas, etc.)
                        </b>
                    </p>
                </div>
                <div class="act-colab3">
                    <p>
                        <b>
                            PRECISIÓN EN EL TRABAJO - <br />Comete un mínimo de errores y aprende de ellos, hace uso racional de los recursos y no requiere supervisión frecuente.
                        </b>
                    </p>
                </div>
                <div class="predis3">
                    <p>
                        <b>
                            RELACIONES INTERPERSONALES -  <br />Se muestra cortés con el personal y con sus compañeros.<br /> Brinda adecuada orientación y evita los conflictos dentro<br /> del trabajo.
                        </b>
                    </p>
                </div>
                <div class="punt3">
                    <p>
                        <b>
                            PRESENTACIÓN PERSONAL - <br />Se muestra profesional en el trabajo, respetuoso y amable <br />en el trato. Manera de vestir apropiada, prolijidad.
                        </b>
                    </p>

                </div>
            </div>
        </div>)
}


export default DivPrueba1;