/*
const drawDiamond = function(width,m){
	if(width <= 1){
		alert("You are writing wrong imputs !!!!!");
	}
	if(width % 2 === 0) {
		width = width + 1;
	}
const Symbol = function(n, m){
	if(n<=0){
		return "";
	}
return m + Symbol(n-1,m);
	};
	const drawLine = function(a, b, c){
			if (c >width){
	 			return "";
			}
			console.log(Symbol(a, " " )+Symbol(b,c));
			if(c<=width/2){
				drawLine(a+ -1, b+2, c+1);
			} else {
				drawLine(a +1, b-2,c+1);
			}
	};
	drawLine(width-1/2,1,1);
};
drawDiamond(5,&)
*/



/*

const drawDiamondLoop = function(width, char) {
	if(width % 2 === 0) {
		width = width - 1;
	}
	const Astgh = function(n, char) {
		let m = '';
		for(let i = 0; i < n; i++) {
			m = m + char;
		}
		return m;
	};
	let spaceN = (width-1)/2;
	let toxN = 1;
	for(let i = 1; i <= width; i++){
		console.log(Astgh(spaceN, ' ') + Astgh(toxN, char));
		if(i <= width/2) {
			spaceN = spaceN -1;
			toxN = toxN + 2;
		} else {
			spaceN = spaceN + 1;
			toxN = toxN-2;
		}
	}
};
drawDiamondLoop(6,"*");

*/

const board = [
	[' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];
const nextMove = function(x){
	for (let i=0; i < x.length; i++){
		for (let j=0;j<x.length;j++){
			if(x[i][j]===" "){
				return [i,j];				
			}
		}

	}
};
const makeMove = function(board, place, symbol) {
	if((place[0] === 0 || place[0] === 1 || place[0] === 2) && (place[1] === 0 || place[1] === 1 || place[1] === 2)) {
		if(!symbol) {
			board[place[0]][place[1]] = 'o';
		} else {
			board[place[0]][place[1]] = 'x';
		}
		return 0;
	}
	return -1;
};

const findWinner = function(board){
	for(i=0;i<board.length;i++){
	if(board[i][0]===board[i][1] && board[i][1]===board[i][2] && board[i][1]!==' '){
		return {
			winner: board[i][0],
			winningLocations: [[i,0],[i,1],[i,2]]
			} 
		}
	}
	for(i=0;i<board.length;i++){
		if(board[0][i]===board[1][i] && board[1][i]===board[2][i] && board[1][i]!==' '){
		return {
			winner: board[0][i],
			winningLocations: [[0,i],[0,i],[0,i]]
				} 
			}
	}
	if(board[0][0]===board[1][1] && board[1][1]===board[2][2] && board[0][0]!==' '){
	return {
    winner: board[1][1],
    winningLocations: [[0,0],[1,1],[2,2]]
		} 
	}
	if(board[0][2]===board[1][1] && board[1][1]===board[2][0] && board[0][2]!==' '){
	return {
    winner: board[1][1],
    winningLocations: [[0,2],[1,1],[2,0]]
		} 
	}
	if(!board.toString().includes(' ')){ ///// toString-@ array@ darcnum a string
		return {
			winner: 'nobody' 
		}
	}
};	

let place = true;
while(true){
	let next = nextMove(board, place);
	if(makeMove(board, next, place) === -1) {
		alert("I'm sorry, something is wrong");
		break;
	}
	makeMove(board, next, place);
	if(findWinner(board) !== undefined) {
		alert("Game over, " + findWinner(board)["winner"] + " won!");
		break;
	}
	place = !place;
}