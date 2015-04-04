angular.module('BusinessCtrl', [])

.controller('BusinessController', ['$scope', function($scope){

//This is the main function in our program: it takes a list of words or phrases and chooses a random element from that list. We use it to make a bunch of variables which we will later concatenate to make our Generated Comment.
       function make_random_var(list) {
           return list[Math.floor(Math.random() * list.length)];
       }

  function make_random_comment(){

// Now we use that function many times to select random elements of our various lists. First we populate a list and name it as a variable called "<name>_list", then we pick a random element from that list using make_random_var and name it as a variable called "random_<name>"
     
  var business_opener_list = ['The secret to doing business is ', 'Our revolutionary framework focusses on ', 'Our key insight is centered on ', 'It turns out that all successful businesses understand '];
       
  var random_business_opener = make_random_var(business_opener_list);

  var acronym_list_1 = ['Big', 'Huge', 'Great'];
  var random_acronym_1 = make_random_var(acronym_list_1);
   
  var acronym_list_2 = ['Big', 'Huge', 'Great', 'Bold'];
  var random_acronym_2 = make_random_var(acronym_list_2);
     
  var acronym_list_3 = ['Audacious', 'Effective', 'Outrageous']
  var random_acronym_3 = make_random_var(acronym_list_3);
     
  var acronym_list_4 = ['Goals', 'Targets', 'Objectives'];
  var random_acronym_4 = make_random_var(acronym_list_4);
     
   // This could be improved (in terms of coding-learning and generalisability) by making a system whereby the acronym can have different numbers of letters [currently it must have exactly four letters], and the programme is able to deal with that. How would that work? Maybe the randomiser decides whether a "position" is included in the list, and then the words that are going into the acronym are put in another list, and then we iterate over that second list and run through to the end.
   
  var random_acronym = random_acronym_1[0] + random_acronym_2[0] + random_acronym_3[0] + random_acronym_4[0];
   
   //a single list with some ridiculous elements at the end, but a slight tweak to the randomiser means that the ridiculous elements won't get included until a little later -- but elegantly!
   
   var p_word_list = ['price', 'promotion', 'profit', 'productivity', 'power', 'proactiveness', 'peasants', 'pterodactyls'];
   var random_p_word = p_word_list[Math.floor(Math.random() * (p_word_list.length - 2))];
   
  var ejected_p_word = p_word_list.indexOf(random_p_word);
   if(ejected_p_word != -1) {
  p_word_list.splice(ejected_p_word, 1);
   };
   var random_p_word_2 = p_word_list[Math.floor(Math.random() * (p_word_list.length - 2))];
   
    var ejected_p_word_2 = p_word_list.indexOf(random_p_word_2);
   if(ejected_p_word_2 != -1) {
  p_word_list.splice(ejected_p_word_2, 1);
   };
   var random_p_word_3 = p_word_list[Math.floor((p_word_list.length - 2) + Math.random() * 2)];
   
   var p_word_sentence = " the three p's: " + random_p_word + ", " + random_p_word_2 + ", and " + random_p_word_3;
   
      var m_word_list = ['marketing', 'message', 'motive', 'motivation', 'mission', 'monkeys', 'monks'];
   var random_m_word = m_word_list[Math.floor(Math.random() * (m_word_list.length - 2))];
   
  var ejected_m_word = m_word_list.indexOf(random_m_word);
   if(ejected_m_word != -1) {
  m_word_list.splice(ejected_m_word, 1);
   };
   var random_m_word_2 = m_word_list[Math.floor(Math.random() * (m_word_list.length - 2))];
   
    var ejected_m_word_2 = m_word_list.indexOf(random_m_word_2);
   if(ejected_m_word_2 != -1) {
  m_word_list.splice(ejected_m_word_2, 1);
   };
   var random_m_word_3 = m_word_list[Math.floor((m_word_list.length - 2) + Math.random() * 2)];
   
   var m_word_sentence = " the three m's: " + random_m_word + ", " + random_m_word_2 + ", and " + random_m_word_3;
  
// The following code (randomising between a list of [0,1] seems crazily wasteful/inefficient-- we really just want the system to make a binary choice between two types of sentence structure. What's the better way to do that?

   var letter_list = [0,1];
   var p_or_m = letter_list[Math.floor(Math.random() * 2)];

    if (p_or_m == 0){
      p_or_m_sentence = p_word_sentence;
      }else{
      p_or_m_sentence = m_word_sentence;
      };
  
   var choice_list = [0,1];
   var choice = choice_list[Math.floor(Math.random() * 2)];

// Choosing between our two possible types of Random Startup Sentence

   if (choice == 0) {
   business_book_comment = random_business_opener + random_acronym + "s -- " + random_acronym_1 + " " + random_acronym_2 + " " + random_acronym_3 + " " + random_acronym_4;
   }else{
   business_book_comment = random_business_opener + p_or_m_sentence;
   };
   return business_book_comment;
 }

  $scope.generateComment = function(){
    $scope.output = '"' + make_random_comment() + '."';
  };

  $scope.generateComment();
}]);