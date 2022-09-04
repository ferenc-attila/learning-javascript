class Messenger {

    #containerId = null;
    #hideAfterMilliSec = null;

    constructor(container = '#messages', hideAfterMilliSec = 5000) {
        this.#containerId = container;
        this.#hideAfterMilliSec = hideAfterMilliSec;
    }

    createAlertDiv (type, message = '#message') {
        const alertDiv = document.createElement('div');
        alertDiv.textContent = message;
        alertDiv.classList.add(
            'alert',
            'rounded-0',
            `${type === 'error' ? 'alert-danger' : 'alert-success'}`
        );
        this.showMessage(alertDiv);
    }

    showMessage(alertDiv) {
        document.querySelector(this.#containerId).insertAdjacentElement('afterbegin', alertDiv);
        this.hideMessage(alertDiv);
    }

    hideMessage(alertDiv) {
        setTimeout(() => {
            alertDiv.remove();
        }, this.#hideAfterMilliSec);
    }

    error (message) {
        this.createAlertDiv('error', message);
    }

    success (message) {
        this.createAlertDiv('success', message);
    }
};

export { Messenger };