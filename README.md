Kanary Lite – Gerenciador de Tarefas

Desafio Técnico Front-End React (Júnior)

Introdução

Este projeto foi desenvolvido como parte do Desafio Técnico Front-End React (Júnior), com o objetivo de demonstrar domínio de conceitos fundamentais do React, organização de código e persistência de dados utilizando LocalStorage.

A aplicação consiste em uma Single Page Application (SPA) para gerenciamento de tarefas diárias.

Funcionalidades Implementadas (MVP)

✅ Adicionar tarefa

✅ Listar tarefas

✅ Marcar tarefa como concluída

✅ Excluir tarefa

✅ Persistência de dados no LocalStorage

✅ Contador de tarefas concluídas

Tecnologias Utilizadas

JavaScript (ES6+)

React.js

Vite

CSS puro

LocalStorage (API do navegador)

Conceitos Técnicos Aplicados
useState

Gerenciamento de estado da lista e do input controlado.

Inicialização com função para evitar leitura repetida do LocalStorage:

```const [lista, setLista] = useState(() => {
  const listaSalva = localStorage.getItem('tarefas')
  return listaSalva ? JSON.parse(listaSalva) : []
})
```

useEffect

Responsável por salvar automaticamente as tarefas no navegador sempre que o estado é alterado:

```useEffect(() => {
  localStorage.setItem('tarefas', JSON.stringify(lista))
}, [lista])```

Atualização Imutável de Estado

O projeto evita mutação direta do array (push), criando sempre uma nova referência:

```
setLista([...lista, { texto: textoDigitado, concluida: false }])
```

Contador de Tarefas

```
{lista.filter((item) => item.concluida).length} de {lista.length} tarefas concluídas.
```

Estrutura do Projeto
/src
  App.jsx
  App.css
  main.jsx

Toda a lógica está centralizada no componente principal App, organizada em:

Estados

Hooks

Funções de manipulação (adicionar, marcar, excluir)

Renderização com .map()

Boas Práticas Aplicadas

Uso correto de useState e useEffect

Estado imutável (sem mutação direta)

Input controlado

Uso de key na renderização da lista

Uso de htmlFor para acessibilidade

Código comentado demonstrando entendimento

Organização clara e identação correta


```
⚙️ Como Rodar o Projeto
# Clonar o repositório
git clone https://github.com/RickCunha-dev/kanary-lite.git

# Entrar na pasta
cd kanary-lite

# Instalar dependências
npm install

# Rodar o projeto
npm run dev
```

A aplicação estará disponível em:

http://localhost:5173
📅 Prazo

Projeto desenvolvido dentro do prazo estipulado de 4 dias corridos.

👨‍💻 Autor

Ricardo Wemerson
GitHub: https://github.com/RickCunha-dev