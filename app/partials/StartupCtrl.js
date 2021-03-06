angular.module('StartupCtrl', [])

.controller('StartupController', ['$scope', function($scope){

  //This is the main function in our program: it takes a list of words or phrases and chooses a random element from that list. We use it to make a bunch of variables which we will later concatenate to make our Generated Comment.
     
  function make_random_var(list) {
     return list[Math.floor(Math.random() * list.length)];
  }

  function make_random_comment(){

     // There are three sentence "types" in this generator: the Software as a Service (SaaS) type, the X of Y type, and the Social Local Mobile type
     
     // First we build the SaaS type.

      var vapid_openings_list = ["We're fundamentally changing how you", "We're creating a paradigm shift in how you", "We're driving a new paradigm in how you", "We're revolutionizing how you"];
      var random_vapid_opening = make_random_var(vapid_openings_list);

      var famous_startups_list = [['search for','Google'],['interact with','Facebook'], ['locate', 'Fouresquare'], ['get deals on','Groupon'], ['photograph', 'Instagram'], ['handcraft', 'Etsy']];
      var random_famous_startup = make_random_var(famous_startups_list);

    	var unlikely_business_list = [["socks", "laundry"], ["clips", "clipping"], ["haddock", "fishing"], ["eggs", "omelettes"], ["salad", "lettuce"]];
      var random_unlikely_business = make_random_var(unlikely_business_list);
      
      var relate_to_list = ["relate to", "think about", "interact with", "buy and sell", "trade", "conceive of"];
    	var random_relate_to = make_random_var(relate_to_list);

    	var vapid_connectives_list2 = ["we're talking about", "we're bringing you", "we're delivering"];
    	var random_vapid_connective2 = make_random_var(vapid_connectives_list2);
       
      var as_a_service = random_unlikely_business[0].charAt(0).toUpperCase() + random_unlikely_business[0].slice(1) + " as a Service";
       
      var saas_acronym = " (" + as_a_service.charAt(0) + "aaS)";
      var sometimes_saas_acronym = make_random_var([saas_acronym, ""]);
       
      var saas_sentence_list = [random_vapid_opening, random_relate_to, random_unlikely_business[1], "--", random_vapid_connective2, as_a_service, sometimes_saas_acronym];
       
    	var saas_sentence = saas_sentence_list.join(" ");
       
       
       
      // Here we create an array which will eventually house all three possible sentences (of the three different types), then we will randomly choose one of them.
       
    	var startup_comment_array = [ ];
    	
    	startup_comment_array.push(saas_sentence);
    	
    	
    	
    	// Here we build the second type of Startup Comment, the "X of Y" type
       
      var vapid_connectives_list =["we're building the ", "we're launching the ", "we're designing the ", "we've created the "];
      var random_vapid_connective = make_random_var(vapid_connectives_list);
    	
    	var XofY_sentence_list = [random_vapid_opening, random_famous_startup[0], random_unlikely_business[0], "--", random_vapid_connective, random_famous_startup[1], "of", random_unlikely_business[1]];

    	var XofY_sentence = XofY_sentence_list.join(" ");
    	
    	startup_comment_array.push(XofY_sentence);



       // Here we build the third type of Startup Comment, the Social Local Mobile type
       
      var solomo_sentence_list = [["We're taking the best of ", " and the best of "], 
      ["We're moving beyond ", " and into "], ["We're putting the ", " back into "], ["We're working at the nexus of ", " and "]];
      var random_solomo_sentence = make_random_var(solomo_sentence_list);
       
      var solomo_list = ['social', 'local', 'mobile'];
      var random_solomo = make_random_var(solomo_list);
       
      var ejected_solomo = solomo_list.indexOf(random_solomo);
      if(ejected_solomo != -1) {
    	 solomo_list.splice(ejected_solomo, 1);
      }
       
      var random_solomo_2 = make_random_var(solomo_list);

      var vapid_model_list = [["you could say it's a fundamentally ", " model"], 
      ["it's intrinsically a "," model"],
      ["in fact, we're turning " + random_solomo + " into ", ""]];
      var random_vapid_model = make_random_var(vapid_model_list);
      
      var solomo_neologism = random_solomo.substring(0,1) + random_solomo_2.substr(1);
      
      var solomo_sentence_list = [random_solomo_sentence[0], random_solomo, random_solomo_sentence[1], random_solomo_2, " -- ", random_vapid_model[0], solomo_neologism, random_vapid_model[1]];

    	var solomo_sentence = solomo_sentence_list.join(" ");
    	
    	startup_comment_array.push(solomo_sentence);
    	
    	
    	// Finally, we pick one of the 3 sentences we've generated.
    		
    	var random_startup_comment = make_random_var(startup_comment_array);
    	
    	//This regex strips whitespace from the end of a comment
    	var random_startup_comment = random_startup_comment.replace(/\s+$/g,'');
      return random_startup_comment;
  }

  $scope.generateComment = function(){
    $scope.output = '"' + make_random_comment() + '."';
  }

  $scope.generateComment();
}]);