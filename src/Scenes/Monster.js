class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
        //this.AKey = null;
        //this.DKey = null;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX-10, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.body2 = this.add.sprite(this.bodyX+10, this.bodyY - 100, "monsterParts", "body_greenD.png");
        my.sprite.body3 = this.add.sprite(this.bodyX, this.bodyY - 200, "monsterParts", "body_greenD.png");
        //For reference: left/right means the monster's left/right, not the viewer's left/right!
        my.sprite.leftLeg = this.add.sprite(this.bodyX + 90, this.bodyY + 100, "monsterParts", "leg_blueA.png");
        my.sprite.rightLeg = this.add.sprite(this.bodyX - 110, this.bodyY + 100, "monsterParts", "leg_blueB.png");
        my.sprite.rightLeg.flipX = true;
        my.sprite.leftArm = this.add.sprite(this.bodyX + 90, this.bodyY - 100, "monsterParts", "arm_redA.png");
        my.sprite.rightArm = this.add.sprite(this.bodyX - 70, this.bodyY - 100, "monsterParts", "arm_redB.png");
        my.sprite.rightArm.flipX = true;
        my.sprite.detail = this.add.sprite(this.bodyX + 75, this.bodyY - 250, "monsterParts", "detail_dark_horn_small.png");
        my.sprite.detail2 = this.add.sprite(this.bodyX - 75, this.bodyY - 250, "monsterParts", "detail_dark_horn_small.png");
        my.sprite.detail2.flipX = true;
        my.sprite.detail3 = this.add.sprite(this.bodyX + 50, this.bodyY - 275, "monsterParts", "detail_dark_horn_large.png");
        my.sprite.detail4 = this.add.sprite(this.bodyX - 50, this.bodyY - 275, "monsterParts", "detail_dark_horn_large.png");
        my.sprite.detail4.flipX = true;
        my.sprite.eye1 = this.add.sprite(this.bodyX + 40, this.bodyY - 215, "monsterParts", "eye_human.png");
        my.sprite.eye2 = this.add.sprite(this.bodyX - 40, this.bodyY - 215, "monsterParts", "eye_human.png");
        my.sprite.mouth = this.add.sprite(this.bodyX, this.bodyY - 160, "monsterParts", "mouthA.png");
        my.sprite.fang = this.add.sprite(this.bodyX, this.bodyY - 160, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.fang.visible = false;

        //movement key store
        this.AKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.DKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        //this.PPress = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);

        //Smile code
        let SKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

        SKey.on('down',(key,event) =>{
            my.sprite.mouth.visible = true;
            my.sprite.fang.visible = false;
        });

        //Fang code
        let FKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);

        FKey.on('down',(key,event) =>{
            my.sprite.mouth.visible = false;
            my.sprite.fang.visible = true;
        });
    }

    update() {
        //My mom wanted her to be Mr. Pickle so he's Mr. Pickle now
        let my = this.my;    // create an alias to this.my for readability

        /*
        if(this.PPress.isDown){
            my.sprite.detail.visible = false;
        }
        */

        // Polling input: movement
        if(this.AKey.isDown && !this.DKey.isDown){
            //my.sprite.detail.visible = false;
            /*
            console.log(my.sprite.body.x);
            my.sprite.body.x -= 5;
            console.log(my.sprite.body);
            */
            for(let part in my.sprite){
                //console.log(part);
                my.sprite[part].x -= 5;
            }
        }
        if(this.DKey.isDown && !this.AKey.isDown){
            for(let part in my.sprite){
                //console.log(part);
                my.sprite[part].x += 5;
            }
        }
       
    }

}