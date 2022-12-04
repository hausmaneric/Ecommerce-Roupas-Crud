export interface Cupom {
  id:number,
  titulo:string,
  descricao:string,
  desconto_valor:number,
  desconto_porce:number,
  utilizado: boolean,
  user_id:number,
  user:string,
  image:string,
  validade:string,
  vencido:boolean
}
