import { User} from "../model/Model.js";

const registerUser = async (req,res) => {
    try {
        const {username, email, password} = req.body
        if (!username) {
            return res.json({
                error: 'username is required'
            })
        }
        if (! password || password.length < 6 ) {
            return res.json ({
                error : 'password is required '
            })
        }
        const exist = await User.findOne({email})
        if (exist) {
            return res.json({
                error:'email is taken already'
            })
        }
        const user = await User.create({
            username,email,password
        })
        return res.json(user)
    } catch (error) {
        console.log(error)
    }
}
export default registerUser;
