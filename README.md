# treinamentoHTML

## Nunca mexi nesse projeto, o que faço?
- Me manda um Slack - ***lucas.falcao*** com seu github username para eu por como contribuidor 
- Clona esse repositorio em algum lugar seguro e que não va impactar em outros projetos da sua máquina 
- Dentro desse projeto, crie uma Folder com o nome do seu projeto pessoal e seu nome como referência (ex: cuccina_lucas)
- **git status**
- Dentro dessa pasta, comece a brincar, ponha seu arquivo HTML, CSS, suas pastas com assets e o que mais vier a mente
- Adiciona tudo: *git add . / git add -u / git add <file name> (recomendado)*
- **git status**
- Commita suas mudanças: *git commit -m "decrição"* 
- **git status**
- Fazer o PR: *gpr submit -u lucasperj*
  
  **TOP** pessoal? Percebam que usei muito o git status! Porque? Pois *s e m p r e* devemos checar como está o andamento das mudanças que estamos tentando executar, tornem isso uma boa prática! 
  

  ## Minha pasta já ta lá! Comecei um novo lindo dia, e agora? 

  Ao chegar e começar a brincar sempre lembrem, na master, **git pull**, para puxar todas as atualizações que tiveram antes de você começar a fazer alterações, após isso, mover para uma branch, então aqui temos dois casos: 
  
  ## Não tenho branch
  - Criar uma branch nova e mudar para ela : *git checkout -b "branch_name"*
  - Após fazer todas suas alterações de código e etc, devemos subir essa branch
  - Adiciona tudo: *git add . / git add -u / git add <file name> (recomendado)*
  - **git status**
  - Commita suas mudanças: *git commit -m "decrição"* 
  - **git status**
  - Fazer o PR: *gpr submit -u lucasperj* 

Porquê eu to fazendo o gpr de novo?? Pois agora você quer subir a sua branch, e não mais o projeto direto na Main.
Lembrando que essas alterações enviadas na branch não vão aparecer diretamente no projeto principal se você der um git pull ou atualizar a página do Git, vai ser enviada uma solicitação de alteração, que após revisada e aceita, pode haver o merge com o projeto principal.

  ## Já tenho branch
  - Mova para sua branch já existente : *git checkout <branch_name>*
  - Após fazer todas suas alterações de código e etc, devemos atualizar essa branch
  - Adiciona tudo: *git add . / git add -u / git add <file name> (recomendado)*
  - **git status**
  - Commita suas mudanças: *git commit -m "decrição"* 
  - **git status**
  - Atualizar sua branch : *git push <branch_name>*
