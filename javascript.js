var randomFactQuotes = ["There are currently 264 known monkey species." , "Monkeys can be divided into two groups, Old World monkeys that live in Africa and Asia, and New World monkeys that live in South America." , "A baboon is an example of an Old World monkey, while a marmoset is an example of a New World monkey."
] 


$("#factButton").on("click", function() {
	var number = Math.floor((Math.random() * randomFactQuotes.length));
	$("#quoteDisplay").text(randomFactQuotes[number])
})
