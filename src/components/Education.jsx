import { useState } from "react";
import Checkbox from '@mui/material/Checkbox';

export default function Education({ setStateTimeLine, cvData, setCvData, showAlert }) {
    // Set default value for checkbox from cvData.education
    const [istillnow, setIstillnow] = useState(!!cvData.education.isPresent);

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        setCvData({
            ...cvData,
            education: {
                country: formData.get('country'),
                collage: formData.get('collage'),
                degree: formData.get('degree'),
                start_date: formData.get('start_date'),
                finish_date: istillnow ? '' : formData.get('finish_date'),
                isPresent: istillnow
            }
        });
        showAlert();
        setStateTimeLine(3);
        
    }

    function handleBack() {
        setStateTimeLine(1);
    }

    return (
        <div className="info-container">
            <form onSubmit={handleSubmit}>
                <div className='inputs-container'>
                    <label htmlFor="country">
                        Country*:
                        <input
                            className='input-data'
                            type="text"
                            name="country"
                            defaultValue={cvData.education.country || ''}
                            required
                        />
                    </label>
                    <label htmlFor="collage">
                        Collage*:
                        <input
                            className='input-data'
                            type="text"
                            name="collage"
                            defaultValue={cvData.education.collage || ''}
                            required
                        />
                    </label>
                    <label htmlFor="degree">
                        Degree/Field*:
                        <input
                            className='input-data'
                            type="text"
                            name="degree"
                            defaultValue={cvData.education.degree || ''}
                            required
                        />
                    </label>
                    <label htmlFor="start_date">
                        Start date*:
                        <input
                            className='input-data'
                            type="date"
                            name="start_date"
                            defaultValue={cvData.education.start_date || ''}
                            required
                        />
                    </label>
                    <label htmlFor="tillnow">
                        Present?:
                        <Checkbox
                            name="tillnow"
                            checked={istillnow}
                            onChange={() => setIstillnow(prev => !prev)}
                        />
                    </label>
                    {!istillnow && (
                        <label htmlFor="finish_date">
                            Finish date*:
                            <input
                                className='input-data'
                                type="date"
                                name="finish_date"
                                defaultValue={cvData.education.finish_date || ''}
                                required
                            />
                        </label>
                    )}
                </div>
                <div className='btns-container'>
                    <button className='back-btn' type='button' onClick={handleBack}>Back</button>
                    <button className='next-btn' type="submit">Save</button>
                </div>
            </form>
        </div>
    );
}