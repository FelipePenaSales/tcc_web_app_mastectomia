# Protótipo da fase 2

Página responsiva em React e TypeScript para avaliar com a equipe o player, a navegação pelos 11 exercícios e os checks de uma sessão. O dia 15 é ilustrativo. Questionários, calendário real, persistência e outras fases não estão implementados.

O vídeo solicitado é apenas um teste do player, não uma demonstração dos exercícios. Os nomes e instruções foram baseados no roteiro recebido e permanecem sujeitos à aprovação da equipe clínica.

## Executar

Com Node.js 22.12+ (ou versão compatível com Vite 8):

```sh
npm ci
npm run dev
```

Abra a URL informada pelo Vite. Para testar no celular, use o endereço do computador na mesma rede, porta 5173. Pode ser necessário permitir o acesso no firewall.

## Gerar versão para hospedagem

```sh
npm run build
```

O resultado é `dist/index.html`, com React, JavaScript e CSS incluídos no próprio arquivo. A cópia `prototipo-fase-2.html` corresponde ao build desta versão. Ela pode ser aberta para testar a interface, mas o player do YouTube deve ser testado por HTTP/HTTPS: abrir por `file://` pode causar erro de reprodução por ausência de origem/referência.

## Testar com a equipe

1. Selecionar um exercício na lista ou usar Anterior/Próximo.
2. Tentar finalizar sem marcar tudo: deve abrir o pop-up acordado.
3. Marcar exercícios pelo botão ou checkbox: ambos refletem o mesmo estado.
4. Marcar os 11 exercícios: a sessão é concluída automaticamente.
5. Desmarcar um exercício: a sessão volta a ficar incompleta.
6. Usar Reiniciar demonstração para zerar o teste.

Os checks são mantidos apenas em memória e desaparecem ao recarregar. Não se trata de uma versão pronta para uso clínico. A publicação no Lightsail não foi realizada.
