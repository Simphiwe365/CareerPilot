module.exports = {
  message: (req, res) => res.status(501).json({ message: 'Not implemented' }),
  history: (req, res) => res.status(501).json({ message: 'Not implemented' }),
  clear: (req, res) => res.status(501).json({ message: 'Not implemented' })
};
