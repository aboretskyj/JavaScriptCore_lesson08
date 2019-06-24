var car = new Car(80, "leather", "minivan", "blue"); //Creating car: Blue minivan with wheels size = 80 and steerin wheel made of lether
show(car.showColor() + " " + car.showSteerWheel()  + car.showBodyType() + " " + car.showWheels());
car.paint("red"); //change color
car.design("sedan"); //change type of body
car.changeWheels(60); //change size of wheels
car.changeSteerWheelMat("plastic") //change the material of steering wheel
show(car.showColor() + " " + car.showSteerWheel() + car.showBodyType() + " " + car.showWheels());



// functions
function Car(wheelDiam, steerWheelMat, carBodyType, carBodyColor){
    var carBody = new Body(carBodyType, carBodyColor);

    this.paint = function(newColor){
        carBody.setColor(newColor);
    }

    this.showColor = function(){
        show("Color: " + carBody.getColor());
    }

    this.design = function(newBody){
        carBody.setBodyType(newBody);
    }

    this.showBodyType = function(){
        show("Body type is " + carBody.getBodyType());
    }

    var carWheel = new Wheel(wheelDiam);

    this.changeWheels = function(newDiam){
        carWheel.setDiameter(newDiam);
    }

    this.showWheels = function(){
        show("The size of wheels = " + carWheel.getDiameter());
    }

    var steerWheel = new SteerWheel(steerWheelMat);

    this.changeSteerWheelMat = function(newMat){
        steerWheel.setMat(newMat);
    }

    this.showSteerWheel  = function(){
        show("Steering wheel is made of " + steerWheel.getMat());
    }
}


function Body(bodyType, bodyColor){
    this.bodyType = bodyType;
    this.bodyColor = bodyColor;

    this.setBodyType = function(type){
        this.bodyType = type;
    }

    this.getBodyType = function(){
        return this.bodyType;
    }

    this.setColor = function(color){
        this.bodyColor = color;
    }

    this.getColor = function(){
        return this.bodyColor;
    }
};

function Wheel(diameter){
    this.diameter = diameter;

    this.setDiameter = function(newDiameter) {
        diameter = newDiameter;
    };

    this.getDiameter = function() {
        return diameter;
    };
};

function SteerWheel(mat){
    this.mat = mat;

    this.setMat = function(newMat) {
        mat = newMat;
    };

    this.getMat = function() {
        return mat;
    };
};


function show(data) {
    console.log(data);
};
