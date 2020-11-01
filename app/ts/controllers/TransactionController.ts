class TransactionController {
    
    private _inputDate: JQuery;
    private _inputQuantity: JQuery;
    private _inputUnitPrice: JQuery;
    private _transactionHistory = new TransactionHistory();
    private _transactionView = new TransactionView('#transactionsView');
    private _messageView = new MessageView('#messageView');

    constructor() {
        this._inputDate = $('#purchaseDate');
        this._inputQuantity = $('#quantity');
        this._inputUnitPrice = $('#unitPrice');
        this._transactionView.update(this._transactionHistory);
    }

    add(event: Event) {
        event.preventDefault();

        const transaction = new Transaction(
            new Date(this._inputDate.val().replace(/-/g, ',')),
            parseInt(this._inputQuantity.val()),
            parseFloat(this._inputUnitPrice.val()));

        this._transactionHistory.add(transaction);
        this._transactionView.update(this._transactionHistory);
        this._messageView.update("New transaction added!");
    }
}