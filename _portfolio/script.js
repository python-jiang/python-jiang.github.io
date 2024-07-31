const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// 设置画布尺寸
const width = canvas.width;
const height = canvas.height;

// 圆心坐标
const centerX = width / 2;
const centerY = height / 2;

// 半径
const radius = 100;

// 初始角度
let angle = 0;

// 角速度 (每帧改变的角度)
const angularSpeed = Math.PI / 180; // 1 degree per frame

// 点的大小
const pointSize = 10;

// 动画函数
function animate() {
  requestAnimationFrame(animate);
  drawCircle();
  drawPoint();
  updateAngle();
}

// 绘制圆
function drawCircle() {
  ctx.clearRect(0, 0, width, height);
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.strokeStyle = 'blue';
  ctx.lineWidth = 2;
  ctx.stroke();
}

// 绘制点
function drawPoint() {
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);
  ctx.beginPath();
  ctx.arc(x, y, pointSize, 0, 2 * Math.PI);
  ctx.fillStyle = 'red';
  ctx.fill();
}

// 更新角度
function updateAngle() {
  angle += angularSpeed;
  if (angle > 2 * Math.PI) {
    angle -= 2 * Math.PI;
  }
}

// 启动动画
animate();