module.exports = {
  recommend: (req, res) => {
    try {
      const careerRecommendations = [
        { 
          id: 1, 
          title: 'Frontend Developer', 
          match: 92, 
          description: 'Build user interfaces and experiences.',
          salary: '$80k-$120k',
          skills: ['React', 'JavaScript', 'CSS', 'HTML', 'UI/UX'],
          experience: '2-3 years',
          jobOutlook: 'High demand',
          difficulty: 'Intermediate'
        },
        { 
          id: 2, 
          title: 'DevOps Engineer', 
          match: 85, 
          description: 'Manage infrastructure and deployment pipelines.',
          salary: '$120k-$150k',
          skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Linux'],
          experience: '3-5 years',
          jobOutlook: 'Very High',
          difficulty: 'Advanced'
        },
        { 
          id: 3, 
          title: 'Cloud Architect', 
          match: 78, 
          description: 'Design and optimize cloud infrastructure solutions.',
          salary: '$130k-$180k',
          skills: ['AWS', 'Terraform', 'Python', 'Networking', 'Security'],
          experience: '5+ years',
          jobOutlook: 'Very High',
          difficulty: 'Advanced'
        },
        { 
          id: 4, 
          title: 'Full Stack Developer', 
          match: 88, 
          description: 'Develop both frontend and backend applications.',
          salary: '$100k-$140k',
          skills: ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript'],
          experience: '2-4 years',
          jobOutlook: 'High demand',
          difficulty: 'Intermediate'
        },
        { 
          id: 5, 
          title: 'Systems Engineer', 
          match: 72, 
          description: 'Build and maintain large-scale systems.',
          salary: '$110k-$140k',
          skills: ['Linux', 'Networking', 'Automation', 'Python', 'Troubleshooting'],
          experience: '3-5 years',
          jobOutlook: 'High demand',
          difficulty: 'Intermediate'
        }
      ];
      res.json(careerRecommendations);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  getById: (req, res) => {
    try {
      const { id } = req.params;
      const careers = {
        1: { id: 1, title: 'Frontend Developer', description: 'Build user interfaces and experiences.', salary: '$80k-$120k', skills: ['React', 'JavaScript', 'CSS'] },
        2: { id: 2, title: 'DevOps Engineer', description: 'Manage infrastructure and deployment.', salary: '$120k-$150k', skills: ['Docker', 'Kubernetes', 'AWS'] },
        3: { id: 3, title: 'Cloud Architect', description: 'Design cloud solutions.', salary: '$130k-$180k', skills: ['AWS', 'Terraform', 'Python'] }
      };
      const career = careers[id] || careers[1];
      res.json(career);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  skillGap: (req, res) => {
    try {
      const skillGapData = {
        completed: 5,
        required: 25,
        percentage: 20,
        skills: [
          { name: 'Docker', level: 75 },
          { name: 'Kubernetes', level: 0 },
          { name: 'AWS', level: 45 },
          { name: 'CI/CD', level: 30 },
          { name: 'Python', level: 65 }
        ]
      };
      res.json(skillGapData);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  getRoadmap: (req, res) => {
    try {
      const roadmap = {
        id: 1,
        title: 'DevOps Engineer Roadmap',
        duration: '3-6 months',
        steps: [
          { id: 1, title: 'Learn Docker', description: 'Master containerization basics', status: 'in-progress' },
          { id: 2, title: 'Complete CI/CD Course', description: 'Jenkins, GitLab CI/CD', status: 'pending' },
          { id: 3, title: 'Build a DevOps project', description: 'Real-world project implementation', status: 'pending' },
          { id: 4, title: 'AWS Certification', description: 'AWS Solutions Architect Associate', status: 'pending' }
        ]
      };
      res.json(roadmap);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};
