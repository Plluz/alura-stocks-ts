class TransactionController {
    
    private _inputDate: HTMLInputElement;
    private _inputQuantity: HTMLInputElement;
    private _inputUnitPrice: HTMLInputElement;

    constructor() {
        this._inputDate = <HTMLInputElement>document.querySelector('#purchaseDate');
        this._inputQuantity = <HTMLInputElement>document.querySelector('#quantity');
        this._inputUnitPrice = <HTMLInputElement>document.querySelector('#unitPrice');
    }

    add(event: Event) {
        event.preventDefault();

        const transaction = new Transaction(
            new Date(this._inputDate.value.replace(/-/g, ',')),
            parseInt(this._inputQuantity.value),
            parseFloat(this._inputUnitPrice.value));

        console.log(transaction);
    }
} 