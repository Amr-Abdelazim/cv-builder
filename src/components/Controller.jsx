import CustomizedTimeline from "./CustomizedTimeline";

export default function Controller({ stateTimeLine, setStateTimeLine }) {
    function handleCreateCV() {
        setStateTimeLine(6);
    }
    return (
        <>
            <CustomizedTimeline stateTimeLine={stateTimeLine} setStateTimeLine={ setStateTimeLine}/>
            <button onClick={handleCreateCV} id="create-cv-btn">Create CV</button>
        </>
    );
}