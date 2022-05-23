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

/**
 * @description 绘制五角星
 * @param {Number} startX 中心点横坐标
 * @param {Number} startY 中心点纵坐标
 * @param {Number} size 中心点到远顶点的距离
 * @param {Object} ctx 上下文对象
 */
const star = (startX, startY, size, ctx) => {
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
        ctx.lineTo(
            Math.cos(((i * 72 + 18) * Math.PI) / 180) * size + startX,
            -Math.sin(((i * 72 + 18) * Math.PI) / 180) * size + startY
        );
        ctx.lineTo(
            Math.cos(((i * 72 + 54) * Math.PI) / 180) * (size / 2) + startX,
            -Math.sin(((i * 72 + 54) * Math.PI) / 180) * (size / 2) + startY
        );
    }
    ctx.closePath();
};

/**
 * @description 绘制方格调色板
 * @param {Number} size 单元方格长宽（正方形）
 * @param {Number} n 长宽单元格个数
 * @param {Object} ctx 上下文对象
 * @param {Number} colorGap1 色差间隙1
 * @param {Number} colorGap2 色差间隙2
 */
const palette = (size, n, ctx, colorGap1, colorGap2) => {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            ctx.fillStyle = `rgb(${255 - i * colorGap1}, ${255 -
                j * colorGap2}, 0)`;
            ctx.fillRect(j * size, i * size, size, size);
        }
    }
};

/**
 * 绘制圆角矩形
 * @param {Number} offsetX 圆角矩形距离 x 轴的距离
 * @param {Number} offsetY 圆角矩形距离 y 轴的距离
 * @param {Number} width 矩形直线宽
 * @param {Number} height 矩形直线高
 * @param {Number} r 圆角半径
 * @param {Object} ctx 上下文对象
 */
const draw = (offsetX, offsetY, width, height, r, ctx) => {
    ctx.beginPath();
    ctx.arc(
        offsetX + r,
        offsetY + r,
        r,
        (180 * Math.PI) / 180,
        (270 * Math.PI) / 180
    );
    ctx.lineTo(offsetX + r + width, offsetY);
    ctx.arc(
        offsetX + r + width,
        offsetY + r,
        r,
        (270 * Math.PI) / 180,
        (360 * Math.PI) / 180
    );
    ctx.lineTo(offsetX + width + 2 * r, offsetY + r + height);
    ctx.arc(
        offsetX + r + width,
        offsetY + r + height,
        r,
        0,
        (90 * Math.PI) / 180
    );
    ctx.lineTo(offsetX + r, offsetY + 2 * r + height);
    ctx.arc(
        offsetX + r,
        offsetY + r + height,
        r,
        (90 * Math.PI) / 180,
        (180 * Math.PI) / 180
    );
    ctx.lineTo(offsetX, offsetY + r);
    ctx.closePath();
};
