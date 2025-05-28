const mongoose = require('mongoose');
const {User, createUser } = require('../functions/userModel.js');

//Test suite 
describe('User Model Test', () => {
    //jest hook 
    beforeEach(() => {
        jest.clearAllMocks;
    });

    it('Should create a new user', () =>{
       //Arrange 
       const mockUser = {
        firstName: 'Gurleen kaur',
        email: 'cangurleen686@gmail.com',
        password: 'password',
        age: 22
       }

       //Action
       const result1 = jest.spyOn(User.prototype, 'save').mockResolvedValue(mockUser);
       const result2 = new createUser('Gurleen Kaur', 'cangurleen686@gmail.com', 'password', 22)

       //Assert
       expect(result1).toEqual(result2);
       expect(User.prototype.save()).toHaveBeenCalledTimes(1);
    });
});