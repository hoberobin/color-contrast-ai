const net = new brain.NeuralNetwork();

const data = [
  { input: { r: 0, g: 0, b: 0 }, output: [1] },
  { input: { r: 1, g: 1, b: 1 }, output: [0] },
  {
    input: {
      r: 0.31437600799851495,
      g: 0.7895294204183381,
      b: 0.02856929470084113,
    },
    output: [0],
  },
  {
    input: {
      r: 0.1683546185229814,
      g: 0.8823090556944582,
      b: 0.5599197473216826,
    },
    output: [0],
  },
  {
    input: {
      r: 0.7249463606272417,
      g: 0.09068669470404811,
      b: 0.9777702488615465,
    },
    output: [1],
  },
  {
    input: {
      r: 0.7406824011799442,
      g: 0.8022027660907785,
      b: 0.9371883418277693,
    },
    output: [0],
  },
  {
    input: {
      r: 0.7860702181011348,
      g: 0.9008544386852022,
      b: 0.3873707412552472,
    },
    output: [0],
  },
  {
    input: {
      r: 0.16518505662142857,
      g: 0.5500948157569847,
      b: 0.13962644578042704,
    },
    output: [1],
  },
  {
    input: {
      r: 0.023445565918083888,
      g: 0.7453571089747846,
      b: 0.32950030853183376,
    },
    output: [1],
  },
  {
    input: {
      r: 0.03453670547338872,
      g: 0.7866265279830134,
      b: 0.15037428205269365,
    },
    output: [0],
  },
  {
    input: {
      r: 0.5375065088824702,
      g: 0.8023603421238481,
      b: 0.7856999104241804,
    },
    output: [0],
  },
  {
    input: {
      r: 0.3319411268864192,
      g: 0.02798875610988749,
      b: 0.26031661846428267,
    },
    output: [1],
  },
  {
    input: {
      r: 0.9776935278285128,
      g: 0.5008980300417916,
      b: 0.8749775465375886,
    },
    output: [1],
  },
  {
    input: {
      r: 0.6824591092041674,
      g: 0.5600633612690717,
      b: 0.1747361484130947,
    },
    output: [1],
  },
  {
    input: {
      r: 0.017437059281954825,
      g: 0.13310051470710338,
      b: 0.17321563242136362,
    },
    output: [1],
  },
  {
    input: {
      r: 0.9725544409528251,
      g: 0.44032938968945845,
      b: 0.2121630600016422,
    },
    output: [1],
  },
  {
    input: {
      r: 0.7957137289249254,
      g: 0.5796708359967258,
      b: 0.3670970211616549,
    },
    output: [1],
  },
  {
    input: {
      r: 0.13380311982441984,
      g: 0.9321956118194032,
      b: 0.5885808888304924,
    },
    output: [0],
  },
  {
    input: {
      r: 0.04551523350481057,
      g: 0.9090029549551717,
      b: 0.7950303743526057,
    },
    output: [0],
  },
  {
    input: {
      r: 0.6505259898180504,
      g: 0.11379330613723271,
      b: 0.8221121327314684,
    },
    output: [1],
  },
  {
    input: {
      r: 0.2725073744496933,
      g: 0.6205403848672126,
      b: 0.6047034570165277,
    },
    output: [1],
  },
  {
    input: {
      r: 0.33060053768777276,
      g: 0.5940797731639098,
      b: 0.9130389862896935,
    },
    output: [1],
  },
  {
    input: {
      r: 0.49779713841947215,
      g: 0.032497002980989675,
      b: 0.05874913567832807,
    },
    output: [1],
  },
  {
    input: {
      r: 0.6162983899088155,
      g: 0.342940064622262,
      b: 0.13683103445588407,
    },
    output: [1],
  },
  {
    input: {
      r: 0.6617997724792952,
      g: 0.21877011024840032,
      b: 0.8870751198809792,
    },
    output: [1],
  },
  {
    input: {
      r: 0.36989289785409496,
      g: 0.2634730333606883,
      b: 0.41743844334003843,
    },
    output: [1],
  },
  {
    input: {
      r: 0.9305377935968715,
      g: 0.17060609873091748,
      b: 0.44300302348649345,
    },
    output: [1],
  },
  {
    input: {
      r: 0.07454176251481837,
      g: 0.09803130268661797,
      b: 0.016257054239460667,
    },
    output: [1],
  },
  {
    input: {
      r: 0.13344588833652904,
      g: 0.7135880667142962,
      b: 0.19804354301327343,
    },
    output: [1],
  },
  {
    input: {
      r: 0.8743747900153582,
      g: 0.6966739144349088,
      b: 0.33058443348118205,
    },
    output: [0],
  },
  {
    input: {
      r: 0.8622701439414429,
      g: 0.009350841151950506,
      b: 0.2216457009286028,
    },
    output: [1],
  },
  {
    input: {
      r: 0.6132335244434937,
      g: 0.4183714163285337,
      b: 0.8086772229939874,
    },
    output: [1],
  },
  {
    input: {
      r: 0.5059017118138598,
      g: 0.7726387434163249,
      b: 0.45676925063815443,
    },
    output: [0],
  },
  {
    input: {
      r: 0.7161506444400483,
      g: 0.7384888523784623,
      b: 0.2991668315626972,
    },
    output: [0],
  },
  {
    input: {
      r: 0.2741660735126725,
      g: 0.01540279820796342,
      b: 0.4903288149960039,
    },
    output: [1],
  },
  {
    input: {
      r: 0.6649712120651181,
      g: 0.08186361346603843,
      b: 0.036648120583920196,
    },
    output: [1],
  },
  {
    input: {
      r: 0.629081337071862,
      g: 0.9268703782827892,
      b: 0.6028910680237107,
    },
    output: [0],
  },
  {
    input: {
      r: 0.3263576201214189,
      g: 0.2918445483902168,
      b: 0.6641562819647122,
    },
    output: [1],
  },
  {
    input: {
      r: 0.6466385448477225,
      g: 0.8437071854442144,
      b: 0.480051759899184,
    },
    output: [0],
  },
];

net.train(data);

const colorEl = document.getElementById("color");
const guessEl = document.getElementById("guess");
const whiteButton = document.getElementById("white-button");
const blackButton = document.getElementById("black-button");
const printButton = document.getElementById("print-button");
setRandomColor();

whiteButton.addEventListener("click", () => {
  chooseColor(1);
});

blackButton.addEventListener("click", () => {
  chooseColor(0);
});

printButton.addEventListener("click", print);

function chooseColor(value) {
  data.push({
    input: color,
    output: [value],
  });
  setRandomColor();
}

function print() {
  console.log(JSON.stringify(data));
}

function setRandomColor() {
  color = {
    r: Math.random(),
    g: Math.random(),
    b: Math.random(),
  };
  const guess = net.run(color)[0];
  guessEl.style.color = guess > 0.5 ? `#FFF` : `#000`;
  colorEl.style.backgroundColor = `rgba(${color.r * 255}, ${color.g * 255}, ${
    color.b * 255
  })`;
}
