import React, { Component } from 'react';
import axios from 'axios';

export default class ListarSalaUsuario extends Component {
    state = {
        salas: []
    }

    componentDidMount() {
        axios.get('http://localhost:8080/sala/salas/' + this.props.lab.id)
            .then(res => {
                this.setState({ salas: res.data });
            });
    }

    render() {

        const { salas } = this.state;
        return (
            <>
                {salas.map(labs => (
                    <div className="div-lab" key={labs.id}>
                        <h2> {labs.nome} </h2>
                        <div className="div-button-labs-adm">
                            <button className="btn-visualizar" id={labs.id} name={labs.nome} onClick={this.props.abrir}>
                                Visualizar equipamentos
                            </button>
                        </div>
                    </div>
                ))}
            </>
        )
    }
}
