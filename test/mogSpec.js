/**
 * Created by Komo on 15/10/2014.
 */

var expect = require("chai").expect;
var MogController = require("../controllers/mogController");

describe("mogController", function() {
    describe("#getMogs()", function () {
        var mogs;
        beforeEach(function(done){
            var mogController = new MogController();
            mogController.getMogs(function(err, results) {
                if (err) throw err;
                mogs = results;
                done();
            });
        });
        it("should return top mogs", function () {
            mogs.forEach(function(mog) {
                expect(mog).to.have.a.property("mini_blog_name");
            });

        });
    });
});