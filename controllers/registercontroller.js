import User from '../models/registerModel.js';
const registerUser = async (req, res) => {
  try {
    const { name, email, phone, college, othercollege } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status("Email already registered");
    }
    const newUser = new User({ name, email, phone, college, othercollege });
    await newUser.save();
    res.status(`User registered successfully, user: ${newUser} `);
  } catch (error) {
    res.status(`Error: ${error}`);
  }
};
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(`Error: ${error}`);
  }
};

export { registerUser, getUsers };