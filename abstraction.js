function Vehicle(vehicleName) {
    this.vehicleName = vehicleName;
    throw new Error("You cannot create an instance of Abstract class");

}
Vehicle.prototype.display = function () {
    return this.vehicleName;
}
var vehicle = new Vehicle('ACB');  