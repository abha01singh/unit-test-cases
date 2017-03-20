describe("calculator", function() {
    beforeEach(function() {
        this.calc = new Calculator();
    });

    describe("valid operations", function() {
        it("should Add numbers", function() {
            expect(this.calc.execute(1, '+', 2)).toBe(3);
        });

        it("should Subtract numbers", function() {
            expect(this.calc.execute(4, '-', 2)).toBe(2);
        });

        it("should Multiply numbers", function() {
            expect(this.calc.execute(3, '*', 2)).toBe(6);
        });

        it("should Divide numbers", function() {
            expect(this.calc.execute(4, '/', 2)).toBe(2);
        });

        it("should Modulus(Remainder) numbers", function() {
            expect(this.calc.execute(4, '%', 2)).toBe(0);
        });
    });

    describe("invalid operations", function() {
        it("should Add numbers", function() {
            expect(this.calc.execute(1, '+', 'hello')).toBe('unexpected number');
        });

        it("should Subtract two numbers", function() {
            expect(this.calc.execute('', '-', 2)).toBe('unexpected number');
        });

        it("should Multiply two numbers", function() {
            expect(this.calc.execute(3, '*', 'ss')).toBe('unexpected number');
        });

        it("should Divide two numbers", function() {
            expect(this.calc.execute(4, '/', '2')).toBe(2);
        });

        it("should Modulus(Remainder) two numbers", function() {
            expect(this.calc.execute(4, '%', 'hello')).toBe('unexpected number');
        });
    });

    describe("History", function() {
        it("should show current expression", function() {
            this.calc.execute(4, '+', 2);
            expect(this.calc.getCurrentExpression()).toBe('4+2');
        });

        xit("should clear history", function() {
            var actual = [];
            this.calc.execute(4, '+', 2);
            this.calc.execute(4, '-', 2);
            this.calc.execute(4, '*', 2);
            this.calc.getHistory();
            expect(this.calc.clearHistory()).toEqual(actual);
        });

        it("should show history", function() {
            var actual = ['4+2', '4-2', '4*2'];
            this.calc.execute(4, '+', 2);
            this.calc.execute(4, '-', 2);
            this.calc.execute(4, '*', 2);
            expect(this.calc.getHistory(2)).toEqual(actual);
        });

    });
});
