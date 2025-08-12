describe('Testes End-to-End - Quadro Kanban', () => {
  const url = 'https://kanban-dusky-five.vercel.app/';

  beforeEach(() => {
    cy.visit(url);
  });

  it('Não permite mover/reordenar listas', () => {
    cy.get('[data-testid="add-list"]').click();
    cy.get('[data-testid="input-list-name"]').type('Lista 1{enter}');
    cy.get('[data-testid="add-list"]').click();
    cy.get('[data-testid="input-list-name"]').type('Lista 2{enter}');
    cy.contains('Lista 1').should('exist');
    cy.contains('Lista 2').should('exist');
  });

  it('Não permite mover tarefas entre listas', () => {
    cy.get('[data-testid="add-list"]').click();
    cy.get('[data-testid="input-list-name"]').type('Lista A{enter}');
    cy.get('[data-testid="add-list"]').click();
    cy.get('[data-testid="input-list-name"]').type('Lista B{enter}');

    cy.contains('Lista A').parent().within(() => {
      cy.get('[data-testid="add-task"]').click();
      cy.get('[data-testid="input-task-name"]').type('Tarefa 1{enter}');
    });

    cy.contains('Tarefa 1').should('exist');
  });

  it('Mantém tema claro após reload', () => {
    cy.get('[data-testid="theme-toggle"]').click();
    cy.reload();
    cy.get('body').should('have.class', 'light-mode');
  });

  it('Não permite editar nome da lista', () => {
    cy.get('[data-testid="add-list"]').click();
    cy.get('[data-testid="input-list-name"]').type('Lista Teste{enter}');
    cy.contains('Lista Teste').click();
    cy.get('[data-testid="input-list-name-edit"]').should('not.exist');
  });

  it('Não permite editar tarefa', () => {
    cy.get('[data-testid="add-list"]').click();
    cy.get('[data-testid="input-list-name"]').type('Lista Teste{enter}');
    cy.contains('Lista Teste').parent().within(() => {
      cy.get('[data-testid="add-task"]').click();
      cy.get('[data-testid="input-task-name"]').type('Tarefa Teste{enter}');
    });
    cy.contains('Tarefa Teste').click();
    cy.get('[data-testid="input-task-edit"]').should('not.exist');
  });
});
