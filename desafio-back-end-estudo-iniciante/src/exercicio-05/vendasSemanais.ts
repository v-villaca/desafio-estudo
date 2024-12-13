function solucao(vendasDiarias: number[]) {
  let valorTotal:number = 0;

  for(let i of vendasDiarias){
      valorTotal += i;
  }

  return valorTotal;
}
export default solucao;
