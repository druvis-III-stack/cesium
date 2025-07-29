//开启深度检测
viewer.scene.globe.depthTestAgainstTerrain = true; 
var height; //当前水位高度
var maxHeight; //最高水位高度
var speed; //水位增长速度
var positions = []; //绘制多边形的顶点
var handler; 
var addRegion //添加多边形

//调整相机视角
viewer.scene.camera.setView({ 
 destination: Cesium.Cartesian3.fromDegrees(114.38564, 30.52914, 2000), 
}); 
//水位高度更新函数
function updataHeight() { 
 if (height < maxHeight) 
 height += speed; 
 return height; 
} 

//绘制分析区域
function addPolygon(hierarchy) { 
 addRegion = { 
 id: 'polygon', 
 name: '矩形', 
 show: true, 

 polygon: { 
 hierarchy: hierarchy, 
 material: new Cesium.ImageMaterialProperty({ 
 image: "./RasterImage/图片/河流纹理.png", 
 repeat: Cesium.Cartesian2(1.0, 1.0), 
 transparent: true, 
 color: Cesium.Color.WHITE.withAlpha(0.2), 
 }), 
 height: new Cesium.CallbackProperty(updataHeight, false), 
 } 
 } 
 viewer.entities.add(addRegion); 
 handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK) //移除事件
 handler.removeInputAction(Cesium.ScreenSpaceEventType.RIGHT_CLICK)//移除事件
} 

function draw() { 
 height = parseFloat(document.getElementById("startHeight").value) ; 
 maxHeight = parseFloat(document.getElementById("stopHeight").value) ; 
 speed = parseFloat(document.getElementById("speed").value) ; 
 viewer.entities.remove(addRegion); 
 handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas); 
 //鼠标左键单击事件
 handler.setInputAction(function (event) { 
 //用 viewer.scene.pickPosition 代替 viewer.camera.pickEllipsoid 
 //当鼠标指针在地形上移动时可以得到正确的点
 var earthPosition = viewer.scene.pickPosition(event.position); 
 positions.push(earthPosition); 
 }, Cesium.ScreenSpaceEventType.LEFT_CLICK); 
 //鼠标右键单击事件
 handler.setInputAction(function (event) { 
 addPolygon(positions); 
 positions = []; 
 }, Cesium.ScreenSpaceEventType.RIGHT_CLICK); 
}