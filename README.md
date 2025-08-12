# kanban-dusky-five-vercel
Documentação detalhada de bugs, problemas de usabilidade e inconsistências no quadro Kanban, com passos para reprodução, impactos e sugestões técnicas. Trabalho feito para demonstrar habilidades em testes e comunicação técnica na vaga de tester júnior.

# Testes End-to-End para Quadro Kanban

Este repositório contém testes automatizados end-to-end utilizando o framework Cypress para validar os principais bugs e funcionalidades do quadro Kanban disponível em:

https://kanban-dusky-five.vercel.app/

## Objetivo

Garantir que os fluxos essenciais da aplicação funcionem conforme esperado, detectando problemas conhecidos como:

- Reordenação de listas (drag-and-drop)  
- Movimentação de tarefas entre listas  
- Persistência do tema selecionado (modo claro/escuro)  
- Edição de nomes de listas e tarefas  
- Layout ao inserir textos longos  
- Validação de criação de tags

## Estrutura

- `cypress/e2e/kanban_bugs.cy.js` — arquivo com os testes automatizados em Cypress

## Como usar

Este repositório é focado na documentação dos testes automatizados e pode ser utilizado para estudo, manutenção e extensão dos testes da aplicação.

---
