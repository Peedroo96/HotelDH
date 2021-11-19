const hospedes = require('./hospedes.json')

/* function insereHospede(nome, quarto, entrada, saida, serviçoDeQuarto){
    const hospedes = {
        nome,
        quanrto,
        entrada,
        saida,
        servicoDeQuarto,
    }
   hospedes.push(hospede)
} */

const casas = require('./imobiliaria')
​
function vendaDeMoradia(casas){
  let data = new Date ()
  let hora = data.getHours()
  let minutos = data.getMinutes()
  let dataBrasil = data.toLocaleDateString('pt-BR')
  for (let i = 0; i<casas.casas.length; i++){
  }
}
console.log(vendaDeMoradia(casas))
