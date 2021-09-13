import React from 'react';
import './table1.css';

const DivPrueba = (props) => {
    function ingresarData(e) {
        props.setData({ box1: { ...props.data.box1, [e.target.name]: e.target.value } })
        
    }
    return (
        <div class="container">
            <div class="titulo"></div>
            <div class="Cuerpo">
                <div class="cumplimientos">
                    <p>
                        <b>CUMPLIMIENTO - Grado de <br /> compromiso que asume para el <br /> cumplimiento de las metas. </b>
                    </p>
                </div>
                <div class="sentido">
                    <p>
                        <b>SENTIDO COMÚN - Grado de <br /> cumplimiento de las normas, <br /> procedimientos y políticas <br /> existentes. </b>
                    </p>
                </div>
                <div class="orientacion">
                    <p>
                        <b>ORIENTACIÓN DE RESULTADOS -<br /> Termina oportunamente y cumple <br /> con los requerimientos que se le <br /> encomienda realizando un volumen <br /> adecuado a tareas. </b>
                    </p>
                </div>
                <div class="responsabilidad">
                    <p>
                        <b>RESPONSABILIDAD - Grado de<br /> tranquilidad que le genera a al <br /> equipo de trabajo. </b>
                    </p>
                </div>
                <div class="colaborador">
                    <p><b>Colaborador del proyecto</b></p>
                </div>
                <div class="encargado">
                    <p><b>Encargado del proyecto</b></p>
                </div>
                <div class="director">
                    <p><b>Director del proyecto</b></p>
                </div>
                <div class="p1">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input1" name="input1" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p2">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input1" name="input2" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p3">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input1" name="input3" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p4">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input1" name="input4" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p5">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input1" name="input5" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p6">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input1" name="input6" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p7">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input1" name="input7" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p8">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input1" name="input8" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p9">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input1" name="input9" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p10">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input1" name="input10" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p11">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input1" name="input11" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <div class="p12">
                    <select onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData} type="number" id="input1" name="input12" defaultValue='1'>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
            </div>
            <div class="titulo-texto">
                <div class="titulo-texto-tipo">
                    <h1>Desempeño</h1>
                </div>
            </div>
        </div>

    )
}

export default DivPrueba;