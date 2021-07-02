export class ExchangeResponse {
    mount: number;
    mount_exchange: number;
    currency_origin: string;
    currency_destiny: string;
    exchange_rate: string;

    constructor(mount: number,mount_exchange: number,currency_origin: string ,currency_destiny: string, exchange_rate: string) {
        this.mount = mount;
        this.mount_exchange = mount_exchange;
        this.currency_origin = currency_origin;
        this.currency_destiny = currency_destiny;
        this.exchange_rate = exchange_rate;
    }
}
