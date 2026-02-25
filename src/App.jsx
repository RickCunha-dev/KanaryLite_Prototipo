
// useState é um hook do React. Ele permite criar 'variáveis que lembram o valor mesmo quando o compenonente é atualizado.
import { useState, useEffect } from 'react';
// Importar o CSS do seu componente para estilizar a página.
import './App.css';


/*
Esse é o componente React.
Tudo que estiver dentro dessa função será rederizado na tela.
Cada vez que eu alterar o estado (useState), essa função é executada novamente para atualizar a tela.
*/
function App() {
  const [lista, setLista] = useState(() => {
    const listaSalva = localStorage.getItem('tarefas')
    // if (listaSalva) {
    //   return JSON.parse(listaSalva)
    // } else {
    //   return []
    // }

    // Parece um if compreeshion
    return listaSalva ? JSON.parse(listaSalva) : []
  })
  const [textoDigitado, setTextoDigitado] = useState('')

  /* lista -> guardar todas as tarefas adicionadas.
  setLista -> função para atualizar a lista. Nunca devo alterar 'lista' diretamente.
    Ex: setLista([..lista, novaTarefa] = useState('')); //input
  textoDigitado -> guarda o que o usuário está escrevendo no input.
  setTextoDigitado -> atualiza o texto do input.

  Por que não posso só fazer lista.push()?
    * React só atualiza a tela se criar um novo array/objeto
    * Se usar push, muda o array original, mas o React não percebe a mudança.
    * 
  */



  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(lista))
  }, [lista])

  // Função para adicionar tarefa
  function adicionarItemLista() {
    /*Aqui estamos verificando se o input está vazio e pedimos para ignorar espaços com o trim()*/
    if (textoDigitado.trim() !== '') {
      /*Chamamos a função setLista que irá atualizar a lista
      ... lista é basicamente uma cópia da lista original
      {texto: textoDigitado, concluida: False} é basicamente um objeto que irá pegar o texto digitado pelo usuario:
      por padrão, será iniciado como false, quando mudar para True ativamos o riscamento de linha. */
      setLista([...lista, {texto: textoDigitado, concluida: false}])
      setTextoDigitado('') // -> Limpar o terminal
    }
  
    /*
    textoDigitado.trim() !== '': -> evitar adicionar tarefas vazias.
    setLista([...lista, {texto: textoDigitado, concluida: false}]):
      * ...lista, copia todas as tarefas existentes.
      * {texto: textoDigitado, concluida: False} = adiciona a nova tarefa como `objeto`.
      * Guardar como objeto para permitir ter múltiplos dados por tarefa (texto + status concluída.)
    setTextoDigitado('') -> faz com que o campo de input seja limpo depois de adicionar a tarefa.
    */
  }

  // Função para marcar ou desmarcar tarefa
  function marcarTarefa(index) {
    const novaLista = [...lista]
    novaLista[index].concluida = !novaLista[index].concluida;
    setLista(novaLista)

    /*
    const novaLista = [...lista]: cria uma cópia da lista.
      * Isso é necessário para o React perceber a mudança e atualizar a lista.
    novaLista[index].concluida = !novaLista[index].concluida -> inverter o status da tarefa (concluída ou não.)
    setLista(novaLista): atualiza o estado da lista e redesenha a tela.
    */ 
  }

  function excluirTarefa(index) {
    const tarefaExluida = [...lista].filter((item, i) => i !== index)
    setLista(tarefaExluida)
  }


  return (
    /*
    JSX = HTML dentro do JS
    Tudo o que eu retornar dentro do return vai aparecer na tela.
    className no React = class no HTML.
    */
      <div className="container">
        <div className="main">
          <h1 id="titulo">Kanary Lite</h1>
          <h4 id="subtitulo">Minha lista de Tarefas</h4>

          <input 
            type="text" 
            id="usuario"
            placeholder='O que preciso fazer?' 
            value={textoDigitado}
            onChange={(e) => setTextoDigitado(e.target.value)}
          />
          <button id='adicionar' onClick={adicionarItemLista}>+</button>

          {/*value={textoDigitado}: deixa o input controlado pelo React 
          * O valor do input sempre vem do estado textoDigitado
          onChange={(e) => setTextoDigitado(e.target.value)}:
          * Atualiza o estado textoDigitado cada vez que o usuário digita algo.
          <button onClick={adicionarNaLista}>+</button>: chama a função para adicionar tarefa.
          */}

          </div>
    
            
        <div id="lista">
          <ul className="lista-tarefas">
            {lista.map((item, index) => (
              <li key={index}>
                <input 
                type='checkbox'
                id={`tarefa-${index}`}
                checked={item.concluida}
                onChange={() => marcarTarefa(index)}
                />
                {/* isso faz o clique no texto marcar o checkbox */}
                <label htmlFor={`tarefa-${index}`}
                style={{textDecoration: item.concluida ? 'line-through': 'none'}}
                >
                  {item.texto}
                </label>
                <button onClick={() => excluirTarefa(index)} id='excluir'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* lista.map(...) = percorre todas as tarefas.
          <li key={index}> -> key é obrigatório no React para identificar cada item.
          CheckBox:
            * checked={item.concluida} -> o checkbox reflete se a tarefa foi concluída.
            * onChange={() => marcarTarefa(index)} -> muda o status quando clicado
          <label> com textDecoration: line-through -> risco no texto quando for cocnluída.
        */}

        {/* Aqui será um contador de tarefas */}
        <p>
          {lista.filter((item) => item.concluida).length} de {lista.length} tarefas concluídas.
        </p>
      </div>
      
  );
}

export default App;