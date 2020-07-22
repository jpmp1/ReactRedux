import React from 'react'
import {connect} from 'react-redux'

import './Intervalo.css'
import Card from '../card/Card'

const Intervalo = props => {
    const {min, max} = props
    return (
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={0} readOnly/>
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={10} readOnly/>
                </span>
            </div>

        </Card>
    )
}

const mapStateToProps = state => {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps)(Intervalo)