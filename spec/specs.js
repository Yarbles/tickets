describe("Ticket", function() {
  describe("base", function() {
    it("establishes the base price of the ticket as $10", function() {
      var testTicket = Object.create(Ticket);
      testTicket.getPrice();
      expect(testTicket.getPrice()).to.equal(10);
    });

    it("establishes the price of the ticket as $7 for a old movie", function() {
      var testTicket = Object.create(Ticket);
          testTicket.movieOld();
      expect(testTicket.getPrice()).to.equal(7);
    });

    it("establishes the price of the ticket as $5 for an old, matinee movie", function() {
      var testTicket = Object.create(Ticket);
          testTicket.movieOld();
          testTicket.viewingTime();
      expect(testTicket.getPrice()).to.equal(5);
    });
    it("establishes the price of a senior ticket as $4 for an old, matinee movie", function() {
      var testTicket = Object.create(Ticket);
          testTicket.movieOld();
          testTicket.viewingTime();
          testTicket.buyerAge();
      expect(testTicket.getPrice()).to.equal(4);
    });
  });
});
