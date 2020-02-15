let homepage = require('../pages/homepage')

describe('CalculatorDemo',function(){

	it('Addition',function(){

        homepage.openUrl('https://juliemr.github.io/protractor-demo/')
        homepage.enterFirstNumber('12');
        homepage.enterSecondNumber('13');
        homepage.clickGo();
        homepage.verifyResult('25');
        browser.sleep(5000)
        
    })

    it('Subtraction',function(){

        homepage.openUrl('https://juliemr.github.io/protractor-demo/')
        homepage.enterFirstNumber('12');
        homepage.enterSecondNumber('13');
        homepage.clickGo1();  //not a function(Failing scenario)
        homepage.verifyResult('25');
        browser.sleep(5000)
        
    })
})