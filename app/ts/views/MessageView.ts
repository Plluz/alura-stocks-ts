class MessageView {

    private _element: Element;

    constructor(selector: string) {
        this._element = document.querySelector(selector);
    }

    update(): void {
        this._element.innerHTML = this.template();
    }

    template(): string {
        return `<p class="alert alert-success">New transaction added!</p>`
    }
}