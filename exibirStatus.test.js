const { obterStatus } = require("./exibirStatus");

test("Deve retornar 'Reprovado por média' para média inferior a 4.0", () => {
  expect(obterStatus(3.5)).toBe("Reprovado por média");
});

test("Deve retornar 'Aguardando a final' para média igual a 4.0", () => {
  expect(obterStatus(4.0)).toBe("Aguardando a final");
});

test("Deve retornar 'Aguardando a final' para média entre 4.0 e 6.0", () => {
  expect(obterStatus(5.5)).toBe("Aguardando a final");
});

test("Deve retornar 'Aprovado por média' para média igual a 6.0", () => {
  expect(obterStatus(6.0)).toBe("Aprovado por média");
});

test("Deve retornar 'Aprovado por média' para média superior a 6.0", () => {
  expect(obterStatus(7.5)).toBe("Aprovado por média");
});

test("Deve lançar erro para média fora do intervalo", () => {
  expect(() => obterStatus(-1.0)).toThrow("Média inválida");
  expect(() => obterStatus(11.0)).toThrow("Média inválida");
});
