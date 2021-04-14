controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . . . . 5 5 5 5 5 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, spaceShip, 100, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.blizzard, 500)
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.trail, 500)
})
let alien: Sprite = null
let projectile: Sprite = null
let spaceShip: Sprite = null
spaceShip = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 1 . . . . . . . . . . . 
    . . . . 1 1 . . . . . . . . . . 
    . . . . 1 1 1 1 1 . . . . . . . 
    . . . . a 1 1 a 1 1 1 1 . . . . 
    . . . . . . 1 a a a a 1 1 a . . 
    . . . . a 1 1 a 1 1 1 1 . . . . 
    . . . . 1 1 1 1 1 . . . . . . . 
    . . . . 1 1 . . . . . . . . . . 
    . . . . 1 . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(spaceShip)
spaceShip.setStayInScreen(true)
info.setLife(3)
forever(function () {
    music.playMelody("B G A F F E D F ", 163)
})
game.onUpdateInterval(500, function () {
    alien = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 7 . . . . . . . . 7 7 . . 
        . . . 7 7 7 7 7 7 7 7 7 7 . . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . 7 7 7 7 2 7 7 2 7 7 7 7 . . 
        . . 7 7 7 7 2 7 7 2 7 7 7 7 . . 
        . . . 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        . . . . 7 7 7 2 2 7 7 . . . . . 
        . . . . . 7 7 7 2 7 7 . . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    alien.setVelocity(-50, 0)
    alien.setPosition(160, randint(0, 120))
})
