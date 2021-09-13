import React from 'react';
import './titulo.css'
import logok from './logok.png';
const DescriptionForm = () => {
    return (
        <div class="container12">
            <div class='logop'>
                <img src={logok} alt='logo' width='259px' height='294px' />
            </div>
            <div class="eval-de">
                <p>Evaluacion de <br/>desempeño personal</p>
            </div>
        </div>
    )
}
export default DescriptionForm;

