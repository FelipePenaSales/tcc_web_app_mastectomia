# Reabilitação pós-mastectomia — site de apoio ao TCC

Site responsivo de apoio a um TCC de Fisioterapia, destinado exclusivamente a pacientes após **mastectomia radical com linfadenectomia axilar**. A proposta é uma cartilha digital com orientações, vídeos, exercícios, automassagem e registros de acompanhamento.

O trabalho acadêmico permanece em documento próprio. O nome definitivo do produto ainda será escolhido.

## Estado do projeto

**Etapa atual: primeiro protótipo funcional da fase 2, autorizado por Felipe.** O restante do MVP continua em levantamento de requisitos.

O protótipo está em [`prototipos/fase-2`](prototipos/fase-2/README.md), feito em React e TypeScript. Permite testar o player com o vídeo fornecido, os 11 exercícios e os checks de uma sessão. Não inclui questionários, outras fases, persistência ou hospedagem no Lightsail.

O protótipo atual ainda não implementa as decisões posteriores de início do acompanhamento, bloqueio por drenos/pontos, avaliações e paleta. As interações e o layout foram testados; a reprodução do vídeo não foi validada neste ambiente. Ainda não há link público hospedado.

As decisões mais recentes abaixo substituem propostas anteriores conflitantes. 🟢 Definido · 🟡 Pendente · 🔴 Fora do MVP.

## Escopo confirmado

| Tema | Definição | Status |
| --- | --- | --- |
| Público | Pacientes após mastectomia radical com linfadenectomia axilar | 🟢 Definido |
| Formato | Site responsivo para celular, tablet e computador, com prioridade ao celular | 🟢 Definido |
| Condição de uso | Após alta e liberação médica e fisioterapêutica, com orientação inicial do profissional | 🟢 Definido |
| Conteúdo | Orientações, exercícios, automassagem separada dos exercícios e avaliações | 🟢 Definido |
| Vídeos | YouTube incorporado ao site; marca e links do player são aceitáveis | 🟢 Definido |
| Acessibilidade de uso | Linguagem clara, textos curtos, letras legíveis, bom contraste, botões grandes e navegação simples | 🟢 Definido |
| Gamificação | Mostrar progresso e participação por registros de exercícios e sessões | 🟢 Definido |
| Cadastro, perfil e login | Não implementar no MVP | 🔴 Fora do MVP |
| Banco de dados | Não utilizar no MVP | 🔴 Fora do MVP |
| Figma | Fora desta entrega | 🔴 Fora do MVP |
| Conteúdo sobre cuidados com o dreno e execução de medidas | Não incluir na primeira versão; isso não exclui as perguntas de confirmação para liberar fases | 🔴 Fora do MVP |

## Calendário e progressão

**Dia 1 = data do clique em “Iniciar acompanhamento”.** O questionário inicial é opcional e não estabelece mais a data inicial. Abrir o site, por si só, não inicia a contagem. A data de cirurgia não é a referência do calendário do app.

Nos requisitos comunicados pela equipe, “pós-operatório” e “dia após a cirurgia” significam dias de acompanhamento no app. Na interface, usar “dia de acompanhamento”. Essa convenção do produto não constitui validação das indicações clínicas dos materiais.

| Fase | Dias de acompanhamento | Condição de acesso | Status |
| --- | --- | --- | --- |
| Fase 1 | 1 a 14 | Acompanhamento iniciado | 🟢 Definido |
| Fase 2 | 15 a 30 | Duas confirmações positivas: drenos e pontos retirados | 🟢 Definido |
| Fase 3 | 31 em diante | Manter exigência das duas confirmações positivas | 🟢 Definido |

- A contagem segue pelo calendário, mesmo sem acesso ou conclusão de atividades.
- Cada dia apresenta os exercícios e vídeos correspondentes ao período, respeitando o bloqueio de acesso abaixo.
- Fases futuras ficam visíveis com cadeado.
- Checks e quantidade de sessões não desbloqueiam fases nem antecipam períodos.
- Dias não realizados ficam registrados como perdidos, sem reposição ou compensação.
- A paciente escolhe o horário, respeitando a sequência e as instruções aprovadas.
- A duração do acompanhamento após o dia 31 permanece pendente.

