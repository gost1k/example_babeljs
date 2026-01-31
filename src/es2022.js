// ES2022

class ES2022Class {
  field = 42;
  static staticField = "static";
  #privateField = "secret";

  #privateMethod() {
    return this.#privateField;
  }

  getPrivate() {
    return this.#privateMethod();
  }
}
