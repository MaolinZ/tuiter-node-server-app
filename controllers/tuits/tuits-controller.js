import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {}
const findTuits  = (req, res) => {}
const updateTuit = (req, res) => {}
const deleteTuit = (req, res) => {}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}


const findTuits = (req, res) => {
    res.json(tuits)
}

const createTuits = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime()+'';
    newTuit.likes = 0;
    newTuit.liked = false;
    tuits.push(newTuit);
    res.json(newTuit);
}

const updateTuit = (req, res) => {
    const id = req.params.tid
    tuits = tuits.map(tuit => tuit._id === id ? {...tuit, ...req.body } : tuit )
    res.sendStatus(200)
}