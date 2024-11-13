function obterStatus(media) {
  if (typeof media !== "number" || media < 0.0 || media > 10.0) {
    throw new Error("Média inválida");
  }

  if (media < 4.0) {
    return "Reprovado por média";
  } else if (media >= 6.0) {
    return "Aprovado por média";
  } else {
    return "Aguardando a final";
  }
}

module.exports = { obterStatus };
