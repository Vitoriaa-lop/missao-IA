const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Capa & Matéria Principal: Você vai estruturar a capa da revista focada em Violet Sorrengail e seu sinete de raios. Qual manchete principal você escolhe?",
        alternativas: [
            {
                texto: "A Revolução das Sombras e as Verdades de Aretia — Foco no crescimento de Violet e na aliança secreta contra os venin.",
                afirmacao: [
                    "⚡ MATÉRIA DE CAPA: A Revolução das Sombras analisa como Violet Sorrengail dominou seu sinete de raios e desvendou os segredos mantidos em Aretia.",
                    "⚡ DOSSIÊ DE CAPA: Um olhar profundo sobre a jornada de Violet, a evolução de seu poder de raios e a ascensão da resistência."
                ]    
            },
            {
                texto: "O Despertar da Tempestade — Foco na política do Instituto de Guerra de Basgiath e nas mentiras dos líderes de Navarra.",
                afirmacao: [
                    "⚡ MATÉRIA DE CAPA: O Despertar da Tempestade expõe os segredos do Instituto de Guerra de Basgiath e a verdadeira ameaça que assola Navarra.",
                    "⚡ DOSSIÊ DE CAPA: Como o poder brutal de Violet se tornou a chave para desmantelar séculos de mentiras governamentais."
                ]  
            }           
        ]
    },
    {
        enunciado: "Guia de Campo (Espécies de Dragões): Qual classificação de dragões você quer destacar nesta seção da revista digital?",
        alternativas: [
            {
                texto: "Análise Anatômica das Caudas — Foco nas diferenças de combate entre Cauda de Adaga, Cauda de Espada e Rabo de Escorpião.",
                afirmacao: [
                    "🐉 GUIA DE CAMPO: Um infográfico ilustrado detalhando as características táticas das raças Cauda de Adaga, Cauda de Espada e Rabo de Escorpião.",
                    "🐉 GUIA DE CAMPO: Análise zoológica sobre como cada tipo de cauda altera drasticamente o estilo de combate no ar."
                ]
            },
            {
                texto: "Lendários e Vinculados — Destaque para a conexão entre Tairn, Sgaeyl e o mistério de Andarna.",
                afirmacao: [
                    "🐉 GUIA DE CAMPO: Um perfil exclusivo sobre a dinâmica de poder entre Tairn, Sgaeyl e a raríssima raça de penas de Andarna.",
                    "🐉 GUIA DE CAMPO: O vínculo ancestral entre os maiores dragões do Empíreo e os cavaleiros que marcaram a história."
                ]
            }
        ]
    },
    {
        enunciado: "Perfil do Quadrante: Qual área do Instituto de Guerra de Basgiath terá a grande reportagem especial?",
        alternativas: [
            {
                texto: "Quadrante dos Cavaleiros — A brutalidade no Parapeito, o treinamento severo e o vínculo mortal com os dragões.",
                afirmacao: [
                    "⚔️ PERFIL DO QUADRANTE: A rotina extrema no Quadrante dos Cavaleiros e a alta taxa de mortalidade entre os aspirantes.",
                    "⚔️ PERFIL DO QUADRANTE: Bastidores da sobrevivência em Basgiath e o preço de sangue pago para se tornar um Cavaleiro."
                ]
            },
            {
                texto: "Quadrante dos Escribas, Curandeiros e Infantaria — O valor do conhecimento histórico, das estratégias e da cura em guerra.",
                afirmacao: [
                    "📜 PERFIL DO QUADRANTE: Como os Escribas guardam a história real e os Curandeiros mantêm os sobreviventes de pé na linha de frente.",
                    "📜 PERFIL DO QUADRANTE: A importância estratégica do conhecimento, da inteligência militar e do suporte médico em combate."
                ]
            }
        ]
    },
    {
        enunciado: "Dossiê Político: Qual grande conflito do universo de Rebecca Yarros será analisado na matéria central da revista?",
        alternativas: [
            {
                texto: "Navarra vs. Poromiel — Os limites territoriais e o acobertamento dos ataques nas fronteiras.",
                afirmacao: [
                    "🛡️ DOSSIÊ POLÍTICO: A verdade sobre a guerra entre Navarra e Poromiel e a conspiração para esconder o avanço do inimigo real.",
                    "🛡️ DOSSIÊ POLÍTICO: Mapeamento detalhado das fronteiras e das mentiras contadas aos cidadãos para manter o controle."
                ]
            },
            {
                texto: "O Véu de Proteção (Wards) e os Venin — A magia das pedras de proteção contra as forças escuras que drenam a terra.",
                afirmacao: [
                    "🗡️ DOSSIÊ POLÍTICO: As falhas no véu de proteção de Basgiath e a terrível ameaça dos Venin e dos Wyrm que drenam a magia do solo.",
                    "🗡️ DOSSIÊ POLÍTICO: O funcionamento da magia de proteção ancestral e o perigo iminente caso as barreiras venham a ruir."
                ]
            }
        ]
    },
    {
        enunciado: "Seção Interativa: Qual teste interativo vai fechar a edição da sua revista digital?",
        alternativas: [
            {
                texto: "Quiz: Qual seria o seu Quadrante no Instituto de Guerra de Basgiath?",
                afirmacao: [
                    "🔥 SEÇÃO INTERATIVA: Quiz 'Qual é o seu Quadrante?' revela se você sobreviveria entre os Cavaleiros ou lideraria como Escriba.",
                    "🔥 SEÇÃO INTERATIVA: Teste de personalidade para descobrir em qual setor de Basgiath você se destacaria."
                ]
            },
            {
                texto: "Quiz: Qual dragão escolheria você no Trecho?",
                afirmacao: [
                    "🐉 SEÇÃO INTERATIVA: Quiz de Vínculo 'Qual Dragão Te Escolheria?' avalia suas decisões e identifica o dragão ideal para você.",
                    "🐉 SEÇÃO INTERATIVA: Teste interativo que descobre se um Cauda de Adaga Negro ou um Rabo de Escorpião Azul aceitaria você como Cavaleiro."
                ]
            }
        ]
    }
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + "\n\n";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Edição Concluída! Sumário Gerado da Revista Basgiath:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

mostraPergunta();