import React from 'react';
import { Typography, Box } from '@mui/material';

const About: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        About
      </Typography>
      <Typography >
        This is a simple and user-friendly Note-taking application built with React and TypeScript. It allows users to create, edit, and delete notes efficiently.
      </Typography>
      <Typography >
        The app is designed to help you organize your thoughts, tasks, and ideas in one place. It supports dynamic routing, responsive design, and clean UI using Material-UI components.
      </Typography>
      <Typography >
        Whether you're managing daily tasks or jotting down quick thoughts, this app is designed to keep things simple and effective.
      </Typography>
    </Box>
  );
};

export default About;
