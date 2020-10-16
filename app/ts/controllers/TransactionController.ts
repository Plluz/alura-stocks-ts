class TransactionController {
    
    private _inputDate;
    private _inputQuantity;
    private _inputUnitPrice;

    constructor() {
        this._inputDate = document.querySelector('#purchaseDate');
        this._inputQuantity = document.querySelector('#quantity');
        this._inputUnitPrice = document.querySelector('#unitPrice');
    }

    add(event) {
        event.preventDefault();

        const transaction = new Transaction(
            this._inputDate.value,
            this._inputQuantity.value,
            this._inputUnitPrice.value);

        console.log(transaction);
    }
} 