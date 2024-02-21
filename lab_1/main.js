let dict;

let output_dict;

console.log("Правила використання")
console.log("В консолі ввести triangle(num1, val1, num2, val2)")
console.log("num1 - значення val1")
console.log("num2 - значення val2")
console.log("val1, val2 - можуть приймати наступні значення:")
console.log("leg")
console.log("hypotenuse")
console.log("adjacent angle")
console.log("opposite angle")
console.log("angle")
console.log("Значення кутів потрібно задавати в межах від 1 до 89 включно")

function triangle(num1, val1, num2, val2) {
	dict = {"leg": undefined,
			 "hypotenuse": undefined,
			 "adjacent angle": undefined,
			 "opposite angle": undefined, 
			 "angle": undefined};

	output_dict = {"a" : undefined,
			 "b" : undefined,
			 "c" : undefined,
			 "alpha" : undefined,
			 "beta" : undefined};

	fill_dict(num1, val1);
	fill_dict(num2, val2);

	let message = check(num1, val1, num2, val2);
	if(message != "ok"){
		console.log(message);
		return "failed";
	}

	if (dict["leg"] != undefined && dict["hypotenuse"] != undefined){
		if (dict["leg"] >= dict["hypotenuse"]){
			console.log("leg must be smaller than hypotenuse");
			return "failed"
		}
		leg_and_hypotenuse();
	}
	else if (val1 == "leg" && val2 == "leg"){
		two_legs();
	}
	else if (dict["leg"] != undefined && dict["adjacent angle"] != undefined){
		leg_and_adjacent_angle();
	}
	else if (dict["leg"] != undefined && dict["opposite angle"] != undefined){
		leg_and_opposite_angle();
	}
	else if (dict["hypotenuse"] != undefined && dict["angle"] != undefined){
		hypotenuse_and_angle();
	}
	else{
		console.log("unknown arguments");
		return "failed"
	}

	if (output_dict['alpha'] <= 0.000001 || output_dict['beta'] <= 0.00001){
		console.log("one of angles of triangle is too small. Triangle is impossible");
		return "failed";
	}
	output();
	return "success";
}

function fill_dict(num, val) {
	switch (val){
		case "leg":
			if (dict["leg"] != undefined){
				output_dict["b"] = num;
			}
			else{
				dict["leg"] = num;
			}
			break;
		case "hypotenuse":
			dict["hypotenuse"] = num;
			break;
		case "adjacent angle":
			dict["adjacent angle"] = degrees_to_radians(num);

			break;
		case "opposite angle":
			dict["opposite angle"] = degrees_to_radians(num);
			break;
		case "angle":
			dict["angle"] = degrees_to_radians(num);
			break;
		default:
			break;
	}
}

function check(num1, val1, num2, val2) {
	if (typeof num1 !== "number"){
		return "first value must be a number";
	}
	if (typeof num2 !== "number"){
		return "third value must be a number";
	}
	
	if (["angle", "adjacent angle", "opposite angle"].includes(val1)){
		if(num1 >= 90){
			return "Angle is bigger or equal than 90";
		}
		else if (num1 <= 0.000001){
			return "Angle is too small";
		}

	}
	else if (["leg", "hypotenuse"].includes(val1)){
		if (num1 <= 0){
			return "Size of side is smaller or equal than 0";
		}
	}
	if (["angle", "adjacent angle", "opposite angle"].includes(val2)){
		if(num2 >= 90){
			return "Angle is bigger or equal than 90";
		}
		else if (num2 <= 0.000001){
			return "Angle is too small";
		}

	}
	else if (["leg", "hypotenuse"].includes(val2)){
		if (num2 <= 0){
			return "Size of side is smaller or equal than 0";
		}
	}

	return 'ok';
}

function degrees_to_radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

function radians_to_degrees(radians)
{
  var pi = Math.PI;
  return radians * (180/pi);
}

function leg_and_hypotenuse() {
	output_dict["a"] = dict["leg"];
	output_dict["c"] = dict["hypotenuse"];
	output_dict["b"] = Math.sqrt(Math.pow(output_dict["c"], 2) - Math.pow(output_dict["a"], 2));
	output_dict["alpha"] = radians_to_degrees(Math.atan(output_dict["a"] / output_dict["b"]));
	output_dict["beta"] = radians_to_degrees(Math.atan(output_dict["b"] / output_dict["a"]));
}

function two_legs() {
	output_dict["a"] = dict["leg"];
	output_dict["c"] = Math.sqrt(Math.pow(output_dict["a"], 2) + Math.pow(output_dict["b"], 2));
	output_dict["alpha"] = radians_to_degrees(Math.atan(output_dict["a"] / output_dict["b"]));
	output_dict["beta"] = radians_to_degrees(Math.atan(output_dict["b"] / output_dict["a"]));
}

function leg_and_adjacent_angle() {
	output_dict["a"] = dict["leg"];
	output_dict["beta"] = dict["adjacent angle"];
	output_dict["c"] = output_dict["a"] / Math.cos(output_dict["beta"]);
	output_dict["b"] = output_dict["a"] * Math.tan(output_dict["beta"]);
	output_dict["alpha"] = 90 - radians_to_degrees(output_dict["beta"]);
	output_dict["beta"] = radians_to_degrees(output_dict["beta"]);
}

function leg_and_opposite_angle() {
	output_dict["a"] = dict["leg"];
	output_dict["alpha"] = dict["opposite angle"];
	output_dict["c"] = output_dict["a"] / Math.sin(output_dict["alpha"]);
	output_dict["b"] = Math.sqrt(Math.pow(output_dict["c"], 2) - Math.pow(output_dict["a"], 2));
	output_dict["beta"] = 90 - radians_to_degrees(output_dict["alpha"]);
	output_dict["alpha"] = radians_to_degrees(output_dict["alpha"]);
}

function hypotenuse_and_angle() {
	output_dict["c"] = dict["hypotenuse"];
	output_dict["alpha"] = dict["angle"];
	output_dict["a"] = output_dict["c"] * Math.sin(output_dict["alpha"]);
	output_dict["b"] = output_dict["c"] * Math.cos(output_dict["alpha"]);
	output_dict["alpha"] = radians_to_degrees(output_dict["alpha"]);
	output_dict["beta"] = 90 - output_dict["alpha"];
}

function output() {
	console.log("a = " + output_dict["a"]);
	console.log("b = " + output_dict["b"]);
	console.log("c = " + output_dict["c"]);
	console.log("alpha = " + output_dict["alpha"]);
	console.log("beta = " + output_dict["beta"]);
}
