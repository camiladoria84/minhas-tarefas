import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import variaveis from './variaveis'

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: #f9f9f9;
    padding: 20px;
  }
`

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
  min-width: 100px;
  height: 40px;
  padding: 0 20px;
  background-color: ${variaveis.verde};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  align-self: center;

  &:hover {
    background-color: ${variaveis.verdeEscuro};
  }
`

export const Botoes = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
`

export const ListaDeContatos = styled.ul`
  list-style: none;
  padding: 0;
`

export const ItemContato = styled.li`
  display: flex;
  justify-content: space-between;
  align-itens: baseline;
  flex-direction: row;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 5px;
`

export const DadosContato = styled.div`
  margin-top: 10px;
`

export const Secao = styled.section`
  width: 100%;
  max-width: 600px;
  margin: 0 auto 20px auto; /* centraliza + espaço inferior */
`
