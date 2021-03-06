angular.module('PoliticsCtrl', [])

.controller('PoliticsController', ['$scope', function($scope){

 //This is the main function in our program: it takes a list of words or phrases and chooses a random element from that list. We use it to make a bunch of variables which we will later concatenate to make our Generated Comment.
   
   function make_random_var(list) {
       return list[Math.floor(Math.random() * list.length)];
   }  

  function make_random_comment(){

    // Now we use that function many times to select random elements of our various lists. First we populate a list and name it as a variable called "<name>_list", then we pick a random element from that list using make_random_var and name it as a variable called "random_<name>"
   
   //For the "sentence opener" variable we need tuples (instead of just single items) for grammatical reasons: some of the openers need to be followed by "it's that" and other openers need to be followed by "is that" 
   
   var sentence_opener_list = [["If there's one", "it's that"], ["Surely the", "is that"], ["One could certainly argue that the", "is that"]];
   var random_sentence_opener = make_random_var(sentence_opener_list);
   
   var key_emphasis_list = ['key', 'primary', 'main', '', '', ''];
   var random_key_emphasis = make_random_var(key_emphasis_list);
   
   var lesson_learned_list = ['lesson-learned', 'take-home', 'point to consider'];
   var random_lesson_learned = make_random_var(lesson_learned_list);
   
   var historical_event_list = ['Iraq War', 'Arab Spring', 'French Revolution', 'fall of Rome', 'Wikileaks crisis', 'DOMA hearings'];
   var random_historical_event = make_random_var(historical_event_list);
   
   var political_value_list = ['peace', 'justice', 'equality', 'fraternity', 'democracy', 'liberty'];
   var random_political_value = make_random_var(political_value_list);
   
   var ejected_political_value = political_value_list.indexOf(random_political_value);
     if(ejected_political_value != -1) {
      political_value_list.splice(ejected_political_value, 1);
     };
   var random_political_value_2 = make_random_var(political_value_list) + ",";

   var although_synonyms_list = ['although', 'though', 'while'];
   var random_although_synonym = make_random_var(although_synonyms_list);
   
   var comparative_adjective_list = ['complementary', 'interchangeable', 'compatible', 'harmonious'];
   var random_comparative_adjective = make_random_var(comparative_adjective_list);

   var empty_prevarications_list = ['in theory', 'in principle', '(in the abstract)'];
   var random_empty_prevarication = make_random_var(empty_prevarications_list) + ",";

   var not_always_list = [['are not always',''], ['are not necessarily',''], ['cannot be relied upon to be', 'in practice'], ['will not (in all cases) be', 'in practice']];
   var random_not_always = make_random_var(not_always_list);

   var ejected_comparative_adjective = comparative_adjective_list.indexOf(random_comparative_adjective);
     if(ejected_comparative_adjective != -1) {
      comparative_adjective_list.splice(ejected_comparative_adjective, 1);
     }
   var random_comparative_adjective_2 = make_random_var(comparative_adjective_list);

   // Now we've chosen random elements of all the relevant lists, all that's left is to concatenate those elements to make our Generated Comment. 
        
  var politics_comment_list = [random_sentence_opener[0], random_key_emphasis, random_lesson_learned, "from the", random_historical_event, random_sentence_opener[1], random_political_value, "and", random_political_value_2, random_although_synonym, random_comparative_adjective, random_empty_prevarication, random_not_always[0], random_comparative_adjective_2, random_not_always[1]];
   
  var politics_comment = politics_comment_list.join(" ");
  var politics_comment = politics_comment.replace(/\s+$/g, '') ;
   return politics_comment;
       }

  $scope.generateComment = function(){
    $scope.output = '"' + make_random_comment() + '."';
  };

  $scope.generateComment();
}]);