function solucao(pontosAcumulados: number, valorCompra: number) {
  let valorTotal:number;

  if(pontosAcumulados < 100){
      return valorCompra;
  }else if (pontosAcumulados >= 100 && pontosAcumulados  <= 500){
      return valorTotal = valorCompra - 0.1 * valorCompra;
  }else{
      return valorTotal = valorCompra - 0.2 * valorCompra;
  }

}
export default solucao;
