interface UserInterface{
    name: string;
    email: string;
    age: number;
    register();
    payInvoice();
}

class User implements UserInterface{
   // properties  or values
   public name: string;
   email: string;
   age: number;
   
   constructor(name: string, email:string, age: number){
    this.name = name;
    this.email = email;
    this.age = age;

    console.log('user created: ' + this.name);
   }

   register(){
       console.log(this.name+' is now registered');
   }
   payInvoice(){
       console.log(this.name + ' paid invoice');
   }
}

class Member extends User{
    id: number;
    constructor(id: number, name: string, email: string, age: number){
        super(name, email, age);
    }

    payInvoice(){
        super.payInvoice()
    }
}

//let john = new User(' John Doe', 'johndoe@gmail.com' , 20);

//john.register();
//console.log(john.name);
//console.log(john.age);

// private, public 
// private error msg in cli: classes.ts(17, 18): TS2341: Property 'name' is private and only 
// accessible within class 'User'.' 

let Dea: User = new Member(1, 'Dea totzky', 'dea@example.com', 20);
Dea.payInvoice();