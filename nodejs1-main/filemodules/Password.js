const bcrypt=require('bcryptjs');
let user={
    name:'pratap',
    email:'pratap@gmail.com',
    password:'pratap123@'
};
let salt = bcrypt.genSaltSync(10);
let hashedpassword=bcrypt.hashSync(user.password,salt);
console.log(hashedpassword);
let updatedUser={
    ...user,
    password:hashedpassword
};
if(bcrypt.compareSync('pratap@gmail.com',hashedpassword)){
    console.log("Password matched!");
}
else{
    console.log('enter correct password');
}