export class UI {
    constructor(game) {
        this.game = game;
        this.fontSize = 30;
        this.fontFamily = 'Creepster';
        this.livesImage = document.getElementById('heart');
    }
    draw(ctx) {
        ctx.save();
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowColor = 'white';
        ctx.shadowBlur = 0;
        ctx.font = this.fontSize + 'px ' + this.fontFamily;
        ctx.textAlign = 'left';
        ctx.fillStyle = this.game.fontColor;
        // score
        ctx.fillText('Score: ' + this.game.score, 20, 50);
        // timer
        ctx.font = this.fontSize * 0.8 + 'px ' + this.fontFamily;
        ctx.fillText('Time: ' + (this.game.time * 0.001).toFixed(1), 20, 80);
        // lives
        for (let i = 0; i < this.game.lives; i++) {
            ctx.drawImage(this.livesImage, 25 * i + 20, 95, 25, 25);
        }
        // game over message
        if (this.game.gameOver) {
            ctx.textAlign = 'center';
            ctx.font = this.fontSize * 2 + ' px ' + this.fontFamily;
            if (this.game.score > this.game.winningScore) {
                ctx.fillText('おめでとうございます！！', this.game.width * 0.5, this.game.height * 0.5 - 20);
                ctx.font = this.fontSize * 0.7 + ' px ' + this.fontFamily;
                ctx.fillText('親分！', this.game.width * 0.5, this.game.height * 0.5 + 20);
            } else {
                ctx.fillText('This is below weak!', this.game.width * 0.5, this.game.height * 0.5 - 20);
                ctx.font = this.fontSize * 0.7 + ' px ' + this.fontFamily;
                ctx.fillText('Try again!', this.game.width * 0.5, this.game.height * 0.5 + 20);
            }
        }
        ctx.restore();
    }
}