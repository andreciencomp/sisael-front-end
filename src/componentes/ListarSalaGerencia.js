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
                {salas.map(salas => (
                    <div className="div-lab" key={salas.id}>
                        <h2> {salas.nome} </h2>
                        <div className="div-button-salas-adm">
                            <button className="btn-visualizar" id={salas.id} name={salas.nome} onClick={this.props.abrir}>
                                Adicionar equipamento
                            </button>
                        </div>
                    </div>
                ))}
            </>
        )
    }
}
