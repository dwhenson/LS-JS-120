class Greeting {
  greet(message) {
    console.log(message);
  }
}

class Hello extends Greeting {
  hi() {
    this.greet("hello");
  }
}

class Goodbye extends Greeting {
  hi() {
    this.greet("goodbye");
  }
}

let test = new Goodbye();
test.hi();
