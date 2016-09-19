//var lib = require('www/lib/somePlugin');

describe("hello world", function() {



    // beforeEach(function(){
    //     jasmine.getFixtures().fixturesPath = 'base/www/lib';
    // });

/*
	var el, myPlugin;
    beforeEach(function(){
        jasmine.getFixtures().fixturesPath = 'base/Tests';
        //loadFixtures('Template.html');
        //el = $('#myPlugin-Test');
        //myPlugin = el.myPlugin().data('myPlugin');
    });*/


	it('should somePlugin()  === "somePlugin"', function () {
  		expect(somePlugin()).toBe('somePlugin2ddd');
	});
});
