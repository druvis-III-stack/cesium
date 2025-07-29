var map;
var zoom = 8;
var lay;
var onlyMapLay;
function onLoad() {
    var imageURL = "http://t0.tianditu.gov.cn/img_w/wmts?" +
        "SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles" +
        "&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=您的密钥";
    //创建自定义图层对象
    lay = new T.TileLayer(imageURL, {minZoom: 1, maxZoom: 18});
    var config = {layers: [lay]};
    //初始化地图对象
    map = new T.Map("mapDiv", config);
    //设置显示地图的中心点和级别
    map.centerAndZoom(new T.LngLat(116.40969, 39.89945), zoom);
    //允许鼠标滚轮缩放地图
    map.enableScrollWheelZoom();
}