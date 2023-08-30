import { AnyAction } from "redux";

// & := INTERSECTION
// ReturnType := gives back the return type
type Matchable<ActionCreator extends () => AnyAction> = ActionCreator & {
  // Reach into the action get type value and set it to this type
  type: ReturnType<ActionCreator>["type"];
  // if ActionCreator is of type fetchCategory... => it matches
  match(action: AnyAction): action is ReturnType<ActionCreator>;
};

export function withMatcher<
  ActionCreator extends () => AnyAction & { type: string }
>(actionCreator: ActionCreator): Matchable<ActionCreator>;

export function withMatcher<
  ActionCreator extends (...args: any[]) => AnyAction & { type: string }
>(actionCreator: ActionCreator): Matchable<ActionCreator>;

// check if action type of passed action matches the type itself
// it narrows down the type from AnyAction to the return type
// of the ActionCreator.
// determine if passed action has the same action as the one that they create
export function withMatcher(actionCreator: Function) {
  const type = actionCreator().type;

  return Object.assign(actionCreator, {
    type,
    match(action: AnyAction) {
      return action.type === type;
    },
  });
}

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;
};

// Overload function
export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

export function createAction<T extends string>(
  type: T,
  payload: void
): Action<T>;

export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}
