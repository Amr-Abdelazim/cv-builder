import '../styles/Resume.css';
import { useRef } from 'react';

export default function Resume({ cvData }) {
    const resumeRef = useRef();

    const handlePrint = () => {
        window.print();
    };

    return (
        <div>
            <button
                style={{
                    margin: '24px auto',
                    display: 'block',
                    background: '#1976d2',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '12px 32px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    letterSpacing: '1px',
                    boxShadow: '0 2px 8px rgba(25, 118, 210, 0.12)'
                }}
                onClick={handlePrint}
            >
                Save as PDF
            </button>
            <div ref={resumeRef} className="resume-container">
                <h1>{cvData.contact.name}</h1>
                <h2>{cvData.contact.work_title}</h2>
                <div className="contact-info">
                    <p>Phone: {cvData.contact.phone}</p>
                    <p>Email: {cvData.contact.email}</p>
                    <p>Address: {cvData.contact.address}</p>
                    <p>
                        Website: <a href={cvData.contact.website.startsWith('http') ? cvData.contact.website : `https://${cvData.contact.website}`} target="_blank" rel="noopener noreferrer">{cvData.contact.website}</a>
                    </p>
                </div>

                <h3>Education</h3>
                <div className="section-card">
                    <h4>{cvData.education.collage}</h4>
                    <p>{cvData.education.degree}</p>
                    <p>{cvData.education.country}</p>
                    <p>
                        {cvData.education.start_date} - {cvData.education.finish_date || 'Present'}
                    </p>
                </div>

                <h3>Experience</h3>
                {cvData.experience.map((exp, index) => (
                    <div className="section-card" key={index}>
                        <h4>{exp.position} at {exp.company}</h4>
                        <p>{exp.startDate} - {exp.endDate}</p>
                        <p>{exp.roleText}</p>
                    </div>
                ))}

                <h3>Skills</h3>
                <div className="section-card">
                    <ul>
                        {cvData.skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>

                <h3>References</h3>
                {cvData.references.map((ref, index) => (
                    <div className="section-card" key={index}>
                        <a href={ref.link} target="_blank" rel="noopener noreferrer">{ref.link}</a>
                        <p>{ref.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}