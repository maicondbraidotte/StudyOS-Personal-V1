# StudyOS 2027 — Version 3.0

Dashboard estático de estudos com checklist semanal, plano anual, galeria de universos anime e conquistas.

## Visualizar localmente
1. Extraia o ZIP.
2. Abra `index.html` no navegador.

## Publicar na Vercel
1. Envie os arquivos desta pasta para um repositório GitHub.
2. Na Vercel, escolha **Add New → Project** e importe o repositório.
3. Não é necessário build command; é um site estático.
4. Clique em **Deploy**.

## Novidades da V3.0
- Galeria com Horimiya, Jujutsu Kaisen, Akira, Inuyasha, Kaoru Hana wa Rin to Saku, Otonari no Tenshi-sama, Sword Art Online e Kusuriya no Hitorigoto.
- Temas próprios para cada universo, com paletas e atmosferas diferentes.
- Seleção de companheiro/tema persistente no navegador.
- Sistema de conquistas: First Step, Consistency, Scholar, Knowledge Seeker, Perfect Week, Rising Star e The Final Boss.
- XP continua sendo calculado em 25 pontos por sessão marcada.

## Preservação de progresso
A V3.0 mantém a chave `studyos-2027-v1` usada nas versões anteriores para o checklist. Assim, as marcações existentes continuam disponíveis no mesmo navegador. As preferências da V3.0 e datas de conclusão são salvas separadamente em `studyos-2027-v3-meta`.

A conquista **Consistency** conta sete datas de calendário distintas em que sessões foram marcadas como concluídas na V3.0. Marcações antigas são mantidas no checklist, mas não recebem datas retroativas. A conquista **The Final Boss** é liberada manualmente quando você terminar o plano anual.

## Sobre as artes
Os retratos da galeria são avatares gráficos originais e estilizados, criados em CSS, com nomes dos personagens. Não são ilustrações oficiais nem reproduções de artes dos animes. Para usar imagens oficiais, adicione apenas arquivos que você tenha direito de utilizar.

## Dados locais
Checklist, tema, companheiro, datas e conclusão anual ficam no `localStorage` do navegador. Eles não sincronizam automaticamente entre dispositivos e podem ser apagados se os dados do site forem limpos.

## Estrutura
- `index.html`: estrutura e páginas.
- `style.css`: layout e temas.
- `app.js`: cronograma, checklist, XP e conquistas.
- `vercel.json`: configuração de hospedagem estática.


## Novidades da V4 — acompanhamento completo
- Calendário mensal de janeiro a dezembro de 2027, com marcação dos dias que possuem sessões registradas e meta mensal editável.
- Histórico por dia, últimos 7 dias, mês e todo o período, com total de horas, lista de sessões e gráfico de consistência.
- Cronômetro livre e Pomodoro: 25 minutos de foco, 5 minutos de pausa e pausa longa de 15 minutos após 4 ciclos. A conclusão do bloco de foco Pomodoro registra automaticamente a sessão. No cronômetro livre, use “Concluir sessão” para salvar.
- As sessões são guardadas no localStorage do navegador.

## Adicionar suas imagens na pasta IMGS
Os caminhos são configurados no início de `app.js`, no objeto `CHARACTER_IMAGES`. Coloque os arquivos na pasta `IMGS` e ajuste os nomes/extensões nesse objeto. Arquivos sugeridos: `miyamura.jpg`, `hori.jpg`, `gojo.jpg`, `kaneda.jpg`, `inuyasha.jpg`, `rintaro.jpg`, `kaoruko.jpg`, `mahiru.jpg`, `kirito.jpg`, `asuna.jpg` e `maomao.jpg`. Se uma imagem não existir, o avatar gráfico original continua aparecendo.

A estrutura da pasta `IMGS` inclui um `LEIA-ME.txt` com a lista de arquivos esperados.
