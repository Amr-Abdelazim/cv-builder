import '../styles/Contact.css'
export default function Contact({setStateTimeLine, cvData, setCvData, showAlert}) {
    function handleSubmit(formData) {
        console.log(formData.get('name'));
        showAlert();
        setStateTimeLine(2)
        setCvData({
            ...cvData,
            contact: {
                name: formData.get('name'),
                work_title: formData.get('work_title'),
                phone: formData.get('phone'),
                email: formData.get('email'),
                address: formData.get('address'),
                website: formData.get('website')
            }
        });
      
    }
    return (
        <div className="info-container">
            <form action={handleSubmit}>
                <div className='inputs-container'>
                <label htmlFor="name">
                    Name*:
                    <input className='input-data' type="text" name="name" defaultValue={cvData.contact.name} required />
                </label>
                <label htmlFor="work_title">
                    Job title*:
                    <input className='input-data' type="text" name="work_title" defaultValue={cvData.contact.work_title} required />
                </label>
                <label htmlFor="phone" >
                    Phone*:
                    <input className='input-data' type="text" name="phone" defaultValue={cvData.contact.phone} required />
                </label>
                <label htmlFor="email">
                    Email*:
                    <input className='input-data' type="email" name="email" defaultValue={cvData.contact.email} required />
                </label>
                <label htmlFor="address">
                    Address*:
                    <input className='input-data' type="text" name="address" defaultValue={cvData.contact.address} required />
                </label>
                <label htmlFor="website">
                    Website:
                    <input className='input-data' type="text" name="website" defaultValue={cvData.contact.website} />
                </label>
                </div>
                <div className='btns-container'>
                    <button className='back-btn' type='button' disabled>Back</button>
                    <button className='next-btn' type="submit">Save</button>
                </div>
               
            </form>
        </div>
    );
}