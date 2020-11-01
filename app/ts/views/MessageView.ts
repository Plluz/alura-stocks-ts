class MessageView extends View {

    update(): void {
        this._element.innerHTML = this.template();
    }

    template(): string {
        return `<p class="alert alert-success">New transaction added!</p>`
    }
}