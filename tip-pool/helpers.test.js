describe('sumPaymentTotal tests', function() {
    beforeEach(function() {
        allPayments['payment' + paymentId] = {
            billAmt: 100,
            tipAmt: 15,
            tipPercent: 15
        }
        paymentId += 1;
    })
    it('should have sumPaymentTotal array items be initialized', function() {
        expect(sumPaymentTotal('billAmt')).toEqual(100);
        expect(sumPaymentTotal('tipAmt')).toEqual(15);
        expect(sumPaymentTotal('tipPercent')).toEqual(15);
    })

    // it('should submit a new payment', function() {
    //     expect(allPayments.length).toEqual(1);
    // })

    afterEach(function() {
        allPayments = {};
        paymentId = 0;
    })
})

describe('calculateTipPercent tests', function() {
    it('should calculate tip percentages', function() {
        expect(calculateTipPercent(100, 15)).toEqual(15);
        expect(calculateTipPercent(100, 0)).toEqual(0);
        expect(calculateTipPercent(100, 100)).toEqual(100);
        expect(calculateTipPercent(100, 101)).toEqual(101);
        expect(calculateTipPercent(0, 15)).toBePositiveInfinity();
    })

    it('should round tip to whole number', function() {
        expect(calculateTipPercent(100, 9.9)).toBe(Math.round(calculateTipPercent(100, 9.9)));
    })
})

describe('appendTd tests', function() {
    it('should add a new tr element', function() {
        let newTr = document.createElement('tr');
        appendTd(newTr, 100);
        expect(newTr.hasChildNodes()).toBeTruthy();
        expect(newTr.innerText).toBe('100');
    })
})