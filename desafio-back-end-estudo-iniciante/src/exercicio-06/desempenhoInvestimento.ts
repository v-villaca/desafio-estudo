function solucao(resultados: number[]) {
  let lucro:number= 0;

  for(let i of resultados){
      lucro += i;
  }
  
  if(lucro > 0){
    return "POSITIVO"
  }else if(lucro < 0){
    return "NEGATIVO"
  }else{
    return "NEUTRO"
  }
}
export default solucao;
