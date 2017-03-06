/* x 输入的第一个数字
   y 输入的第二个数字
   op 四种运算符*/
function check(x, y, op) {

    x = x.trim();
    y = y.trim();
    if (!x || !y) {
        alert("请输入内容")
        return false;
    } //判断输入内容不为空
    if (isNaN(x) || isNaN(y)) {
        alert("请输入数字")
        return false;
    } //判断输入内容为数字
    if (op == "/" && y === '0') {
        alert("除数不能为0")
        document.getElementById('result').innerText = 'NaN';
        return false;
    } //判断除数不能为0
    return true;

}

function calculation() {

    var x = document.getElementById('num1').value;
    var y = document.getElementById('num2').value;
    var op = document.getElementById('operator').value;

    if (!check(x, y, op)) {
        return;

    }
    var sum = jisuan(x, y, op)

    document.getElementById('result').innerText = sum;
}

function jisuan(n1, n2, ope) {
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    switch (ope) {

        case '+':
            return parseFloat((n1 + n2).toFixed(8));
        case '-':
            return parseFloat((n1 - n2).toFixed(8));
        case '*':
            return parseFloat((n1 * n2).toFixed(8));
        case '/':
            return parseFloat((n1 / n2).toFixed(8));
        default:
            return "无效操作符";

    }
}
