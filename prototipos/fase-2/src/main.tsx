import React, {useState, useRef, useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';
const exercises = [
 ['Movimentando os ombros','Levante os braços esticados pela frente do corpo e depois pelo lado do corpo, até a altura dos ombros.'],
 ['Abrindo os braços','Abra os braços na altura dos ombros. Gire os ombros para trás, apontando os polegares para cima. Depois gire para frente, apontando os polegares para baixo.'],
 ['Juntando os cotovelos','Levante os braços e coloque as mãos atrás da cabeça, com os cotovelos abertos. Sem tirar as mãos daí, leve os cotovelos para frente até eles se encostarem.'],
 ['Fazendo círculos','Amarre uma fita numa porta e segure a outra ponta com a mão. Com o cotovelo esticado, desenhe círculos no ar com o braço, e depois um número oito deitado.'],
 ['Mãos unidas','Deitada, junte as mãos e entrelace os dedos. Estique os cotovelos e levante os braços para cima.'],
 ['Fazendo círculos pequenos','Deitada, junte as mãos entrelaçando os dedos, dobre os cotovelos e mexa os braços para os lados, fazendo círculos pequenos.'],
 ['Bastão','Segure um bastão com as duas mãos, atrás do quadril. Afaste o bastão do corpo.'],
 ['As costas','Coloque uma mão na cintura. Leve o outro braço para trás, dobre o cotovelo e tente encostar a mão nas costas, como se fosse se coçar.'],
 ['Elevação','Entrelace os dedos das mãos, dobre os cotovelos e leve as mãos até a altura dos ombros. Depois, suba os braços até ficarem esticados acima da cabeça, com as mãos ainda juntas.'],
 ['Em uma parede','Fique de frente para uma parede. Coloque as mãos na parede na altura do ombro e vá escalando com os dedos até a altura dos ombros. Depois desça do mesmo jeito.'],
 ['Subindo na ponte','Deitada de barriga para cima, com os braços esticados apoiados no chão, levante o corpo devagar usando a força dos braços para ajudar.']
];
function App(){
 const [selected,setSelected]=useState(0), [done,setDone]=useState<boolean[]>(exercises.map(()=>false));
 const [message,setMessage]=useState(''); const dialog=useRef<HTMLDialogElement>(null);
 const count=done.filter(Boolean).length, complete=count===exercises.length;
 function toggle(i:number){setDone(d=>d.map((v,n)=>n===i?!v:v));}
 function select(i:number){setSelected(i);}
 function finish(){setMessage(complete?'Sessão concluída! Todas as atividades foram registradas.':'conclua todas as atividades para finalizar a sessão');dialog.current?.showModal();}
 function reset(){setDone(exercises.map(()=>false));setSelected(0);}
 useEffect(()=>{document.title='Fase 2 · Meu acompanhamento';},[]);
 return <>
 <div className="demo-bar"><span>PROTÓTIPO INTERATIVO</span><span>Fase 2 · dados de demonstração</span></div>
 <header><a className="brand" href="#main"><span className="brand-icon">✳</span><span>Meu acompanhamento<small>Um dia de cada vez</small></span></a><button className="reset" onClick={reset}>↺ <span>Reiniciar demonstração</span></button></header>
 <main id="main">
 <div className="heading"><div><div className="eyebrow">MINHA ROTINA / FASE 2</div><h1>Seu momento de cuidado.</h1><p>Acompanhe o vídeo e registre cada atividade realizada.</p></div><div className="day"><strong>15</strong><span>dia de acompanhamento<small>Demonstração</small></span></div></div>
 <section className="phase-banner" aria-label="Período da fase"><div><span className="phase-number">02</span><div><strong>Fase 2</strong><span>Dias 15 a 30 de acompanhamento</span></div></div><span className="phase-label">FASE ATUAL</span></section>
 <div className="workspace"><section className="player-section" aria-label="Exercício selecionado">
 <div className="player"><iframe src="https://www.youtube.com/embed/1i7p0vTGcBk?rel=0" title="Vídeo de demonstração do player — Galinha Pintadinha" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div>
 <div className="video-note"><span>Vídeo de teste · não demonstra o exercício</span><a href="https://www.youtube.com/watch?v=1i7p0vTGcBk" target="_blank" rel="noreferrer">Abrir no YouTube ↗</a></div>
 <article className="exercise-detail"><div className="detail-top"><span className="eyebrow">EXERCÍCIO {String(selected+1).padStart(2,'0')} DE 11</span><span className="dose">10 repetições</span></div><h2>{exercises[selected][0]}</h2><p>{exercises[selected][1]}</p><div className="care">Faça os movimentos conforme orientação da sua equipe. Se sentir dor forte, pare e avise o fisioterapeuta.</div><button className={'primary '+(done[selected]?'checked':'')} onClick={()=>toggle(selected)} aria-pressed={done[selected]}>{done[selected]?'✓ Exercício realizado':'Marcar exercício como realizado'}</button><div className="navigation"><button disabled={selected===0} onClick={()=>select(selected-1)}>← Anterior</button><button disabled={selected===10} onClick={()=>select(selected+1)}>Próximo exercício →</button></div></article>
 </section><aside className="session"><div className="session-head"><span className="eyebrow">SUA SESSÃO</span><h2>Pequenos passos,<br/>um cuidado de cada vez.</h2><div className="progress-label"><span aria-live="polite">{count} de 11 realizados</span><strong>{Math.round(count/11*100)}%</strong></div><progress max="11" value={count} aria-label="Progresso da sessão"/></div>
 <ol className="exercise-list">{exercises.map(([name],i)=><li key={name} className={selected===i?'active':''}><input type="checkbox" checked={done[i]} onChange={()=>toggle(i)} aria-label={'Concluir '+name}/><button aria-current={selected===i?'step':undefined} onClick={()=>select(i)}><span className="list-number">{String(i+1).padStart(2,'0')}</span><span>{name}</span><span aria-hidden="true">›</span></button></li>)}</ol>
 <div className="session-footer"><div className={'session-state '+(complete?'success':'')} role="status">{complete?'✓ Sessão concluída automaticamente':'Marque cada exercício após realizá-lo.'}</div><button className="finish" onClick={finish}>{complete?'✓ Sessão concluída':'Finalizar sessão'}</button></div></aside></div>
 <footer>Prévia para avaliação da equipe · conteúdo do roteiro sujeito à aprovação clínica.<br/>Os checks são apenas de demonstração e são apagados ao recarregar a página.</footer>
 </main><dialog ref={dialog}><span className="dialog-icon">{complete?'✓':'!'}</span><h2>{complete?'Tudo registrado':'Ainda falta um passo'}</h2><p>{message}</p><button className="primary" onClick={()=>dialog.current?.close()}>Entendi</button></dialog>
 </>;
}
createRoot(document.getElementById('root')!).render(<App/>);
