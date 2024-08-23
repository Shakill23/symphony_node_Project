import {getUsersDb, getUserDb,addUserDb,deleteUserDb,updateUserDb}from '../model/usersDb.js'
import {hash} from 'bcrypt'

// const getUsers = async (req, res) => {
//     res.json(await getUsersDb());
// }

const getUsers = async (req, res) => {
    try {
        // Fetch users from the database
        const users = await getUsersDb();

        // Respond with the retrieved users
        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users:", error);

        // Handle server-side errors
        res.status(500).json({ message: "Internal Server Error" });
    }
};


// const getUser= async(req,res) => {
//     console.log(req.params.id);
//     res.json(await getUserDb(req.params.id))
// }

const getUser = async (req, res) => {
    try {
        const { id } = req.params;

        // Validate the provided ID
        if (!id || isNaN(id)) {
            return res.status(400).json({ message: "Invalid or missing User ID" });
        }

        // Fetch the user from the database
        const user = await getUserDb(id);

        if (!user) {
            // User not found
            return res.status(404).json({ message: "User not found" });
        }

        // Respond with the retrieved user
        res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching user:", error);

        // Handle server-side errors
        res.status(500).json({ message: "Internal Server Error" });
    }
};


// const addUser= async(req, res) => {
//     let {firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile}= req.body;
//     let hashedP = await hash(userPass,10)
//     await addUserDb(firstName, lastName, userAge, gender, userRole, emailAdd, hashedP, userProfile);
//     res.send('New user was inserted successfully')
// }

const addUser = async (req, res) => {
    try {
        // Destructure the request body
        let { firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile } = req.body;

        // Basic validation for required fields
        if (!firstName || !lastName || !userAge || !gender || !userRole || !emailAdd || !userPass) {
            return res.status(400).json({ message: "All required fields must be filled" });
        }

        // Validate email format (simple regex example)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailAdd)) {
            return res.status(400).json({ message: "Invalid email format" });
        }

        // Validate age (e.g., must be a number and within a reasonable range)
        if (isNaN(userAge) || userAge < 0 || userAge > 120) {
            return res.status(400).json({ message: "Invalid user age" });
        }

        // Hash the user's password
        let hashedP = await hash(userPass, 10);

        // Add the user to the database
        await addUserDb(firstName, lastName, userAge, gender, userRole, emailAdd, hashedP, userProfile);

        // Send a success response
        res.status(201).json({ message: 'New user was inserted successfully' });
    } catch (error) {
        console.error("Error adding user:", error);

        // Handle server-side errors
        res.status(500).json({ message: "Internal Server Error" });
    }
};


// const deleteUser= async(req,res) => {
//     let {id} = req.body
//     await deleteUserDb(req.params.id)
//     res.send('User was deleted successfully')
// }

const deleteUser = async (req, res) => {
    try {
        const { id } = req.body;

        // Validate the provided ID
        if (!id || isNaN(id)) {
            return res.status(400).json({ message: "Invalid or missing User ID" });
        }

        // Attempt to delete the user from the database
        // const result = await deleteUserDb(id);
        const result = await deleteUserDb(+req.params.id);

        if (result.affectedRows === 0) {
            // No rows affected, meaning the user wasn't found
            return res.status(404).json({ message: "User not found" });
        }

        // User deleted successfully
        res.status(200).json({ message: "User was deleted successfully" });
    } catch (error) {
        console.error("Error deleting user:", error);

        // Handle server-side errors
        res.status(500).json({ message: "Internal Server Error" });
    }
};


// const updateUser= async (req,res) => {
//     let {firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile} = req.body
//     let user = await getUsersDb(+req.params.id)
//     firstName? firstName=firstName : firstName = user.firstName ;
//     lastName? lastName=lastName : lastName = user.lastName ;
//     userAge? userAge=userAge : userAge = user.userAge ;
//     gender? gender=gender : gender = user.gender ;
//     userRole? userRole=userRole : userRole = user.userRole ;
//     emailAdd? emailAdd=emailAdd : emailAdd = user.emailAdd ;
//     userPass? userPass=userPass : userPass = user.userPass ;
//     userProfile? userProfile=userProfile : userProfile = user.userProfile;

//     await updateUserDb(firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile, +req.params.id,)
//     res.send('Update was successful');
// }

const updateUser = async (req, res) => {
    try {
        const { firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile } = req.body;
        const { id } = req.params;

        // Validate the provided ID
        if (!id || isNaN(id)) {
            return res.status(400).json({ message: "Invalid or missing User ID" });
        }

        // Fetch the existing user from the database
        const user = await getUserDb(id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Determine the updated values, falling back to existing values if new ones aren't provided
        const updatedUser = {
            firstName: firstName || user.firstName,
            lastName: lastName || user.lastName,
            userAge: userAge || user.userAge,
            gender: gender || user.gender,
            userRole: userRole || user.userRole,
            emailAdd: emailAdd || user.emailAdd,
            userProfile: userProfile || user.userProfile
        };

        // If a new password is provided, hash it
        if (userPass) {
            updatedUser.userPass = await hash(userPass, 10);
        } else {
            updatedUser.userPass = user.userPass;
        }

        // Update the user in the database
        await updateUserDb(updatedUser, id);

        // Send a success response
        res.status(200).json({ message: 'Update was successful' });
    } catch (error) {
        console.error("Error updating user:", error);

        // Handle server-side errors
        res.status(500).json({ message: "Internal Server Error" });
    }
};


const loginUser = async (req, res) => {
    res.json({
        message: 'You have signed in successfully!', 
        token: req.body.token
    })
}

export {getUsers,getUser,addUser,deleteUser,updateUser,loginUser}