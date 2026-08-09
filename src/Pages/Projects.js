import {
    Box,
    Card,
    CardContent,
    Typography,
    Button
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

import { portfolioData } from "./portfolioData";

import "./Projects.css";


export default function Projects() {

    const projects = portfolioData?.projects || [];

    return (

        <Box className="projects">

            {/* =====================================
                TITLE
            ====================================== */}

            <Typography
                component="h2"
                className="projects-title"
            >
                Projects
            </Typography>


            {/* =====================================
                PROJECT GRID
            ====================================== */}

            <div className="project-grid">

                {projects.map((project, index) => (

                    <Card
                        key={index}
                        className="project-card"
                        elevation={0}
                    >

                        <CardContent sx={{ padding: 0 }}>

                            {/* PROJECT TITLE */}

                            <Typography
                                component="h3"
                                className="project-title"
                            >
                                {project.title ||
                                    "Untitled Project"}
                            </Typography>


                            {/* DESCRIPTION */}

                            <Typography
                                component="p"
                                className="project-description"
                            >
                                {project.description ||
                                    "No project description available."}
                            </Typography>


                            {/* =================================
                                TECHNOLOGIES
                            ================================== */}

                            {project.tech?.length > 0 && (

                                <div className="tech">

                                    {project.tech.map(
                                        (technology, techIndex) => (

                                            <span
                                                key={techIndex}
                                            >
                                                {technology}
                                            </span>

                                        )
                                    )}

                                </div>

                            )}


                            {/* =================================
                                CREDENTIALS
                            ================================== */}

                            {project.Credentials?.length > 0 && (

                                <div className="credentials">

                                    <Typography
                                        className="credentials-title"
                                    >
                                        Demo Credentials
                                    </Typography>


                                    {project.Credentials.map(
                                        (
                                            credential,
                                            credentialIndex
                                        ) => (

                                            <Typography
                                                key={credentialIndex}
                                                className="credentials-text"
                                            >
                                                {credential}
                                            </Typography>

                                        )
                                    )}

                                </div>

                            )}


                            {/* =================================
                                PROJECT LINKS
                            ================================== */}

                            <div className="project-links">


                                {/* GITHUB */}

                                {project.github && (

                                    <Button
                                        className="github-btn"
                                        variant="outlined"
                                        startIcon={
                                            <GitHubIcon />
                                        }
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub
                                    </Button>

                                )}


                                {/* API */}

                                {project.API && (

                                    <Button
                                        className="github-btn"
                                        variant="outlined"
                                        href={project.API}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        API
                                    </Button>

                                )}


                                {/* LIVE DEMO */}

                                {project.demo && (

                                    <Button
                                        className="demo-btn"
                                        variant="contained"
                                        startIcon={
                                            <LanguageIcon />
                                        }
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Live Demo
                                    </Button>

                                )}

                            </div>

                        </CardContent>

                    </Card>

                ))}

            </div>

        </Box>

    );
}