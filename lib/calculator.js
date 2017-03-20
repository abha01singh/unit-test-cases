var Calculator = function() {
    this.currentExpression;
    this.expressionHistory = [];

    this.execute = function(num1, operator, num2) {
        this.currentExpression = num1 + operator + num2;
        this.expressionHistory.push(this.currentExpression);
        if (!isNaN(parseInt(num1)) && !isNaN(parseInt(num2))) {
            switch (operator) {
                case '+':
                    return parseInt(num1, 10) + parseInt(num2, 10);
                case '-':
                    return parseInt(num1, 10) - parseInt(num2, 10);
                case '*':
                    return parseInt(num1, 10) * parseInt(num2, 10);
                case '/':
                    return parseInt(num1, 10) / parseInt(num2, 10);
                case '%':
                    return parseInt(num1, 10) % parseInt(num2, 10);
                default:
                    return 'unexpected operator';
            }
        } else {
            return 'unexpected number';
        }
    };

    this.getCurrentExpression = function() {
        return this.currentExpression;
    };

    this.getHistory = function(n) {
        if (parseInt(n) != undefined) {
            var data = this.expressionHistory.toString();
            this.expressionHistory = data.split(',', n);
            //return this.expressionHistory;
        } else {
            return this.expressionHistory;
        }
    };

    this.clearHistory = function() {
        this.expressionHistory = [];
        return this.expressionHistory;
    };
}
