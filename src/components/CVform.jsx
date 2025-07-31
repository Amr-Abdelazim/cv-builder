import Controller from './Controller';
import '../styles/CVform.css';
import Contact from './Contact';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';
import Refrence from './Refrence';
import Resume from './Resume';
import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export default function CVform() {
    const [stateTimeLine, setStateTimeLine] = useState(1);
    const [cvData, setCvData] = useState({
        contact: {
            name: "Alex Johnson",
            work_title: "Full Stack Developer",
            phone: "+1 555-123-4567",
            email: "alex.johnson@email.com",
            address: "123 Main St, San Francisco, CA",
            website: "alexjohnson.dev"
        },
        education: {
            collage: "Stanford University",
            degree: "B.Sc. Computer Science",
            start_date: "2016-09-01",
            finish_date: "2020-06-15"
        },
        skills: [
            "JavaScript",
            "React",
            "Node.js",
            "TypeScript",
            "MongoDB",
            "Docker",
            "GraphQL",
            "Python"
        ],
        experience: [
            {
                company: "TechNova",
                position: "Senior Frontend Engineer",
                startDate: "2022-01-01",
                endDate: "Present",
                roleText: "Leading the frontend team, architecting scalable React applications, and mentoring junior developers."
            },
            {
                company: "Webify Solutions",
                position: "Full Stack Developer",
                startDate: "2020-07-01",
                endDate: "2021-12-31",
                roleText: "Built REST APIs, integrated third-party services, and delivered high-quality web apps for clients."
            }
        ],
        references: [
            {
                link: "https://www.linkedin.com/in/alexjohnson",
                description: "LinkedIn profile with endorsements and recommendations."
            },
            {
                link: "https://github.com/alexjohnson",
                description: "GitHub portfolio showcasing open-source contributions."
            }
        ]
    });

    // Snackbar state
    const [open, setOpen] = useState(false);

    // Function to show alert
    const showAlert = () => setOpen(true);

    // Function to close alert
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return;
        setOpen(false);
    };

    return (
        stateTimeLine === 6 ? (
            <Resume cvData={cvData} setStateTimeLine={setStateTimeLine} showAlert={showAlert} />
        ) : (
            <div className="CVform">
                <div className="controller-container">
                    <Controller stateTimeLine={stateTimeLine} setStateTimeLine={setStateTimeLine} />
                </div>
                <div className="form-container">
                    {stateTimeLine === 1 && <Contact setStateTimeLine={setStateTimeLine} cvData={cvData} setCvData={setCvData} showAlert={showAlert} />}
                    {stateTimeLine === 2 && <Education setStateTimeLine={setStateTimeLine} cvData={cvData} setCvData={setCvData} showAlert={showAlert} />}
                    {stateTimeLine === 3 && <Skills setStateTimeLine={setStateTimeLine} cvData={cvData} setCvData={setCvData} showAlert={showAlert} />}
                    {stateTimeLine === 4 && <Experience setStateTimeLine={setStateTimeLine} cvData={cvData} setCvData={setCvData} showAlert={showAlert} />}
                    {stateTimeLine === 5 && <Refrence setStateTimeLine={setStateTimeLine} cvData={cvData} setCvData={setCvData} showAlert={showAlert} />}
                </div>
                <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                    <MuiAlert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Save successful!
                    </MuiAlert>
                </Snackbar>
            </div>
        )
    );
}