import { useState, useRef } from "react";
import '../styles/Contact.css';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Experience({ setStateTimeLine, cvData, setCvData , showAlert }) {
    // Load initial experiences from cvData
    const [experiences, setExperiences] = useState(cvData.experience || []);
    const [isCurrent, setIsCurrent] = useState(false);
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [roleText, setRoleText] = useState('');
    const roleRef = useRef(null);

    function handleRoleChange(e) {
        setRoleText(e.target.value);
        roleRef.current.style.height = "auto";
        roleRef.current.style.height = roleRef.current.scrollHeight + "px";
    }

    function handleAddExperience(e) {
        e.preventDefault();
        // Only require fields when adding
        if (!company || !position || !startDate || (!isCurrent && !endDate) || !roleText) return;
        const newExp = {
            company,
            position,
            startDate,
            endDate: isCurrent ? 'Present' : endDate,
            roleText
        };
        const updatedExperiences = [...experiences, newExp];
        setExperiences(updatedExperiences);
        setCvData({
            ...cvData,
            experience: updatedExperiences
        });
        setCompany('');
        setPosition('');
        setStartDate('');
        setEndDate('');
        setRoleText('');
        setIsCurrent(false);
    }

    function removeExperience(idx) {
        const updatedExperiences = experiences.filter((_, i) => i !== idx);
        setExperiences(updatedExperiences);
        setCvData({
            ...cvData,
            experience: updatedExperiences
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        // No required fields on submit
        setCvData({
            ...cvData,
            experience: experiences
        });
        showAlert();
        setStateTimeLine(5);
    }

    function handleBack() {
        setStateTimeLine(3);
    }

    return (
        <div className="info-container">
            <form onSubmit={handleSubmit}>
                <div className='inputs-container'>
                    <label htmlFor="company">
                        Company:
                        <input
                            className='input-data'
                            type="text"
                            name="company"
                            value={company}
                            onChange={e => setCompany(e.target.value)}
                        />
                    </label>
                    <label htmlFor="position">
                        Position Title:
                        <input
                            className='input-data'
                            type="text"
                            name="position"
                            value={position}
                            onChange={e => setPosition(e.target.value)}
                        />
                    </label>
                    <label htmlFor="start_date">
                        Start Date:
                        <input
                            className='input-data'
                            type="date"
                            name="start_date"
                            value={startDate}
                            onChange={e => setStartDate(e.target.value)}
                        />
                    </label>
                    <label htmlFor="current" className="checkbox-label">
                        Present?:
                        <input
                            type="checkbox"
                            name="current"
                            checked={isCurrent}
                            onChange={() => setIsCurrent(prev => !prev)}
                        />
                    </label>
                    {!isCurrent && (
                        <label htmlFor="end_date">
                            End Date:
                            <input
                                className='input-data'
                                type="date"
                                name="end_date"
                                value={endDate}
                                onChange={e => setEndDate(e.target.value)}
                            />
                        </label>
                    )}
                    <label htmlFor="role">
                        Explain your role:
                        <textarea
                            className='input-data'
                            name="role"
                            rows={4}
                            ref={roleRef}
                            value={roleText}
                            onChange={handleRoleChange}
                            style={{ resize: "vertical", overflow: "hidden" }}
                        />
                    </label>
                    <button
                        type="button"
                        onClick={handleAddExperience}
                        style={{
                            marginBottom: '20px',
                            background: '#222',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '20px',
                            padding: '10px 20px',
                            cursor: 'pointer'
                        }}
                    >
                        + Add Experience
                    </button>
                    <div>
                        {experiences.map((exp, idx) => (
                            <div
                                key={idx}
                                style={{
                                    marginBottom: '20px',
                                    background: 'linear-gradient(90deg, #e3e3e3 0%, #f7f7f7 100%)',
                                    borderRadius: '15px',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                                    padding: '20px 50px 20px 20px',
                                    position: 'relative',
                                    borderLeft: '5px solid #222'
                                }}
                            >
                                <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '5px' }}>{exp.position} @ {exp.company}</div>
                                <div style={{ color: '#555', marginBottom: '8px' }}>
                                    {exp.startDate} - {exp.endDate}
                                </div>
                                <div style={{ fontStyle: 'italic', color: '#333', marginBottom: '8px' }}>
                                    {exp.roleText}
                                </div>
                                <button
                                    type="button"
                                    style={{
                                        position: 'absolute',
                                        top: '15px',
                                        right: '15px',
                                        background: 'transparent',
                                        color: '#d32f2f',
                                        border: 'none',
                                        borderRadius: '50%',
                                        width: '30px',
                                        height: '30px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.3rem'
                                    }}
                                    onClick={() => removeExperience(idx)}
                                    title="Delete"
                                >
                                    <DeleteIcon />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='btns-container'>
                    <button className='back-btn' type='button' onClick={handleBack}>Back</button>
                    <button className='next-btn' type="submit">Save</button>
                </div>
            </form>
        </div>
    );
}