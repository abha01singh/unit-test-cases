/*describe("A suite", function() {
   	var b = new Data();
    it("should add two numbers together", function() {
        expect(b.getHistory()).toBe(b.myVal);
    });*/

    /*it("should subtract two numbers", function () {
        expect(subtract(3, 2)).toBe(1);
    });

    it("should multiply correctly", function () {
        expect(multiply(2, 3)).toBe(6);
    });

    it("should divide correctly", function () {
        expect(divide(10, 5)).toBe(2);
    });

    it("should return 0 when dividing by 0", function () {
        expect(divide(1, 0)).toBe(0);
    });

    it("should modulus correctly", function () {
        expect(modulus(10, 2)).toBe(0);
    });*/
//});




/*describe("A spec", function() {
    beforeEach(function() {
        this.foo = 0;
    });

    it("can use the `this` to share state", function() {
        expect(this.foo).toEqual(0);
        this.bar = "test pollution?";
    });

    it("prevents test pollution by having an empty `this` created for the next spec", function() {
        expect(this.foo).toEqual(0);
        expect(this.bar).toBe(undefined);
    });
});*/


/*describe("The 'toBe' matcher compares with ===", function() {
    it("and has a positive case", function() {
        expect(true).toBe(true);
    });
    it("and can have a negative case", function() {
        expect(false).not.toBe(true);
    });
});
*/
/*describe("Included matchers:", function() {

  it("The 'toBe' matcher compares with ===", function() {
    var a = 12;
    var b = a;

    expect(a).toBe(b);
    expect(a).not.toBe(null);
  });

  describe("The 'toEqual' matcher", function() {

    it("works for simple literals and variables", function() {
      var a = 12;
      expect(a).toEqual(12);
    });

    it("should work for objects", function() {
      var foo = {
        a: 12,
        b: 34
      };
      var bar = {
        a: 12,
        b: 34
      };
      expect(foo).toEqual(bar);
    });
  });

  it("The 'toMatch' matcher is for regular expressions", function() {
    var message = "foo bar baz";

    expect(message).toMatch(/bar/);
    expect(message).toMatch("bar");
    expect(message).not.toMatch(/quux/);
  });

  it("The 'toBeDefined' matcher compares against `undefined`", function() {
    var a = {
      foo: "foo"
    };

    expect(a.foo).toBeDefined();
    expect(a.bar).not.toBeDefined();
  });

  it("The `toBeUndefined` matcher compares against `undefined`", function() {
    var a = {
      foo: "foo"
    };

    expect(a.foo).not.toBeUndefined();
    expect(a.bar).toBeUndefined();
  });

  it("The 'toBeNull' matcher compares against null", function() {
    var a = null;
    var foo = "foo";

    expect(null).toBeNull();
    expect(a).toBeNull();
    expect(foo).not.toBeNull();
  });

  it("The 'toBeTruthy' matcher is for boolean casting testing", function() {
    var a, foo = "foo";

    expect(foo).toBeTruthy();
    expect(a).not.toBeTruthy();
  });

  it("The 'toBeFalsy' matcher is for boolean casting testing", function() {
    var a, foo = "foo";

    expect(a).toBeFalsy();
    expect(foo).not.toBeFalsy();
  });

  describe("The 'toContain' matcher", function() {
    it("works for finding an item in an Array", function() {
      var a = ["foo", "bar", "baz"];

      expect(a).toContain("bar");
      expect(a).not.toContain("quux");
    });

    it("also works for finding a substring", function() {
      var a = "foo bar baz";

      expect(a).toContain("bar");
      expect(a).not.toContain("quux");
    });
  });

  it("The 'toBeLessThan' matcher is for mathematical comparisons", function() {
    var pi = 3.1415926,
      e = 2.78;

    expect(e).toBeLessThan(pi);
    expect(pi).not.toBeLessThan(e);
  });

  it("The 'toBeGreaterThan' matcher is for mathematical comparisons", function() {
    var pi = 3.1415926,
      e = 2.78;

    expect(pi).toBeGreaterThan(e);
    expect(e).not.toBeGreaterThan(pi);
  });

  it("The 'toBeCloseTo' matcher is for precision math comparison", function() {
    var pi = 3.1415926,
      e = 2.78;

    expect(pi).not.toBeCloseTo(e, 2);
    expect(pi).toBeCloseTo(e, 0);
  });

  it("The 'toThrow' matcher is for testing if a function throws an exception", function() {
    var foo = function() {
      return 1 + 2;
    };
    var bar = function() {
      return a + 1;
    };
    var baz = function() {
      throw 'what';
    };

    expect(foo).not.toThrow();
    expect(bar).toThrow();
    expect(baz).toThrow('what');
  });

  it("The 'toThrowError' matcher is for testing a specific thrown exception", function() {
    var foo = function() {
      throw new TypeError("foo bar baz");
    };

    expect(foo).toThrowError("foo bar baz");
    expect(foo).toThrowError(/bar/);
    expect(foo).toThrowError(TypeError);
    expect(foo).toThrowError(TypeError, "foo bar baz");
  });
});

*/
