class TransactionView {

    private _element: Element;

    constructor(selector: string) {
        this._element = document.querySelector(selector);
    }

    update(model: TransactionHistory): void {
        this._element.innerHTML = this.template(model);
    }

    template(model: TransactionHistory): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATE</th>
                    <th>QUANTITY</th>
                    <th>UNIT PRICE</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${model.toArray().map(transaction => 
                    `
                    <tr>
                        <td>${transaction.date}</td>
                        <td>${transaction.quantity}</td>
                        <td>R\$ ${transaction.unitPrice}</td>
                        <td>${transaction.volume}</td>
                    </tr>
                    `
                ).join('')}
            </tbody>

            <tfoot>
            </tfoot>
        </table>  
        `;
    }
}