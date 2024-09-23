function testeErros(parametro){
    try {
      console.log(parametroUpper)
      let parametroUpper = parametro.toUpperCase();
    } catch (e) {
      console.error(new ReferenceError("Erro de referência: " + e.message));
    }
  }
testeErros('teste');

function testeErros02(parametro){
  try {
    let upper = parametro.toUpperCase()
    // como ocorreu um erro antes da execução do console.log, o código não chegará a essa linha
    console.log(upper)
  } catch (e) {
    console.error(new TypeError("Erro de tipo: " + e.message));
  }
}
testeErros02(10);

function testeErros03(){
  try {
// o eval é uma função que serve para executar uma string como se fosse um código JavaScript
    eval("- 981 = 2")
  } catch (e) {
    console.error(new SyntaxError("Erro de sintaxe: " + e.message));
  }
}
testeErros03();