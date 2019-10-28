function Chart(context, size) {
    var scale = (x) => {
        return (x + 1) * (size / 2);
    };

    var drawPoint = (x, y, color) => {
        context.fillStyle = color;
        context.fillRect(scale(x), size - scale(y), 4, 4);
    };

    return {
        drawPoints: (data) => {
            data.forEach((pt) => {
                drawPoint(pt.in1, pt.in2, pt.out === -1 ? "#f00" : "#00f");
            });
        },

        drawEquation: (m) => {
            var y1 = 1;
            var y2 = -1;
            var x1 = y1 / m;
            var x2 = y2 / m;
            context.beginPath();
            context.strokeStyle = "#0f0";
            context.moveTo(scale(x1), size - scale(y1));
            context.lineTo(scale(x2), size - scale(y2));
            context.stroke();
        },

        drawAxis: () => {
            context.beginPath();
            context.strokeStyle = "#000";
            context.moveTo(scale(-1), size - scale(0));
            context.lineTo(scale(1), size - scale(0));
            context.moveTo(scale(0), size - scale(1));
            context.lineTo(scale(0), size - scale(-1));
            context.stroke();
        }
    };
    }
