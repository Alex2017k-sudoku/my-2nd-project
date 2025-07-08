let plane = sprites.create(assets.image`✈`, SpriteKind.Player)
scene.setBackgroundImage(assets.image`plane landing`)
controller.moveSprite(plane)
plane.setStayInScreen(true)
