var Ticket = {
  price: 0,
  old: 5,
  base: function() {
    this.price = this.price + this.old;
  }
};
