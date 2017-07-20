#include <iostream>
#include <unistd.h>
#include <fstream>
#include <cstdlib>

using namespace std;

int storyask(){
	char answer;
	cin >> answer;
	if(answer == 'b'){
		cout << "Correct!" << endl;
	}else if(answer == 'b'){
		cout << "Youre obviously not smart enough to complete the game so bye" << endl;
		//ofstream myfile;
	//myfile.open("savefile1.txt");
	//if(myfile.is_open()){
	//myfile << "intro" << endl;
	//myfile.close();
	//}
	exit(1);
	}
	else{
		cout << "Please enter a or b" << endl;
		storyask();
	}
	return 0;
}

void game(){
	sleep(1);
	
	cout << "Luke: What a lovely night. " << endl;
	sleep(2);
	cout << "Dad: Yep!" << endl;
	sleep(2);
	cout << "Alexa: Um... guys..." << endl;
	sleep(2);
	cout << "Mom: Yes, Luke. It is a lovely night." << endl;
	sleep(2);
	cout << "Alexa: Guys..." << endl;
	sleep(2);
	cout << "Luke: Night used to scare me though." << endl;
	sleep(2);
	cout << "Alexa: Guys..." << endl;
	sleep(2);
	cout << "Mom: Yes, Alexa?" << endl;
	sleep(2);
	cout << "Alexa: Zombies are aproaching the house." << endl;
	sleep(2);
	cout << "Luke: WHAT!!!" << endl;
	sleep(2);
	cout << "Alexa: And there seems to be a flaming tornado." << endl;
	sleep(2);
	cout << "Luke: WHAAAAAAAAAAAAAAAT!!!!!!!!!!!!!" << endl;
	sleep(2);
	cout << "Mom: Get to the basement, kids!" << endl;
	sleep(2);
	cout << "*Rushes to the basement" << endl;
	sleep(2);
	cout << "*Closes the door" << endl;
	sleep(2);
	cout << "*Tornado bursts through the door" << endl;
	sleep(2);
	cout << "*Zombies come in" << endl;
	sleep(2);
	cout << "Dad: It's a dead end!" << endl;
	sleep(2);
	cout << "Mom: Yep, we're dead." << endl;
	sleep(2);
	cout << "Alexa: Hold on. You dig a tunnel, I'll fight the zombies." << endl;
	sleep(2);
	cout << "Mom: Um... no." << endl;
	sleep(2);
	cout << "Alexa: Do you want to live or not?" << endl;
	sleep(2);
	cout << "Dad: She makes a point." << endl;
	sleep(2);
	cout << "[COMBAT]: You (10 health) vs. Zombies (10 health)" << endl;
	int health = 10;
	int enemyhealth = 10;
	
	while(health > 0 && enemyhealth > 0){
		cout << "Choose your attack:" << endl;
		cout << "a. Fast Arrow" << endl;
		cout << "b. Arrow spam" << endl;
		cout << "c. Sword Strike" << endl;
		char attack;
		cin >> attack;
		
		if(attack == 'a'){
			enemyhealth -= 3;
		}else if(attack == 'b'){
			enemyhealth -= 2;
		}
		if(attack == 'c'){
			enemyhealth -= 1;
		}
		cout << "enemy: " << enemyhealth << endl;
		
		sleep(2);
		health -= 3;
		cout << "Enemy attacked! Your health: " << health << endl;
	}
	
	if(health < 1){
		cout << "You Died!" << endl;
		sleep(2);
		exit(1);
	}
	
	if(enemyhealth < 1){
		cout << "You killed the zombies!" << endl;
		sleep(2);
		exit(1);
	}
}

int charask(){
	char answer;
	cin >> answer;
	if(answer == 'a'){
		cout << "Hi, Alexa!" << endl;
		sleep(2);
		system("cls");
		game();
	}else if(answer == 'b'){
		cout << "I'm sorry, but you can't play as that character in this story! Try again." << endl;
		charask();
	}else if(answer == 'c'){
		cout << "I'm sorry, but you can't play as that character in this story! Try again." << endl;
		charask();
	}
	else{
		cout << "Please enter a, b, or c" << endl;
		charask();
	}
	return 0;
}

int main(){
	cout << "Welcome to Plexicraft Story Mode!" << endl;
	sleep(1);
	cout << "How to play:" << endl;
	cout << "   Read the text that explains what's going on." << endl;
	cout << "   When you are asked to make a choice, enter the letter next to the option you choose." << endl;
	sleep(3);
	cout << "" << endl;
	
	cout << "Let's try an example..." << endl;
	sleep(2);
	cout << "Which amount of money is larger:" << endl;
	cout << "a: $1" << endl;
	cout << "b: $100000000000000000000000000000" << endl;
	storyask();
	sleep(2);
	//ofstream myfile;
	//myfile.open("savefile1.txt");
	//if(myfile.is_open()){
	//myfile << "intro" << endl;
	//myfile.close();
	//}
	
	cout << "It looks like youre ready to play." << endl;
	sleep(1);
	cout << "Let's go!" << endl;
	sleep(2);
	system("cls");
	sleep(1);
	
	cout << "Choose your character..." << endl;
	cout << "a. Alexa" << endl;
	cout << "b. KingHerobryne" << endl;
	cout << "c. SushiBoy" << endl;
	
	charask();
	
	return 0;
}