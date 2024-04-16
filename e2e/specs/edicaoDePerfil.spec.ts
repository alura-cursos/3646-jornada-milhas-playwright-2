import { gerarPerfil } from "e2e/operacoes/gerarPerfil";
import { testeLogado } from "e2e/setup/testeLogado";

testeLogado.describe("Página de perfil", () => {
  testeLogado("Deve conseguir editar o perfil", async ({ paginaPerfil }) => {
    const novosDados = gerarPerfil();

    await paginaPerfil.visitar();
    await paginaPerfil.atualizarUsuario(novosDados);
  });
});
