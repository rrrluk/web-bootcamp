var obj = {
  name: "Juhan",
  age: 33,
  add: function(x, y) {
    return x + y;
  }
};

var dogSpace = {
  speak: function() {
    return "woof";
  }
};

var catSpace = {
  speak: function() {
    return "meow";
  }
};

var comments = {
  data: ["Whee", "whoo", "Look, comments"],
  prindi: function() {
    this.data.forEach(function(el) {
      console.log(el);
    });
  }
};

comments.prindi();
