import { handleSubmit } from "../client/js/formHandler";

//Test the existance of the handleSubmit() function defined/undefined
describe("Testing the handleSubmit() exists or not", () => {
	test("Test should return defined/true", () => {
		expect(handleSubmit).toBeDefined();
	});
});

//Test the tyoe of the handleSubmit() function
describe("Testing the typeOf handleSubmit()", () => {
	test("The handleSubmit() Should be a function", () => {
		expect(typeof handleSubmit).toBe("function");
	});
});
