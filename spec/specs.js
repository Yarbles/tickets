describe("Ticket", function() {
  describe("base", function() {
    it("establishes the base price of the ticket as $10", function() {
      var testTicket = Object.create(Ticket);
      testTicket.getPrice();
      expect(testTicket.getPrice()).to.equal(10);
    });

    it("establishes the base price of the ticket as $7 for a old movie", function() {
      var testTicket = Object.create(Ticket);
          testTicket.movieOld();
      expect(testTicket.getPrice()).to.equal(7);
    });
  });
});
