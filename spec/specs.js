describe("Ticket", function() {
  describe("base", function() {
    it("establishes the base price of the ticket as $5 for an old movie", function() {
      var testTicket = Object.create(Ticket);
      testTicket.base(5);
      expect(testTicket.price).to.equal(5);
    });
  });
});
