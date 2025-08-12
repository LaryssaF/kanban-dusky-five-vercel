# Documentação de Bugs e Falhas – Quadro Kanban

## Introdução

Este documento reúne os principais bugs, problemas de usabilidade e inconsistências encontradas durante os testes realizados no quadro Kanban da aplicação [https://kanban-dusky-five.vercel.app/](https://kanban-dusky-five.vercel.app/). A finalidade é detalhar os problemas para que a equipe de desenvolvimento possa analisá-los, reproduzi-los e corrigi-los, garantindo a melhoria contínua da qualidade do sistema.

---

## 1. Não é possível mover/reordenar listas (colunas)

**Descrição:**  
O recurso de arrastar e soltar para reordenar as listas no quadro Kanban não funciona. Ao tentar arrastar uma lista, ela permanece fixa na posição original.

**Impacto:**  
- Limita a personalização do fluxo de trabalho pelo usuário.  
- Reduz a flexibilidade do quadro, especialmente em equipes que mudam frequentemente as etapas do processo.

**Passos para reproduzir:**  
1. Criar pelo menos duas listas no quadro.  
2. Tentar arrastar uma lista para uma nova posição.  
3. Observar que a lista não se move ou volta ao local inicial.

**Comportamento esperado:**  
O sistema deve permitir que o usuário arraste e reorganize as listas livremente, refletindo a nova ordem visual e no estado da aplicação.

**Possíveis causas técnicas:**  
- Falta de implementação ou configuração incorreta da função drag-and-drop para listas.  
- Estado da aplicação não sendo atualizado após a ação.  
- Problemas na biblioteca de gerenciamento de arraste.

---

## 2. Não é possível mover tarefas entre listas

**Descrição:**  
Ao tentar arrastar uma tarefa de uma lista para outra, a ação não é realizada e a tarefa retorna à posição inicial.

**Impacto:**  
- Impede o usuário de gerenciar o fluxo das tarefas corretamente.  
- Diminui a produtividade e usabilidade do quadro Kanban.

**Passos para reproduzir:**  
1. Criar duas ou mais listas.  
2. Criar uma tarefa em uma das listas.  
3. Tentar arrastar essa tarefa para outra lista.  
4. Notar que a tarefa não muda de lista.

**Comportamento esperado:**  
As tarefas devem ser movidas livremente entre listas e o estado atualizado para refletir a nova posição.

**Possíveis causas técnicas:**  
- Lógica de drag-and-drop para tarefas não implementada ou com erros.  
- Falha ao atualizar o estado ou banco de dados após o drop.  
- Configuração errada da biblioteca que gerencia o drag-and-drop.

---

## 3. Tema claro não é mantido após atualização da página

**Descrição:**  
Quando o usuário seleciona o modo claro no tema e recarrega a página, a preferência não é mantida e o tema volta para o modo escuro.

**Impacto:**  
- Gera desconforto para usuários que preferem o tema claro.  
- Quebra a expectativa de persistência das preferências do usuário.

**Passos para reproduzir:**  
1. Ativar o modo claro no botão de alternância.  
2. Atualizar a página (recarregar).  
3. Verificar que o tema volta para o modo escuro.

**Comportamento esperado:**  
A preferência pelo tema claro deve ser salva (por exemplo, em localStorage) e restaurada após recarregar a página.

**Possíveis causas técnicas:**  
- Falta de persistência das preferências do tema.  
- Sincronização incorreta no carregamento da página.

---

## 4. Não permite edição do nome da lista após criada

**Descrição:**  
Após criar uma lista, o usuário não consegue editar o nome da lista para corrigir ou modificar.

**Impacto:**  
- Dificulta ajustes necessários na organização do quadro.  
- Reduz a flexibilidade para corrigir erros de digitação ou atualizar nomes.

**Passos para reproduzir:**  
1. Criar uma lista com nome qualquer.  
2. Tentar editar o nome da lista.  
3. Observar que a edição não é permitida.

**Comportamento esperado:**  
O sistema deve permitir editar o nome da lista sempre que necessário.

---

## 5. Não permite edição da tarefa após criada

**Descrição:**  
Assim como na lista, as tarefas não podem ser editadas após a criação.

**Impacto:**  
- Prejudica o usuário que precisa corrigir ou atualizar informações.  
- Limita o gerenciamento efetivo das tarefas.

**Passos para reproduzir:**  
1. Criar uma tarefa em uma lista.  
2. Tentar editar o conteúdo da tarefa.  
3. Notar que não é possível editar.

**Comportamento esperado:**  
O sistema deve permitir edição das tarefas a qualquer momento.

---

## 6. Texto da tarefa “flutua” fora do box ao inserir muitos caracteres

**Descrição:**  
Ao inserir um texto muito longo na descrição da tarefa, o conteúdo ultrapassa os limites visuais do campo, causando um problema de layout (overflow).

**Impacto:**  
- Quebra a experiência visual e dificulta a leitura.  
- Pode confundir ou frustrar o usuário.

**Passos para reproduzir:**  
1. Criar uma tarefa.  
2. Inserir um texto com muitos caracteres no campo de descrição.  
3. Observar que o texto “escapa” do limite do box da tarefa.

**Comportamento esperado:**  
O campo de texto deve conter um scroll interno ou limitar a expansão para manter o layout.

---

## 7. Tag criada sem cor definida (apenas letra avulsa)

**Descrição:**  
O sistema permite a criação de tags sem uma cor definida, ficando somente com uma letra isolada, o que gera inconsistência visual e confusão para o usuário.

**Impacto:**  
- Interface inconsistente e confusa.  
- Dificulta a identificação visual das tags.

**Passos para reproduzir:**  
1. Criar uma lista e uma tarefa.  
2. Criar uma tag com apenas uma letra, sem cor.  
3. Observar que a tag aparece sem cor.

**Comportamento esperado:**  
O sistema deve exigir que as tags possuam uma cor para manter a consistência visual.

**Possíveis causas técnicas:**  
- Falta de validação na criação das tags.  
- Ausência de configuração padrão para cor das tags.

---

# Considerações Finais

Este documento visa ajudar a equipe técnica a entender e corrigir os problemas encontrados, promovendo uma melhor experiência do usuário e qualidade do software. Ele reflete uma análise cuidadosa e detalhada, fundamental para a função de testador júnior.
