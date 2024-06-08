"use strict"

function solveEquation(a, b, c) {
	let d = b ** 2 - 4 * a * c;
	let arr = [];
	if (d === 0) {
		let root = -b / (2 * a);
		arr.push(root);
	} else if (d > 0) {
		let root1 = (-b + Math.sqrt(d)) / (2 * a);
		let root2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(root1);
		arr.push(root2);
	}
	return arr;
}
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let p = (percent / 100) / 12;
	let s = amount - contribution;
	let payment = (s * (p + (p / (((1 + p) ** countMonths) - 1))));
	let total = Number((payment * countMonths).toFixed(2));
	return total;
}