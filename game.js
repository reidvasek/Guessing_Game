(function() {
		function Hobbit (name, strong, sly, pipe) {
			this.name = name;
			this.strong = strong;
			this.sly = sly;
			this.pipe = pipe;
			this.fight = function() {
				var userFightMethod = prompt('Ahhhh so you have picked ' + this.name + ' What are you going to do, go up and fight, sneak up on it, or sit and smoke your pipe?', 'type in fight, sneak, or pipe' .toLowerCase())

				if (userFightMethod == 'fight') {
					var wannaShake = prompt ('On your way to fight the troll ' +this.name+ ' stubs his toe on a protein shake. Will ' + this.name + " drink the shake?", "Type YES or NO").toUpperCase()

					if (wannaShake === "YES") {
						this.strong +=1;
					} else {
						this.strong+=0;
					}

					if (this.strong > 0) {//fix this
						   var winFight = document.createElement('h2');
      					   var winTxtFight = document.createTextNode(this.name + ' winds up with a mighty punch and knocks the troll back to the Mountains. '  +this.name+ ' saves the day!. Play again with a different hobbit');
      				       winFight.appendChild(winTxtFight);
      					   var locate = document.getElementsByTagName('ol')[0];
      					   locate.appendChild(winFight);
						win++;
					} else {
						   var loseFight = document.createElement('h2');
      					   var loseTxtFight = document.createTextNode('Im sorry ' + this.name + " is not strong enough to beat the troll. You have "+ lives+ ' more lives more lives for your quest to save the small hobbits');
      				       loseFight.appendChild(loseTxtFight);
      					   var locate1 = document.getElementsByTagName('ol')[0];
      					   locate1.appendChild(loseFight);
					}

				}

				else if (userFightMethod == 'sneak') {
					if (this.sly > 0) {
						 var winSly = document.createElement('h2');
      					 var winTxtSly = document.createTextNode(this.name + " sneaks up on the troll and surprises it with a knife in the back! Try again and see if you can beat the troll with another character");
      				     winSly.appendChild(winTxtSly);
      					 var locate2 = document.getElementsByTagName('ol')[0];
      					 locate2.appendChild(winSly);
						win++;
					} else {
					   var loseSly = document.createElement('h2');
      				   var loseTxtSly = document.createTextNode( this.name + " bumbles around and stumbles into the troll. The troll is not amused. The troll lifts up and eats " +this.name + " . Now with an appetite, the troll goes into the shire and eats all the little hobbitses. You have "+ lives+ ' more lives for your quest to save the small hobbits');
      				   loseSly.appendChild(loseTxtSly);
      				   var locate3 = document.getElementsByTagName('ol')[0];
      				   locate3.appendChild(loseSly);
					 };
				} else if (userFightMethod == 'pipe') {
					if (this.pipe > 0) {
					 var winPipe = document.createElement('h2');
      				 var winTxtPipe = document.createTextNode(this.name + " decides to sit around on his lazy butt and starts to smoke some fine Brandybuck tobacco. Over time the smoke from the pipe incapacitates the troll and kills it. " +this.name + " is a hero!");
      				 winPipe.appendChild(winTxtPipe);
      				 var locate4 = document.getElementsByTagName('ol')[0];
      				 locate4.appendChild(winPipe);
				     
						win++;
					} else {
					   var losePipe = document.createElement('h2');
      				   var loseTxtPipe = document.createTextNode(this.name + " does not even own a pipe. Thus making it very tough to smoke anything. The troll runs rampant through the village eating all the small hobbits while " + this.name + " sits on his lazy butt pretending to smoke air. You have" + lives+ ' more lives for your quest to save the rest of the small hobbits');
      				   losePipe.appendChild(loseTxtPipe);
      				   var locate5 = document.getElementsByTagName('ol')[0];
      				   locate5.appendChild(losePipe);
					}} else {
						userFightMethod = alert("Try typing in a fight method next time. Try again" );
					}
				}
			return;
			}
		

		var sam = new Hobbit ('Sam', 1, 0, 0);
		var frodo = new Hobbit ('Frodo', 0, 0, 0);
		var merry = new Hobbit ('Merry', 0, 0, 1);
		var pippin = new Hobbit ('Pippin', 0, 1, 1);
		var lives = 4;
			lives = lives-1;
		var win = 0

		while (lives > 0 && win === 0){
			var userInput = prompt ('A troll has appeared in the Shire. If it is not defeated it will eat all the small hobbits in the village. The only hobbits who are brave enough are frodo, sam, merry, and pippin. Choose your character', 'type sam, frodo, merry, or pippin').toUpperCase();
					lives--;

			if (userInput === "SAM") {
				sam.fight();
				console.log('sam')
			} else if (userInput=== "FRODO") {
				frodo.fight();
				console.log('frodo')
			} else if (userInput === "MERRY") {
				merry.fight();
			} else if (userInput === "PIPPIN") {
				pippin.fight();
			} else {
				userInput = alert("Try typing in a character name next time. Try again" );
			} 

			if (lives === 0){
				var loser = document.createElement('h2');
      				 var loserTxt = document.createTextNode("All Hope for the Shire is lost");
      				 loser.appendChild(loserTxt);
      				 var locate6 = document.getElementsByTagName('ol')[0];
      				 locate6.appendChild(loser);
				
			}

		}
	})();