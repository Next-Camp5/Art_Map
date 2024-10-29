import { ReactElement } from 'react';

export interface State<TData> {
  data: TData | null;
  error: Error | null;
}

export interface IServerActionStateBase<TData> {
  isPending: boolean;
  state: State<TData>;
}

export interface IServerActionStateDefault<TData>
  extends IServerActionStateBase<TData> {
  successComponent: ReactElement;
}

export interface IServerActionStateGen<TData>
  extends IServerActionStateBase<TData> {
  successComponent: ReactElement;
  errorComponent: ReactElement;
  loadingComponent: ReactElement;
  dataOnSuccessCanBeNull: boolean;
}
