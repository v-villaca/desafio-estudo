type TDados = {
  pedido: string;
  quantidade: number; 
  estimativaEntrega: number; 
};

function solucao(dadosEntrega: TDados, diaAtual: number) {

  if(diaAtual <= dadosEntrega.estimativaEntrega){
      return "ENTREGA NAO ATRASADA"
  }else{
      return "ENTREGA ATRASADA"
  }
}
export default solucao;
