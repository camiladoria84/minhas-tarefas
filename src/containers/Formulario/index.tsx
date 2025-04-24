import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adicionar, editar } from '../../store/reducers/contatos'
import { RootState } from '../../store'

import { Form, Espaco } from './styles'
import { Campo, Botao, Secao } from '../../styles'
import { BotaoCancelarRemover } from '../../components/Contato/styles'

interface FormularioProps {
  id?: number
  aoSalvar?: () => void
}

const Formulario: React.FC<FormularioProps> = ({ id, aoSalvar }) => {
  const dispatch = useDispatch()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const contato = useSelector((state: RootState) =>
    state.contatos.contatos.find((contato) => contato.id === id)
  )

  useEffect(() => {
    if (contato) {
      setNome(contato.nome)
      setEmail(contato.email)
      setTelefone(contato.telefone)
    }
  }, [contato])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (id) {
      dispatch(editar({ id, nome, email, telefone }))
      if (aoSalvar) aoSalvar()
    } else {
      dispatch(
        adicionar({
          id: Date.now(),
          nome,
          email,
          telefone
        })
      )
      setNome('')
      setEmail('')
      setTelefone('')
    }
  }

  return (
    <Secao>
      <Form onSubmit={handleSubmit}>
        <Espaco>
          Nome Completo:
          <Campo
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </Espaco>
        <Espaco>
          E-mail:
          <Campo
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Espaco>
        <Espaco>
          Telefone:
          <Campo
            type="text"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
        </Espaco>
        <Botao type="submit">{id ? 'Editar' : 'Adicionar'}</Botao>

        {id && aoSalvar && (
          <BotaoCancelarRemover type="button" onClick={aoSalvar}>
            Cancelar edição
          </BotaoCancelarRemover>
        )}
      </Form>
    </Secao>
  )
}

export default Formulario
