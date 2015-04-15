var Ticket = {
  price: 10,
  old: false,
  matinee: false,
  seniorchild: false,

  movieOld: function(){
    this.old = true;
  },

  viewingTime: function(){
    this.matinee = true;
  },

  buyerAge: function(){
    this.seniorchild = true;
  },


  getPrice: function() {
    if (this.old === true) {
      this.price -= 3;
    }

    if (this.matinee === true) {
      this.price -= 2;
    }

    if (this.seniorchild === true) {
      this.price -= 1;
    }
    return this.price;
  }
};
