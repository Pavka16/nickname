export default class Validator {
  constructor() {
    this.rules = [
      { key: /[^[^\w-]+/g, value: 'Логин должен содержать только латинские буквы,символы тире -, подчеркивания _ и цифры (0-9)' },
      { key: /^[\d\-_]/, value: 'Логин не может начинаться цифрами, символами подчёркивания или тире' },
      { key: /[\d\-_]$/, value: 'Логин не может заканчиваться цифрами, символами подчёркивания или тире' },
      { key: /\d{4}/, value: 'Логин не может содержать подряд более трех цифр' },
    ];
  }

  validateUsername(nikName) {
    for (let i = 0; i < this.rules.length; i += 1) {
      if (this.rules[i].key.test(nikName)) {
        return this.rules[i].value;
      }
    }
    return true;
  }
}
