
async function extracValuesToSumObjWallHeightAndWallWidth(arrayObjToCalculate){

	let arraySumValuesObj = arrayObjToCalculate.map(ObjToCalculate => {
		return ObjToCalculate.wallHeight * ObjToCalculate.wallWidth;
	});
    
	return arraySumValuesObj;

}

async function countTotalAreaWalls(arrayData){

	const arraDataHeightAndWallWidth   = await extracValuesToSumObjWallHeightAndWallWidth(arrayData);
	let sumTotalWallHeightAndWallWidth = 0;

	for(let numPositionArrayForSum in arraDataHeightAndWallWidth){

		sumTotalWallHeightAndWallWidth += arraDataHeightAndWallWidth[numPositionArrayForSum];

	}

	return sumTotalWallHeightAndWallWidth;

}

async function calculateQuantityLiters(data){

	const valueTotalAreaWalls = await countTotalAreaWalls(data);
 
	return valueTotalAreaWalls / 5;
}

async function counterLitersStipulator(data){
    
	const variationsSizeLitersPaint   = [18, 3.6, 2.5, 0.5];
	const maxLimitCount               = variationsSizeLitersPaint.length;
	let cycleCounter                  = 0;
	let litersPaint                   = await calculateQuantityLiters(data);
	let objAmountLitersPaintStipulato = {};

	while(cycleCounter < maxLimitCount){

		if(Math.round(litersPaint / variationsSizeLitersPaint[cycleCounter]) > 0){

			let litersPaintVariationsSize = parseInt(litersPaint / variationsSizeLitersPaint[cycleCounter]);
			litersPaint               = Math.round(litersPaint - (variationsSizeLitersPaint[cycleCounter] * litersPaintVariationsSize));
           
			objAmountLitersPaintStipulato[variationsSizeLitersPaint[cycleCounter]] = litersPaintVariationsSize;

		}
		cycleCounter += 1;
	}

	return objAmountLitersPaintStipulato;

}

module.exports = {
	extracValuesToSumObjWallHeightAndWallWidth,
	countTotalAreaWalls,
	calculateQuantityLiters,
	counterLitersStipulator
};
