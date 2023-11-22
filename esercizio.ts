abstract class LavoratoreAutonomo {
  codredd: number;
  redditoannualordo: number;
  tasseinps: number;
  tasseirpef: number;

  constructor(
    _codredd: number,
    _redditoannualelordo: number,
    _tasseinps: number,
    _tasseirpef: number
  ) {
    this.codredd = _codredd;
    this.redditoannualordo = _redditoannualelordo;
    this.tasseinps = _tasseinps;
    this.tasseirpef = _tasseirpef;
  }

  abstract getUtileTasse(): number;

  abstract getTasseInps(): number;

  abstract getTasseIrpef(): number;

  getRedditoAnnuoNetto(): number {
    let redditoNetto = this.redditoannualordo - this.getUtileTasse();
    return redditoNetto;
  }
}

class Avvocati extends LavoratoreAutonomo {
  nome: string;
  cognome: string;
  constructor(
    _redditoannualelordo: number,

    _nome: string,
    _cognome: string
  ) {
    super(1, _redditoannualelordo, 0.2, 0.2);
    this.nome = _nome;
    this.cognome = _cognome;
  }

  getUtileTasse(): number {
    let totaleTasse = this.getTasseInps() + this.getTasseIrpef();
    return totaleTasse;
  }

  getTasseInps(): number {
    let tasseInps = this.redditoannualordo * this.tasseinps;
    return tasseInps;
  }
  getTasseIrpef(): number {
    let tasseIrpef = this.redditoannualordo * this.tasseirpef;
    return tasseIrpef;
  }
}

const avvocato1 = new Avvocati(1500000, "Otman", "Karim");
console.log(
  "Redddito annuale netto Avvocato",
  avvocato1.getRedditoAnnuoNetto()
);
console.log("Tasso irpef", avvocato1.getTasseIrpef());
console.log("Tasso Inps", avvocato1.getTasseInps());
