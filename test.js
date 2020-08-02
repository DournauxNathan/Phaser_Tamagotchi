class test extends Phaser.Scene {
    constructor() {
        super("test");
    }

	preload() {

	}

	create() {
		this.startGame = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
		this.pDormir = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
		this.pManger = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
		this.pJouer = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);

		function Animaux(nom) {
			this._name = nom;
			this._faim = 0;
			this._ennui = 0;
			this._fatigue = 0;	
		}
		
		function Chaton(nom, sprite) {
			sprite = this.scene.add.sprite(200, 200, 'chat');
			Animaux.call(this, nom);
		}

		this.animaux1 = new Chaton("Pompot");

		

		//Méthode d'un animal - Action d'un animal
			Animaux.prototype.dormir = function() { 
				this._faim+=30; 
				this._ennui+=10;
				this._fatigue-=Phaser.Math.Between(1,6)*10;

				if(this._fatigue < 0)
				{
					this._fatigue = 0;
				}
			}

			Chaton.prototype.manger = function(calories) { 
				this._faim-=calories; 
				this._ennui+=10;
				this._fatigue+=30;

				if(this._faim < 0)
				{
					console.log("Yay");
					this._faim = 0;
				}
			}

			Chaton.prototype.jouer = function() { 
				this._faim+=20; 
				this._ennui-=10;
				this._fatigue+=30;

				if(this._ennui < 0)
				{
					this._ennui = 0;
				}
			}

		Chaton.prototype = Object.create(Animaux.prototype);
		Chaton.prototype.constructor = Chaton;
	}

	update() {
		//Start the game
			if (Phaser.Input.Keyboard.JustDown(this.startGame))
			{
				console.log("Appyuer sur A pour que Tanuki dorme !\nAppyuer sur Z pour donner à manger à Tanuki !\nAppyuer sur E pour jouer avec Tanuki!");
				console.log(this.animaux1);
			}

		//Inputs pour interagir avec l'animal
			//Border l'animal
				if (Phaser.Input.Keyboard.JustDown(this.pDormir))
				{
					
					this.animaux1.dormir();
					console.log(this.animaux1);
				}

			//Donner de la nourriture
				if (Phaser.Input.Keyboard.JustDown(this.pManger))
				{
					this.animaux1.manger(20);
					console.log(this.animaux1);
				}

			//Jouer avec l'animal
				if (Phaser.Input.Keyboard.JustDown(this.pJouer))
				{
					this.animaux1.jouer();
					console.log(this.animaux1);
				}
	}
}