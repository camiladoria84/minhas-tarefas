import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { remover } from '../../store/reducers/contatos'
import {
  Botao,
  Botoes,
  ListaDeContatos,
  ItemContato,
  DadosContato,
  Secao
} from '../../styles'
import { BotaoCancelarRemover } from '../../components/Contato/styles'
import Formulario from '../Formulario'
import { useState } from 'react'

const ListaContatos: React.FC = () => {
  const dispatch = useDispatch()
  const contatos = useSelector((state: RootState) => state.contatos.contatos)

  const [contatoEditando, setContatoEditando] = useState<number | null>(null)

  const handleRemoverContato = (id: number) => {
    dispatch(remover(id))
  }

  const handleEditarContato = (id: number) => {
    setContatoEditando(id)
  }

  const fecharFormulario = () => {
    setContatoEditando(null)
  }

  return (
    <Secao>
      <ListaDeContatos>
        {contatos.map((contato) => (
          <ItemContato key={contato.id}>
            <DadosContato>
              {contato.nome} - {contato.email} - {contato.telefone}
            </DadosContato>
            <Botoes>
              <Botao onClick={() => handleEditarContato(contato.id)}>
                Editar
              </Botao>
              <BotaoCancelarRemover
                onClick={() => handleRemoverContato(contato.id)}
              >
                Remover
              </BotaoCancelarRemover>
            </Botoes>
          </ItemContato>
        ))}
      </ListaDeContatos>

      {contatoEditando !== null && (
        <Formulario id={contatoEditando} aoSalvar={fecharFormulario} />
      )}
    </Secao>
  )
}

export default ListaContatos
