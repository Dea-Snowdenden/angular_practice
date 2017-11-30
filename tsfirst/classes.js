var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('user created: ' + this.name);
    }
    User.prototype.register = function () {
        console.log(this.name + ' is now registered');
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + ' paid invoice');
    };
    return User;
}());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        return _super.call(this, name, email, age) || this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
//let john = new User(' John Doe', 'johndoe@gmail.com' , 20);
//john.register();
//console.log(john.name);
//console.log(john.age);
// private, public 
// private error msg in cli: classes.ts(17, 18): TS2341: Property 'name' is private and only 
// accessible within class 'User'.' 
var Dea = new Member(1, 'Dea totzky', 'dea@example.com', 20);
Dea.payInvoice();
