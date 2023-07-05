const { PrismaClient } = require('@prisma/client');
var prisma = new PrismaClient();

exports.getreservation = (req, res) => {
    res.render('reservation');
}