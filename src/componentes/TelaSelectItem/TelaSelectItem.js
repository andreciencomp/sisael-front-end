import React, { useState, useEffect } from 'react'
import './TelaSelectItem.css'
function TelaSelectItem(props) {

    const [equipamentos, setEquipamentos] = useState([]);
    const [idEquipamento, setIdEquipamento] = useState(0);
    const [itensEquipamentos, setItensEquipamentos] = useState([]);
    const [selecionados, setSelecionados] = useState([]);

    useEffect(() => {

        carregarEquipamentos();
        console.log('effect');

    }, []);

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

    function carregarItensEquipamentos() {
        let opcoes = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },

        }
        fetch('http://localhost:8080/itensequipamentos/' + idEquipamento, opcoes)
            .then(response => response.json())
            .then(data => {
                setItensEquipamentos(data);

            })

    }



    function evtSelecionarItens(e) {
        e.preventDefault();
        let sair = false;
        while (sair == false) {
            let elementoRemovido = false;
            itensEquipamentos.forEach((element, i) => {
                let contem = contemItemEquipamento(element, selecionados);
                if ((element.selecionado) == true && (contem == false)) {
                    let elemento = itensEquipamentos[i];
                    elemento.selecionado = false;
                    selecionados.push(elemento);
                    itensEquipamentos.splice(i, 1);
                    elementoRemovido = true;
                    setItensEquipamentos([...itensEquipamentos]);
                    setSelecionados([...selecionados]);

                }
            });
            if (elementoRemovido == false) {
                sair = true;
            }
        }

    }


    function contemItemEquipamento(elemento, lista) {
        let temItem = false;
        lista.forEach((item) => {

            if (item.tombamento == elemento.tombamento) {
                temItem = true;
            }
        });
        return temItem;


    }

    function evtRemoverItens(e) {
        e.preventDefault();
        let sair = false;
        while (sair == false) {
            let elementoRemovido = false;
            selecionados.forEach((element, i) => {
                if (element.selecionado == true) {
                    let elemento = selecionados[i];
                    elemento.selecionado = false;
                    selecionados.splice(i, 1);
                    elementoRemovido = true;
                    if (contemItemEquipamento(elemento, itensEquipamentos) == false) {
                        itensEquipamentos.push(elemento);
                    }
                    setItensEquipamentos([...itensEquipamentos]);
                    setSelecionados([...selecionados]);
                    console.log("element: " + JSON.stringify(elemento));
                }
            });
            if (elementoRemovido == false) {
                sair = true;
            }


        }

    }

    function onCheckElementoEsquerda(e) {
        //e.preventDefault();
        console.log(e.target.value);
        if (e.target.checked) {
            itensEquipamentos[e.target.value].selecionado = true;
        } else {
            itensEquipamentos[e.target.value].selecionado = false;
        }

    }
    function onCheckElementoDireita(e) {
        //e.preventDefault();
        console.log(e.target.value);
        if (e.target.checked) {
            selecionados[e.target.value].selecionado = true;
        } else {
            selecionados[e.target.value].selecionado = false;
        }

    }



    function btnBuscarItens(e) {
        e.preventDefault();
        if (idEquipamento == 0) {
            setIdEquipamento(equipamentos[0].id);
        }
        carregarItensEquipamentos();



    }

    function onChangeEquipamento(e) {
        //e.preventDefault();
        setIdEquipamento(equipamentos[e.target.selectedIndex].id);
    }

    function btnConcluir(e){
        e.preventDefault();
        props.funObterItensEscolhidos(selecionados);
        props.funExibirModal();
    }

    return (
        <div className='tela-select-item-container'>
            <div className='sombra'>
            </div>
            <div className='content'>
                <div className='form'>
                    <form className="topo" onSubmit={btnBuscarItens}>
                        <select name='equipamento' onChange={onChangeEquipamento}>
                            {equipamentos.map((equipamento) => {
                                return (
                                    <option key={equipamento.id}>{equipamento.nome}</option>
                                );
                            })}
                        </select>
                        <button>Buscar</button>
                    </form>
                    <div className="tabelas">
                        <form className="esquerdo" name='selecionados' onSubmit={evtSelecionarItens}>
                            <div className="scroll-itens">
                                {itensEquipamentos.map((item, idx) => {
                                    return (
                                        <div className='item-lista' key={item.id}>
                                            <input value={idx} type='checkbox' onChange={onCheckElementoEsquerda} />
                                            <span>{item.tombamento + " " + item.equipamento.nome}</span>
                                        </div>)
                                })}
                            </div>

                            <button className="btn-adicionar" type="submit">Adicionar {">>"} </button>
                        </form>
                        <form class="direito" name='selecionados' onSubmit={evtRemoverItens}>
                            <div className="scroll-itens">
                                {selecionados.map((item, idx) => {
                                    return (
                                        <div className='item-lista' key={item.id}>
                                            <input value={idx} type='checkbox' onChange={onCheckElementoDireita} />
                                            <span>{item.tombamento + " " + item.equipamento.nome}</span>
                                        </div>)
                                })}
                            </div>


                            <button className="btn-remover" type="submit">{"<< "}Remover</button>
                        </form>
                    </div>
                    <div className='barra-botoes'>
                        <button onClick={props.funExibirModal}className='btn-cancelar'>Cancelar</button>
                        <button onClick={btnConcluir}className='btn-concluido'>Concluído</button>
                    </div>

                </div>
            </div>

        </div>)



}

export default TelaSelectItem;