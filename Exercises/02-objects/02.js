let item = {
  name: "Foo",
  description: "Fusce consequat dui est, semper.",
  price: 50,
  quantity: 100,
  discount: function (percent) {
    let discount = (this.price * percent) / 100;
    this.price -= discount;

    return this.price;
  },
};

item.discount(20); //?
item.discount(50); //?
item.discount(25); //?
