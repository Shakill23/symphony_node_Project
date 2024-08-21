import {getUsersDb, getUserDb,addUserDb,deleteUserDb,updateUserDb}from '../model/usersDb.js'
import {hash} from 'bcrypt'

const getUsers = async (req, res) => {
    res.json(await getUsersDb());
}

const getUser= async(req,res) => {
    console.log(req.params.id);
    res.json(await getUserDb(req.params.id))
}

const addUser= async(req, res) => {
    let {firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile}= req.body;
    let hashedP = await hash(userPass,10)
    await addUserDb(firstName, lastName, userAge, gender, userRole, emailAdd, hashedP, userProfile);
    res.send('New user was inserted successfully')
}

const deleteUser= async(req,res) => {
    let {id} = req.body
    await deleteUserDb(req.params.id)
    res.send('User was deleted successfully')
}

const updateUser= async (req,res) => {
    let {firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile} = req.body
    let user = await getUsersDb(+req.params.id)
    firstName? firstName=firstName : firstName = user.firstName ;
    lastName? lastName=lastName : lastName = user.lastName ;
    userAge? userAge=userAge : userAge = user.userAge ;
    gender? gender=gender : gender = user.gender ;
    userRole? userRole=userRole : userRole = user.userRole ;
    emailAdd? emailAdd=emailAdd : emailAdd = user.emailAdd ;
    userPass? userPass=userPass : userPass = user.userPass ;
    userProfile? userProfile=userProfile : userProfile = user.userProfile;

    await updateUserDb(firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile, +req.params.id,)
    res.send('Update was successful');
}

const loginUser = async (req, res) => {
    res.json({
        message: 'You have signed in successfully!', 
        token: req.body.token
    })
}

export {getUsers,getUser,addUser,deleteUser,updateUser,loginUser}