### Confirmação de retirada dos drenos e pontos

Antes de acessar a fase 2, exibir duas perguntas com respostas Sim/Não:

1. “Você já retirou os drenos?”
2. “Você já retirou os pontos?”

**Ambas devem ser Sim.** Se alguma resposta for Não, orientar procurar o médico e manter as fases 2 e 3 bloqueadas. Permitir nova confirmação posteriormente. A ausência de confirmação também não libera o acesso.

O bloqueio permanece após o dia 31; o avanço do calendário não permite contorná-lo. Registrar respostas e data/hora da confirmação. A confirmação não reinicia a contagem dos dias. Trata-se de ciência declarada pela paciente, não de comprovação documental de liberação clínica.

Esta decisão substitui a regra anterior de ignorar drenos/pontos no desbloqueio. A equipe clínica aprova os exercícios vinculados a cada período.

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

| Momento | Instrumentos | Situação |
| --- | --- | --- |
| Inicial | QuickDASH, FACT-B+4, QLQ-C30 e EVA | 🟢 Todos confirmados; preenchimento opcional |
| Diário | EVA antes e após as condutas | 🟢 Frequência geral confirmada; unidade por sessão/dia pendente |
| Mensal | FACT-B+4, QLQ-C30 e QuickDASH | 🟢 Periodicidade mensal confirmada; calendário exato pendente |

Nenhum questionário impede o início do acompanhamento, as práticas ou a progressão. O clique em “Iniciar acompanhamento” define o dia 1 mesmo sem respostas.

- Usar as mensagens de feedback do roteiro dos questionários, conforme confirmação da equipe.
- Manter os resultados respondidos no histórico da paciente.
- Exibir “Questionário pendente!” com acesso para responder.
- A regra anterior de manter somente a pendência mais recente foi aprovada para avaliações por fase. Sua aplicação ao novo calendário mensal foi enviada para confirmação; não assumir uma política para EVA atrasada.
- Reavaliações fixas nos dias 15 e 31 não são mais uma especificação fechada. A equipe passou a pedir periodicidade mensal.
- A proposta de aplicações a cada 30 dias (31, 61, 91...) ainda aguarda resposta.
- O intervalo entre aplicações não altera o período de referência das perguntas.

As planilhas FACT-B+4 e QLQ-C30 foram recebidas. A análise das fórmulas e das regras para respostas ausentes ainda não foi realizada; não declarar os cálculos validados ou implementados.

### Perguntas enviadas para fechar esta etapa

1. Ratificar com a equipe a avaliação inicial opcional (já definida com Felipe).
2. Confirmar se mensal significa a cada 30 dias, nos dias 31, 61, 91..., substituindo a proposta de reavaliação do dia 15.
3. Definir EVA antes/depois de cada sessão ou do conjunto de atividades do dia, inclusive quando automassagem e exercícios ocorrerem em horários diferentes.
4. Confirmar apenas a avaliação mensal pendente mais recente, sem acumular aplicações atrasadas.
5. Confirmar se EVA não respondida fica sem preenchimento, sem cobrança retroativa.
6. Definir até quando solicitar as avaliações mensais.

## Registros e arquivos JSON

| Tema | Definição | Status |
| --- | --- | --- |
| Exportação e importação | Baixar e importar JSON com data inicial, avaliações e progresso | 🟢 Definido |
| Restauração | Preservar a data inicial e o histórico; importar não reinicia o calendário | 🟢 Definido |
| Histórico | Salvar e mostrar resultados à paciente como referência de evolução, além dos registros de realização | 🟢 Definido |
| Salvamento automático no navegador | Proposta para evitar importação a cada acesso; confirmar explicitamente | 🟡 Pendente |
| Destinatária | Resultados para a paciente; não é necessário enviar à equipe | 🟢 Definido |
| Visualização e PDF | Definir apresentação do histórico e possibilidade de relatório em PDF para baixar | 🟡 Pendente |

