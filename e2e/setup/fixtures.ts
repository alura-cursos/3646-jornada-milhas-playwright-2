import { test as base } from "@playwright/test";
import PaginaPrincipal from "e2e/page-objects/PaginaPrincipal";
import PaginaLogin from "e2e/page-objects/PaginaLogin";
import PaginaCadastro from "e2e/page-objects/PaginaCadastro";

export const test = base.extend<{
  paginaPrincipal: PaginaPrincipal,
  paginaLogin: PaginaLogin,
  paginaCadastro: PaginaCadastro
}>({
  paginaPrincipal: async ({ page }, use) => {
    const paginaPrincipal = new PaginaPrincipal(page);
    await use(paginaPrincipal);
  },
  paginaLogin: async ({ page }, use) => {
    const paginaLogin = new PaginaLogin(page);
    await use(paginaLogin);
  },
  paginaCadastro: async ({ page }, use) => {
    const paginaCadastro = new PaginaCadastro(page);
    await use(paginaCadastro);
  },
});
