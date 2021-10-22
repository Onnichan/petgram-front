import { SignIn } from "pages/Auth/SignIn";
import { SignUp } from "pages/Auth/SignUp";
import { Error404 } from "pages/Errors/Error404";
import { Followers } from "pages/Followers/Followers";
import { Home } from "pages/Home/Home";
import { LoadSubroutesHome } from "routes/LoadRoutes/Components/LoadSubroutesHome";
import { Team } from "pages/Team/Team";
import { UserProfile } from "pages/UserProfile/UserProfile";

export const routes = [
  {
    path: "/",
    exact: false,
    component: LoadSubroutesHome,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home,
      },
      {
        path: "/sign-in",
        exact: true,
        component: SignIn,
      },
      {
        path: "/sign-up",
        exact: true,
        component: SignUp,
      },
      {
        path: "/team",
        exact: true,
        component: Team,
      },
      {
        path: "/followers",
        component: Followers,
        exact: true,
      },
      {
        path: "/:username",
        component: UserProfile,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
];