JSON é o mecanismo acordado para guardar e restaurar os registros sem banco de dados. Não há sincronização automática entre aparelhos definida. Caso o armazenamento no navegador seja adotado, limpar os dados poderá apagar os registros locais, tornando o backup importante. Formato do JSON e comportamento de conflitos de importação serão detalhados na implementação.

## Fontes e responsabilidade clínica

| Material | Uso e situação |
| --- | --- |
| ENTREGA 15-09 TCC - 8 SEMESTRE.docx | Objetivos, fundamentação, proposta acadêmica e cronograma |
| Roteiro storytelling .docx | Narrativa da personagem Sandra e orientações |
| ROTEIRO DOS VÍDEOS DOS EXERCÍCIOS.docx | Exercícios, sequência, repetições, tempos e frequências |
| Roteiro Vídeo Automassagem_Drenagem.docx | Sequência separada de automassagem e orientações |
| Roteiro dos questionários.pdf | Lido; instrumentos e feedbacks confirmados pela equipe |
| QLQ-C30_Calculadora_Escores.xlsx | Recebida; análise das fórmulas pendente |
| FACT-B4_Calculadora_Escores.xlsx | Recebida; análise das fórmulas pendente |

**Quando houver diferença entre o TCC e um roteiro específico, usar o roteiro específico como fonte do conteúdo.** Para o calendário do produto, prevalecem as definições posteriores de dias 1–14, 15–30 e 31 em diante.

O roteiro de exercícios contém subdivisões no início da fase 1, além de repetições, tempos e frequências. A organização diária das sessões ainda precisa ser consolidada pela equipe. A resposta mais recente descreve a fase 1 com repouso e mobilidade leve, a fase 2 com mobilidade até 90° e a fase 3 com amplitude total e fortalecimento leve, citando faixas elásticas e halteres de 0,5 a 1,0 kg. A equipe deve fornecer/consolidar o roteiro final correspondente; não acrescentar exercícios por inferência.

O roteiro separado de automassagem apresenta dez etapas, percurso para a axila contralateral e alongamento final de 20 segundos, três vezes. Não contém etapa inguinal. A equipe confirmou um roteiro único padronizado e check de realização. Início e frequência permanecem pendentes.

Segundo a equipe, orientações para interromper atividades e procurar atendimento já estão descritas nos roteiros. Esses textos devem ser preservados na consolidação clínica.

A equipe clínica é responsável por aprovar indicações, exercícios por período, dosagem, cuidados, sinais de alerta, questionários e mensagens de resultado. O site não substitui avaliação ou acompanhamento profissional. A leitura dos materiais e o registro dos requisitos não constituem validação clínica ou bibliográfica. A equipe deverá alinhar o TCC às decisões e versões finais do conteúdo.

## Vídeos e apresentação

| Tema | Decisão | Status |
| --- | --- | --- |
| Durante a construção | Espaços reservados são permitidos; inserir os vídeos quando estiverem prontos | 🟢 Definido |
| Apresentação do TCC | Site completo, incluindo vídeos | 🟢 Definido |
| Uso pelas pacientes | Conteúdo necessário disponível e revisado | 🟢 Definido |
| Demonstração completa | Até 16/11/2026, incluindo vídeos | 🟢 Definido |
| Gravações e testes | Entrega dos vídeos ainda sem data; definir prazo para testes antes da apresentação | 🟡 Pendente |

## Identidade visual e lembretes

