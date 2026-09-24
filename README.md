# Reabilitação pós-mastectomia — site de apoio ao TCC

Site responsivo de apoio a um TCC de Fisioterapia, destinado exclusivamente a pacientes após **mastectomia radical**. A proposta é uma cartilha digital com orientações, vídeos, exercícios, automassagem e registros de acompanhamento.

O trabalho acadêmico permanece em documento próprio. O nome definitivo do produto ainda será escolhido.

## Estado do projeto

**Etapa atual: primeiro protótipo funcional da fase 2, autorizado por Felipe.** O restante do MVP continua em levantamento de requisitos.

O protótipo está em [`prototipos/fase-2`](prototipos/fase-2/README.md), feito em React e TypeScript. Permite testar o player com o vídeo fornecido, os 11 exercícios e os checks de uma sessão. Não inclui questionários, outras fases, persistência ou hospedagem no Lightsail.

As decisões mais recentes abaixo substituem propostas anteriores conflitantes. 🟢 Definido · 🟡 Pendente · 🔴 Fora do MVP.

## Escopo confirmado

| Tema | Definição | Status |
| --- | --- | --- |
| Público | Pacientes após mastectomia radical | 🟢 Definido |
| Formato | Site responsivo para celular, tablet e computador, com prioridade ao celular | 🟢 Definido |
| Condição de uso | Após alta e liberação médica e fisioterapêutica, com orientação inicial do profissional | 🟢 Definido |
| Conteúdo | Orientações, exercícios, automassagem separada dos exercícios e avaliações | 🟢 Definido |
| Vídeos | YouTube incorporado ao site; marca e links do player são aceitáveis | 🟢 Definido |
| Acessibilidade de uso | Linguagem clara, textos curtos, letras legíveis, bom contraste, botões grandes e navegação simples | 🟢 Definido |
| Gamificação | Mostrar progresso e participação por registros de exercícios e sessões | 🟢 Definido |
| Cadastro, perfil e login | Não implementar no MVP | 🔴 Fora do MVP |
| Banco de dados | Não utilizar no MVP | 🔴 Fora do MVP |
| Figma | Fora desta entrega | 🔴 Fora do MVP |

## Calendário e progressão

**Dia 1 = data de conclusão do primeiro questionário obrigatório.** Abrir o site pela primeira vez não inicia a contagem. A data de cirurgia não é a referência do calendário do app.

Nos requisitos comunicados pela equipe, expressões como “pós-operatório” ou “dia após a cirurgia” devem ser interpretadas como **dias de acompanhamento no app**. Na interface, usar “dia de acompanhamento” para esclarecer a referência. Essa convenção do produto não valida nem altera por si só as indicações clínicas dos materiais.

| Fase | Dias de acompanhamento | Avaliação | Status |
| --- | --- | --- | --- |
| Fase 1 | 1 a 14 | Avaliação inicial obrigatória; sua conclusão estabelece o dia 1 | 🟢 Definido |
| Fase 2 | 15 a 30 | Reavaliação opcional disponível na entrada | 🟢 Definido |
| Fase 3 | 31 em diante | Reavaliação opcional disponível na entrada | 🟢 Definido |

- A progressão ocorre pelo calendário, mesmo sem acesso ou conclusão de atividades.
- Cada dia apresenta os exercícios e vídeos correspondentes ao período.
- As fases futuras ficam visíveis e bloqueadas com cadeado até o período correspondente.
- Checks e quantidade de sessões não desbloqueiam fases nem antecipam períodos.
- Dias não realizados ficam registrados como perdidos, sem reposição, compensação ou bloqueio.
- A retirada de dreno e pontos não será uma condição de desbloqueio no app.
- A paciente escolhe o horário para realizar as atividades, respeitando a sequência e as instruções aprovadas.
- A duração do acompanhamento a partir do dia 31 ainda precisa ser definida.

Estas faixas substituem os intervalos anteriores discutidos a partir dos documentos. A equipe clínica permanece responsável por aprovar os exercícios vinculados a cada período.

## Checks de exercícios e sessões

| Ação | Comportamento | Status |
| --- | --- | --- |
| Registrar exercício | Check individual por exercício dentro de cada sessão | 🟢 Definido |
| Concluir todas as atividades | Concluir a sessão automaticamente | 🟢 Definido |
| Tentar concluir sessão incompleta | Exibir pop-up: “conclua todas as atividades para finalizar a sessão” | 🟢 Definido |
| Contagem | Cada sessão concluída conta uma única vez no registro de participação | 🟢 Definido |
| Progressão | Sessões concluídas não condicionam a mudança de fase | 🟢 Definido |
| Sessões por dia | Confirmar como traduzir a frequência dos roteiros em sessões diárias | 🟡 Pendente |

