gdjs.game2Code = {};
gdjs.game2Code.localVariables = [];
gdjs.game2Code.idToCallbackMap = new Map();
gdjs.game2Code.GDBelowGoundObjects1= [];
gdjs.game2Code.GDBelowGoundObjects2= [];
gdjs.game2Code.GDNewSprite2Objects1= [];
gdjs.game2Code.GDNewSprite2Objects2= [];
gdjs.game2Code.GDGroundObjects1= [];
gdjs.game2Code.GDGroundObjects2= [];
gdjs.game2Code.GDNewSprite5Objects1= [];
gdjs.game2Code.GDNewSprite5Objects2= [];
gdjs.game2Code.GDNewSprite4Objects1= [];
gdjs.game2Code.GDNewSprite4Objects2= [];
gdjs.game2Code.GDNewSprite6Objects1= [];
gdjs.game2Code.GDNewSprite6Objects2= [];


gdjs.game2Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.game2Code.GDNewSprite2Objects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.game2Code.GDNewSprite2Objects1.length !== 0 ? gdjs.game2Code.GDNewSprite2Objects1[0] : null), true, "", 0);
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.5, "", 0);
}
{for(var i = 0, len = gdjs.game2Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.game2Code.GDNewSprite2Objects1[i].setPosition(-(387),804);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.game2Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.game2Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.game2Code.GDNewSprite2Objects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.game2Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.game2Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.game2Code.GDNewSprite2Objects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", false);
}
}

}


};

gdjs.game2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.game2Code.GDBelowGoundObjects1.length = 0;
gdjs.game2Code.GDBelowGoundObjects2.length = 0;
gdjs.game2Code.GDNewSprite2Objects1.length = 0;
gdjs.game2Code.GDNewSprite2Objects2.length = 0;
gdjs.game2Code.GDGroundObjects1.length = 0;
gdjs.game2Code.GDGroundObjects2.length = 0;
gdjs.game2Code.GDNewSprite5Objects1.length = 0;
gdjs.game2Code.GDNewSprite5Objects2.length = 0;
gdjs.game2Code.GDNewSprite4Objects1.length = 0;
gdjs.game2Code.GDNewSprite4Objects2.length = 0;
gdjs.game2Code.GDNewSprite6Objects1.length = 0;
gdjs.game2Code.GDNewSprite6Objects2.length = 0;

gdjs.game2Code.eventsList0(runtimeScene);
gdjs.game2Code.GDBelowGoundObjects1.length = 0;
gdjs.game2Code.GDBelowGoundObjects2.length = 0;
gdjs.game2Code.GDNewSprite2Objects1.length = 0;
gdjs.game2Code.GDNewSprite2Objects2.length = 0;
gdjs.game2Code.GDGroundObjects1.length = 0;
gdjs.game2Code.GDGroundObjects2.length = 0;
gdjs.game2Code.GDNewSprite5Objects1.length = 0;
gdjs.game2Code.GDNewSprite5Objects2.length = 0;
gdjs.game2Code.GDNewSprite4Objects1.length = 0;
gdjs.game2Code.GDNewSprite4Objects2.length = 0;
gdjs.game2Code.GDNewSprite6Objects1.length = 0;
gdjs.game2Code.GDNewSprite6Objects2.length = 0;


return;

}

gdjs['game2Code'] = gdjs.game2Code;
