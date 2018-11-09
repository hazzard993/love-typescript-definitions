export class Player {
	constructor(private x: number, private y: number) {}
	update(delta: number) {
		let isDown = love.keyboard.isDown;
		let vx = (isDown("a") ? -1 : 0) + (isDown("d") ? 1 : 0);
		let vy = (isDown("w") ? -1 : 0) + (isDown("s") ? 1 : 0);
		if (vx != 0 || vy != 0) {
			let angle = math.atan2(vy, vx);
			let acceleration = 60; 	// Pixels per second
			this.x += math.cos(angle) * acceleration * delta;
			this.y += math.sin(angle) * acceleration * delta;
		}
	}
	draw() {
		love.graphics.circle("fill", this.x, this.y, 12);
	}
}