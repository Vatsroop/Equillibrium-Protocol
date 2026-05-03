gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.idToCallbackMap = new Map();
gdjs.Untitled_32sceneCode.GDBackgroundObjects1= [];
gdjs.Untitled_32sceneCode.GDBackgroundObjects2= [];
gdjs.Untitled_32sceneCode.GDPlayObjects1= [];
gdjs.Untitled_32sceneCode.GDPlayObjects2= [];
gdjs.Untitled_32sceneCode.GDSettingsObjects1= [];
gdjs.Untitled_32sceneCode.GDSettingsObjects2= [];
gdjs.Untitled_32sceneCode.GDBackObjects1= [];
gdjs.Untitled_32sceneCode.GDBackObjects2= [];
gdjs.Untitled_32sceneCode.GDMarker_9595mainObjects1= [];
gdjs.Untitled_32sceneCode.GDMarker_9595mainObjects2= [];
gdjs.Untitled_32sceneCode.GDMarker_9595SettingsObjects1= [];
gdjs.Untitled_32sceneCode.GDMarker_9595SettingsObjects2= [];
gdjs.Untitled_32sceneCode.GDMarker_9595QuitObjects1= [];
gdjs.Untitled_32sceneCode.GDMarker_9595QuitObjects2= [];
gdjs.Untitled_32sceneCode.GDYesObjects1= [];
gdjs.Untitled_32sceneCode.GDYesObjects2= [];
gdjs.Untitled_32sceneCode.GDNoObjects1= [];
gdjs.Untitled_32sceneCode.GDNoObjects2= [];
gdjs.Untitled_32sceneCode.GDQuit_9595the_9595GameObjects1= [];
gdjs.Untitled_32sceneCode.GDQuit_9595the_9595GameObjects2= [];
gdjs.Untitled_32sceneCode.GDSoundObjects1= [];
gdjs.Untitled_32sceneCode.GDSoundObjects2= [];
gdjs.Untitled_32sceneCode.GDMusicObjects1= [];
gdjs.Untitled_32sceneCode.GDMusicObjects2= [];
gdjs.Untitled_32sceneCode.GDMusic_9595sliderObjects1= [];
gdjs.Untitled_32sceneCode.GDMusic_9595sliderObjects2= [];
gdjs.Untitled_32sceneCode.GDSound_9595sliderObjects1= [];
gdjs.Untitled_32sceneCode.GDSound_9595sliderObjects2= [];
gdjs.Untitled_32sceneCode.GDTransitionObjects1= [];
gdjs.Untitled_32sceneCode.GDTransitionObjects2= [];
gdjs.Untitled_32sceneCode.GDPlay_9595buttonObjects1= [];
gdjs.Untitled_32sceneCode.GDPlay_9595buttonObjects2= [];
gdjs.Untitled_32sceneCode.GDSettings_9595buttonObjects1= [];
gdjs.Untitled_32sceneCode.GDSettings_9595buttonObjects2= [];
gdjs.Untitled_32sceneCode.GDQuit_9595buttonObjects1= [];
gdjs.Untitled_32sceneCode.GDQuit_9595buttonObjects2= [];
gdjs.Untitled_32sceneCode.GDQuitObjects1= [];
gdjs.Untitled_32sceneCode.GDQuitObjects2= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Settings_button"), gdjs.Untitled_32sceneCode.GDSettings_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDSettings_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDSettings_9595buttonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDSettings_9595buttonObjects1[k] = gdjs.Untitled_32sceneCode.GDSettings_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDSettings_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Marker_Settings"), gdjs.Untitled_32sceneCode.GDMarker_9595SettingsObjects1);
{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "Cameramove", (( gdjs.Untitled_32sceneCode.GDMarker_9595SettingsObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDMarker_9595SettingsObjects1[0].getCenterXInScene()), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "", "linear", 0.5);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.Untitled_32sceneCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDBackObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDBackObjects1[k] = gdjs.Untitled_32sceneCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Marker_main"), gdjs.Untitled_32sceneCode.GDMarker_9595mainObjects1);
{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "Cameramove", (( gdjs.Untitled_32sceneCode.GDMarker_9595mainObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDMarker_9595mainObjects1[0].getCenterXInScene()), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "", "linear", 0.5);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit_button"), gdjs.Untitled_32sceneCode.GDQuit_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDQuit_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDQuit_9595buttonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDQuit_9595buttonObjects1[k] = gdjs.Untitled_32sceneCode.GDQuit_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDQuit_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Marker_Quit"), gdjs.Untitled_32sceneCode.GDMarker_9595QuitObjects1);
{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "Cameramove", (( gdjs.Untitled_32sceneCode.GDMarker_9595QuitObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDMarker_9595QuitObjects1[0].getCenterXInScene()), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "", "linear", 0.5);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("No"), gdjs.Untitled_32sceneCode.GDNoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDNoObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDNoObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDNoObjects1[k] = gdjs.Untitled_32sceneCode.GDNoObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDNoObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Marker_main"), gdjs.Untitled_32sceneCode.GDMarker_9595mainObjects1);
{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "Cameramove", (( gdjs.Untitled_32sceneCode.GDMarker_9595mainObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDMarker_9595mainObjects1[0].getCenterXInScene()), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "", "linear", 0.5);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Yes"), gdjs.Untitled_32sceneCode.GDYesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDYesObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDYesObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDYesObjects1[k] = gdjs.Untitled_32sceneCode.GDYesObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDYesObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play_button"), gdjs.Untitled_32sceneCode.GDPlay_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlay_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlay_9595buttonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlay_9595buttonObjects1[k] = gdjs.Untitled_32sceneCode.GDPlay_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlay_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sound_slider"), gdjs.Untitled_32sceneCode.GDSound_9595sliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDSound_9595sliderObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDSound_9595sliderObjects1[i].IsBeingDragged(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDSound_9595sliderObjects1[k] = gdjs.Untitled_32sceneCode.GDSound_9595sliderObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDSound_9595sliderObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDSound_9595sliderObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Sound").setNumber((( gdjs.Untitled_32sceneCode.GDSound_9595sliderObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDSound_9595sliderObjects1[0].Value(null)));
}
{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 1, (( gdjs.Untitled_32sceneCode.GDSound_9595sliderObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDSound_9595sliderObjects1[0].Value(null)));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_slider"), gdjs.Untitled_32sceneCode.GDMusic_9595sliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDMusic_9595sliderObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDMusic_9595sliderObjects1[i].IsBeingDragged(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDMusic_9595sliderObjects1[k] = gdjs.Untitled_32sceneCode.GDMusic_9595sliderObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDMusic_9595sliderObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDMusic_9595sliderObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Music").setNumber((( gdjs.Untitled_32sceneCode.GDMusic_9595sliderObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDMusic_9595sliderObjects1[0].Value(null)));
}
{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 2, (( gdjs.Untitled_32sceneCode.GDMusic_9595sliderObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDMusic_9595sliderObjects1[0].Value(null)));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Marker_Quit"), gdjs.Untitled_32sceneCode.GDMarker_9595QuitObjects1);
gdjs.copyArray(runtimeScene.getObjects("Marker_Settings"), gdjs.Untitled_32sceneCode.GDMarker_9595SettingsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Marker_main"), gdjs.Untitled_32sceneCode.GDMarker_9595mainObjects1);
gdjs.copyArray(runtimeScene.getObjects("Play_button"), gdjs.Untitled_32sceneCode.GDPlay_9595buttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Quit_button"), gdjs.Untitled_32sceneCode.GDQuit_9595buttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Settings_button"), gdjs.Untitled_32sceneCode.GDSettings_9595buttonObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMarker_9595QuitObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMarker_9595QuitObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMarker_9595mainObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMarker_9595mainObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMarker_9595SettingsObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMarker_9595SettingsObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlay_9595buttonObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlay_9595buttonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSettings_9595buttonObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSettings_9595buttonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDQuit_9595buttonObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDQuit_9595buttonObjects1[i].hide();
}
}
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDBackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlayObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSettingsObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSettingsObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBackObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBackObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDMarker_9595mainObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDMarker_9595mainObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDMarker_9595SettingsObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDMarker_9595SettingsObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDMarker_9595QuitObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDMarker_9595QuitObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDYesObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDYesObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNoObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNoObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDQuit_9595the_9595GameObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDQuit_9595the_9595GameObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSoundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSoundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDMusicObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDMusicObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDMusic_9595sliderObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDMusic_9595sliderObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSound_9595sliderObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSound_9595sliderObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDTransitionObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTransitionObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlay_9595buttonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlay_9595buttonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSettings_9595buttonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSettings_9595buttonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDQuit_9595buttonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDQuit_9595buttonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDQuitObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDQuitObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
gdjs.Untitled_32sceneCode.GDBackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlayObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSettingsObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSettingsObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBackObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBackObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDMarker_9595mainObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDMarker_9595mainObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDMarker_9595SettingsObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDMarker_9595SettingsObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDMarker_9595QuitObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDMarker_9595QuitObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDYesObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDYesObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNoObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNoObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDQuit_9595the_9595GameObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDQuit_9595the_9595GameObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSoundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSoundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDMusicObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDMusicObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDMusic_9595sliderObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDMusic_9595sliderObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSound_9595sliderObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSound_9595sliderObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDTransitionObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTransitionObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlay_9595buttonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlay_9595buttonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSettings_9595buttonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSettings_9595buttonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDQuit_9595buttonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDQuit_9595buttonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDQuitObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDQuitObjects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
