import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

export const Titulo = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`

export const Campo = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`

export const Botao = styled.button`
  padding: 10px 20px;
  background-color: ${variaveis.verde};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${variaveis.verdeEscuro};
  }
`

export const Botoes = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`

export const ListaDeContatos = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const ItemContato = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 5px;
`

export const DadosContato = styled.div`
  flex: 1;
  margin-right: 10px;
`

export const Secao = styled.section`
  width: 100%;
  max-width: 600px;
  margin: 0 auto 20px auto;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
  height: 40px;
  min-width: 100px;
  padding: 0 20px;
  align-self: center;

  &:hover {
    background-color: ${variaveis.vermelhoEscuro};
  }
`
