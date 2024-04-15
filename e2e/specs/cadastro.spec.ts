import { test } from "e2e/setup/fixtures";

test.describe('Página de cadastro', () => {
  test("Deve conseguir fazer cadastro", async ({ paginaCadastro }) => {
    await paginaCadastro.visitar();
  });
});
