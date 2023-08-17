import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import './colaborador.css'
import { IColaborador } from '../../compartilhado/interface/IColaborador'

interface ColaboradorProps {
    colaborador: IColaborador
    corDeFundo: string
    aoDeletar: (colaborador: string) => void
    aoFavoritar: (colaborador: string) => void
}

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }: ColaboradorProps) => {
    function favoritar() {
        aoFavoritar(colaborador.idColaborador)
    }

    return (
        <div className="colaborador">
            <AiFillCloseCircle
                size={25}
                className='deletar'
                onClick={() => aoDeletar(colaborador.idColaborador)}
            />
            <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
                <img src={colaborador.imagem} alt={colaborador.nome} />
            </div>
            <div className="rodape">
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className='favoritar'>
                    {colaborador.favorito
                        ? <AiFillHeart size={25} onClick={favoritar} color='#ff0000' />
                        : <AiOutlineHeart size={25} onClick={favoritar} />
                    }
                </div>
            </div>
        </div>)
}

export default Colaborador