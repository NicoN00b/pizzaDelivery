// Set Pizza / Address Prototypes
function Pizza(method, size, cheese, crust, toppings) {
    this.method = method;
    this.size = size;
    this.cheese = cheese;
    this.crust = crust;
    this.toppings = [];
}

Pizza.prototype.price = function() {
  var price = this.method + this.size + this.cheese + this.crust + this.toppings.length;
  return price;
};

Pizza.prototype.yourPizza = function() {
  var yourPizza = this.method + this.size + this.cheese + this.crust + this.toppings;
};

function resetFields() {
    $("input:radio[name='method']:checked").val("");
    $("select#size").val("");
    $("select#cheese").val("");
    $("select#crust").val("");
    $("input:checkbox[name='toppings']:checked").val("");
}

function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.address = [];
    this.phone = phone;
    this.email = email;
}

function Address(street, city, state, zip) {
    this.street = street;
    this.city = city;
    this.state = state;
}

Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName + "<br>" + this.phone + "<br>" + this.email
};

Address.prototype.fullAddress = function() {
    return this.street + " " + this.city + ", " + this.state + " " + this.zip;
}

//Turn into Pizza Creation Event
$(document).ready(function() {

  $("#add-pie").click(function() {
    // $("#new-pie").append(pizzas)
      //event.preventDefault();

      var inputtedMethod = parseInt($("input:radio[name='method']:checked").val());
      var inputtedSize = parseInt($("select#size").val());
      var inputtedCheese = parseInt($("select#cheese").val());
      var inputtedCrust = parseInt($("select#crust").val());
      var inputtedToppings = parseInt($("input:checkbox[name=toppings]:checked")).map(function() {
        return (this).val();
      }).get();

      var newPizza = new Pizza(inputtedMethod, inputtedSize, inputtedCheese, inputtedCrust, inputtedToppings);

      Pizza.price();

      console.log(newPizza);

      $("#pizzas").toggle();
      $(".method").text(inputtedMethod);
      $(".size").text(inputtedSize);
      $(".cheese").text(inputtedCheese);
      $(".crust").text(inputtedCrust);
      $(".toppings").text(inputtedToppings);
      $(".price").text("$" + newPizza.price(price) + ".00");

      resetFields();

      // $(".new-address").each(function() {
      //   var inputtedStreet = $(this).find("input.new-street").val();
      //   var inputtedCity = $(this).find("input.new-city").val();
      //   var inputtedState = $(this).find("input.new-state").val();
      //   var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState);
      //   newPizza.addresses.push(newAddress);
      // });

  // $('ul.pizzas').append("<li><span class='.yourPizzas'>" + newPizza.fullName() + "</span></li>");

  });
});
