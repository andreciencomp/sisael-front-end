import React, { Component } from 'react';
import axios from 'axios';

export default class ListaLabGerencia extends Component {
    state = {
        pesquisa: "",
        listaReserva: []
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentDidUpdate() {
        if (this.props.equipamento !== this.state.pesquisa) {
            this.setState({ pesquisa: this.props.equipamento });
            var list = [];
            axios.get('http://localhost:8080/equipamentos/buscar/' + this.props.equipamento)
                .then(resE => {
                    resE.data.forEach(elementE => {
                        axios.get('http://localhost:8080/sala/' + elementE.idSala)
                            .then(resS => {
                                axios.get('http://localhost:8080/laboratorio/' + resS.data.lab)
                                    .then(resL => {
                                        list.push({ idE: elementE.id, nomeE: elementE.nome, nomeS: resS.data.nome, nomeL: resL.data.nome });
                                    })
                            })
                    })
                });
            this.setState((state) => ({
                listaReserva: list
            }));
        }
    }

    render() {
        let content

        if (this.state.listaReserva.length > 0) {
            content =
                (
                    <>
                        {this.state.listaReserva.map(element => (
                            <tbody key={element.idE}>
                                <tr>
                                    <td>{element.idE}</td>
                                    <td>{element.nomeE}</td>
                                    <td>{element.nomeS}</td>
                                    <td>{element.nomeL}</td>
                                    <td><button>Reservar</button></td>
                                </tr>
                            </tbody>
                        ))
                        }
                    </>
                )
        } else {
            content = (
                <tbody>
                    <tr>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </tbody>
            )
        }
        //console.log(this.state.listaReserva);
        return (
            <>
                {content}
            </>
        )

    }
}
