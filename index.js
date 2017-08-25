/*
将数组中所包含的某个元素找出，并放在数组后面
给出 nums = [0, 1, 0, 3, 12], target = 0; 调用函数之后, 得到nums = [1, 3, 12, 0, 0].

    function XXX(arr,elem){ }
参数：
arr:数组
elem:某个元素*/

function pushEleToBack(arr, target) {
    for(let i = 0; i < arr.length; i++){//题目中要求修改原有数组，故不能使用返回一个新数组再赋值给arr的方式。
        arr.splice(arr.indexOf(target),1);
        arr.push(target);
    }
}

nums = [0, 1, 0, 3, 12];
target = 0;
pushEleToBack(nums,0);
console.log(nums);