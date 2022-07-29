const express = require('express');
const router = express.Router();

const { User, Review, Boardgame, sequelize } = require('../../db/models');

router.get('/:id', async(req, res) => {
    const boardgame = await Boardgame.findByPk(req.params.id, {
        attributes: {
            include: [
                [
                    sequelize.fn("AVG", sequelize.col("Reviews.rating")),
                    "avgRating"
                ]
            ],
            exclude: ['createdAt', 'updatedAt']
        },
        include: {
            model: Review,
            attributes: ['content', 'rating', 'gameId'],
            include: {
                model: User,
                attributes: ['username']
            }
        }
    })
    // console.log(boardgame)
    if (!boardgame.id) {
        res.json({
            message: "Boardgame couldn't be found",
            statusCode: 404
        })
    } else {
        res.json(boardgame)
    }

})



module.exports = router;