function myForEach(arr, func) {
  // loop through array
  for (var i = 0; i < arr.length; i++) {
    // call func for each item in array
    func(arr[i]);
  }
}

var colors = ["red", "orange", "blue"];
myForEach(colors, console.log);

myForEach(colors, function() {
  console.log("hi");
});

myForEach(colors, function(color) {
  console.log(color);
});

var beatles = ["John", "Paul", "George", "Ringo"];

Array.prototype.myForEachProto = function(func) {
  for (var i = 0; i < this.length; i++) {
    func(this[i]);
  }
};

beatles.myForEachProto(function(name) {
  console.log(name);
});
