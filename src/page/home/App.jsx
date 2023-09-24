import { useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { AddButton, Container, Produto, DelButton } from './style'


function App() {
  const [produtos, setProduto] = useState([])
  const inputRef = useRef()


  function cliquei(){
    setProduto([{id: uuidv4(), nome: inputRef.current.value}, ...produtos])
    inputRef.current.value = ''
  }

  function deletar(id){
    setProduto(produtos.filter(produto => produto.id !== id))//dentro de produto fica somente os com id diferentes 
  }
  return (
    <>
      <Container>
        <h1>Lista de Tarefas</h1>

        <input type="text" placeholder="Atividade..." ref={inputRef}/>

        <AddButton onClick={cliquei}>Adicionar</AddButton>

        {produtos.map((produto) =>(
          <Produto key={produto.id}>
            <p>{produto.nome}</p>
            <DelButton onClick={() => deletar(produto.id)}>Deletar</DelButton>
          </Produto>
        ))}

      </Container>
    </>
  )
}

export default App
