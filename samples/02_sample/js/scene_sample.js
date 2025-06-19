
function scene_sample_register(){
    // シーンの登録
    let scene = createSceneObject("sample");
    scene.onInitalize = (sceneObject)=>{
    }

    // シーンの開始
    scene.onFrameStart = (sceneObject)=>{
    }

    // キャラクタの登録
    let ballObject = createDGLObject("sample", "ball");
    ballObject.initalize = (dglObj, sceneObject)=>{
        dglObj.animationCounter = 0;
        dglObj.x = pngBackBuffer.width / 2;
        dglObj.y = pngBackBuffer.height / 2;
    }

    // キャラクタのメイン処理
    ballObject.main = (dglObj, sceneObject)=>{
        let putno = (dglObj.animationCounter / 10) % 8;

        if(dglDevice.key.isDown(KeyCode.ArrowUp)){
            dglObj.y--;
            if(dglObj.y <= 16){
                dglObj.y = 16;
            }
        }
        if(dglDevice.key.isDown(KeyCode.ArrowDown)){
            dglObj.y++;
            if(dglObj.y >= pngBackBuffer.height - 16){
                dglObj.y = pngBackBuffer.height - 16;
            }
        }
        if(dglDevice.key.isDown(KeyCode.ArrowLeft)){
            dglObj.x--;
            if(dglObj.x <= 8){
                dglObj.x = 8;
            }
        }
        if(dglDevice.key.isDown(KeyCode.ArrowRight)){
            dglObj.x++;
            if(dglObj.x >= pngBackBuffer.width - 8){
                dglObj.x = pngBackBuffer.width - 8;
            }
        }

        // 四角を描画
        pngBackBuffer.fillRect(pngBackBuffer, 0, 0, pngBackBuffer.width, pngBackBuffer.height, 2);

        // イメージの描画
        putSpritePNG(0, putno, dglObj.x, dglObj.y);

        // カウンタ
        dglObj.animationCounter++;
    }
}