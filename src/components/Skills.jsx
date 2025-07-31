import { useState } from "react";
import '../styles/Skills.css'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Skills({ cvData, setCvData, setStateTimeLine, showAlert }) {
    const [skills, setSkills] = useState(cvData.skills || []);

    function handleAddSkill(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const skill = formData.get("skill").trim();
        if (!skill) return;
        setSkills(prev => [...prev, skill]);
        setCvData({
            ...cvData,
            skills: [...skills, skill]
        });
        e.target.reset();
    }

    function handleDeleteSkill(skill) {
        const updatedSkills = skills.filter(cur => cur !== skill);
        setSkills(updatedSkills);
        setCvData({
            ...cvData,
            skills: updatedSkills
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setCvData({
            ...cvData,
            skills: skills
        });
        showAlert();
        setStateTimeLine(4);
    }

    function handleBack() {
        setStateTimeLine(2);
    }

    const skillList = skills.map((skill, index) => (
        <li key={index} className="skill">
            {skill}
            <IconButton
                style={{ color: "red", marginLeft: "10px" }}
                onClick={() => handleDeleteSkill(skill)}
                size="small"
            >
                <DeleteIcon />
            </IconButton>
        </li>
    ));

    return (
        <div className="skills-container">
            <div className="input-container">
                <form onSubmit={handleAddSkill}>
                    <input type="text" name="skill" placeholder="Enter a skill" />
                    <button type="submit">+ Add Skill</button>
                </form>
            </div>
            <div className="view-container">
                <ul className="skillList">
                    {skillList}
                </ul>
            </div>
            <div className='btns-container'>
                <button className='back-btn' type='button' onClick={handleBack}>Back</button>
                <button className='next-btn' type="button" onClick={handleSubmit}>Save</button>
            </div>
        </div>
    );
}