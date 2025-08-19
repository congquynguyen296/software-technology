import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { 
  AppBar, 
  Box, 
  Container, 
  Typography, 
  Button, 
  Card, 
  CardContent, 
  IconButton,
  Stack,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import './App.css';

const skillsData = [
  {
    category: 'Frontend',
    icon: '💻',
    skills: ['React.js', 'TypeScript', 'Next.js', 'Material-UI', 'Tailwind CSS', 'HTML/CSS']
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'Express', 'RESTful APIs', 'GraphQL', 'Microservices']
  },
  {
    category: 'Database',
    icon: '🗄️',
    skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Database Design', 'SQL']
  },
  {
    category: 'Tools & Others',
    icon: '🛠️',
    skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Agile/Scrum']
  }
];

function App() {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start((i) => ({
        y: 0,
        opacity: 1,
        transition: { 
          delay: i * 0.2,
          duration: 0.8,
          ease: [0.6, -0.05, 0.01, 0.99]
        },
      }));
    };
    sequence();
  }, [controls]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Header */}
      <AppBar 
        position="fixed" 
        elevation={0} 
        className="header"
        sx={{ 
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)'
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 2 }}>
            <Typography 
              variant="h6" 
              className="gradient-text"
              sx={{ fontWeight: 600 }}
            >
              Portfolio
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button 
                color="primary" 
                href="#about"
                sx={{ fontWeight: 500 }}
              >
                About
              </Button>
              <Button 
                color="primary" 
                href="#skills"
                sx={{ fontWeight: 500 }}
              >
                Skills
              </Button>
              <Button 
                color="primary" 
                href="#projects"
                sx={{ fontWeight: 500 }}
              >
                Projects
              </Button>
              <Button 
                color="primary" 
                href="#contact"
                sx={{ fontWeight: 500 }}
              >
                Contact
              </Button>
            </Stack>
          </Box>
        </Container>
      </AppBar>

      {/* Hero Section */}
      <Box className="hero">
        <Container maxWidth="lg">
          <Box 
            sx={{ 
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 6,
              alignItems: 'center'
            }}
          >
            <Box>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={controls}
                custom={0}
              >
                <Typography 
                  variant="h1" 
                  sx={{ 
                    mb: 2,
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
                  }}
                >
                  Hello! <span role="img" aria-label="wave">👋</span>
                </Typography>
                <Typography 
                  variant="h2" 
                  className="gradient-text"
                  sx={{ 
                    mb: 3,
                    fontSize: { xs: '2rem', md: '2.75rem' },
                  }}
                >
                  I'm [Nguyen Cong Quy], a Backend Developer at Accessed VietNam
                </Typography>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    mb: 4,
                    color: 'rgba(255,255,255,0.9)',
                    fontWeight: 500,
                    lineHeight: 1.5
                  }}
                >
                  Software Developer
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    size="large"
                    href="#contact"
                    sx={{ 
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                      boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #1976D2 30%, #2196F3 90%)',
                        transform: 'translateY(-2px)',
                      }
                    }}
                  >
                    Contact Me
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    href="#projects"
                    sx={{ 
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: '#fff',
                      borderColor: 'rgba(255,255,255,0.5)',
                      '&:hover': {
                        borderColor: '#fff',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        transform: 'translateY(-2px)',
                      }
                    }}
                  >
                    View Projects
                  </Button>
                </Stack>
              </motion.div>
            </Box>
            <Box>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={controls}
                custom={1}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Box
                  component="img"
                  src="https://accessed.s3.us-west-2.amazonaws.com/group/PNXk6SCTCvxVlz0UbPDif/avatar/group_PNXk6SCTCvxVlz0UbPDif_1751598163528.jpeg"
                  alt="Profile"
                  sx={{
                    width: '100%',
                    maxWidth: 500,
                    height: 'auto',
                    borderRadius: '20px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                    transform: 'perspective(1000px) rotateY(-10deg)',
                    transition: 'transform 0.5s ease',
                    '&:hover': {
                      transform: 'perspective(1000px) rotateY(0deg)'
                    }
                  }}
                />
              </motion.div>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box id="skills" sx={{ py: 10, bgcolor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={controls}
            custom={1}
          >
            <Typography 
              variant="h2" 
              className="gradient-text"
              sx={{ 
                mb: 6, 
                textAlign: 'center',
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}
            >
              Skills & Expertise
            </Typography>
            <Box 
              sx={{ 
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(4, 1fr)'
                },
                gap: 4
              }}
            >
              {skillsData.map((item) => (
                <Card
                  key={item.category}
                  className="skills-card"
                >
                  <CardContent>
                    <Typography 
                      variant="h3" 
                      sx={{ 
                        mb: 2,
                        fontSize: '2.5rem',
                        textAlign: 'center'
                      }}
                    >
                      {item.icon}
                    </Typography>
                    <Typography 
                      variant="h6" 
                      gutterBottom 
                      sx={{ 
                        textAlign: 'center',
                        fontWeight: 600,
                        color: '#1976d2'
                      }}
                    >
                      {item.category}
                    </Typography>
                    <Box 
                      sx={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: 1,
                        justifyContent: 'center'
                      }}
                    >
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="skill-tag"
                        >
                          {skill}
                        </span>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" sx={{ py: 10, bgcolor: '#f5f5f5' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={controls}
            custom={2}
          >
            <Typography 
              variant="h2" 
              className="gradient-text"
              sx={{ 
                mb: 6, 
                textAlign: 'center',
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}
            >
              Let's Connect
            </Typography>
            <Stack 
              direction="row" 
              spacing={3} 
              justifyContent="center"
            >
              <IconButton
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                className="social-icon-button"
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <IconButton
                href="https://github.com/your-username"
                target="_blank"
                className="social-icon-button"
              >
                <GitHubIcon fontSize="large" />
              </IconButton>
              <IconButton
                href="mailto:your.email@example.com"
                className="social-icon-button"
              >
                <EmailIcon fontSize="large" />
              </IconButton>
            </Stack>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
