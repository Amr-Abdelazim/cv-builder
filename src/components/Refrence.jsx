import { useState } from 'react';
import '../styles/Contact.css';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Refrence({ setStateTimeLine, cvData, setCvData ,showAlert }) {
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');
    const [references, setReferences] = useState(cvData.references || []);

    function handleAddReference(e) {
        e.preventDefault();
        if (!link || !description) return;
        const updatedReferences = [...references, { link, description }];
        setReferences(updatedReferences);
        setCvData({
            ...cvData,
            references: updatedReferences
        });
        setLink('');
        setDescription('');
    }

    function removeReference(idx) {
        const updatedReferences = references.filter((_, i) => i !== idx);
        setReferences(updatedReferences);
        setCvData({
            ...cvData,
            references: updatedReferences
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setCvData({
            ...cvData,
            references: references
        });
        showAlert();
        setStateTimeLine(5);
    }

    function handleBack() {
        setStateTimeLine(4);
    }

    return (
        <div className="info-container">
            <form onSubmit={handleSubmit}>
                <div className='inputs-container'>
                    <label htmlFor="link">
                        Reference Link:
                        <input
                            className='input-data'
                            type="url"
                            name="link"
                            value={link}
                            onChange={e => setLink(e.target.value)}
                        />
                    </label>
                    <label htmlFor="description">
                        Description:
                        <textarea
                            className='input-data'
                            name="description"
                            rows={4}
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            style={{ resize: "vertical", overflow: "auto" }}
                        />
                    </label>
                    <button
                        type="button"
                        onClick={handleAddReference}
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
                        + Add Reference
                    </button>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {references.map((ref, idx) => (
                            <li key={idx} style={{ marginBottom: '15px', position: 'relative', background: '#f8f8f8', borderRadius: '10px', padding: '10px 40px 10px 10px' }}>
                                <div>
                                    <strong>Link:</strong> <a href={ref.link} target="_blank" rel="noopener noreferrer">{ref.link}</a>
                                </div>
                                <div>
                                    <strong>Description:</strong> {ref.description}
                                </div>
                                <button
                                    type="button"
                                    style={{
                                        position: 'absolute',
                                        top: '10px',
                                        right: '10px',
                                        background: 'transparent',
                                        color: 'red',
                                        border: 'none',
                                        borderRadius: '50%',
                                        width: '30px',
                                        height: '30px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                    onClick={() => removeReference(idx)}
                                >
                                    <DeleteIcon />
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='btns-container'>
                    <button className='back-btn' type='button' onClick={handleBack}>Back</button>
                    <button className='next-btn' type="submit">Save</button>
                </div>
            </form>
        </div>
    );
}