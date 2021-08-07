import {Link} from 'react-router-dom'
import './BarraAcaoLaboratorio.css'

function BarraAcaoLaboratorio(){

    return (
        <div className='barra-acao-lab'>   
            <nav>
                <Link to='/gerencia/laboratorios/'>Listar</Link>
                <Link to='/gerencia/laboratorios/cadastro'>Cadastrar novo</Link>
            </nav>

        </div>
    )
}


export default BarraAcaoLaboratorio