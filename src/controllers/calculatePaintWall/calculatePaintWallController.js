const processCalculateLitersPaint = require('../../services/processCalculate/processCalculateLintersPaint.js');
const processValidationRule       = require('../../services/validationRule/processValidationRuleWall.js');

const calculateLitersPaintWill = {

	calculate: async (req, res) => {

		try {

			const {
				objForCalculateAmountLiters
			} = req.body;
		
			const arrayRuleConferred = await processValidationRule.businessRuleValidation(objForCalculateAmountLiters);

			if (arrayRuleConferred.includes(false)){
				return res.status(401).json({'err': 'Valor informado não é valido!'});
			}
			const litersStipulator = await processCalculateLitersPaint.counterLitersStipulator(objForCalculateAmountLiters);
			
			return res.status(200).json({'result': litersStipulator});

		} catch (err) {
			return res.status(400).json(err);
		}
	}   
};

module.exports = calculateLitersPaintWill;