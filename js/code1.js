gdjs.gameCode = {};
gdjs.gameCode.localVariables = [];
gdjs.gameCode.idToCallbackMap = new Map();
gdjs.gameCode.GDBelowGoundObjects1= [];
gdjs.gameCode.GDBelowGoundObjects2= [];
gdjs.gameCode.GDNewSprite2Objects1= [];
gdjs.gameCode.GDNewSprite2Objects2= [];
gdjs.gameCode.GDNewTiledSprite2Objects1= [];
gdjs.gameCode.GDNewTiledSprite2Objects2= [];
gdjs.gameCode.GDNewSprite3Objects1= [];
gdjs.gameCode.GDNewSprite3Objects2= [];
gdjs.gameCode.GDGroundObjects1= [];
gdjs.gameCode.GDGroundObjects2= [];
gdjs.gameCode.GDNewSpriteObjects1= [];
gdjs.gameCode.GDNewSpriteObjects2= [];
gdjs.gameCode.GDNewSprite4Objects1= [];
gdjs.gameCode.GDNewSprite4Objects2= [];
gdjs.gameCode.GDBackgond1Objects1= [];
gdjs.gameCode.GDBackgond1Objects2= [];
gdjs.gameCode.GDBackgond2Objects1= [];
gdjs.gameCode.GDBackgond2Objects2= [];
gdjs.gameCode.GDTransitionblock1Objects1= [];
gdjs.gameCode.GDTransitionblock1Objects2= [];
gdjs.gameCode.GDNewSprite5Objects1= [];
gdjs.gameCode.GDNewSprite5Objects2= [];


gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.gameCode.GDNewSprite2Objects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDTransitionblock1Objects1Objects = Hashtable.newFrom({"Transitionblock1": gdjs.gameCode.GDTransitionblock1Objects1});
gdjs.gameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.gameCode.GDNewSprite2Objects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.gameCode.GDNewSprite2Objects1.length !== 0 ? gdjs.gameCode.GDNewSprite2Objects1[0] : null), true, "", 0);
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.5, "", 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.gameCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.gameCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDNewSprite2Objects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}
{for(var i = 0, len = gdjs.gameCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDNewSprite2Objects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.gameCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.gameCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDNewSprite2Objects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}
{for(var i = 0, len = gdjs.gameCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDNewSprite2Objects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.gameCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Transitionblock1"), gdjs.gameCode.GDTransitionblock1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDNewSprite2Objects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDTransitionblock1Objects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game2", false);
}
}

}


};

gdjs.gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameCode.GDBelowGoundObjects1.length = 0;
gdjs.gameCode.GDBelowGoundObjects2.length = 0;
gdjs.gameCode.GDNewSprite2Objects1.length = 0;
gdjs.gameCode.GDNewSprite2Objects2.length = 0;
gdjs.gameCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.gameCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.gameCode.GDNewSprite3Objects1.length = 0;
gdjs.gameCode.GDNewSprite3Objects2.length = 0;
gdjs.gameCode.GDGroundObjects1.length = 0;
gdjs.gameCode.GDGroundObjects2.length = 0;
gdjs.gameCode.GDNewSpriteObjects1.length = 0;
gdjs.gameCode.GDNewSpriteObjects2.length = 0;
gdjs.gameCode.GDNewSprite4Objects1.length = 0;
gdjs.gameCode.GDNewSprite4Objects2.length = 0;
gdjs.gameCode.GDBackgond1Objects1.length = 0;
gdjs.gameCode.GDBackgond1Objects2.length = 0;
gdjs.gameCode.GDBackgond2Objects1.length = 0;
gdjs.gameCode.GDBackgond2Objects2.length = 0;
gdjs.gameCode.GDTransitionblock1Objects1.length = 0;
gdjs.gameCode.GDTransitionblock1Objects2.length = 0;
gdjs.gameCode.GDNewSprite5Objects1.length = 0;
gdjs.gameCode.GDNewSprite5Objects2.length = 0;

gdjs.gameCode.eventsList0(runtimeScene);
gdjs.gameCode.GDBelowGoundObjects1.length = 0;
gdjs.gameCode.GDBelowGoundObjects2.length = 0;
gdjs.gameCode.GDNewSprite2Objects1.length = 0;
gdjs.gameCode.GDNewSprite2Objects2.length = 0;
gdjs.gameCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.gameCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.gameCode.GDNewSprite3Objects1.length = 0;
gdjs.gameCode.GDNewSprite3Objects2.length = 0;
gdjs.gameCode.GDGroundObjects1.length = 0;
gdjs.gameCode.GDGroundObjects2.length = 0;
gdjs.gameCode.GDNewSpriteObjects1.length = 0;
gdjs.gameCode.GDNewSpriteObjects2.length = 0;
gdjs.gameCode.GDNewSprite4Objects1.length = 0;
gdjs.gameCode.GDNewSprite4Objects2.length = 0;
gdjs.gameCode.GDBackgond1Objects1.length = 0;
gdjs.gameCode.GDBackgond1Objects2.length = 0;
gdjs.gameCode.GDBackgond2Objects1.length = 0;
gdjs.gameCode.GDBackgond2Objects2.length = 0;
gdjs.gameCode.GDTransitionblock1Objects1.length = 0;
gdjs.gameCode.GDTransitionblock1Objects2.length = 0;
gdjs.gameCode.GDNewSprite5Objects1.length = 0;
gdjs.gameCode.GDNewSprite5Objects2.length = 0;


return;

}

gdjs['gameCode'] = gdjs.gameCode;
