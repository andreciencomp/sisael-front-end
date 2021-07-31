import React, { useEffect, useState } from 'react'
import './GerenciaHorarios.css'

function GerenciaHorarios() {

    let horas = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    let minutos = [];
    const [horaInicialSelecionada, setHoraInicialSelecionada] = useState(0);
    const [minutoInicialSelecionado, setMinutoInicialSelecionado] = useState(0);
    const [horaFinalSelecionada, setHoraFinalSelecionada] = useState(0);
    const [minutoFinalSelecionado, setMinutoFinalSelecionado] = useState(0);

    for (let i = 0; i < 60; i++) {
        if ((i % 5) === 0) {
            minutos.push(i);
        }

    }
    const [horarios, setHorarios] = useState([]);

    useEffect(() => {
        let options = {
            method:'GET',
            headers:{
                'Content-type':'application/json'
            }
        };

        fetch('http://localhost:8080/horarios', options).
        then(dados=> dados.json()).
        then(resposta=>setHorarios(resposta));
    });

    async function evtAdicionarHorario(e) {
        console.log("here");
        let strHoraInicial = "";
        let strMinutoInicial = "";
        let strHoraFinal = "";
        let strMinutoFinal = "";
        if (horaInicialSelecionada < 10) {
            strHoraInicial = "0" + horaInicialSelecionada;
        } else {
            strHoraInicial = horaInicialSelecionada;
        }
        if (minutoInicialSelecionado < 10) {
            strMinutoInicial = "0" + minutoInicialSelecionado;
        } else {
            strMinutoInicial = minutoInicialSelecionado;
        }

        if (horaFinalSelecionada < 10) {
            strHoraFinal = "0" + horaFinalSelecionada;
        } else {
            strHoraFinal = horaFinalSelecionada;
        }
        if (minutoFinalSelecionado < 10) {
            strMinutoFinal = "0" + minutoFinalSelecionado;
        } else {
            strMinutoFinal = minutoFinalSelecionado;
        }

        let strHorarioInicial = strHoraInicial + ":" + strMinutoInicial;
        let strHorarioFinal = strHoraFinal + ":" +strMinutoFinal;

        let hora = { horaInicial: strHorarioInicial, horaFinal: strHorarioFinal};
        let options={
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(hora)
        };
        let resposta = await fetch('http://localhost:8080/horarios/cadastrar', options);
        if(resposta.ok){
            let dado = await resposta.json();
            horarios.push(dado);
            setHorarios([...horarios]);
        }else{
            alert("Erro ao cadastrar o horario");
        }
    }

    function evtSelectHoraInicial(e) {
        setHoraInicialSelecionada(e.target.value);
    }

    function evtSelectMinutoInicial(e) {
        setMinutoInicialSelecionado(e.target.value);
    }

    function evtSelectHoraFinal(e) {
        setHoraFinalSelecionada(e.target.value);
    }

    function evtSelectMinutoFinal(e) {
        setMinutoFinalSelecionado(e.target.value);
    }

    function evtRemoverHorario(e){

        let id = e.target.value;
        let options={
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        };
        fetch('http://localhost:8080/horarios/deletar/'+id, options)
        .then(resposta=>resposta.json())
        .then(dados=>setHorarios(horarios));

    }

    return (
        <div className="container-horarios">

            <table>
                <tr>
                    <td className="titulo" colSpan='3'>Cadastrar Novo horário</td>
                </tr>
                <tr>

                    <td>
                        <div className="select-horario">
                            <select onChange={evtSelectHoraInicial}>
                                {horas.map((hora) => {
                                    return (
                                        <option value={hora}>{hora<10?"0"+hora:hora}</option>
                                    )
                                })}
                            </select>
                            <select onChange={evtSelectMinutoInicial}>
                                {minutos.map((minuto) => {
                                    return (
                                        <option value={minuto}>{minuto<10?"0"+minuto:minuto}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </td>
                    <td>
                        <div className="select-horario">
                            <select onChange={evtSelectHoraFinal}>
                                {horas.map((hora) => {
                                    return (
                                        <option value={hora}>{hora<10?"0"+hora:hora}</option>
                                    )
                                })}
                            </select>
                            <select onChange={evtSelectMinutoFinal}>
                                {minutos.map((minuto) => {
                                    return (
                                        <option value={minuto}>{minuto<10?"0"+minuto:minuto}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </td>

                    <td className="btn-cad-td">
                        <div className="btn-cad">
                            <button onClick={evtAdicionarHorario}>
                                Adicionar
                            </button>
                        </div>
                    </td>
                </tr>
                <tr className='horarios'>
                    <th>Hora inicial</th>
                    <th>Hora final</th>
                </tr>

                {horarios.map((horario, i) => {
                    return (
                        <tr>
                            <td>{horario.horaInicial}</td>
                            <td>{horario.horaFinal}</td>
                            <td className="btn-remover">
                                <button value={horario.id} onClick={evtRemoverHorario}>Remover</button>
                            </td>

                        </tr>
                    )
                })}

            </table>
            

        </div>
    );



}


export default GerenciaHorarios;