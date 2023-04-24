/* eslint-disable no-undef */
/* eslint-disable indent */

const functionProcessValidationRule = require('../../services/validationRule/processValidationRuleWall.js');

test('should test if the function validationHeightWallWithDoor return true', async () => {
    const result = await functionProcessValidationRule.validationHeightWallWithDoor(2.20);
    expect(result).toBe(true);
});

test('should test if the function validationHeightWallWithDoor return false', async () => {
	const result = await functionProcessValidationRule.validationHeightWallWithDoor(1.90);
	expect(result).toBe(false);
});

test('should test the function return minus with parameter window', async () => {
	const result = await functionProcessValidationRule.windowOrDoorCheck('window');
	expect(result).toStrictEqual(2.0 * 1.2);
});

test('should test the function return a minus with parameter different of window', async () => {
    const result = await functionProcessValidationRule.windowOrDoorCheck('door');
	expect(result).toStrictEqual(0.80 * 1.90);
});

test('should test if function verificationSizeMaxAndMinWall return true', async () => {

	const wallHeight = 3.80;
	const wallWidth  = 2.20;

	const result = await functionProcessValidationRule.verificationSizeMaxAndMinWall(wallHeight, wallWidth);
	expect(result).toBe(true);

});

test('should test if function verificationSizeMaxAndMinWall return false', async () => {

	const wallHeight = 0.6;
	const wallWidth  = 0.9;

	const result = await functionProcessValidationRule.verificationSizeMaxAndMinWall(wallHeight, wallWidth);
	expect(result).toBe(false);

});

test('should test if function verificationSumSizeWindowAndDoor return true', async () => {

	const amountWindow = 1;
	const amountDoor   = 1;
	const wallHeight   = 3.80;
	const wallWidth    = 2.20;

	const result = await functionProcessValidationRule.verificationSumSizeWindowAndDoor(amountWindow, amountDoor, wallHeight, wallWidth);
	expect(result).toBe(true);

});

test('should test if function verificationSumSizeWindowAndDoor return false', async () => {

	const amountWindow = 1;
	const amountDoor   = 1;
	const wallHeight   = 2.80;
	const wallWidth    = 1.20;

	const result = await functionProcessValidationRule.verificationSumSizeWindowAndDoor(amountWindow, amountDoor, wallHeight, wallWidth);
	expect(result).toBe(false);

});
