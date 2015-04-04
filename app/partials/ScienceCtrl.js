angular.module('ScienceCtrl', [])

.controller('ScienceController', ['$scope', function($scope){

   //This is the main function in our program: it takes a list of words or phrases and chooses a random element from that list. We use it to make a bunch of variables which we will later concatenate to make our Generated Comment.
   
   function make_random_var(list) {
       return list[Math.floor(Math.random() * list.length)];
   }
   
   // Now we use that function many times to select random elements of our various lists. First we populate a list and name it as a variable called "<name>_list", then we pick a random element from that list using make_random_var and name it as a variable called "random_<name>"
   
   function make_random_comment(){
    
       var investigating_list = ['investigating', 'understanding', 'modelling', 'researching'];
       
       var random_investigating = make_random_var(investigating_list);
    
       var science_opener_list = ['By ' + random_investigating + ' the behaviour of'];
       
       var random_science_opener = make_random_var(science_opener_list);
       
       var research_animal_list = ['naked mole rats', 'drosophila embryos', 'the ebola virus', 'chlamydia', 'c. elegans'];
       
       var random_research_animal = make_random_var(research_animal_list);
       
       var connective = 'under';
       
       var intervention_list = ['parental pressure', 'fire', 'a microscope', 'the influence', 'torture', 'nutrient deprivation', 'dehydration'];
       
       var random_intervention = make_random_var(intervention_list);
       
       var connective2 = 'we hope to glean insight into';
       
       var outcome_list = ['your relationship with your mother', 'the functioning of Wikipedia', 'the purpose of hipsters', 'aboriginal societies', 'the development of language', 'why people wear hats', 'the evolution of fingers'];
       
       var random_outcome = make_random_var(outcome_list);
      
      // Now we've chosen random elements of all the relevant lists, all that's left is to concatenate those elements to make our Generated Comment. 
      
       var science_comment_list = [random_science_opener, random_research_animal, connective, random_intervention, connective2, random_outcome];
       
       var science_comment = science_comment_list.join(" ");
       return science_comment;
    }

  $scope.generateComment = function(){
    $scope.output = '"' + make_random_comment() + '."';
  };

  $scope.generateComment();
}]);