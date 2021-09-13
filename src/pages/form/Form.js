import React, { useState } from 'react';
import './componentes/boton/BotonStyle.css';
import './componentes/promedio/promedio.css';
import './componentes/nota_final/nota_final.css'
import Titulo from './componentes/titulo/titulo';
import DescriptionForm from './componentes/DescriptionForm/DescriptionForm';
import TextBox from './componentes/table1/TextBox';
import TextBox1 from './componentes/table2/TextBox1';
import TextBox2 from './componentes/table3/TextBox2';
import TextBox3 from './componentes/table4/TextBox3';
import TextBox4 from './componentes/table5/TextBox4';
import NombresBox from './componentes/nombres/nombres';
import Observaciones from './componentes/observaciones/observaciones';
import DniId from './componentes/dni_id/dni_id';
import Firma from './componentes/firma/firma';
import './Form.css'


import Swal from 'sweetalert2';

export default function Form() {

  const [Tabla0, setTabla0] = useState({ box0: { apellido1: '', apellido2: '', nombres: '', cargo: '', fecha: '' } })
  const [Tabla1, setTabla1] = useState({ box1: { input1: '1', input2: '1', input3: '1', input4: '1', input5: '1', input6: '1', input7: '1', input8: '1', input9: '1', input10: '1', input11: '1', input12: '1' } });
  const [Tabla2, setTabla2] = useState({ box2: { input13: '1', input14: '1', input15: '1', input16: '1', input17: '1', input18: '1', input19: '1', input20: '1', input21: '1', input22: '1', input23: '1', input24: '1', input25: '1', input26: '1', input27: '1' } });
  const [Tabla3, setTabla3] = useState({ box3: { input28: '1', input29: '1', input30: '1', input31: '1', input32: '1', input33: '1', input34: '1', input35: '1', input36: '1', input37: '1', input38: '1', input39: '1' } });
  const [Tabla4, setTabla4] = useState({ box4: { input40: '1', input41: '1', input42: '1', input43: '1', input44: '1', input45: '1', input46: '1', input47: '1', input48: '1', input49: '1', input50: '1', input51: '1', input52: '1', input53: '1', input54: '1' } });
  const [Tabla5, setTabla5] = useState({ box5: { input55: '1', input56: '1', input57: '1', input58: '1', input59: '1', input60: '1', input61: '1', input62: '1', input63: '1', input64: '1', input65: '1', input66: '1', input67: '1', input68: '1', input69: '1' } });
  //Observaciones
  const [Tabla6, setTabla6] = useState({ box6: { textarea: '' } })
  const [Tabla7, setTabla7] = useState({ box7: { dni: '', id: '' } })

  const [Promedio1, setPromedio1] = useState({ promedio1: '0' });

  function PromedioColaborador() {

    return (parseFloat(Number(Tabla1.box1.input1) +
      Number(Tabla1.box1.input4) +
      Number(Tabla1.box1.input7) +
      Number(Tabla1.box1.input10) +
      Number(Tabla2.box2.input13) +
      Number(Tabla2.box2.input16) +
      Number(Tabla2.box2.input19) +
      Number(Tabla2.box2.input22) +
      Number(Tabla2.box2.input25) +
      Number(Tabla3.box3.input28) +
      Number(Tabla3.box3.input31) +
      Number(Tabla3.box3.input34) +
      Number(Tabla3.box3.input37) +
      Number(Tabla4.box4.input40) +
      Number(Tabla4.box4.input43) +
      Number(Tabla4.box4.input46) +
      Number(Tabla4.box4.input49) +
      Number(Tabla4.box4.input52) +
      Number(Tabla5.box5.input55) +
      Number(Tabla5.box5.input58) +
      Number(Tabla5.box5.input61) +
      Number(Tabla5.box5.input64) +
      Number(Tabla5.box5.input67)) / 23).toFixed(2);
  };

  function PromedioEncargado() {

    return (parseFloat(Number(Tabla1.box1.input2) +
      Number(Tabla1.box1.input5) +
      Number(Tabla1.box1.input8) +
      Number(Tabla1.box1.input11) +
      Number(Tabla2.box2.input14) +
      Number(Tabla2.box2.input17) +
      Number(Tabla2.box2.input20) +
      Number(Tabla2.box2.input23) +
      Number(Tabla2.box2.input26) +
      Number(Tabla3.box3.input29) +
      Number(Tabla3.box3.input32) +
      Number(Tabla3.box3.input35) +
      Number(Tabla3.box3.input38) +
      Number(Tabla4.box4.input41) +
      Number(Tabla4.box4.input44) +
      Number(Tabla4.box4.input47) +
      Number(Tabla4.box4.input50) +
      Number(Tabla4.box4.input53) +
      Number(Tabla5.box5.input56) +
      Number(Tabla5.box5.input59) +
      Number(Tabla5.box5.input62) +
      Number(Tabla5.box5.input65) +
      Number(Tabla5.box5.input68)) / 23).toFixed(2);
  };

  function PromedioDirector() {

    return (parseFloat(Number(Tabla1.box1.input3) +
      Number(Tabla1.box1.input6) +
      Number(Tabla1.box1.input9) +
      Number(Tabla1.box1.input12) +
      Number(Tabla2.box2.input15) +
      Number(Tabla2.box2.input18) +
      Number(Tabla2.box2.input21) +
      Number(Tabla2.box2.input24) +
      Number(Tabla2.box2.input27) +
      Number(Tabla3.box3.input30) +
      Number(Tabla3.box3.input33) +
      Number(Tabla3.box3.input36) +
      Number(Tabla3.box3.input39) +
      Number(Tabla4.box4.input42) +
      Number(Tabla4.box4.input45) +
      Number(Tabla4.box4.input48) +
      Number(Tabla4.box4.input51) +
      Number(Tabla4.box4.input54) +
      Number(Tabla5.box5.input57) +
      Number(Tabla5.box5.input60) +
      Number(Tabla5.box5.input63) +
      Number(Tabla5.box5.input66) +
      Number(Tabla5.box5.input69)) / 23).toFixed(2);
  };

  function PromedioFinal() {
    return parseFloat((Number(PromedioColaborador()) + Number(PromedioDirector()) + Number(PromedioEncargado())) / 3).toFixed(2);

  }

  console.log(PromedioFinal());


  const expression = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    lastName: /^[a-zA-ZÀ-ÿ]{1,40}$/,
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/,
    charge: /^[a-zA-ZÀ-ÿ\s]{1,40}$/
  }
  // const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
  function enviar(e) {

    // console.log(Bloque1)
    e.preventDefault();
    //  console.log(typeof(Number(PromedioColaborador())))
    //  console.log(Number(PromedioColaborador()))


    let promColab = Number(PromedioColaborador());
    let promEncarg = Number(PromedioEncargado())
    let promDirect = Number(PromedioDirector())
    let promFin = Number(PromedioFinal())

    Swal.fire({
      title: '¿Estas seguro?',
      text: "No se podran hacer cambios",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si,enviar.',
      cancelButtonText:'Cancelar.'
    }).then((result) => {
      if (result.isConfirmed) {
        
    fetch('https://killkip-backend.herokuapp.com/api/form', {
      method: "POST",
      body: JSON.stringify(
        {
          apellidoP: Tabla0.box0.apellido1,
          apellidoM: Tabla0.box0.apellido2,
          nombres: Tabla0.box0.nombres,
          cargo: Tabla0.box0.cargo,
          fecha: Tabla0.box0.fecha,
          desempeño: {
            cumplimiento: {
              colaborador: Number(Tabla1.box1.input1),
              encargado: Number(Tabla1.box1.input2),
              director: Number(Tabla1.box1.input3)
            },
            sentido_comun: {
              colaborador: Number(Tabla1.box1.input4),
              encargado: Number(Tabla1.box1.input5),
              director: Number(Tabla1.box1.input6)
            },
            orientacion_de_resultados: {
              colaborador: Number(Tabla1.box1.input7),
              encargado: Number(Tabla1.box1.input8),
              director: Number(Tabla1.box1.input9)
            },
            responsabilidad: {
              colaborador: Number(Tabla1.box1.input10),
              encargado: Number(Tabla1.box1.input11),
              director: Number(Tabla1.box1.input12)
            }
          },
          factor_humano: {
            actitud_organizacion: {
              colaborador: Number(Tabla2.box2.input13),
              encargado: Number(Tabla2.box2.input14),
              director: Number(Tabla2.box2.input15)
            },
            actitud_equipo: {
              colaborador: Number(Tabla2.box2.input16),
              encargado: Number(Tabla2.box2.input17),
              director: Number(Tabla2.box2.input18)
            },
            actitud_colaboradores: {
              colaborador: Number(Tabla2.box2.input19),
              encargado: Number(Tabla2.box2.input20),
              director: Number(Tabla2.box2.input21)
            },
            predisposicion: {
              colaborador: Number(Tabla2.box2.input22),
              encargado: Number(Tabla2.box2.input23),
              director: Number(Tabla2.box2.input24)
            },
            puntualidad: {
              colaborador: Number(Tabla2.box2.input25),
              encargado: Number(Tabla2.box2.input26),
              director: Number(Tabla2.box2.input27)
            }
          },
          habilidades: {
            respuesta: {

              colaborador: Number(Tabla3.box3.input28),
              encargado: Number(Tabla3.box3.input29),
              director: Number(Tabla3.box3.input30)
            },
            organizacion: {
              colaborador: Number(Tabla3.box3.input31),
              encargado: Number(Tabla3.box3.input32),
              director: Number(Tabla3.box3.input33)
            },
            potencial: {
              colaborador: Number(Tabla3.box3.input34),
              encargado: Number(Tabla3.box3.input35),
              director: Number(Tabla3.box3.input36)
            },
            iniciativa: {
              colaborador: Number(Tabla3.box3.input37),
              encargado: Number(Tabla3.box3.input38),
              director: Number(Tabla3.box3.input39)
            }
          },
          calidad: {
            exactitud: {
              colaborador: Number(Tabla4.box4.input40),
              encargado: Number(Tabla4.box4.input41),
              director: Number(Tabla4.box4.input42)
            },
            grado_de_conocimiento: {
              colaborador: Number(Tabla4.box4.input43),
              encargado: Number(Tabla4.box4.input44),
              director: Number(Tabla4.box4.input45)
            },
            precision: {
              colaborador: Number(Tabla4.box4.input46),
              encargado: Number(Tabla4.box4.input47),
              director: Number(Tabla4.box4.input48)
            },
            relaciones_interpersonales: {
              colaborador: Number(Tabla4.box4.input49),
              encargado: Number(Tabla4.box4.input50),
              director: Number(Tabla4.box4.input51)
            },
            presentacion_personal: {
              colaborador: Number(Tabla4.box4.input52),
              encargado: Number(Tabla4.box4.input53),
              director: Number(Tabla4.box4.input54)
            }
          },
          liderazgo: {
            coordinacion: {
              colaborador: Number(Tabla5.box5.input55),
              encargado: Number(Tabla5.box5.input56),
              director: Number(Tabla5.box5.input57)
            },
            cooperacion: {
              colaborador: Number(Tabla5.box5.input58),
              encargado: Number(Tabla5.box5.input59),
              director: Number(Tabla5.box5.input60)
            },
            capacidad: {
              colaborador: Number(Tabla5.box5.input61),
              encargado: Number(Tabla5.box5.input62),
              director: Number(Tabla5.box5.input63)
            },
            trabajo: {
              colaborador: Number(Tabla5.box5.input64),
              encargado: Number(Tabla5.box5.input65),
              director: Number(Tabla5.box5.input66)
            },
            creatividad: {
              colaborador: Number(Tabla5.box5.input67),
              encargado: Number(Tabla5.box5.input68),
              director: Number(Tabla5.box5.input69)
            }
          },
          promedios: {
            eval_colaborador: promColab,
            eval_jefe: promEncarg,
            eval_gerente: promDirect,
            promedio_general: promFin
          },
          observaciones: Tabla6.box6.textarea,
          dni: Tabla7.box7.dni,
          id: Tabla7.box7.id
        }),
      headers: {
        "Content-type": "application/json",
        'Access-Control-Allow-Origin': '*',
      }
    });
        Swal.fire(
          'Enviado',
          'El formulario fue enviado con exito.',
        )
      }
    })







  }

  return (
    <main1>
      
      <Titulo />
      {/* <Formulario action='' onSubmit="enviar()"> */}
      <NombresBox
        data={Tabla0}
        setData={setTabla0}
      />
      {/* </Formulario> */}
      <DescriptionForm />
      <TextBox
        data={Tabla1}
        setData={setTabla1}
      />
      <TextBox1
        data={Tabla2}
        setData={setTabla2} />
      <TextBox2 data={Tabla3}
        setData={setTabla3} />
      <TextBox3 data={Tabla4}
        setData={setTabla4} />
      <TextBox4 data={Tabla5}
        setData={setTabla5} />

      {/* Promedio */}
      <div class="container5">
        <div class="Promedio">
          <p><b>Promedio</b></p>
        </div>
        <div class="Colab">
          <p><b>Colaborador del proyecto</b></p>
        </div>
        <div class="Encarg">
          <p><b>Encargado del proyecto</b></p>
        </div>
        <div class="Direct">
          <p><b>Director del proyecto</b></p>
        </div>
        <div id="colab-prom"><p>{PromedioColaborador()}</p></div>
        <div id="encarg-prom"><p>{PromedioEncargado()}</p></div>
        <div id="direct-prom"><p>{PromedioDirector()}</p></div>
      </div>
      <div class="container7">
        <div class="Calificacion-final-titulo">
          <p>
            <b>Calificación Final</b>
          </p>
        </div>
        <div class="promedio-general-titulo">
          <p>
            <b>Promedio General</b>
          </p>
        </div>
        <div class="valor" defaultValue=' '><p>{PromedioFinal()}</p></div>
      </div>
      <Observaciones data={Tabla6}
        setData={setTabla6} />
      <Firma />
      <DniId data={Tabla7}
        setData={setTabla7} />
      <div class="containerButon">
        <button type="submit" onClick={enviar} id="boton">Enviar</button>
      </div>

    </main1>
  );
}



