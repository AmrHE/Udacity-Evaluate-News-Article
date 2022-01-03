import { checkForUrl } from "../client/js/urlChecker";

//Test the existance of the checkForUrl() function defined/undefined
describe("Testing the checkForUrl() exists or not", () => {
	test("Test should return defined/true", () => {
		expect(checkForUrl).toBeDefined();
	});
});

//Test the tyoe of the checkForUrl() function
describe("Testing the typeOf checkForUrl()", () => {
	test("The checkForUrl() Should be a function", () => {
		expect(typeof checkForUrl).toBe("function");
	});
});

//Test the response of the checkForUrl() function in the case of valid URL
describe("Testing checkForUrl() funciton for valid URL", () => {
	//A Valid URL
	const url = "https://jamesclear.com/dont-start-from-scratch";
	test("It should return true because the url is valid", () => {
		const res = checkForUrl(url);
		expect(res).toBeDefined();
		expect(res).toBe(true);
	});
});

//Test the response of the checkForUrl() function in the case of Invalid URL

describe("Testing checkForUrl() funciton for Invalid URL", () => {});
//An Invalide URL
const url = "htt`psss://jamesc`lessar.c`om/";
test("It should return false because the url is Invalid", () => {
	const res = checkForUrl(url);
	expect(res).toBeDefined();
	expect(res).toBe(false);
});
