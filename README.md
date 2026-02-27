Kanary Lite – Gerenciador de Tarefas

Desafio Técnico Front-End React (Júnior)

📌 1. Introdução

Este projeto foi desenvolvido como parte do Desafio Técnico Front-End React (Júnior), cujo objetivo é avaliar:

Capacidade de aprendizado

Organização de código

Domínio de conceitos fundamentais do React

Implementação de persistência com LocalStorage

A aplicação consiste em uma Single Page Application (SPA) para gerenciamento de tarefas diárias.

🎯 2. Escopo do Projeto

A aplicação permite que o usuário:

Adicione novas tarefas

Visualize tarefas cadastradas

Marque tarefas como concluídas

Exclua tarefas

Mantenha os dados salvos mesmo após atualizar a página (F5)

O foco do projeto está na funcionalidade e organização da lógica.

🚀 3. Tecnologias Utilizadas

JavaScript (ES6+)

React.js

Vite

CSS puro

LocalStorage (API do navegador)

🧠 4. Conceitos Técnicos Aplicados
🔹 useState

Utilizado para:

Gerenciar a lista de tarefas

Controlar o valor do input

A lista é inicializada com uma função para evitar leituras repetidas do LocalStorage:

const [lista, setLista] = useState(() => {
  const listaSalva = localStorage.getItem('tarefas')
  return listaSalva ? JSON.parse(listaSalva) : []
})
🔹 useEffect

Responsável por salvar automaticamente as tarefas no navegador sempre que houver alteração no estado:

useEffect(() => {
  localStorage.setItem('tarefas', JSON.stringify(lista))
}, [lista])
🔹 Atualização Imutável de Estado

O projeto evita mutação direta do estado (push()), utilizando o spread operator:

setLista([...lista, { texto: textoDigitado, concluida: false }])
🧩 5. Funcionalidades Implementadas (MVP)

✔ Adicionar Tarefa
✔ Listar Tarefas
✔ Marcar como Concluída (checkbox + texto riscado)
✔ Excluir Tarefa
✔ Persistência com LocalStorage

Contador dinâmico de tarefas concluídas:

{lista.filter((item) => item.concluida).length} de {lista.length} tarefas concluídas.
📂 6. Estrutura Atual do Projeto
/src
  App.jsx
  App.css
  main.jsx

Toda a lógica está estruturada dentro do componente principal App, organizada em:

Estados

Hooks

Funções de manipulação (adicionar, marcar, excluir)

Renderização da lista com .map()

🧼 7. Organização e Boas Práticas

Código comentado para demonstrar entendimento dos conceitos

Separação clara entre lógica e renderização

Uso de key na renderização da lista

Uso de htmlFor para melhorar acessibilidade

Código identado e limpo

Sem mutação direta de estado

Uso correto de input controlado

⚙️ 8. Como Rodar o Projeto
# Clonar o repositório
git clone https://github.com/RickCunha-dev/kanary-lite.git

# Entrar na pasta
cd kanary-lite

# Instalar dependências
npm install

# Rodar o projeto
npm run dev

A aplicação estará disponível em:

http://localhost:5173
📅 9. Prazo

Projeto desenvolvido dentro do prazo estipulado de 4 dias corridos.

👨‍💻 Autor

Ricardo Wemerson
GitHub: https://github.com/RickCunha-dev