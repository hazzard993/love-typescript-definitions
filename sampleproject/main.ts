import { Player } from "Player";

let p: Player;

love.load = function() {
	p = new Player(400, 300);
}

love.update = function(dt: number) {
	p.update(dt);
}

love.draw = function() {
	p.draw();
}