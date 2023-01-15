/* eslint-disable max-len */
const data = [
  // {
  //   id: 0,
  //   name: 'projeto 1',
  //   image: 'https://i0.wp.com/www.evolvedcontact.com.au/articles/wp-content/uploads/2020/04/81-817751_quiz-time-announcement-poster-neon-signboard-vector-quiz.png?fit=1024%2C417&ssl=1',
  //   urlGitHub: '',
  //   urlApication: '',
  //   description: 'teste',
  //   stacks: ['HTML', 'CSS'],
  //   category: 'front',s
  // },
  // {
  //   id: 0,
  //   name: '',
  //   projectName: '',
  //   image: '',
  //   gif: '',
  //   urlGitHub: '',
  //   urlApication: '',
  //   description: '',
  //   stacks: [],
  //   skills: '',
  //   category: '',
  // },
  {
    id: 1,
    name: 'Pixels Art',
    projectName: 'pixels-art',
    image:
      'https://i.pinimg.com/originals/60/96/24/60962403310debc750aefcff61e075a5.jpg',
    gif: 'https://github.com/Abreupamm/project-pixels-art/raw/pamela-abreu-pixels-art/pixel-art.gif',
    urlGitHub: 'https://github.com/Abreupamm/project-pixels-art',
    urlApication: 'https://abreupamm.github.io/project-pixels-art/',
    description:
      'O Pixel-Art é uma página web que contém uma paleta de cores funcional que poderá ser utilizada para criar desenhos em pixels.',
    stacks: ['javascript', 'css', 'html'],
    skills: 'Manipular o DOM, eventos e LocalStorange com javascript',
    category: 'front',
    visible: true,
  },
  {
    id: 2,
    name: 'Lista de Tarefas',
    projectName: 'project-todo-list',
    image:
      'https://st2.depositphotos.com/6628792/9630/v/600/depositphotos_96302366-stock-illustration-to-do-list-theme-flat.jpg',
    gif: 'https://github.com/Abreupamm/project-todo-list/raw/pamela-abreu-todo-list/todo-list.gif',
    urlGitHub: 'https://github.com/Abreupamm/project-todo-list',
    urlApication: 'https://abreupamm.github.io/project-todo-list/',
    description:
      'O Projeto Todo-list é uma página web que contém um campo para inserir uma tarefa, podendo escolher uma categiria. Suas tarefas ficam salvas e você também pode excluir ou marcar como finalizada.',
    stacks: ['javascript', 'css', 'html'],
    skills: 'Manipular o DOM, eventos e LocalStorange com javascript',
    category: 'front',
    visible: true,
  },
  {
    id: 3,
    name: 'Shopping cart',
    projectName: 'shopping-cart',
    image:
      'https://st2.depositphotos.com/4060975/9124/v/600/depositphotos_91245802-stock-illustration-shopping-cart-colored-vector-illustration.jpg',
    gif: 'https://github.com/Abreupamm/project-shopping-cart/raw/main/prototipo.gif',
    urlGitHub: 'https://github.com/Abreupamm/project-shopping-cart',
    urlApication: 'https://abreupamm.github.io/project-shopping-cart/',
    description:
      'Nesse projeto foi feito um carrinho de compras totalmente dinâmico, consumindo dados diretamente de uma API do Mercado Livre!',
    stacks: ['javascript', 'css', 'html'],
    skills:
      'Fazer requisições a uma API, trabalhar com funções assíncronas e implementar testes unitários',
    category: 'front',
  },
  {
    id: 4,
    name: 'Solar System',
    projectName: 'solar-system',
    image:
      'https://static.todamateria.com.br/upload/56/55/5655139e0842d-sistema-solar.jpg?auto_optimize=low',
    gif: '',
    urlGitHub: 'https://github.com/Abreupamm/project-solar-system',
    urlApication: '',
    description:
      'Esse é o meu primeiro projeto utilizando a biblioteca React. Criei uma página para listar todos os planetas do Sistema Solar e algumas das missões espaciais mais conhecidas.',
    stacks: ['react', 'css', 'javascript'],
    skills:
      'Conceitos básicos de React: componentes, props e composição de componentes.',
    category: 'front',
  },
  {
    id: 5,
    name: 'TrybeTunes',
    projectName: 'trybetunes',
    image:
      'https://www.pegadesconto.com.br/wp-content/uploads/2020/09/podcast-cafe-chocolate.jpg',
    gif: 'https://github.com/Abreupamm/project-TrybeTunes/raw/main/trybetunes.gif',
    urlGitHub: 'https://github.com/Abreupamm/project-TrybeTunes',
    urlApication: '',
    description:
      'Nesse projeto utilizei a biblioteca React para criar uma aplicação onde é possível pesquisar e listar álbuns e músicas de várias bandas e artistas. É possível até mesmo ouvir o preview de cada música. Além disso, você também poderá favoritar suas músicas preferidas. Tudo isso foi dividido em várias rotas, cada uma responsável por uma parte da funcionalidade.',
    stacks: ['react', 'css', 'javascript'],
    skills: 'Conceitos de React Router e lifecycle-methods',
    category: 'front',
    visible: true,
  },
  {
    id: 6,
    name: 'Jogo Trivia',
    projectName: 'trivia',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE-P_7XapB5jXY7fSwqceSUNMwdv4gfDVW6zL5hB_kZek_-soF_mQVcPIWBPuNNXz1anc&usqp=CAU',
    gif: 'https://github.com/Abreupamm/jogo-trivia/raw/main/trivia.gif',
    urlGitHub: 'https://github.com/Abreupamm/jogo-trivia',
    urlApication: '',
    description:
      'Esse projeto é um jogo de perguntas e respostas baseado no jogo Trivia, parecido um show do milhão americano, utilizando React e Redux, foi feito em  equipe com a metodologia agile Kanban.',
    stacks: ['react', 'css', 'javascript'],
    skills:
      'Cobertura de testes, React, gerenciamento de estado com Redux e metodologia Kanban.',
    category: 'front',
  },
  {
    id: 7,
    name: 'TrybeWallet',
    projectName: 'trybewallet',
    image:
      'https://img.freepik.com/vetores-premium/carteira-com-dinheiro-e-pilha-de-moedas-de-ouro-vector-icon-ilustracao_138676-359.jpg?w=2000',
    gif: 'https://img.freepik.com/vetores-premium/carteira-com-dinheiro-e-pilha-de-moedas-de-ouro-vector-icon-ilustracao_138676-359.jpg?w=2000',
    urlGitHub: 'https://github.com/Abreupamm/project-react-trybewallet',
    urlApication: '',
    description:
      'Neste projeto desenvolvi uma carteira de controle de gastos, em React.js, com conversor de moedas, ao utilizar essa aplicação um usuário deverá é capaz de adicionar um gasto, visualizar uma tabela com seus gastos e visualizar o total de gastos convertidos para uma moeda de sua escolha.',
    stacks: ['react', 'css', 'javascript'],
    skills:
      'Redux em aplicações React: Criar store, reducers, actions, dispatchers e actions assíncronas',
    category: 'front',
  },
  {
    id: 8,
    name: 'Docker Todo-List',
    projectName: '',
    image: 'https://pbs.twimg.com/media/DEavFDzVYAAbxPV.jpg:small',
    gif: '',
    urlGitHub: 'https://github.com/Abreupamm/project-docker-todo-list',
    urlApication: '',
    description:
      'O desafio desse projeto foi “conteinerizar” as aplicações de frontend, backend e testes, criar uma conexão entre elas e orquestrar seu funcionamento. Esse foi o meu primeiro projeto usando Docker 🐋',
    stacks: ['docker'],
    skills: 'Manipular imagens e orquestrar containers com docker',
    category: 'back',
  },
  {
    id: 9,
    name: 'All For One',
    projectName: '',
    image:
      'https://www.jogospuzzle.com/imatjes/golfinhos-por-do-sol_4fe44ce00b9d2-p.jpg',
    gif: '',
    urlGitHub: 'https://github.com/Abreupamm/project-mysql-all-for-one',
    urlApication: '',
    description:
      'Esse é meu primeiro projeto utilizando o banco de dados mySQL, o desafio foi criar soluções que envolvem os principais comandos e todos os conceitos iniciais do SQL.',
    stacks: ['mysql'],
    skills:
      'Desafios de SELECT e criação de dados, filtragem de dados e manipulação de tabelas.',
    category: 'back',
  },
  {
    id: 10,
    name: 'Talker Manager',
    projectName: '',
    image:
      'https://media.istockphoto.com/id/578574238/vector/business-seminar-speaker-doing-presentation-and-professional-training.jpg?s=612x612&w=0&k=20&c=dNC83HBTi2shXlTEz5Gql9OjLz4rYtt0iExQbSQstuQ=',
    gif: '',
    urlGitHub: 'https://github.com/Abreupamm/project-talker-manager',
    urlApication: '',
    description:
      'Desenvolvi esse projeto utilizando Node.js, express e o módulo fs. O Talker Manager é uma aplicação de palestrantes (talkers), na qual é possível cadastrar, listar, pesquisar, editar e excluir palestrantes.',
    stacks: ['node', 'docker', 'javascript', 'express', 'restApi'],
    skills:
      'Desenvolver uma API de um CRUD (Create, Read, Update e Delete) de palestrantes (talkers) e utilizar módulo fs.',
    category: 'back',
  },
  {
    id: 11,
    name: 'MongoDB Commerce',
    projectName: '',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8qjYQfVCGh2fR7KAZLQ-dN--UyWCzWqO-Ms0jgDp9TWDqhqmYS1T0uZqfH2fhKQ9Tk0s&usqp=CAU',
    gif: '',
    urlGitHub: 'https://github.com/Abreupamm/mongodb-commerce',
    urlApication: '',
    description:
      'Este projeto foi desenvolvido utilizando o banco de dados MongoDB, a ideia era trabalhar com alguns dados do cardápio do McDonalds: ingredientes, valores nutricionais e dados fictícios de vendas. O desafio proposto era alterar documentos utilizando métodos de update com operadores simples, complexos e modificadores.',
    stacks: ['mongodb', 'docker'],
    skills:
      'Subir o banco utilizando docker e construir queries para fazer buscas, alterações, e deletar informações do banco de dados.',
    category: 'back',
    visible: true,
  },
];

export default data;
