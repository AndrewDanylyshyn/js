// 1.2.3
var car1 = new Object();
car1.color = "Blue";
car1.maxSpeed = 200;
car1.driver = {
    name: "Andrew Danylyshyn",
    category: "C",
    personalLimitations: "No driving at night"
};
car1.tuning = true;
car1.numberOfAccidents = 0;


// 1.2.4
var car2 = {
    color: "Red",
    maxSpeed: 180,
    driver: {
        name: "Andrew Danylyshyn",
        category: "B",
        personalLimitations: null
    },
    tuning: false,
    numberOfAccidents: 2
};

// 1.2.5
car1.drive = function() {
    console.log("I am not driving at night");
};

// 1.2.6
car2.drive = function() {
    console.log("I can drive anytime");
};

// 1.2.7
function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
}

// 1.2.8
Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};

// 1.2.9
Truck.prototype.trip = function() {
    if (!this.driver) {
        console.log("No driver assigned");
    } else {
        var message = "Driver " + this.driver.name + " ";
        message += this.driver.nightDriving ? "drives at night" : "does not drive at night";
        message += " and has " + this.driver.experience + " years of experience";
        console.log(message);
    }
};

// 1.2.10
var truck1 = new Truck("Green", 5000, 60, "Volvo", "VNL");
var truck2 = new Truck("Yellow", 6000, 55, "Kenworth", "T680");

truck1.AssignDriver("Andrew Danylyshyn", true, 5);
truck2.AssignDriver("Andrew Danylyshyn", false, 8);

truck1.trip(); // Output: Driver Jane Doe drives at night and has 5 years of experience
truck2.trip(); // Output: Driver Bob Smith does not drive at night and has 8 years of experience


// 1.2.12
class Square{
    constructor(a){
        // 1.2.13
        this.a = a;
    }

    // 1.2.14
    static help() {
        console.log("Квадрат має чотири рівні сторони, а також всі його кути = 90 градусів");
    }

    // 1.2.15
    length() {
        console.log("Периметр квадрата: " + 4 * this.a);
    }

    square() {
        console.log("Площа квадрата: " + this.a * this.a);
    }

    info() {
        console.log("Властивості квадрата:");
        console.log("Довжина сторони: " + this.a);
        this.length();
        this.square();
    }

}

// 1.2.16
class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }

    // 1.2.17
    static help() {
        console.log("Прямокутник - це квадрат з однаковими протележними сторонами");
    }

    length() {
        console.log("Периметр прямокутника: " + 2 * (this.a + this.b));
    }

    square() {
        console.log("Площа прямокутника: " + this.a * this.b);
    }

    info() {
        console.log("Властивості прямокутника:");
        console.log("Довжини сторін: " + this.a + ", " + this.b);
        this.length();
        this.square();
    }
}

// 1.2.18
class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }

    // 1.2.19
    static help() {
        console.log("Ромб - прямокутник з однаковими протилежними сторонами");
    }

    length() {
        console.log("Периметр ромба: " + 4 * this.a);
    }

    square() {
        console.log("Площа ромба: " + this.a * this.a * Math.sin(this.alpha * Math.PI / 180));
    }

    info() {
        console.log("Властивості ромба:");
        console.log("Довжини сторін: " + this.a);
        console.log("Кути: " + this.alpha + ", " + this.beta);
        this.length();
        this.square();
    }
}

// 1.2.20
class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha;
        this.beta = beta;
    }

    // 1.2.21
    static help() {
        console.log("Паралелограм - нахилений прямокутник");
    }

    length() {
        console.log("Периметр паралелограма: " + 2 * (this.a + this.b));
    }

    square() {
        console.log("Площа паралелограма: " + this.a * this.b * Math.sin(this.alpha * Math.PI / 180));
    }

    info() {
        console.log("Властивості паралелограма:");
        console.log("Довжини сторів: " + this.a + ", " + this.b);
        console.log("Кути: " + this.alpha + ", " + this.beta);
        this.length();
        this.square();
    }
}

// 1.2.22
Object.defineProperties(Rhombus.prototype, {
    a: {
        get() {
            return this._a;
        },
        set(value) {
            if (value > 0) {
                this._a = value;
            } else {
                console.error("Довжина має бути більшою за 0");
            }
        }
    },
    alpha: {
        get() {
            return this._alpha;
        },
        set(value) {
            if (value > 0 && value < 180) {
                this._alpha = value;
            } else {
                console.error("Кут має бути в межах від 1 до 179");
            }
        }
    },
    beta: {
        get() {
            return this._beta;
        },
        set(value) {
            if (value > 0 && value < 180) {
                this._beta = value;
            } else {
                console.error("Кут має бути в межах від 1 до 179");
            }
        }
    }
});

// 1.2.23
Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();


// 1.2.24
const square = new Square(5);
square.info();

const rect = new Rectangle(4, 6);
rect.info();

const rhomb = new Rhombus(7, 120, 60);
rhomb.info();

const parallelogram = new Parallelogram(5, 8, 110, 70);
parallelogram.info();


// 1.2.25
function Triangular(a = 3, b = 4, c = 5) {
    return { a, b, c };
}

// 1.2.26
const triangle1 = Triangular();
const triangle2 = Triangular(7, 8, 9);
const triangle3 = Triangular(10, 12, 14);

console.log("Трикутник 1:", triangle1);
console.log("Трикутник 2:", triangle2);
console.log("Трикутник 3:", triangle3);

// 1.2.27
function PiMultiplier(num) {
    return function() {
        return Math.PI * num;
    };
}

// 1.2.28
const pi1 = PiMultiplier(2);
const pi2 = PiMultiplier(3/2);
const pi3 = PiMultiplier(0.5);

console.log("pi * 2 =", pi1());
console.log("pi * (3/2) =", pi2());
console.log("pi / 2 =", pi3());

// 1.2.29
function Painter(color) {
    return function(object) {
        if (object.type) {
            console.log(color + " " + object.type);
        } else {
            console.log("No 'type' property occurred!");
        }
    };
}

// 1.2.30
const PaintBlue = Painter("Blue");
const PaintRed = Painter("Red");
const PaintYellow = Painter("Yellow");

// 1.2.31
const object1 = {
    maxSpeed: 280,
    type: "Sportcar",
    color: "magenta"
};

const object2 = {
    type: "Truck",
    avgSpeed: 90,
    loadCapacity: 2400
};

const object3 = {
    maxSpeed: 180,
    color: "purple",
    isCar: true
};


PaintBlue(object1);
PaintRed(object2);
PaintYellow(object3);