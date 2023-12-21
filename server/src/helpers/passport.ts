import passport from "passport";
import { Strategy as Local } from "passport-local";
import { Strategy as Bearer } from "passport-http-bearer";
import { type RequestHandler } from "express";

const user = {
  username: process.env.ADMIN_USERNAME,
  password: process.env.ADMIN_PASSWORD,
  token: process.env.ADMIN_TOKEN,
};

passport.use(
  new Local(async (username: string, password: string, done: any) => {
    const ok = username === user.username && user.password === password;

    if (!ok) {
      done(null, false, "Invalid username or password!");
    }

    // Success
    done(null, user);
  })
);

passport.use(
  new Bearer(async (token: string, done: any) => {
    if (token !== process.env.ADMIN_TOKEN) {
      done(null, false, "Invalid token!");
    }
    return done(null, user, { scope: "all" });
  })
);

export const isLoggedIn: RequestHandler<unknown, any, any, unknown> =
  passport.authenticate("bearer", {
    session: false,
  });
