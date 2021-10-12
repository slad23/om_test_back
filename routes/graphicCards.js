import express from 'express';
import data from '../assets/mock/data.json';

const router = express.Router();


// Get with all graphic cards

router.get('', async(req, res) => {
    try{
        const cards = await data;
        setTimeout(() =>{
            res.json(cards);
        }, 2000)
    } catch (error) {
        return res.status(400).json({
            message: 'An error has ocurred',
            error
        })
    }
})

// Get graphic card by ID

router.get('/:id', async(req, res) => {
    const id = req.params.id;
    console.log("id", id);
    let response 
    try{
        const cards = await data;
        for (let i = 0 ; i< cards.length; i++){

            if(cards[i].id == id){
                response = cards[i]
            }
        }
        setTimeout(() =>{
            res.json(response);
        }, 2000)
    } catch (error) {
        return res.status(400).json({
            message: 'An error has ocurred',
            error
        })
    }
})


module.exports = router;