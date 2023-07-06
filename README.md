# Sistema de Login com useContext

## Pacotes baixados:
    npm i react-router-dom
    npm i axios


## Para validar o acesso
1. Como eu sei que o Usuario está logado?
    O Navegador precisa saber que tem um usuario logado

2. Se tiver um Usuario logado..
    Se tiver, você precisa validar este usuário.
    Após validar o usuário, você libera o acesso dele.


## Para Logar
1. Recebe os dados de login.

2. Envia uma requisição para o backend validar esses dados no banco de dados.

3. Estando correto, salva-se o TOKEN/alguma referencia ao usuario no browser, para nas proximas vezes ter o acesso.

4. Se o usuario digitar os dados errados, avisa para ele o erro.


## Para Deslogar
1. Apaga o TOKEN/alguma referência do usuario no browser.

2. Atualiza a página.
