# Canvas

Canvas API 提供了一个通过 JavaScript 和 HTML 的<canvas>元素来绘制图形的方式。是为了解决 Web 页面中只能显示静态图片这个问题而提出的。

-   canvas 的 width，height 只允许在标签内设置，否则会变成默认宽 300 高 150 [demo1](https://github.com/YaliixxG/Canvas/blob/main/demo1.html)

### 直线图形

-   画直线：起点（将画笔移动到画布的哪一点） moveTo(x1, y1)，终点（画笔画至哪一点） lineTo(x2, y2)，连线 stroke() [demo2](https://github.com/YaliixxG/Canvas/blob/main/demo2.html)

-   用直线画三角形 [demo3](https://github.com/YaliixxG/Canvas/blob/main/demo3.html)

#### 矩形

-   用直线画矩形 [demo4](https://github.com/YaliixxG/Canvas/blob/main/demo4.html)

-   用 strokeRect() 画描边矩形（就是只有边框的） [demo5](https://github.com/YaliixxG/Canvas/blob/main/demo5.html)

    -   strokeStyle 属性取值有三种，即颜色值、渐变色、图案（属性必须先定义，才能调用方法绘制，否则无效）
    -   strokeRect(x, y, width, height)方法。 x: 矩形左上角横坐标；y: 矩形左上角纵坐标；width, height 宽高 px

-   用 fillRect() 画填充矩形 [demo6](https://github.com/YaliixxG/Canvas/blob/main/demo6.html)

    -   fillStyle 属性取值有三种，即颜色值、渐变色、图案（属性必须先定义，才能调用方法绘制，否则无效）
    -   fillRect(x, y, width, height)方法。 x: 矩形左上角横坐标；y: 矩形左上角纵坐标；width, height 宽高 px

-   用 rect() 画矩形 [demo7](https://github.com/YaliixxG/Canvas/blob/main/demo7.html)

    -   rect(x, y, width, height)参数与 strokeRect()，fillRect() 一致，区别是需要额外调用连线方法（描边矩形调用 stroke()，填充矩形调用 fill()）才能将矩形绘制出来，而另外两个方法可以直接绘制
    -   若要绘制描边矩形，则属性用 strokeStyle;若要绘制填充矩形，则使用 fillStyle

-   用 clearRect(x, y, width, height)来清除指定区域矩形 [demo8](https://github.com/YaliixxG/Canvas/blob/main/demo8.html)

    -   起点位置若在矩形外部，清除无效；宽高超过矩形，清除有效
    -   clearRect(0, 0, cvs.width, cvs.height) 用于清空整个 canvas

#### 正多边形

-   利用三角函数定理来确定每个顶点的位置，再通过循环进行绘制 [demo9](https://github.com/YaliixxG/Canvas/blob/main/demo9.html)

#### 五角星

-   利用三角函数定理来确定每个顶点的位置，再通过循环进行绘制 [demo10](https://github.com/YaliixxG/Canvas/blob/main/demo10.html)

    -   Canvas 元素中 y 轴向下为正，sin 的值要为负
    -   Math.sin(X), Math.cos(X)，X 是采用的弧度制，记得转换

#### 方格调色盘

-   由于 X，Y 轴都需要绘制，双循环 [demo11](https://github.com/YaliixxG/Canvas/blob/main/demo11.html)

### 曲线图形

-   曲线：不一定是弧线，但是包括弧线
-   弧线：弧线是圆周的一部分

#### 圆形

-   arc(圆心点 x, 圆心点 y, 半径 r, 开始角度，结束角度，是否逆时针)，注意角度为弧度制
-   每次绘制圆的步骤：ctx.beginPath()，arc()画圆，ctx.closePath()，描边 stroke()/填充 fill()操作 [demo12](https://github.com/YaliixxG/Canvas/blob/main/demo12.html)

#### 弧线

-   arc()画弧线，与画圆唯一的区别是弧线为非闭合图形不需要 closePath() [demo13](https://github.com/YaliixxG/Canvas/blob/main/demo13.html)
-   直线与弧线的结合 [demo14](https://github.com/YaliixxG/Canvas/blob/main/demo14.html)
-   arcTo(控制点 x, 控制点 y, 结束点 x, 结束点 y, 半径 r)画弧线 [demo15](https://github.com/YaliixxG/Canvas/blob/main/demo15.html)
    -   由 moveTo()/lineTo()决定开始点
    -   利用开始点、控制点和结束点所形成的夹角，绘制一段与夹角的两边相切并且半径为 r 的圆弧
    -   如果开始点与你确定的半径，夹角构不成合理的弧线时，arcTo() 会自动将你的开始点连条线至“合理的弧线”起点 [demo16](https://github.com/YaliixxG/Canvas/blob/main/demo16.html)

#### 圆角矩形

-   圆角矩形需要确定八个点，然后依次绘制就行 [demo17](https://github.com/YaliixxG/Canvas/blob/main/demo17.html)

#### 二次贝塞尔曲线

-   quadraticCurveTo(控制点 x, 控制点 y, 结束点 x, 结束点 y);
    -   由 moveTo()/lineTo()决定开始点 [demo18](https://github.com/YaliixxG/Canvas/blob/main/demo18.html)
    -   画爱心，连续调用 quadraticCurveTo()进行绘制，分成四段曲线，则调用四次 [demo19](https://github.com/YaliixxG/Canvas/blob/main/demo19.html)

#### 三次贝塞尔曲线

-   与二次贝塞尔曲线唯一的区别就是，一次操纵两个控制点，可以多绘制一段曲线
-   bezierCurveTo(控制点 1 x, 控制点 1 y, 控制点 2 x, 控制点 2 y,结束点 x, 结束点 y);
    -   画爱心，连续调用 bezierCurveTo()进行绘制，分成两段曲线，则调用两次 [demo20](https://github.com/YaliixxG/Canvas/blob/main/demo20.html)
