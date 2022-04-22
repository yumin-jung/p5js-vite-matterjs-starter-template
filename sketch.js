// module aliases
let Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

// create an engine
let engine = Engine.create();

// create a renderer
let render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        // width: 1000,
        // height: 1000,

        wireframes: false,
        background: '#20a3d6',
        wireframeBackground: 'grey'
    }
});

function setup() {
    createCanvas(0, 0);
    // create two boxes and a ground
    let boxA = Bodies.rectangle(400, 200, 80, 80);
    let boxB = Bodies.rectangle(450, 50, 80, 80);
    let ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

    // add all of the bodies to the world
    Composite.add(engine.world, [boxA, boxB, ground]);

    // run the renderer
    Render.run(render);

    // create runner
    let runner = Runner.create();

    // run the engine
    Runner.run(runner, engine);
}

function draw() {
    background(0);
    let circle4 = Bodies.circle(300, 50, 5);
    Composite.add(engine.world, circle4);
}