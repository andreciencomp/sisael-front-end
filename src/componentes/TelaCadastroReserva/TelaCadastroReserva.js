import React, { useState, useEffect } from 'react'
import TelaSelectItem from '../TelaSelectItem/TelaSelectItem';
import './TelaCadastroReserva.css'

function TelaCadastroReserva(props) {

    const [equipamentos, setEquipamentos] = useState([{ id: 1, nome: 'Microscópio eletrônico' }, { id: 2, nome: 'Estufa C' }]);
    const [itensEscolhidos, setItensEscolhidos] = useState([]);
    const [laboratorios, setLaboratorios] = useState([]);
    const [horarios, setHorarios] = useState([]);
    const [reserva, SetReserva] = useState(null);
    const [horarioSelecionado, setHorarioSelecionado] = useState(0);
    const [laborarioSelecionado, setLaboratorioSelecionado] = useState(0);
    const [salaSelecionada, setSalaSelecionada] = useState(0);
    const [dataSelecionada,setDataSelecionada] = useState(null);
    const[exibirModal, setExibirModal] = useState(false);

    useEffect(() => {
        carregarEquipamentos();
        carregarHorarios();
        carregarLaboratorios();
    }, []);


    function toogleExibirModal(){
        if(exibirModal == false){
            setExibirModal(true);
        }else{
            setExibirModal(false);
        }
    }

    
    function obterItensEscolhidos(lista){

        setItensEscolhidos(lista);

    }

    function carregarEquipamentos() {
        let opcoes = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },

        }
        fetch('http://localhost:8080/equipamentos/listar', opcoes)
            .then(response => response.json())
            .then(data => {
                setEquipamentos(data);
            })

    }

    function carregarHorarios() {
        let opcoes = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },

        }

        fetch('http://localhost:8080/horarios', opcoes)
            .then(response => response.json())
            .then(data => {
                setHorarios(data);
                console.log(data);
            })
    }

    async function salvarReserva(reserva){

        let opcoes = {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(reserva)
        }

        let resposta = await fetch('http://localhost:8080/reservas/cadastrar',opcoes);
        if(resposta.ok){
            let dado = await resposta.json();
            alert("Sua reserva foi cadastrada");
        }else{
            alert("Não foi possível fazer a reserva");

        }
    }

    async function carregarLaboratorios() {

        let resposta = await fetch('http://localhost:8080/laboratorios');
        let dados = await resposta.json();
        setLaboratorios(dados);

    }

    function evtCadastrarReserva(e) {
         e.preventDefault();
        let idxLab = parseInt(e.target.name);
        let idxSala = parseInt(e.target.botao.value);
        let idxHorario = parseInt(e.target.horario.selectedIndex);
        console.log(idxSala);
        if(dataSelecionada == null){
            alert("Escolha uma data da reserva!");
        }
        else if(itensEscolhidos.length == 0){
            alert("Você não selecionou os equipamentos para fazer a reserva");
        }else{
            let dado = {
                pesquisador:{id:props.usuario.id },
                laboratorio: laboratorios[idxLab],
                sala:laboratorios[idxLab].salas[idxSala],
                equipamentos:itensEscolhidos,
                horarioDaReserva:horarios[idxHorario],
                data:dataSelecionada
            }
            console.log(JSON.stringify(dado));
            console.log(idxSala);
            salvarReserva(dado);


        }

        

    }


    function onChangeHorario(e) {

        console.log(e.target.selectedIndex);
    }

    function onChangeData(e){
        console.log(e.target.value);
        setDataSelecionada(e.target.value);
    }


    return (
        <div className='container-tela-cad-reservas'>
            <div class="tela-cad-reservas">
                <div className="part1">
                    <div className='area-equipamento'>
                        <span>Equipamento</span>
                        <button onClick={toogleExibirModal}>Selecionar Equipamentos</button>
                    </div>

                    <div className='area-data'>
                        <span>Data do agendamento</span>
                        <input className='ipnut-data' type='date' onChange={onChangeData }/>
                    </div>

                </div>
                <div className='part2'>
                    {laboratorios.map((lab, idxLab) => {
                        return (
                            <div className="lab-div">
                                <span className='nome-lab'>{lab.nome}</span>
                                <div className="lista-salas">
                                    {lab.salas.map((sala, idxSala) => {
                                        return (
                                            <form name={idxLab} className="sala" onSubmit={evtCadastrarReserva}>
                                                <span name={idxSala}className='nome-sala'>{sala.nome}</span>
                                                <small>horários</small>
                                                <select name='horario' onChange={onChangeHorario}>
                                                    {horarios.map((h, idxHorario) => {
                                                        return (

                                                            <option key={h.id}>{h.horaInicial} - {h.horaFinal}</option>
                                                        )
                                                    })}
                                                </select>
                                                <button name='botao' value={idxSala} type="submit">Cadastrar</button>

                                            </form>


                                        )
                                    })}
                                </div>

                            </div>);
                    })}

                </div>
                <div>
                    {exibirModal && <TelaSelectItem funExibirModal={toogleExibirModal} funObterItensEscolhidos={obterItensEscolhidos}/>}
                </div>
            </div>
        </div>
    );

}


export default TelaCadastroReserva;