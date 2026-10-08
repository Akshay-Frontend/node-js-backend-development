import asyncHandler from "../utils/asyncHendler.js";

const registerUser = asyncHandler(async (req, resp) => {
const {fullname,email, username,password} = req.body;
console.log("email", email)

});

export { registerUser };
