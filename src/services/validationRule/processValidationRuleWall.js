
const heightDoor = 1.90;
const widthDoor  = 0.80;

const heightWindow = 1.20;
const widthWindow  = 2.00;

async function validationHeightWallWithDoor(heightWall){

	const authorizedSizeDifference = 0.30;

	const wallHeightDifference = heightWall - heightDoor;
	const isBiggerThanDoor     = wallHeightDifference >= authorizedSizeDifference;

	return isBiggerThanDoor; 

}

async function windowOrDoorCheck(itNameForCalculate){

	if(itNameForCalculate === 'window') return widthWindow * heightWindow;
	return widthDoor * heightDoor;

}

async function verificationSizeMaxAndMinWall(wallHeight, wallWidth){

	const sizeWall = wallHeight * wallWidth;

	const sizeWallMax = 50;
	const sizeWallMin = 1;

	if (sizeWall <= sizeWallMax && sizeWall >= sizeWallMin) { return true; }
	return false;

}

async function verificationSumSizeWindowAndDoor(amountWindow, amountDoor, wallHeight, wallWidth){

	const sizeWall = wallHeight * wallWidth;

	const areaWindow = await windowOrDoorCheck('window');
	const areaDoor   = await windowOrDoorCheck('door');

	const calculateAreaWindowDoor = ((areaWindow * amountWindow) + (areaDoor * amountDoor));
	const checkSumWindowDoor      = (sizeWall / 2) >= calculateAreaWindowDoor;

	return checkSumWindowDoor;

}

async function businessRuleValidation(arrayObjToValidationRule){

	let arrayValidation = [];

	for(let numArrayObjToValidationRule of arrayObjToValidationRule){

		arrayValidation.push(await validationHeightWallWithDoor(numArrayObjToValidationRule.wallHeight));

		arrayValidation.push(await verificationSizeMaxAndMinWall(numArrayObjToValidationRule.wallHeight
			, numArrayObjToValidationRule.wallWidth));

		arrayValidation.push(await verificationSumSizeWindowAndDoor(numArrayObjToValidationRule.window
			, numArrayObjToValidationRule.door
			, numArrayObjToValidationRule.wallHeight
			, numArrayObjToValidationRule.wallWidth));
	}

	return arrayValidation;
}

module.exports = {
	validationHeightWallWithDoor,
	windowOrDoorCheck,
	verificationSizeMaxAndMinWall,
	verificationSumSizeWindowAndDoor,
	businessRuleValidation
};
