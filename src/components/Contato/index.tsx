import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { remover } from '../../store/reducers/contatos'

const ListaContatos = () => {
  const dispatch = useDispatch()
  const contatos = useSelector((state: RootState) => state.contatos.contatos)

  return (
    <div>
      {contatos.map((contato) => (
        <div key={contato.id}>
          <p>{contato.nome}</p>
          <p>{contato.email}</p>
          <p>{contato.telefone}</p>
          <button onClick={() => dispatch(remover(contato.id))}>Remover</button>
        </div>
      ))}
    </div>
  )
}

export default ListaContatos
