# Repro

1. Install all the dependencies (I use `pnpm`)
2. Run the server in dev or preview mode and navigate to `http://localhost:3000/protected`
3. You should get redirected to `/auth/login` and have the option to log in (take a look at the client & serverside logs)
4. Stop your dev server
5. Build the site with `pnpm build`
6. Run the server through the adapter via `node _build`
7. If you are logged in, you'll get thrown to the login page event though you have a `token` cookie set
8. In any case, you won't be able to log in anymore
