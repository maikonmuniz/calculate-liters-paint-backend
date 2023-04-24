/* eslint-disable no-undef */
const functionTestProcessCalculateLintersPaint = require('../../services/processCalculate/processCalculateLintersPaint.js');

test('should test if function extracValuesToSumObjWallHeightAndWallWidth a array', async () => {

	const result = await functionTestProcessCalculateLintersPaint.extracValuesToSumObjWallHeightAndWallWidth([{'wallHeight':5, 'wallWidth': 10, 'door': 1, 'window': 1}
		, {'wallHeight': 5, 'wallWidth': 10, 'door': 1, 'window': 1}
		, {'wallHeight': 5, 'wallWidth': 10, 'door': 1, 'window': 1}
		, {'wallHeight': 5, 'wallWidth': 10, 'door': 1, 'window': 1}]);

	expect(result).toStrictEqual([ 50, 50, 50, 50 ]);

});

test('should test if function return um number with sum wall', async () => {

	const result = await functionTestProcessCalculateLintersPaint.countTotalAreaWalls([{'wallHeight':5, 'wallWidth': 10, 'door': 1, 'window': 1}
		, {'wallHeight': 5, 'wallWidth': 10, 'door': 1, 'window': 1}
		, {'wallHeight': 5, 'wallWidth': 10, 'door': 1, 'window': 1}
		, {'wallHeight': 5, 'wallWidth': 10, 'door': 1, 'window': 1}]);

	expect(result).toBe(200);

});

test('should test if function calculateQuantityLiters return amount linters', async () => {

	const result = await functionTestProcessCalculateLintersPaint.calculateQuantityLiters([{'wallHeight':5, 'wallWidth': 10, 'door': 1, 'window': 1}
		, {'wallHeight': 5, 'wallWidth': 10, 'door': 1, 'window': 1}
		, {'wallHeight': 5, 'wallWidth': 10, 'door': 1, 'window': 1}
		, {'wallHeight': 5, 'wallWidth': 10, 'door': 1, 'window': 1}]);

	expect(result).toBe(40);

});

test('should test if function return stipulator linters', async () => {

	const result = await functionTestProcessCalculateLintersPaint.counterLitersStipulator([{'wallHeight': 3, 'wallWidth': 9, 'door': 1, 'window': 1}
		, {'wallHeight': 3, 'wallWidth': 9, 'door': 1, 'window': 1}
		, {'wallHeight': 3, 'wallWidth': 9, 'door': 1, 'window': 1}
		, {'wallHeight': 5, 'wallWidth': 3, 'door': 1, 'window': 1}]);

	expect(result).toStrictEqual({ '18': 1, '0.5': 2 });

});