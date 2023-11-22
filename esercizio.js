var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LavoratoreAutonomo = /** @class */ (function () {
    function LavoratoreAutonomo(_codredd, _redditoannualelordo, _tasseinps, _tasseirpef) {
        this.codredd = _codredd;
        this.redditoannualordo = _redditoannualelordo;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef;
    }
    LavoratoreAutonomo.prototype.getRedditoAnnuoNetto = function () {
        var redditoNetto = this.redditoannualordo - this.getUtileTasse();
        return redditoNetto;
    };
    return LavoratoreAutonomo;
}());
var Avvocati = /** @class */ (function (_super) {
    __extends(Avvocati, _super);
    function Avvocati(_redditoannualelordo, _nome, _cognome) {
        var _this = _super.call(this, 1, _redditoannualelordo, 0.2, 0.2) || this;
        _this.nome = _nome;
        _this.cognome = _cognome;
        return _this;
    }
    Avvocati.prototype.getUtileTasse = function () {
        var totaleTasse = this.getTasseInps() + this.getTasseIrpef();
        return totaleTasse;
    };
    Avvocati.prototype.getTasseInps = function () {
        var tasseInps = this.redditoannualordo * this.tasseinps;
        return tasseInps;
    };
    Avvocati.prototype.getTasseIrpef = function () {
        var tasseIrpef = this.redditoannualordo * this.tasseirpef;
        return tasseIrpef;
    };
    return Avvocati;
}(LavoratoreAutonomo));
var avvocato1 = new Avvocati(1500000, "Otman", "Karim");
console.log("Redddito annuale netto Avvocato", avvocato1.getRedditoAnnuoNetto());
console.log("Tasso irpef", avvocato1.getTasseIrpef());
console.log("Tasso Inps", avvocato1.getTasseInps());
