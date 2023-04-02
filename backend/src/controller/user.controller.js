const User= require("../modal/user.modal");
const argon2= require("argon2");
const jwt= require("jsonwebtoken")
exports.signup=async(req,res)=>{
    const {email, password } = req.body;
    if(password.length<8){
      return res.status(403).send({"message":"password should be 8 character"})
    }
    
    try {
      const checkUser = await User.findOne({ email: email });
       // Find the user by email
      if (checkUser) {
        //If User exist send them message 
        return res.status(404).send({ message: 'User Already existed' });
      }
      // else create a new user
      const hash = await argon2.hash(password);
      await User.create({  email, password: hash });
      return res.status(200).send({ message: 'User created Successfully' });
    } catch (er) {
      return res.status(404).send(er.message);
    }
}

exports.login=async(req,res)=>{
    const { email, password } = req.body;
   console.log(email,password)
  try {
    // Find the user by email
    const user = await User.findOne({ email });
     console.log(user)
    let check=await argon2.verify(user.password, password);
    console.log(check)
    // If the user doesn't exist, return an error
    if (!user) {
      return res.status(401).send({ message: 'envalid email and apssword' });
    }

    // If the user is blocked, return an error
    if (user.blocked_until && user.blocked_until > new Date()) {
      return res.status(403).send({ message: 'User is blocked' });
    }

    // If the password is incorrect, increment the count of incorrect attempts
    if (check==false) {
      user.count_incorrect += 1;

      // If the user has reached the maximum number of attempts, block them for 24 hours
      if (user.count_incorrect >= 5) {
        user.blocked_until = new Date(Date.now() + 24 * 60 * 60 * 1000);
        user.count_incorrect = 0; // Reset the count of incorrect attempts
      }

      // Save the user to the database
      await user.save();
       let left= 5-(user.count_incorrect)
       if(left==5){
        left=0
       }
      return res.status(401).send({ message: `incorrect password you have left ${left} chance`});
    }

    // If the password is correct, reset the count of incorrect attempts
    user.count_incorrect = 0;
    await user.save();

    // Return a JWT token and the user information
    const token = jwt.sign({ email, userId: user._id }, process.env.JWT_TOKEN_KEY);
    return res.json({ token, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
}