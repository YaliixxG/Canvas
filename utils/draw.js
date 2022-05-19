/**
 * @description 绘制正多边形
 * @param {Number} startX 中心点横坐标
 * @param {Number} startY 中心点纵坐标
 * @param {Number} size 边长
 * @param {Number} n 顶点数（几边形）
 * @param {Object} ctx 上下文对象
 */
const polygon = (startX, startY, size, n, ctx) => {
    ctx.beginPath();

    // 正弦、余弦、正割或余割的基本周期是全圆，也就是 2π弧度或 360°；正切或余切的基本周期是半圆，也就是 π 弧度或 180°。
    let de = (2 * Math.PI) / n;
    for (let i = 0; i < n; i++) {
        let x = Math.cos(i * de) * size;
        let y = Math.sin(i * de) * size;

        ctx.lineTo(x + startX, y + startY);
    }
    ctx.closePath();
};