# 🎮 Jogo da Forca - Expansível

Bem-vindo ao **Jogo da Forca**, uma versão interativa e expansível desse clássico jogo, desenvolvido utilizando HTML, CSS e JavaScript! Este projeto é perfeito para quem quer testar suas habilidades em desenvolvimento web e também para aqueles que amam um bom desafio de adivinhação de palavras.

![Captura de tela 2024-08-17 183544](https://github.com/user-attachments/assets/ebb7bc18-4f06-4f28-948a-87e19db1028b)


## 🚀 Funcionalidades

- **Temas Personalizáveis**: Escolha entre diferentes temas (Tech, Comidas, Cores) para adivinhar palavras relacionadas ao tema selecionado.
- **Expansível**: Adicione novos temas e palavras de forma simples, sem precisar mexer no código principal. Tudo é gerenciado através de um arquivo JSON externo.
- **Interface Atraente**: Um layout limpo e estilizado para uma experiência de jogo agradável.
- **Feedback Imediato**: A cada letra digitada, você recebe feedback visual sobre seus acertos e erros.

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura básica da aplicação.
- **CSS3**: Estilização e layout.
- **JavaScript**: Lógica do jogo e manipulação do DOM.
- **JSON**: Armazenamento de temas e palavras de forma expansível.

## 📂 Estrutura do Projeto

```plaintext
├── index.html        # Estrutura da interface do jogo
├── styles.css        # Estilos do jogo
├── script.js         # Lógica do jogo
└── palavras.json     # Arquivo JSON contendo os temas e palavras
```

## 🕹️ Como Jogar

1. **Escolha um Tema**: Ao abrir o jogo, selecione um dos temas disponíveis (Tech, Comidas, Cores) no menu suspenso.
2. **Inicie o Jogo**: Clique em "Iniciar Jogo" para começar a adivinhar as letras da palavra secreta.
3. **Digite uma Letra**: Use o campo de entrada para tentar adivinhar as letras da palavra. Você tem 6 tentativas!
4. **Feedback Visual**: Observe o feedback visual que indica quantas tentativas restam e se a letra digitada está correta ou não.
5. **Reinicie e Tente Novamente**: Após o fim do jogo (ganho ou perdido), clique em "Reiniciar Jogo" para jogar novamente com um novo tema ou palavra.

## ✨ Como Adicionar Novos Temas

Quer adicionar mais variedade ao jogo? É fácil!

1. Abra o arquivo `palavras.json`.
2. Adicione um novo tema seguindo a estrutura JSON:
    ```json
    {
        "novoTema": ["palavra1", "palavra2", "palavra3"]
    }
    ```
3. Salve o arquivo e recarregue a página do jogo. Seu novo tema estará disponível para escolha!

## 📝 Desenvolvimento

Este jogo foi desenvolvido para ser um projeto simples e educativo, ideal para quem está aprendendo desenvolvimento web. O foco principal foi criar uma aplicação modular e expansível, onde o conteúdo do jogo (temas e palavras) pode ser facilmente gerenciado através de um arquivo JSON externo.

### Desafios Enfrentados
- **Carregamento Dinâmico de Dados**: Implementar a funcionalidade de carregar temas dinamicamente a partir de um arquivo JSON externo.
- **Feedback Imediato**: Garantir que o jogador receba feedback visual instantâneo sobre suas ações.

### Próximos Passos
- **Animações**: Adicionar animações ao jogo para tornar a experiência ainda mais envolvente.
- **Modo Multijogador**: Implementar um modo onde dois jogadores possam se desafiar.
- **Pontuação**: Introduzir um sistema de pontuação baseado na quantidade de tentativas restantes.

## 🎨 Contribuições

Sinta-se à vontade para contribuir com melhorias ou novos recursos para este projeto. Para contribuir:

1. Faça um fork do projeto.
2. Crie uma nova branch (`feature/nova-funcionalidade`).
3. Commit suas alterações (`git commit -m 'Adiciona nova funcionalidade'`).
4. Envie um push para a branch (`git push origin feature/nova-funcionalidade`).
5. Abra um Pull Request.
