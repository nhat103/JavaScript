function makeFun(){
	var name = "Nguyễn Nhật";
	function  displayName() {
	console.log(name);
}
return displayName;

}

var myFun = makeFun();

myFun();

makeFun();

