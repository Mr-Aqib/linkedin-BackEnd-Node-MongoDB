const user=require("../models/Usermodel")
const registerUser = async (req, res) =>
{
    const { fname, lname, email, password, dob, pnum } = req.body
    if (!fname || !lname || !email || !password || !dob || !pnum)
    {
        res.status(400)
        throw new Error("Enter all Fields First")
    }
    else {
        const newUser = await user.create({
            fname,
            lname,
            email,
            password,
            dob,
            pnum
          
        })
      res.send(newUser)
   console.log("registerUser")
    }
      

}
module.exports = registerUser
