function lancarNota(nota1, nota2) {
  // Função para validar se a nota é numérica e dentro do intervalo permitido
  function validarNota(nota, tipoNota) {
    if (typeof nota !== "number") {
      throw new Error(`Entradas devem ser numéricas`);
    }
    if (nota < 0.0 || nota > 10.0) {
      throw new Error(`Nota de ${tipoNota} inválida`);
    }
    if (!/^\d+(\.\d)?$/.test(nota.toString())) {
      throw new Error(`Nota de ${tipoNota} inválida`);
    }
  }

  // Validando ambas as notas
  validarNota(nota1, "1UP");
  validarNota(nota2, "2UP");

  // Se ambas as notas forem válidas, elas são "salvas" (retornadas como um objeto)
  return {
    nota1UP: nota1,
    nota2UP: nota2,
    mensagem: "Notas salvas com sucesso",
  };
}

module.exports = { lancarNota };