| Tema | Definição | Status |
| --- | --- | --- |
| Paleta | Rosa `#D8A7B1`, branco `#FDFBF7`, vinho `#6B3E4E`, verde `#ABC3A8` | 🟢 Definido |
| Aplicação da paleta | Ainda não aplicada ao protótipo | 🟡 Pendente |
| Nome | Ainda não escolhido | 🟡 Pendente |
| Notificações | Equipe prefere push com o app fechado; verificar viabilidade técnica | 🟡 Pendente |
| Alternativa aos pushes | Avisos quando a paciente abrir o app são aceitos | 🟢 Definido |

Sugestões de nome recebidas, sem escolha: FisioMastec, ReabilitaMama, CuidarMama, Elo, Elo Diário, Amparo, Florescer, Flos Reabilitação, SuaRede Pós e Renova Pós.

## Board de evolução

| Frente | Concluído ou definido | Próximo passo |
| --- | --- | --- |
| Objetivo e público | 🟢 Mastectomia radical com linfadenectomia axilar | — |
| Início e fases | 🟢 Botão de início; períodos 1–14, 15–30 e 31+ | 🟡 Implementar calendário |
| Confirmações | 🟢 Drenos e pontos: dois Sim; bloqueio também na fase 3 | 🟡 Implementar registro e bloqueio |
| Sessões | 🟢 Checks, conclusão automática e pop-up | 🟡 Quantidade e organização diária |
| Automassagem | 🟢 Roteiro único e check | 🟡 Início e frequência |
| Questionários | 🟢 Quatro instrumentos; inicial opcional; EVA diária e demais mensais | 🟡 Respostas às seis perguntas desta etapa |
| Escores | 🟢 Planilhas recebidas e feedbacks escolhidos | 🟡 Analisar cálculos e implementar |
| Histórico | 🟢 Consulta pela paciente e backup JSON | 🟡 Salvamento local e PDF |
| Identidade | 🟢 Paleta escolhida | 🟡 Nome e aplicação visual |
| Protótipo | 🟢 Fase 2 em React; player, 11 exercícios e checks | 🟡 Validação da equipe e atualização das regras |
| Vídeos | 🟢 YouTube e apresentação completa | 🟡 Gravação, entrega e teste do player |
| Hospedagem | 🟡 Lightsail pretendido; sem link público | 🟡 Configuração, domínio e publicação |
| Aprovação | 🟢 Orientadora responsável | 🟡 Avaliação final |
| Prazo | 🟢 Demonstração até 16/11/2026 | 🟡 Planejar testes e entrega dos vídeos |

## Pendências restantes

Trabalhar uma etapa por vez: agora, questionários; depois, sessões e automassagem.

- Fechar as seis questões sobre aplicação dos questionários listadas acima.
- Analisar as planilhas de escores, incluindo tratamento de respostas ausentes.
- Confirmar rotina de exercícios e quantidade de sessões diárias.
- Definir início e frequência da automassagem.
- Definir duração da fase 3 e fornecer seu roteiro final, incluindo fortalecimento.
- Confirmar salvamento automático no navegador e relatório PDF; detalhar formato do backup.
- Verificar push e definir lembretes.
- Escolher nome e aplicar paleta.
- Definir datas dos vídeos e dos testes anteriores a 16/11/2026.
- Validar o protótipo com a equipe e alinhar o TCC às regras atuais.

## Organização do trabalho

| Papel | Responsabilidade |
| --- | --- |
| Felipe — tech lead | Prioridades e decisões técnicas |
| Assistente — dev sênior full stack | Requisitos, desenvolvimento e coordenação de agentes conforme autorização |
| Equipe do TCC e equipe clínica | Fornecimento e revisão do conteúdo acadêmico e clínico |
| Orientadora do trabalho | Avaliação e aprovação final |

As atualizações do TCC serão feitas após alinhamento entre as partes, com orientação do audiovisual.

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
2. Analisar planilhas e consolidar a rotina diária de sessões e automassagem.
3. Definir armazenamento local, visualização dos registros e requisitos técnicos restantes.
4. Consolidar casos de uso e alinhar o texto acadêmico.
5. Validar o protótipo da fase 2 com a equipe antes de ampliar a implementação.
