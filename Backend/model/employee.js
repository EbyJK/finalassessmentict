var mongoose= require ('mongoose');
var schema=mongoose.Schema({
    EmpName:String,
    designation:String,
    empId:String,
    img_url:String,
})
var EmployeeModel =mongoose.model("employee",schema);
module.exports = EmployeeModel;