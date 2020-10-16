class Transaction {

    constructor (
        private _date: Date,
        private _quantity: number,
        private _unitPrice: number) {}

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