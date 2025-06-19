
function scene_sample01_register(){
    // シーンの登録
    let scene = createSceneObject("sample01");
    scene.onInitalize = (sceneObject)=>{
    }

    // シーンの開始
    scene.onFrameStart = (sceneObject)=>{
        if(dglDevice.pointer.event){
            for(let key in dglDevice.pointer.event){
                if("pointerdown" == dglDevice.pointer.event[key].stateName){
                    sceneChange("sample02");
                }
            }
        }
    }

    // キャラクタの登録
    let ballObject = createDGLObject("sample01", "ball");
    ballObject.initalize = (dglObj, sceneObject)=>{
        dglObj.animationCounter = 0;
    }

    // キャラクタのメイン処理
    ballObject.main = (dglObj, sceneObject)=>{
        let x = pngBackBuffer.width / 2;
        let y = pngBackBuffer.height / 2;
        let putno = (dglObj.animationCounter / 10) % 8;

        // 四角を描画
        pngBackBuffer.fillRect(pngBackBuffer, 0, 0, pngBackBuffer.width, pngBackBuffer.height, 1);

        // イメージの描画
        putSpritePNG(0, putno, x, y);

        // カウンタ
        dglObj.animationCounter++;
    }
}