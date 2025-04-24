class Contato {
  id: number
  nome: string
  email: string
  telefone: string

  constructor(nome: string, email: string, telefone: string, id: number) {
    this.id = id
    this.nome = nome
    this.email = email
    this.telefone = telefone
  }
}

export default Contato
