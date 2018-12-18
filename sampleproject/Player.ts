export class Player {
    constructor(private x: number, private y: number) {}
    public update(delta: number) {
        const isDown = love.keyboard.isDown;
        const vx = (isDown("a") ? -1 : 0) + (isDown("d") ? 1 : 0);
        const vy = (isDown("w") ? -1 : 0) + (isDown("s") ? 1 : 0);
        if (vx !== 0 || vy !== 0) {
            const angle = math.atan2(vy, vx);
            const acceleration = 60;     // Pixels per second
            this.x += math.cos(angle) * acceleration * delta;
            this.y += math.sin(angle) * acceleration * delta;
        }
    }
    public draw() {
        love.graphics.circle("fill", this.x, this.y, 12);
    }
}
