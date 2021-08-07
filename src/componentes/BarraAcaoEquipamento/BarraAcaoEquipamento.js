import {Link} from 'react-router-dom'
import './BarraAcaoEquipamento.css'

function BarraAcaoEquipamento(){

    return (
        <div className='barra-acao-equip'>   
            <nav>
                <Link to='/gerencia/equipamentos/'>Listar</Link>
                <Link to='/gerencia/equipamentos/cadastro'>Cadastrar novo</Link>
            </nav>
        </div>
    )
}


export default BarraAcaoEquipamento