O check é um autorregistro da paciente, não uma comprovação da execução. A proposta anterior de exigir determinada quantidade de sessões para liberar fases foi substituída pela progressão por dias.

## Avaliação inicial e reavaliações

- A primeira avaliação é sempre obrigatória.
- As reavaliações dos dias 15 e 31 são opcionais e não bloqueiam exercícios ou progressão.
- Enquanto não respondida, a avaliação atual aparece como **“Questionário pendente!”**, com acesso para responder depois.
- Existe no máximo uma avaliação pendente: a mais recente.
- Ao chegar ao dia 31, uma avaliação pendente da fase 2 é substituída pela avaliação da fase 3. Não exigir duas respostas acumuladas.
- Ao concluir a avaliação correspondente, remover a pendência.
- Avaliações já respondidas permanecem no histórico.
- A proposta anterior de reavaliar a cada 30 ou 45 dias foi substituída pelos marcos acima.

O PDF recebido apresenta QuickDASH, FACT-B+4, EORTC QLQ-C30 e escala de dor chamada EVA no documento. **Ainda falta confirmar quais instrumentos serão aplicados e se serão iguais nas três avaliações.**

As planilhas de cálculo mencionadas no PDF, as regras de respostas ausentes e as mensagens finais de resultado ainda precisam ser confirmadas. O intervalo entre avaliações não altera o período de referência das perguntas.

## Registros e arquivos JSON

| Tema | Definição | Status |
| --- | --- | --- |
| Exportação e importação | Baixar e importar JSON com data inicial, avaliações e progresso | 🟢 Definido |
| Restauração | Preservar a data inicial e o histórico; importar não reinicia o calendário | 🟢 Definido |
| Histórico | Manter avaliações respondidas e registros de realização | 🟢 Definido |
| Salvamento automático no navegador | Proposta para evitar importação a cada acesso; confirmar explicitamente | 🟡 Pendente |
| Visualização | Definir apresentação do histórico e eventual resumo para o profissional | 🟡 Pendente |

JSON é o mecanismo acordado para guardar e restaurar os registros sem banco de dados. Não há sincronização automática entre aparelhos definida. Caso o armazenamento no navegador seja adotado, limpar os dados poderá apagar os registros locais, tornando o backup importante. Formato do JSON e comportamento de conflitos de importação serão detalhados na implementação.

## Fontes e responsabilidade clínica

| Material recebido e lido | Uso no projeto |
| --- | --- |
| ENTREGA 15-09 TCC - 8 SEMESTRE.docx | Objetivos, fundamentação, proposta acadêmica e cronograma |
| Roteiro storytelling .docx | Narrativa da personagem Sandra e orientações |
| ROTEIRO DOS VÍDEOS DOS EXERCÍCIOS.docx | Exercícios, sequência, repetições, tempos e frequências |
| Roteiro Vídeo Automassagem_Drenagem.docx | Sequência separada de automassagem e orientações |
| Roteiro dos questionários.pdf | Instrumentos, textos e proposta de resultados |

**Quando houver diferença entre o TCC e um roteiro específico, usar o roteiro específico como fonte do conteúdo.** Para o calendário do produto, prevalecem as definições posteriores de dias 1–14, 15–30 e 31 em diante.

O roteiro de exercícios contém subdivisões no início da fase 1, além de repetições, tempos e frequências. A organização diária das sessões ainda precisa ser consolidada pela equipe.

O roteiro separado de automassagem apresenta dez etapas, percurso para a axila contralateral e alongamento final de 20 segundos, três vezes. Não contém etapa inguinal. Aplicabilidade a todas as pacientes, início, frequência e check da automassagem permanecem pendentes.

Segundo a equipe, orientações para interromper atividades e procurar atendimento já estão descritas nos roteiros. Esses textos devem ser preservados na consolidação clínica.

A equipe clínica é responsável por aprovar indicações, exercícios por período, dosagem, cuidados, sinais de alerta, questionários e mensagens de resultado. O site não substitui avaliação ou acompanhamento profissional. A leitura dos materiais e o registro dos requisitos não constituem validação clínica ou bibliográfica. A equipe deverá alinhar o TCC às decisões e versões finais do conteúdo.

