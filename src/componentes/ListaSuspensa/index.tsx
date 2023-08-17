
import './lista-suspensa.css'

interface ListaSuspensaProps {
    aoAlterado: (valor: string) => void
    label: string
    obrigatorio: boolean
    valor: string
    times: string[]
}

const ListaSuspensa = ({ label, times, valor, aoAlterado, obrigatorio = false }: ListaSuspensaProps) => {
    return (
        <div className="lista-suspensa">
            <label>{label}</label>
            <select required={obrigatorio} value={valor} onChange={evento => aoAlterado(evento.target.value)}>
                <option />
                {times.map(time => <option key={time}>{time}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa