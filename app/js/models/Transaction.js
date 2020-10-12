class Transaction {
    constructor (date, quantity, unitPrice){
        this._date = date;
        this._quantity = quantity;
        this._unitPrice = unitPrice;
    }

    get date() {
        return this._date;
    }

    get quantity() {
        return this._quantity;
    }

    get unitPrice() {
        return this._unitPrice;
    }

    get volume() {
        return this._quantity * this._unitPrice;
    }
}