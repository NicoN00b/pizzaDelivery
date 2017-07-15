// Set Pizza / Address Prototypes
function Pizza(method, size, cheese, crust, toppings) {
    this.method = method;
    this.size = size;
    this.cheese = cheese;
    this.crust = crust;
    this.toppings = [];
}



function Contact(first,last) {
this.firstName = first;
this.lastName = last;
this.addresses = [];
}

function Address(street, city, state) {
this.street = street;
this.city = city;
this.state = state;
}

Contact.prototype.fullName = function() {
return this.firstName + " " + this.lastName
};

Address.prototype.fullAddress = function() {
return this.street + " " + this.city + ", " + this.state;
}




//Turn into Pizza Creation Event
$(document).ready(function() {
  $("add-pie").click(function() {
    $(".new-pie").append(ul.pizzas)
      //event.preventDefault();


      var newPizza = new Pizza(inputtedmethod, size, cheese, crust, toppings);

      $(".new-address").each(function() {
        var inputtedStreet = $(this).find("input.new-street").val();
        var inputtedCity = $(this).find("input.new-city").val();
        var inputtedState = $(this).find("input.new-state").val();
        var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState);
        newContact.addresses.push(newAddress);
      });

  $('ul#contacts').append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

  });
});
