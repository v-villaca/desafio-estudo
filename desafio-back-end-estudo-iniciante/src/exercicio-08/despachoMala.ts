type TDadosMala = {
  nome: string;
  pesoMala: number;
};

function solucao(dadosPassageiros: TDadosMala[]) {
  
  let passageiros = [""];

  for(let i of dadosPassageiros){
    if(i.pesoMala > 23){
      passageiros.push(i.nome);
    }
  }

  
}
export default solucao;
