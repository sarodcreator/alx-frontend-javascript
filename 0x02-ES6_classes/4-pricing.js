export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }
  set amount(N) {
      this.amount = N;
  }
  get currency() {
    return this._currency;
  }
  set currency(C) {
      this.currency = C;
  }

  displayFullPrice(){
    return `${this.amount} ${this.currency_name} (${this.currency_code})`
  }
  convertPrice (amount, conversionRate){
    return amount * conversionRate
  }
}
