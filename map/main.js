// 获取 API 密钥
const apiKey = "YOUR_API_KEY";

// 创建地图
const map = new google.maps.Map(document.getElementById("map"), {
  center: { lat: 1.352222, lng: 103.819444 },
  zoom: 12,
});

// 添加标记
const marker = new google.maps.Marker({
  position: { lat: 1.352222, lng: 103.819444 },
  map: map,
});
