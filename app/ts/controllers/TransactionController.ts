class TransactionController {
    
    private _inputDate: HTMLInputElement;
    private _inputQuantity: HTMLInputElement;
    private _inputUnitPrice: HTMLInputElement;
    private _transactionHistory = new TransactionHistory();
    private _transactionView = new TransactionView('#transactionsView');
    private _messageView = new MessageView('#messageView');

    constructor() {
        this._inputDate = <HTMLInputElement>document.querySelector('#purchaseDate');
        this._inputQuantity = <HTMLInputElement>document.querySelector('#quantity');
        this._inputUnitPrice = <HTMLInputElement>document.querySelector('#unitPrice');
        this._transactionView.update(this._transactionHistory);
    }

    add(event: Event) {
        event.preventDefault();

        const transaction = new Transaction(
            new Date(this._inputDate.value.replace(/-/g, ',')),
            parseInt(this._inputQuantity.value),
            parseFloat(this._inputUnitPrice.value));

        this._transactionHistory.add(transaction);
        this._transactionView.update(this._transactionHistory);
        this._messageView.update("New transaction added!");
    }
}