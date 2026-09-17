const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Capa & Matéria Principal: Você vai definir o destaque de capa sobre Violet Sorrengail e seu sinete de raios. Qual abordagem prefere?",
        alternativas: [
            {
                texto: "A Revolução das Sombras e as Verdades de Aretia - Foco na aliança contra os venin e no crescimento de Violet.",
                afirmacao: [
                    "MATÉRIA DE CAPA: A Revolução das Sombras revela como Violet Sorrengail domina seu sinete de raios e enfrenta os segredos de Aretia.",
                    "DOSSIÊ DE CAPA: Um olhar aprofundado sobre a evolução do poder de Violet e o mistério por trás da ameaça dos venin."
                ]    
            },
            {
                texto: "O Poder dos Raios e os Segredos de Navarra - Foco na política do Instituto de Guerra e nas mentiras da liderança.",
                afirmacao: [
                    "MATÉRIA DE CAPA: As mentiras de Navarra expostas através dos olhos de Violet e sua ligação com os dragões mais temidos.",
                    "DOSSIÊ DE CAPA: Como o poder de conduzir raios se tornou a chave para desmantelar o véu de proteção de Basgiath."
                ]  
            }           
        ]
    },
    {
        enunciado: "Guia de Campo (Dragões): Qual aspecto dos dragões você quer destacar nesta edição da revista?",
        alternativas: [
            {
                texto: "Análise das Raças e Caudas - Foco visual em Cauda de Adaga, Cauda de Espada e Rabo de Escorpião.",
                afirmacao: [
                    "GUIA DE CAMPO: Um infográfico detalhado sobre as raças e tipos de caudas que dominam os céus de Navarra.",
                    "GUIA DE CAMPO: Mapeamento completo sobre as características de combate das diferentes espécies de dragões."
                ]
            },
            {
                texto: "Lendários e Vinculados - Destaque especial para Tairn, Sgaeyl e o mistério de Andarna.",
                afirmacao: [
                    "GUIA DE CAMPO: Um perfil exclusivo sobre a dinâmica de poder entre Tairn, Sgaeyl e a rara espécie de Andarna.",
                    "GUIA DE CAMPO: As histórias dos dragões mais poderosos da quadra e a força dos seus vínculos com os cavaleiros."
                ]
            }
        ]
    },
    {
        enunciado: "Perfil do Quadrante: Qual setor do Instituto de Guerra de Basgiath terá a reportagem principal?",
        alternativas: [
            {
                texto: "Quadrante dos Cavaleiros - A rotina brutal no parapeto e o treinamento na Trilha do Processo.",
                afirmacao: [
                    "PERFIL DO QUADRANTE: A sobrevivência extrema no Quadrante dos Cavaleiros e o preço de se vincular a um dragão.",
                    "PERFIL DO QUADRANTE: Bastidores da Trilha do Processo e o cotidiano de quem arrisca a vida pelos céus."
                ]
            },
            {
                texto: "Quadrante dos Escribas e Curandeiros - O valor do conhecimento, da história e do tratamento de ferimentos em guerra.",
                afirmacao: [
                    "PERFIL DO QUADRANTE: Como os Escribas preservam o conhecimento real e os Curandeiros sustentam a linha de frente.",
                    "PERFIL DO QUADRANTE: A importância estratégica da informação e da cura em meio ao conflito com Poromiel."
                ]
            }
        ]
    },
    {
        enunciado: "Dossiê Político: Qual conflito territorial e histórico deve ser explorado na grande reportagem do meio da revista?",
        alternativas: [
            {
                texto: "Navarra vs. Poromiel - Os limites do mapa e a farsa sobre os ataques nas fronteiras.",
                afirmacao: [
                    "DOSSIÊ POLÍTICO: A verdade sobre as fronteiras entre Navarra e Poromiel e a farsa mantida por séculos.",
                    "DOSSIÊ POLÍTICO: Um mapa detalhado revelando as áreas reais de conflito fora dos limites de segurança."
                ]
            },
            {
                texto: "O Véu de Proteção (Wards) - A magia das pedras de proteção e a ameaça iminente das forças escuras.",
                afirmacao: [
                    "DOSSIÊ POLÍTICO: O funcionamento do véu de proteção de Basgiath e o perigo iminente caso as pedras falhem.",
                    "DOSSIÊ POLÍTICO: As falhas na magia das barreiras e a ascensão da magia das sombras."
                ]
            }
        ]
    },
    {
        enunciado: "Seção Interativa: Qual teste interativo você incluirá na última página da revista?",
        alternativas: [
            {
                texto: "Quiz: Qual seria o seu Quadrante em Basgiath?",
                afirmacao: [
                    "SEÇÃO INTERATIVA: Teste final revela se você sobreviveria entre os Cavaleiros ou dominaria como Escriba.",
                    "SEÇÃO INTERATIVA: Descubra qual área do Instituto de Guerra melhor combina com sua personalidade."
                ]
            },
            {
                texto: "Quiz: Qual dragão escolheria você no Trecho?",
                afirmacao: [
                    "SEÇÃO INTERATIVA: Teste de vínculo descobre qual espécie e cor de dragão escolheria você no Trecho.",
                    "SEÇÃO INTERATIVA: Descubra se um dragão de Cauda de Adaga ou de Espada seria seu parceiro de combate."
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
    caixaPerguntas.textContent = "Edição Concluída! Sumário da sua Revista Basgiath:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

mostraPergunta();