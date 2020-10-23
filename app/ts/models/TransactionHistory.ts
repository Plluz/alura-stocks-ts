class TransactionHistory {
    
    private _transactions: Transaction[];

    add(transaction: Transaction): void {
        this._transactions.push(transaction);
    }

    toArray(): Transaction[] {
        return [].concat(this._transactions);
    }
}