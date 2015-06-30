var assert = require("assert");
var expect = require("chai").expect;
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})


// Synchronous code
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      expect([1,2,3].indexOf(5)).to.equal(-1);
      expect([1,2,3].indexOf(0)).to.equal(-1);
    })
  })
})


// Asynchronous code
// describe('User', function(){
//   describe('#save()', function(){
//     it('should save without error', function(done){
//       var user = new User('Luna');
//       user.save(function(err){
//         if (err) throw err;
//         done();
//       });
//     })
//   })
// })



// // All "hooks", that is before(), after(), beforeEach(), afterEach() may be sync or async as well, behaving much like a regular test-case. For example you may wish to populate database with dummy content before each test:

// describe('Connection', function(){
//   var db = new Connection
//     , tobi = new User('tobi')
//     , loki = new User('loki')
//     , jane = new User('jane');

//   beforeEach(function(done){
//     db.clear(function(err){
//       if (err) return done(err);
//       db.save([tobi, loki, jane], done);
//     });
//   })

//   describe('#find()', function(){
//     it('respond with matching records', function(done){
//       db.find({ type: 'User' }, function(err, res){
//         if (err) return done(err);
//         res.should.have.length(3);
//         done();
//       })
//     })
//   })
// })


// //Alternately, instead of using the done() callback, you can return a promise. This is useful if the APIs you are testing return promises instead of taking callbacks:

// beforeEach(function(){
//   return db.clear().then(function() {
//     return db.save([tobi, loki, jane]);
//   });
// })

// describe('#find()', function(){
//   it('respond with matching records', function(){
//     return db.find({ type: 'User' }).should.eventually.have.length(3);
//   })
// })