# Canvas

Canvas API 提供了一个通过 JavaScript 和 HTML 的<canvas>元素来绘制图形的方式。是为了解决 Web 页面中只能显示静态图片这个问题而提出的。

-   canvas 的 width，height 只允许在标签内设置，否则会变成默认宽 300 高 150 [demo1](https://github.com/YaliixxG/Canvas/blob/main/demo1.html)

-   画直线：起点（将画笔移动到画布的哪一点） moveTo(x1, y1)，终点（画笔画至哪一点） lineTo(x2, y2)，连线 stroke() [demo2](https://github.com/YaliixxG/Canvas/blob/main/demo2.html)

-   用直线画三角形 [demo3](https://github.com/YaliixxG/Canvas/blob/main/demo3.html)

-   用直线画矩形 [demo4](https://github.com/YaliixxG/Canvas/blob/main/demo4.html)

-   用 api 画描边矩形（就是只有边框的） [demo5](https://github.com/YaliixxG/Canvas/blob/main/demo5.html)

    -   strokeStyle 属性取值有三种，即颜色值、渐变色、图案
    -   strokeRect(x, y, width, height)方法。 x: 矩形左上角横坐标；y: 矩形左上角纵坐标；width, height 宽高 px

-   用 api 画填充矩形 [demo6](https://github.com/YaliixxG/Canvas/blob/main/demo6.html)
    -   fillStyle 属性取值有三种，即颜色值、渐变色、图案
    -   fillRect(x, y, width, height)方法。 x: 矩形左上角横坐标；y: 矩形左上角纵坐标；width, height 宽高 px
