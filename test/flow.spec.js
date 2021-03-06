describe('Explains flow of setup and teardown methods', function() {
    beforeAll(function() {
        console.error('beforeAll : suite setup run only once');
    });

    beforeEach(function() {
        console.warn('beforeEach: spec setup run before each spec');
    });

    it('spec 1', function() {
        console.log("spec 1: Running spec 1");
        expect().nothing();
    });

    it('spec 2', function() {
        console.log("spec 2 : Running spec 2");
        expect().nothing();
    });

    it('spec 3', function() {
        console.log("spec 3 : Running spec 3");
        expect().nothing();
    })

    afterEach(function() {
        console.warn('afterEach : spec teardown run after each spec');
    })

    afterAll(function() {
        console.error('afterAll : suite teardown run only once');
    })

})
