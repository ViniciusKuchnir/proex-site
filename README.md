# Resíduo no lugar certo — Projeto de Extensão

SPA estática desenvolvida para uma ação de educação ambiental e conscientização sobre separação e descarte de resíduos.

## Tecnologias

- HTML5
- CSS3
- JavaScript puro
- Sem backend e sem dependências externas obrigatórias

## Estrutura

```text
/
├── index.html
├── css/global.css
├── js/main.js
├── js/quiz.js
└── assets/
    ├── favicon.svg
    └── images/
        ├── observacao/
        └── equipe/
```

## Executar localmente

Você pode abrir `index.html` diretamente no navegador. Para simular melhor o ambiente de hospedagem, rode um servidor local:

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Publicar no GitHub Pages

1. Crie um repositório público no GitHub.
2. Envie todos os arquivos da pasta do projeto para a raiz do repositório.
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Selecione a branch `main` e a pasta `/ (root)`.
6. Salve e aguarde a publicação.

O projeto foi desenvolvido como site estático e é compatível com GitHub Pages sem build adicional.

## Fotos individuais da equipe

A versão inicial utiliza a foto coletiva e avatares com iniciais. Antes da publicação final, as fotos individuais podem ser adicionadas em `assets/images/equipe/` e os avatares substituídos no `index.html`.

## Observação acadêmica

O site é uma ação educativa independente e não representa comunicação oficial do Jockey Plaza Shopping.
