var movies = [
  {
    title: "The Darjeeling Limited",
    watched: true,
    rating: 5
  },
  {
    title: "In Brugges",
    watched: true,
    rating: 4
  },
  {
    title: "November",
    watched: false,
    rating: 0
  }
];

console.log(movies);

movies.forEach(function(film) {
  console.log(buildString(film));
});

function buildString(film) {
  var result = "You have ";
  if (film.watched === true) {
    result += "watched ";
  } else {
    result += "not seen ";
  }
  result += '"' + film.title + '" - ';
  result += film.rating + " stars.";
  return result;
}
