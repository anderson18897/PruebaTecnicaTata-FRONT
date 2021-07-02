export class ExchangeRequest {
    mount: number;
    currency_origin: string;
    currency_destiny: string;

    constructor(mount: number,currency_origin: string, currency_destiny: string) {
        this.mount = mount;
        this.currency_destiny = currency_destiny;
        this.currency_origin = currency_origin;
    }
}
