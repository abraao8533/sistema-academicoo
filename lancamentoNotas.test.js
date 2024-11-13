const { lancarNota } = require("./lancamentoNotas");

test("Deve salvar as notas quando válidas", () => {
  expect(() => lancarNota(7.5, 8.2)).not.toThrow();
});

test("Deve lançar erro para nota 1UP fora do intervalo", () => {
  expect(() => lancarNota(-1.0, 8.2)).toThrow("Nota de 1UP inválida");
});
