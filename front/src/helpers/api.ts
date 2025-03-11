import { IAdminRoutes } from "./interfaces";
export const BASE_URL = "http://localhost";

export const admin: IAdminRoutes = {
  CREATEGAME: "/Games_CRUD_DTST/pruebaphpapi/game/create",
  UPDATEGAME: "/Games_CRUD_DTST/pruebaphpapi/game/update",
  CONSOLES: "/Games_CRUD_DTST/pruebaphpapi/game/consoles",
  GETGAMEBYID: "/Games_CRUD_DTST/pruebaphpapi/game/gamesById"
};
