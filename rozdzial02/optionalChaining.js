var OptionalChainingNS;
(function (OptionalChainingNS) {
    var _a, _b, _c;
    var Automobile = /** @class */ (function () {
        function Automobile(wheels) {
            this.wheels = wheels;
        }
        return Automobile;
    }());
    var car = new Automobile({
        count: undefined
    });
    console.log("Auto: ", car);
    console.log("Informacje o kołach: ", (_a = car) === null || _a === void 0 ? void 0 : _a.wheels);
    console.log("Liczba kół: ", (_c = (_b = car) === null || _b === void 0 ? void 0 : _b.wheels) === null || _c === void 0 ? void 0 : _c.count);
})(OptionalChainingNS || (OptionalChainingNS = {}));
