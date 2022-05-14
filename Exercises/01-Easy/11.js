class Banner {
  constructor(message) {}

  displayBanner() {
    console.log(
      [
        this.horizontalRule(),
        this.emptyLine(),
        this.messageLine(),
        this.emptyLine(),
        this.horizontalRule(),
      ].join("\n")
    );
  }

  horizontalRule() {}

  emptyLine() {}

  messageLine() {
    return `| ${this.message} |`;
  }
}
