import { CombitimePaginatedData } from "../const/shared-contant";
import { ACTION } from "../enum/shared-enum";

export class BaseEntity<T> {
    constructor(model: any) {
      this.model = model;
    }
    public actionType : any;
    items: Array<any> = [];
    model: any;
    currentPage = CombitimePaginatedData.currentPage;
    pageCount = CombitimePaginatedData.pageCount;
    pageSize = CombitimePaginatedData.pageSize;
    totalCount = CombitimePaginatedData.totalCount;
    selectedPage = CombitimePaginatedData.currentPage;
    itemForUpdate: any;
  
    updatedState(state?: any, id?: any) {
      return {
        items: id ? { ...state.items, [id]: this.items } : this.items,
        loading: false,
        inEditMode: false
      };
    }
  
    setItemList(items: any) {
      this.items = items;
    }
  
    setItems(items: Array<T>) {
      this.items = this.getAllItems(items);
    }
  
    filterNonSavedItems(items: any[]) {
      this.items = items?.filter(itm => !!itm?.id);
    }
  
    setPageCount(pageCount = 0) {
      this.pageCount = pageCount;
    }
  
    setCurrentPage(currentPage = 0) {
      this.currentPage = currentPage;
    }
  
    setSelectedPage(selectedPage = 0) {
      this.selectedPage = selectedPage;
    }
  
    setTotalCount(totalCount = 0) {
      this.totalCount = totalCount;
    }
  
    setPageSize(pageSize = CombitimePaginatedData.pageSize) {
      this.pageSize = pageSize;
    }
  
    deleteItem(id?: string) {
      this.items = this.items.filter(item => (!id ? item.id : item.id !== id));
      if (id) {
        this.actionType = ACTION.DELETE;
      }
    }
  
    updateItems(itemForUpdate: T | Array<T>) {
      this.items = Array.isArray(itemForUpdate)
        ? this.getAllItems(itemForUpdate)
        : this.getUpdatedItemsAfterUpdateOrSave(itemForUpdate);
    }
  
    updatePaginatedItems(itemForUpdate: T | Array<T>) {
      this.items = Array.isArray(itemForUpdate)
        ? this.getAllPaginatedItems(itemForUpdate)
        : this.getUpdatedItemsAfterUpdateOrSave(itemForUpdate);
    }
  
    protected getAllItems(itemForUpdate: Array<T>): Array<T> {
      this.actionType = null;
      return this.model.fromList(itemForUpdate);
    }
  
    protected getAllPaginatedItems(itemsForUpdate: Array<T | any>) {
      this.actionType = null;
      itemsForUpdate = this.model.fromList(itemsForUpdate);
      this.items = this.items.map(item => {
        const updatedItem = itemsForUpdate.find(
          newItem => item.id === newItem.id
        );
        if (updatedItem) {
          return updatedItem;
        }
        return item;
      });
      itemsForUpdate = itemsForUpdate.filter(
        newItem => !this.items.find(item => item.id === newItem.id)
      );
      return [...this.items, ...itemsForUpdate];
    }
  
    protected getUpdatedItemsAfterUpdateOrSave(itemForUpdate: any) {
      this.actionType = this.items.filter(item => !item.id).length
        ? ACTION.CREATE
        : ACTION.UPDATE;
      this.itemForUpdate = itemForUpdate;
      return this.items?.map(item =>
        !item?.id
          ? new this.model(itemForUpdate)
          : item.id === itemForUpdate.id
          ? new this.model(itemForUpdate)
          : item
      );
    }
  
    get filterItemsWithId() {
      this.setItemList(this.items.filter(result => result.id));
      return this.items;
    }
  
    createNewItem(key?: any, value?: any) {
      this.items = [
        ...this.items,
        new this.model({
          isNew: true,
          ...(key && { [key]: value })
        })
      ];
    }
  
    getItemById(id: string) {
      return this.items.find(item => item.id === id);
    }
  
    updatedEntityItemsOnSaveAndUpdate(state?: any) {
      return {
        items: this.getData(state),
        loading: false,
        inEditMode: false,
        currentPage: this.currentPage,
        pageCount: this.pageCount,
        pageSize: this.pageSize
      };
    }
  
    getData(state: any) {
      return state.items.map((val: any) => {
        return val.id === this.itemForUpdate.id
          ? new this.model(this.itemForUpdate)
          : val;
      });
    }
  }
  