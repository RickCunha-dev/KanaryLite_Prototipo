Kanary Lite – Gerenciador de Tarefas
Desafio Técnico Front-End React (Júnior)

Introdução
Este projeto foi desenvolvido como parte de um desafio técnico para demonstrar domínio em conceitos fundamentais do React, organização de código e persistência de dados utilizando a Web Storage API. A aplicação é uma SPA (Single Page Application) focada na produtividade e simplicidade.

Funcionalidades (MVP)
Adicionar tarefa: Criação dinâmica de novos itens.

Listar tarefas: Exibição organizada dos dados em tela.

Marcar como concluída: Alternância de status com feedback visual.

Excluir tarefa: Remoção de itens específicos da lista.

Persistência: Salvamento automático no LocalStorage.

Contador: Indicador em tempo real do progresso (ex: "2 de 5 concluídas").

Tecnologias Utilizadas
React.js (com Vite para um ambiente mais rápido)

JavaScript (ES6+)

CSS3 (Estilização pura e responsiva)

LocalStorage (Persistência no lado do cliente)

Conceitos Técnicos Aplicados
useState (Lazy Initialization):
Utilizado para gerenciar o estado da lista. A inicialização é feita via função anônima para garantir que o LocalStorage seja lido apenas uma vez durante o carregamento inicial, otimizando a performance:

```
const [lista, setLista] = useState(() => {
  const listaSalva = localStorage.getItem('tarefas');
  return listaSalva ? JSON.parse(listaSalva) : [];
});
```

useEffect (Sincronização):
Responsável por "escutar" as mudanças no estado da lista e persistir os dados automaticamente:

```
useEffect(() => {
  localStorage.setItem('tarefas', JSON.stringify(lista));
}, [lista]);
```

Atualização Imutável:
O projeto respeita a imutabilidade do React, utilizando o Spread Operator para criar novas referências de memória em vez de modificar o array original:

```
setLista([...lista, { texto: textoDigitado, concluida: false }]);
```
Lógica de Derivação de Estado:
O contador de tarefas não precisa de um novo useState, ele é derivado diretamente da lista original, mantendo a "fonte única da verdade".

```
Estrutura do Projeto
Plaintext
/src
 ├── App.jsx   # Lógica principal, Hooks e Gerenciamento de Estado
 ├── App.css   # Estilização Neon e Responsividade
 └── main.jsx  # Ponto de entrada da aplicação
```

Boas Práticas
Acessibilidade: Uso de htmlFor e labels para leitores de tela.

Performance: Uso de key únicas na renderização de listas com .map().

Código Limpo: Comentários explicativos e indentação (corrigi aqui para você, no original estava "identação") seguindo padrões de mercado.

🏃 Como Rodar o Projeto
Clone o repositório: git clone https://github.com/RickCunha-dev/kanary-lite.git

Entre na pasta: cd kanary-lite

Instale as dependências: npm install

Inicie o servidor: npm run dev

Acesse: http://localhost:5173

