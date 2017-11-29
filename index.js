describe('index.js', function () {
  describe('scuberGreetingForFeet()', function () {
    it('gives customers a free sample if the ride is less than or equal to 400 feet', function () {
      expect(scuberGreetingForFeet(199)).to.equal('This one is on me!');
    });

    it('charges 30 dollars for a distance over 2000 feet', function () {
      expect(scuberGreetingForFeet(2001)).to.equal('I will gladly take your thirty bucks.');
    });

    it('does not allow rides over 2500 feet', function () {
      expect(scuberGreetingForFeet(2501)).to.equal('No can do.');
    });
  });

  function scuberGreetingForFeet (distance) {
    if (distance <= 400) {
      return ('This one is on me!')
    } else if (distance > 20000 && distance < 2500) {
      return ('I will gladly take your thirty bucks.')
    } else if (distance > 2500)
    return ('No can do.')
    }
    }
  }
