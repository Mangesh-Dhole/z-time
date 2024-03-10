import { tap } from "rxjs";
import { BaseEntity } from "src/app/core/model/entity/base.entity";
import { NotificationService } from "../../services/notification.service";

export class SuccessFailureHandler<T> {
  entity: BaseEntity<T>;
  notificationService: NotificationService;
  ACTION_MESSAGE_MAPPING?: any;
  constructor({
    entity,
    notificationService,
    ACTION_MESSAGE_MAPPING
  }: {
    entity: any;
    notificationService: NotificationService;
    ACTION_MESSAGE_MAPPING?: any;
  }) {
    this.entity = entity;
    this.notificationService = notificationService;
    this.ACTION_MESSAGE_MAPPING = ACTION_MESSAGE_MAPPING;
  }

  getSuccessOrFailureCallBack({
    setState,
    state,
    parentId = null,
    deletedId = null
  }: any) {
    return tap(
      (result: any = {}) => {
        console.log( result ,'result', parentId ,'parentId', setState ,'setState', state ,'state', deletedId ,'deletedId');   
        this.handleSuccess({ result, parentId, setState, state, deletedId });
        return this.entity.actionType && this.showSuccessMessage();
      },
      (error: any) => {
        return this.handleError({ error, setState, state });
      }
    );
  }

  getSuccessOrFailureCallBackWithDispatchFunction({
    setState,
    state,
    parentId,
    deletedId = null,
    dispatch = null,
    dispatchedAction = null,
    childId = null,
    propertyToUpdate = null,
    dispatchedId = null,
    dispatchedActionWithParams = null
  }: any) {
    return tap(
      (result: any = {}) => {
        this.handleSuccess({ result, parentId, setState, state, deletedId });
        if (dispatch && dispatchedAction) {
          this.dispatchAction({
            dispatch,
            dispatchedAction,
            parentId,
            dispatchedId,
            childId,
            propertyToUpdate,
            dispatchedActionWithParams
          });
        }
        return this.entity.actionType && this.showSuccessMessage();
      },
      (error: any) => {
        return this.handleError({ error, setState, state });
      }
    );
  }

  dispatchAction({
    dispatch,
    dispatchedAction,
    parentId,
    dispatchedId,
    childId,
    propertyToUpdate,
    dispatchedActionWithParams
  }: any) {
    dispatch(
      dispatchedId
        ? new dispatchedAction(
            this.entity.updatedState().items,
            parentId || dispatchedId,
            childId,
            propertyToUpdate
          )
        : dispatchedActionWithParams
        ? new dispatchedAction(...dispatchedActionWithParams)
        : new dispatchedAction()
    );
  }

  showSuccessMessage() {
    return this.notificationService.showMessage(
      this.ACTION_MESSAGE_MAPPING[this.entity.actionType]
    );
  }

  handleSuccess({ deletedId, result, state, parentId, setState }: any) {
    deletedId
      ? this.entity.deleteItem(deletedId)
      : this.entity.updateItems(result);
    setState(this.entity.updatedState(state, parentId));
  }

  handleError({ error, setState, state }: any) {
    setState({ ...state, loading: false });
    return this.notificationService.showErrorMessage(error);
  }

  handleSuccessOnPaginatedData({
    deletedId,
    result,
    state,
    parentId,
    setState
  }: any) {
    deletedId
      ? this.entity.deleteItem(deletedId)
      : this.entity.updateItems(result);
    setState(this.entity.updatedEntityItemsOnSaveAndUpdate(state));
  }

  getPaginationSuccessOrFailureCallBack({
    setState,
    state,
    parentId = null,
    deletedId = null
  }:any) {
    return tap(
      (result: any = {}) => {
        this.handlePaginationSuccess({
          result,
          setState,
          state,
          parentId,
          deletedId
        });
        return this.entity.actionType && this.showSuccessMessage();
      },
      (error: any) => {
        return this.handleError({ error, setState, state });
      }
    );
  }

  getPaginationSuccessOrFailureCallBackWithDispatchFunction({
    setState,
    state,
    parentId = null,
    deletedId = null,
    dispatch = null,
    dispatchedAction = null,
    childId = null,
    propertyToUpdate = null,
    dispatchedId = null,
    dispatchedActionWithParams = null
  }: any) {
    return tap(
      (result: any = {}) => {
        this.handlePaginationSuccess({
          result,
          setState,
          state,
          parentId,
          deletedId
        });
        if (dispatch && dispatchedAction) {
          this.dispatchAction({
            dispatch,
            dispatchedAction,
            parentId,
            dispatchedId,
            childId,
            propertyToUpdate,
            dispatchedActionWithParams
          });
        }
        return this.entity.actionType && this.showSuccessMessage();
      },
      (error: any) => {
        return this.handleError({ error, setState, state });
      }
    );
  }

  handlePaginationSuccess({ result, state, setState, parentId, deletedId }: any) {
    if (!result.results || deletedId) {
      this.handleSuccess({
        deletedId,
        result,
        state,
        parentId,
        setState
      });
    } else {
      this.entity.updatePaginatedItems(
        result?.results ? result.results : result
      );
      this.entity.setPageCount(result.pageCount || state.pageCount);
      this.entity.setCurrentPage(result.currentPage || state.currentPage);
      this.entity.setTotalCount(result.rowCount || state.totalCount);
      this.entity.setPageSize(result.pageSize || state.pageSize);
      this.entity.setSelectedPage(result.currentPage || state.selectedPage);
      setState(this.entity.updatedState(state, parentId));
    }
  }

  getPaginatedActionSuccessOrFailureCallBack({
    setState,
    state,
    parentId = null,
    deletedId = null
  }: any) {
    return tap(
      (result: any = {}) => {
        this.handleSuccessOnPaginatedData({
          result,
          parentId,
          setState,
          state,
          deletedId
        });
        return this.entity.actionType && this.showSuccessMessage();
      },
      (error: any) => {
        return this.handleError({ error, setState, state });
      }
    );
  }

  setAndFilterSavedItems({ setState, state, parentId } : any) {
    this.entity.setItems(parentId ? state.items[parentId] : state.items);
    setState({
      ...state,
      items: parentId
        ? { ...state.items, [parentId]: this.entity.filterItemsWithId }
        : this.entity.filterItemsWithId,
      inEditMode: false,
      loading: false
    });
  }
}
