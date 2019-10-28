function Perceptron() {
    var trainingData = [
        {in1: 0.72, in2: 0.82, out: -1},
        {in1: 0.91, in2: -0.69, out: -1},
        {in1: 0.46, in2: 0.80, out: -1 },
        {in1: 0.03, in2: 0.93, out: -1},
        {in1: 0.12, in2: 0.25, out: -1},
        {in1: 0.96, in2: 0.47, out: -1},
        {in1: 0.79, in2: -0.75, out: -1},
        {in1: 0.46, in2:0.98, out: -1},
        {in1: 0.66, in2: 0.24, out: -1},
        {in1: 0.72, in2: -0.15, out: -1},
        {in1: 0.35, in2: 0.01, out: -1},
        {in1: -0.16, in2: 0.84, out: -1},
        {in1: -0.04, in2: 0.68, out: -1},
        {in1: -0.58, in2: 0.62, out: 1},
        {in1: -0.48, in2: 0.05, out: 1},
        {in1: -0.79, in2: -0.92, out: 1},
        {in1: -0.42, in2: -0.09, out: 1},
        {in1: -0.76, in2: 0.65, out: 1},
        {in1: -0.77, in2: -0.76, out: 1},
        {in1: -0.11, in2: 0.10, out: 1},
        {in1: 0.31, in2: -0.96, out: 1},
        {in1: 0.00, in2: -0.26, out:1},
        {in1: -0.43, in2: -0.65, out: 1},
        {in1: 0.57, in2: -0.97, out: 1},
        {in1: -0.47, in2: -0.03, out: 1},
        {in1: -0.72, in2: -0.64, out: 1},
        {in1: -0.57, in2: 0.15, out: 1},
        {in1: -0.25, in2: -0.43, out: 1},
        {in1: 0.47, in2: -0.88, out: 1},
        {in1: -0.12, in2: -0.90, out: 1},
    ];

    var weights = {
        w1: Math.random(),
        w2: Math.random()
    };

    var learningRate = 0.1;

    var calculateOut = (inputs) => {
        var sum = inputs.in1 * weights.w1 + inputs.in2 * weights.w2;
        return sum >= 0 ? 1 : -1;
    };

    return {
        train: () => {
            var globalErr;
            var iteration = 1;
            document.querySelector("#log").innerHTML = "";
            do {
                globalErr = 0;
                trainingData.forEach((item) => {
                    var localErr = item.out - calculateOut(item);
                    if (localErr !== 0) {
                        weights.w1 += learningRate * localErr * item.in1;
                        weights.w2 += learningRate * localErr * item.in2;
                    }
                    globalErr += Math.abs(localErr);
                    document.querySelector("#log").innerHTML += "Iteration " + iteration + ", Error " + globalErr + ".<br>";
                    iteration++;
                });
            } while (globalErr !== 0);
            var equation = "<strong>0 = <u>" + weights.w1 + "</u>x + <u>" + weights.w2 + "</u>y</strong><br><br>";
            equation += "<i>y = " + weights.w1 / (-1 * weights.w2) + "x (in form of y = mx + b)</i>";
            document.querySelector("#equation").innerHTML = equation;
        },

        getWeights: () => weights,

        getTrainingData: () => trainingData,

        getSlope: () => weights.w1 / (-1 * weights.w2),

        decide: (x, y) => calculateOut({in1: x, in2: y}) === 1 ? "Blue" : "Red"
    };
};
