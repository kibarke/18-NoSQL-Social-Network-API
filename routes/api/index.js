const router = require('express').Router();
const thoughtsRoutes = require('./thoughts-route');
const userRoutes = require('./users-routes');

router.use('/posts', thoughtsRoutes);
router.use('/users', userRoutes);

module.exports = router;
