const { User } = require('../models'); // make sure the path is correct

module.exports = {
  // GET /api/users/profile
  profile: async (req, res) => {
    try {
      // For now, using a fixed user ID (replace with auth user ID later)
      const userId = req.user?.id || 1;

      const user = await User.findByPk(userId);

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.json({
        bio: user.bio || '',
        current_role: user.current_role || '',
        skills: user.skills || []
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  },

  // PUT /api/users/profile
  updateProfile: async (req, res) => {
    try {
      const userId = req.user?.id || 1; // replace with auth user ID later
      const { bio, current_role, skills } = req.body;

      const user = await User.findByPk(userId);

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      user.bio = bio;
      user.current_role = current_role;
      user.skills = skills; // should be an array (Sequelize JSON column)
      await user.save();

      res.json({
        bio: user.bio,
        current_role: user.current_role,
        skills: user.skills
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  }
};