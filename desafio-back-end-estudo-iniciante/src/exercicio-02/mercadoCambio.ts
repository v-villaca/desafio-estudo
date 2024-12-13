function solucao(
  precoVenda: number,
  precoCompra: number,
  valorInvestido: number
) {
  let resultado:number = (precoVenda - precoCompra) * valorInvestido
  return resultado;
}
export default solucao;
