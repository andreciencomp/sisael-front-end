import React, { Component } from 'react';
import axios from 'axios';

export default class ListarLabUsuario extends Component {
    state = {
        labsNome: []
    }

    componentDidMount() {
        axios.get('http://localhost:8080/laboratorio/listar')
            .then(res => {
                this.setState({ labsNome: res.data });
            });
    }

    render() {

        const { labsNome } = this.state;
        return (
            <>
                {labsNome.map(labs => (
                    <div className="div-lab" key={labs.id}>
                        <h2> {labs.nome} </h2>
                        <div className="div-button-labs-adm">
                            <button className="btn-visualizar" id={labs.id} name={labs.nome} onClick={this.props.abrir}>
                                Visualizar salas
                            </button>
                        </div>
                    </div>
                ))}
            </>
        )
    }
}
