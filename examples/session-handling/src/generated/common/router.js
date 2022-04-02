// Generated by @compas/code-gen
/* eslint-disable no-unused-vars */

import { compose } from "@compas/server";
import { AppError, eventRename } from "@compas/stdlib";
import { authHandlers } from "../auth/controller.js";
import * as authValidators from "../auth/validators.js";
import { compasHandlers } from "../compas/controller.js";
import * as compasValidators from "../compas/validators.js";
import { compasApiStructureString } from "./structure.js";

let internalBodyParsers = undefined;
/**
 * @param {BodyParserPair} parsers
 */
export function setBodyParsers(parsers) {
  internalBodyParsers = {
    body: parsers.bodyParser,
    files: parsers.multipartBodyParser,
  };
}

const filterCompose = (...args) =>
  compose(args.filter((it) => it !== undefined));

const decodePathParam = (arg) => {
  try {
    return decodeURIComponent(arg);
  } catch (e) {
    throw AppError.validationError("router.param.invalidEncoding", {
      param: arg,
    });
  }
};
/**
 * @typedef GroupMiddleware
 * @property {CMiddleware|CMiddleware[]|undefined} auth
 * @property {CMiddleware|CMiddleware[]|undefined} compas
 * @property {CMiddleware|CMiddleware[]|undefined} store
 */
/**
 * @type {GroupMiddleware}
 */
export const groupMiddleware = {
  auth: undefined,
  compas: undefined,
  store: undefined,
};

const _composed = {
  AuthLogin: undefined,
  AuthLogout: undefined,
  AuthMe: undefined,
  AuthRefreshTokens: undefined,
  CompasStructure: undefined,
};

/**
 * Clear composed handlers.
 *
 * All handlers are composed via a koa-compose like and then memoized. When overwriting an
 * handler when the route is already called, the overwritten handlers will not be
 * executed till this function is called.
 */
export function routerClearMemoizedHandlers() {
  for (const key of Object.keys(_composed)) {
    _composed[key] = undefined;
  }
}

const handlers = {
  AuthLogin: (params, ctx, next) => {
    if (ctx.event) {
      eventRename(ctx.event, `router.auth.login`);
    }
    ctx.request.params = params;
    if (_composed.AuthLogin === undefined) {
      const currentHandler = authHandlers.login;
      _composed.AuthLogin = filterCompose(
        ...(Array.isArray(groupMiddleware.auth)
          ? groupMiddleware.auth
          : [groupMiddleware.auth]),
        ...(Array.isArray(currentHandler) ? currentHandler : [currentHandler]),
      );
    }
    return _composed.AuthLogin(ctx, next);
  },

  AuthLogout: (params, ctx, next) => {
    if (ctx.event) {
      eventRename(ctx.event, `router.auth.logout`);
    }
    ctx.request.params = params;
    if (_composed.AuthLogout === undefined) {
      const currentHandler = authHandlers.logout;
      _composed.AuthLogout = filterCompose(
        ...(Array.isArray(groupMiddleware.auth)
          ? groupMiddleware.auth
          : [groupMiddleware.auth]),
        ...(Array.isArray(currentHandler) ? currentHandler : [currentHandler]),
      );
    }
    return _composed.AuthLogout(ctx, next);
  },

  AuthMe: (params, ctx, next) => {
    if (ctx.event) {
      eventRename(ctx.event, `router.auth.me`);
    }
    ctx.request.params = params;
    if (_composed.AuthMe === undefined) {
      const currentHandler = authHandlers.me;
      _composed.AuthMe = filterCompose(
        ...(Array.isArray(groupMiddleware.auth)
          ? groupMiddleware.auth
          : [groupMiddleware.auth]),
        ...(Array.isArray(currentHandler) ? currentHandler : [currentHandler]),
      );
    }
    return _composed.AuthMe(ctx, next);
  },

  AuthRefreshTokens: async (params, ctx, next) => {
    if (ctx.event) {
      eventRename(ctx.event, `router.auth.refreshTokens`);
    }
    ctx.request.params = params;
    await internalBodyParsers.body(ctx);
    const validatedBody = authValidators.validateAuthRefreshTokensBody(
      ctx.request.body,
    );
    if (validatedBody.error) {
      throw validatedBody.error;
    }
    ctx.validatedBody = validatedBody.value;
    if (_composed.AuthRefreshTokens === undefined) {
      const currentHandler = authHandlers.refreshTokens;
      _composed.AuthRefreshTokens = filterCompose(
        ...(Array.isArray(groupMiddleware.auth)
          ? groupMiddleware.auth
          : [groupMiddleware.auth]),
        ...(Array.isArray(currentHandler) ? currentHandler : [currentHandler]),
      );
    }
    return _composed.AuthRefreshTokens(ctx, next);
  },

  CompasStructure: (params, ctx, next) => {
    if (ctx.event) {
      eventRename(ctx.event, `router.compas.structure`);
    }
    ctx.request.params = params;
    if (_composed.CompasStructure === undefined) {
      const currentHandler = compasHandlers.structure;
      _composed.CompasStructure = filterCompose(
        ...(Array.isArray(groupMiddleware.compas)
          ? groupMiddleware.compas
          : [groupMiddleware.compas]),
        ...(Array.isArray(currentHandler) ? currentHandler : [currentHandler]),
      );
    }
    return _composed.CompasStructure(ctx, next);
  },
};

export function router(ctx, next) {
  let triePath = ctx.path.substring(1);
  // Also handle `/` requests
  if (!triePath.endsWith("/") && triePath.length !== 0) {
    triePath += "/";
  }
  triePath += ctx.method;
  const params = Object.create(null);
  let route = undefined;
  route = routeMatcher0(triePath, params, 0);
  if (route !== undefined) {
    return route(params, ctx, next);
  }
  route = routeMatcher1(triePath, params, 0);
  if (route !== undefined) {
    return route(params, ctx, next);
  }
  route = routeMatcher2(triePath, params, 0);
  if (route !== undefined) {
    return route(params, ctx, next);
  }
  route = routeMatcher3(triePath, params, 0);
  if (route !== undefined) {
    return route(params, ctx, next);
  }
  route = routeMatcher4(triePath, params, 0);
  if (route !== undefined) {
    return route(params, ctx, next);
  }
  return next();
}

compasHandlers.structure = (ctx, next) => {
  ctx.set("Content-Type", "application/json");
  ctx.body = compasApiStructureString;
  return next();
};

function routeMatcher0(path, params, currentIdx) {
  if (!path.startsWith("_compas/structure.json/GET", currentIdx)) {
    return undefined;
  }
  return handlers.CompasStructure;
}
function routeMatcher1(path, params, currentIdx) {
  if (!path.startsWith("auth/refresh/POST", currentIdx)) {
    return undefined;
  }
  return handlers.AuthRefreshTokens;
}
function routeMatcher2(path, params, currentIdx) {
  if (!path.startsWith("auth/logout/POST", currentIdx)) {
    return undefined;
  }
  return handlers.AuthLogout;
}
function routeMatcher3(path, params, currentIdx) {
  if (!path.startsWith("auth/login/POST", currentIdx)) {
    return undefined;
  }
  return handlers.AuthLogin;
}
function routeMatcher4(path, params, currentIdx) {
  if (!path.startsWith("auth/me/GET", currentIdx)) {
    return undefined;
  }
  return handlers.AuthMe;
}