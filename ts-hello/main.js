var bnao = /** @class */ (function () {
    function bnao() {
    }
    bnao.prototype.draw = function () {
        console.log('value :' + this.x);
    };
    bnao.prototype.drawPoint = function (another) {
    };
    return bnao;
}());
var shape = new bnao();
shape.x = 5;
shape.y = 10;
shape.draw();
