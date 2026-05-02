module.exports = {
  message: (req, res) => {
    try {
      const { message } = req.body;
      // AI Coaching response
      const response = {
        id: Date.now(),
        text: 'This week, try to complete the Docker course and start your CI/CD journey.',
        sender: 'coach',
        timestamp: new Date()
      };
      res.json(response);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  history: (req, res) => {
    try {
      const messages = [
        { id: 1, text: 'Hello! Ready to advance your career?', sender: 'coach', timestamp: '2024-05-01' },
        { id: 2, text: 'This week, try to complete the Docker course', sender: 'coach', timestamp: '2024-05-02' }
      ];
      res.json(messages);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  clear: (req, res) => {
    try {
      res.json({ message: 'Chat history cleared' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};
