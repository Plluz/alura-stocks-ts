class TransactionHistory {
    
    private _transactions: Transaction[];

    add(transaction: Transaction) {
        this._transactions.push(transaction);
    }

    toArray() {
        return this._transactions;
    }
}