Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1NGFjYWJiNS1lMDA4LTRjYzMtOTJhNy1kMWVkZTdlZmFhN2IiLCJpZCI6Mjg3MzI2LCJpYXQiOjE3NDI4OTA1ODd9.GPj8hfGhr-mpN09lu3d4vKADevv5D08Of0CFZTtkDwo"
const view = new Cesium.Viewer("cesiumContainer",{
    geocoder:true,                    //是否显示地名查找控件
    baseLayerPicker:false,             //是否显示图层选择控件
    animation:false,                   //是否显示动画控件
    timeline:false,                    //是否显示时间轴
    fullscreenButton:false,            //是否显示全屏按钮
    sceneModePicker:false,             //是否显示投影模式选择按钮
    navigationHelpButton:false,        //是否显示帮助按钮
    homeButton:false,                  //是否显示home按钮
});
 /******加载cesiumworld地形******/
view.scene.setTerrain(
  new Cesium.Terrain(
    Cesium.CesiumTerrainProvider.fromIonAssetId(3582765),
  ),
);



