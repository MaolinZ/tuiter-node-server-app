import people from './users.js'

let users = people

export default function UsersController(app) {
    app.get('/api/users', findUsers)
    app.post('/api/users', createUser)
    app.get('/api/users/:uid', findUserById)
    app.delete('/api/users/:uid', deleteUser)
    app.put('/api/users/:uid', updateUser)
}

const findUsers = (req, res) => {
    const type = req.query.type
    if (type) {
        const usersOfType = users.filter(user => user.type === type)
        res.json(usersOfType)
        return
    }
    res.json(users)
}

const findUserById = (req, res) => {
    const id = req.params.uid
    res.json(users.find(user => user._id === id))
}

const createUser = (req, res) => {
    const newUser = req.body
    newUser._id = (new Date).getTime() + ''
    users.push(newUser)
    res.json(newUser)
}

const deleteUser = (req, res) => {
    const userId = req.params['uid'];
    users = users.filter(usr =>
        usr._id !== userId);
    res.sendStatus(200);
}

const updateUser = (req, res) => {
    const id = req.params.uid
    const updates = req.body
    users = users.map(user =>
        user._id === id ?
            {...user, ...updates} :
            user)

    res.sendStatus(200)
}