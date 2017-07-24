// Set Pizza / Address Prototypes
function Pizza(method, size, cheese, crust, toppings) {
    this.method = method;
    this.size = size;
    this.cheese = cheese;
    this.crust = crust;
    this.toppings = toppings;
}

Pizza.prototype.price = function() {
  var price = this.method + this.size + this.cheese + this.crust + this.toppings.length;
  return price;
};

//Pizza.prototype.yourPizza = function() {
  // var yourPizza = this.method + this.size + this.cheese + this.crust + this.toppings;
  // return yourPizza;

// };

// function resetFields() {
//     $("input:radio[name='method']:checked").val("");
//     $("select#size").val("");
//     $("select#cheese").val("");
//     $("select#crust").val("");
//     $("input:checkbox[name='toppings']:checked").val("");
// }

function Contact(first, last, address, phone, email) {
    this.firstName = first;
    this.lastName = last;
    this.address = [street, city, state, zip];
    this.phone = phone;
    this.email = email;
}


Contact.prototype.inputDetails = function() {
    return this.firstName + " " + this.lastName + "<br>" + this.phone + "<br>" + this.email + "<br>" + this.address;
};


//Turn into Pizza Creation Event
$(document).ready(function() {

  $("#add-pie").click(function() {
    $("#new-pie").append(pizzas)
      event.preventDefault();

      //var toppings = [];
      var inputtedMethod = parseInt($("input:radio[name='method']:checked").val());
      var inputtedSize = parseInt($("select#size").val());
      var inputtedCheese = parseInt($("select#cheese").val());
      var inputtedCrust = parseInt($("select#crust").val());
      var inputtedToppings = $("input:checkbox[name=toppings]:checked").each(function() {
        //return inputtedToppings.$(this).val();
        //var toppings = [];
      });


      var newPizza = new Pizza(inputtedMethod, inputtedSize, inputtedCheese, inputtedCrust, inputtedToppings);

      newPizza.price();

      console.log(newPizza);

      $("#pizzas").show(Pizza);
      $(".method").text(newPizza.method);
      $(".size").text(newPizza.size);
      $(".cheese").text(newPizza.cheese);
      $(".crust").text(newPizza.crust);
      $(".toppings").text(newPizza.toppings.length);
      $(".price").text("$" + newPizza.price() + ".00");

      document.getElementById("new-pie").reset();

  });

  $('#submit-order').submit(function() {
    $(".new-contact").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();
      var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState, inputtedZip);
      newPizza.addresses.push(newAddress);
    });



  });
});
