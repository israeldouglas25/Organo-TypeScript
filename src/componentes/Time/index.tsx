import { IColaborador } from '../../compartilhado/interface/IColaborador';
import { ITime } from '../../compartilhado/interface/ITime';
import Colaborador from '../Colaborador'
import './time.css'
import hexToRgba from 'hex-to-rgba';

interface TimeProps {
    time: ITime
    colaboradores: IColaborador[]
    aoDeletar: (colaborador: string) => void
    mudarCor: (time: string, id: string) => void
    aoFavoritar: (colaborador: string) => void
}

const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }: TimeProps) => {
    return (
        colaboradores.length > 0 && 
        <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.corTime, '0.6') }}>
            <input onChange={evento => mudarCor(evento.target.value, time.idTime)} value={time.corTime} type='color' className='input-cor' />
            <h3 style={{ borderColor: time.corTime }}>{time.nomeTime}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador) => {
                    return (
                        <Colaborador 
                            key={colaborador.idColaborador} 
                            colaborador={colaborador} 
                            corDeFundo={time.corTime} 
                            aoDeletar={aoDeletar} 
                            aoFavoritar={aoFavoritar}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Time