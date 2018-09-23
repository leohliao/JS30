const cards = [
    {
      front: 'The "First Computer Programmer"',
      back: 'Ada Lovelace',
      flipped: false,
    },
    {
      front: 'Invented the "Clarke Calculator"',
      back: 'Edith Clarke',
      flipped: false,
  
    },
    {
      front: 'Famous World War II Enigma code breaker',
      back: 'Alan Turing',
      flipped: false,
    },
    {
      front: 'Created satellite orbit analyzation software for NASA',
      back: 'Dr. Evelyn Boyd Granville',
      flipped: false,
    },
  ]; 


  // Get information for new cards from the user
    // Create properties to store front and back of new card
    // Bind those properties to the form input using v-model
  // Add new cards when user hit enter or click button
  // Delete cards
  // Animate Card Flip
  // Display an error message if form field are blank

  new Vue({
    el: '#flashcard-app',
    data: {
      cards: cards,
      newFront: "",
      newBack: ""
    }, 
    // Display our data
    // Onclick: flip cards back and forth
    methods: {
      toggleCard: function(card) {
        card.flipped = !card.flipped;
      }
    }
  });