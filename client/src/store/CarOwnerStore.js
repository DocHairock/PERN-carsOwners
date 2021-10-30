import {makeAutoObservable} from "mobx";

export default class CarOwnerStore {
    constructor() {
        
        this._CarOwner = []
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }


    setCarOwner(CarOwner) {
        this._CarOwner = CarOwner
    }
  
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get CarOwner() {
        return this._CarOwner
    }
    
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}