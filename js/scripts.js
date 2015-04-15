var Ticket = {
  price: 10,
  old: false,
  matinee: false,
  seniorchild: false,

  movieOld: function(){
    this.old = true;
  },

  viewingTime: function(curtain){
    this.matinee = curtain;
  },

  buyerAge: function(seniorchild){
    this.seniorchild = seniorchild;
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
