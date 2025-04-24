import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Formulario from './containers/Formulario'
import ListaContatos from './containers/ListaDeContatos'
import { Secao } from './styles' // importe aqui

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>
          Lista de Contatos
        </h1>

        <Secao>
          <Formulario />
        </Secao>

        <Secao>
          <ListaContatos />
        </Secao>
      </div>
    </Provider>
  )
}

export default App
