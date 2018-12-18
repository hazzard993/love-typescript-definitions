import { Player } from "Player";

let p: Player;

love.load = () => {
    p = new Player(400, 300);
};

love.update = (dt: number) => {
    p.update(dt);
};

love.draw = () => {
    p.draw();
};