## Vídeos e apresentação

| Tema | Decisão | Status |
| --- | --- | --- |
| Durante a construção | Espaços reservados são permitidos; inserir os vídeos quando estiverem prontos | 🟢 Definido |
| Apresentação do TCC | Site completo, incluindo vídeos | 🟢 Definido |
| Uso pelas pacientes | Conteúdo necessário disponível e revisado | 🟢 Definido |
| Datas | Confirmar apresentação, prazo de testes e entrega das gravações | 🟡 Pendente |

## Perguntas pendentes para a equipe

| Tema | Pergunta | Status |
| --- | --- | --- |
| Instrumentos | Aplicar os quatro questionários? Usar os mesmos na avaliação inicial e nas reavaliações? | 🟡 Pendente |
| Cálculos | Enviar as planilhas citadas e confirmar regras de pontuação, respostas ausentes e mensagens finais | 🟡 Pendente |
| Rotina diária | Repetir diariamente o grupo indicado? Como organizar as frequências em sessões e checks? | 🟡 Pendente |
| Fase 3 | Qual a duração após o dia 31 e existe encerramento do acompanhamento? | 🟡 Pendente |
| Automassagem | Roteiro único para todas? Disponível a partir de quando, com qual frequência e com check? | 🟡 Pendente |
| Conteúdos adicionais | Incluir cuidados com o dreno e execução de medidas? Quais materiais? | 🟡 Pendente |
| Resultados | Apenas consulta pela paciente ou compartilhamento com o profissional? O que deve constar no resumo? | 🟡 Pendente |
| Lembretes | Além do questionário pendente, haverá lembretes de exercício? Dentro do site ou com ele fechado? | 🟡 Pendente |
| Identidade | Nome, cores e referências visuais | 🟡 Pendente |
| Prazos | Datas da apresentação, testes e entrega dos vídeos | 🟡 Pendente |
| Aprovação | Quem consolida e aprova os conteúdos e atualiza o TCC? | 🟡 Pendente |

Reavaliações opcionais, substituição da pendência antiga e progressão sem reposição já estão resolvidas; não devem ser perguntadas novamente.

## Organização do trabalho

| Papel | Responsabilidade |
| --- | --- |
| Felipe — tech lead | Prioridades e decisões técnicas |
| Assistente — dev sênior full stack | Requisitos, desenvolvimento e coordenação de agentes conforme autorização |
| Equipe do TCC e equipe clínica | Conteúdo acadêmico e clínico, revisão e aprovação |

Uso de agentes autorizado conforme necessário para requisitos, leitura do TCC, design, desenvolvimento, infraestrutura e documentação, incluindo casos de uso. Isso não inicia essas frentes automaticamente.

A comunicação com a equipe ocorre pelo grupo de WhatsApp, em perguntas claras e pequenas rodadas, evitando repetir respostas já recebidas. As escolhas técnicas devem ser explicadas a Felipe.

## Repositório e hospedagem

Repositório: [FelipePenaSales/tcc_web_app_mastectomia](https://github.com/FelipePenaSales/tcc_web_app_mastectomia). Leitura e escrita verificadas, incluindo commit anterior no README.

| Tema | Situação | Status |
| --- | --- | --- |
| GitHub | Código, documentação e histórico de versões | 🟢 Definido |
| Hospedagem | Lightsail com domínio próprio é o caminho pretendido | 🟡 Pendente |
| Servidor e custos | Confirmar instância, orçamento e configuração | 🟡 Pendente |
| Stack do protótipo | React, TypeScript, CSS e Vite | 🟢 Definido |
| Domínio, DNS e HTTPS | Definir configuração | 🟡 Pendente |
| Nginx e Docker | Sugestões anteriores, sem arquitetura aprovada | 🟡 Pendente |
| Publicação automática | Ainda não definida | 🟡 Pendente |
| Branches e pull requests | Fluxo ainda não definido | 🟡 Pendente |
| Operação | Documentar publicação, atualização e manutenção após definição da solução | 🟡 Pendente |

Nenhuma infraestrutura foi criada ou contratada nesta atualização.

## Próximos passos

1. Obter respostas às pendências clínicas e de conteúdo.
2. Consolidar sessões diárias, instrumentos e mensagens de avaliação.
3. Definir armazenamento local, visualização dos registros e requisitos técnicos restantes.
4. Consolidar casos de uso e alinhar o texto acadêmico.
5. Validar o protótipo da fase 2 com a equipe antes de ampliar a implementação.
