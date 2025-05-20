import { About, Home } from "../components";
import type { AppRoute } from "./types";

export const routes: AppRoute[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
];