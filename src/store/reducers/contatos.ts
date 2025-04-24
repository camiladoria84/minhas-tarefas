import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

interface ContatosState {
  contatos: Contato[]
}

const initialState: ContatosState = {
  contatos: []
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Contato>) => {
      state.contatos.push(action.payload)
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const index = state.contatos.findIndex(
        (contato) => contato.id === action.payload.id
      )
      if (index !== -1) {
        state.contatos[index] = action.payload
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      state.contatos = state.contatos.filter(
        (contato) => contato.id !== action.payload
      )
    }
  }
})

export const { adicionar, editar, remover } = contatosSlice.actions
export default contatosSlice.reducer
