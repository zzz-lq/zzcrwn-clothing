import { AnyAction } from "redux";

// 返回AC与{}的联合类型,ReturnType<AC>返回AC返回的类型
type Matchable<AC extends () => AnyAction> = AC & {
  type: ReturnType<AC>["type"],
  match(action: AnyAction): action is ReturnType<AC>;
}

export function withMatch<AC extends () => AnyAction & {type:string}>(actionCreator: AC): Matchable<AC>;

export function withMatch<AC extends (...angs: any[]) => AnyAction & {type:string}>(actionCreator: AC): Matchable<AC>;

export function withMatch(actionCreator: Function) {
  // 获取当前传入action的type
  const type = actionCreator().type
  return Object.assign(actionCreator,{
    type,
    // 返回传入的action和当前action的type比较结果
    match(action:AnyAction){
      return action.type === type
    }
  })
}

export type ActionWithPayload<T,P> = {
  type: T,
  payload: P
}

export type Action<T> = {
  type: T
}

// 重载签名
// 重载有只有action和action、payload两种
export function createAction<T extends string,P>(type:T, payload:P):ActionWithPayload<T,P>

export function createAction<T extends string,P>(type:T, payload:void):Action<T>

// 实现签名
// 与重载签名一致
export function createAction<T extends string,P>(type:T, payload:P){
  return{ type, payload};
}