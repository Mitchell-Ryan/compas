// Generated by @compas/code-gen
/* eslint-disable no-unused-vars */

import { ParameterizedContext as Context } from "koa";
import { InsightEvent, Logger } from "@compas/stdlib";
import { Next } from "@compas/server";
import { Middleware } from "@compas/server";
declare global {
  // Return the full generated structure as a json object.
  type CompasStructure = undefined | any;
  type CompasStructureResponse = any;
  type TodoAdd = CompasStructure;
  type TodoAddResponse = { todo: TodoItem };
  type TodoItem = {
    id: string;
    task: string;
    metadata: { tags: string[]; isUrgent: boolean };
    createdAt: Date;
  };
  type TodoComplete = CompasStructure;
  type TodoCompleteParams = { id: string };
  type TodoCompleteResponse = { success: true };
  type TodoItemPick = {
    task: string;
    metadata: { tags: string[]; isUrgent: boolean };
  };
  type TodoList = CompasStructure;
  type TodoListResponse = { todos: TodoItem[] };
  type TodoSingle = CompasStructure;
  type TodoSingleParams = TodoCompleteParams;
  type TodoSingleResponse = TodoAddResponse;
  type CompasStructureResponseInput = CompasStructureResponse;
  type TodoAddResponseInput = { todo: TodoItemInput };
  type TodoItemInput = TodoItem;
  type TodoCompleteParamsInput = TodoCompleteParams;
  type TodoCompleteResponseInput = TodoCompleteResponse;
  type TodoItemPickInput = TodoItemPick;
  type TodoListResponseInput = { todos: TodoItemInput[] };
  type TodoSingleParamsInput = TodoCompleteParams;
  type TodoSingleResponseInput = TodoAddResponseInput;
  type CompasStructureCtx = Context<
    {},
    {
      event: InsightEvent;
      log: Logger;
    },
    CompasStructureResponse
  >;
  type CompasStructureFn = (
    ctx: CompasStructureCtx,
    next: Next,
  ) => void | Promise<void>;
  type TodoAddCtx = Context<
    {},
    {
      event: InsightEvent;
      log: Logger;
      validatedBody: TodoItemPick;
    },
    TodoAddResponse
  >;
  type TodoAddFn = (ctx: TodoAddCtx, next: Next) => void | Promise<void>;
  type TodoCompleteCtx = Context<
    {},
    {
      event: InsightEvent;
      log: Logger;
      validatedParams: TodoCompleteParams;
    },
    TodoCompleteResponse
  >;
  type TodoCompleteFn = (
    ctx: TodoCompleteCtx,
    next: Next,
  ) => void | Promise<void>;
  type TodoListCtx = Context<
    {},
    {
      event: InsightEvent;
      log: Logger;
    },
    TodoListResponse
  >;
  type TodoListFn = (ctx: TodoListCtx, next: Next) => void | Promise<void>;
  type TodoSingleCtx = Context<
    {},
    {
      event: InsightEvent;
      log: Logger;
      validatedParams: TodoSingleParams;
    },
    TodoSingleResponse
  >;
  type TodoSingleFn = (ctx: TodoSingleCtx, next: Next) => void | Promise<void>;
  type GroupMiddleware = {
    compas: Middleware | Middleware[];
    todo: Middleware | Middleware[];
  };
}