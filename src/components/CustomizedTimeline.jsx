import * as React from "react";
import '../styles/CustomizedTimeline.css';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from "@mui/lab";
import { Typography } from "@mui/material";

import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import BuildIcon from '@mui/icons-material/Build';
import LinkIcon from '@mui/icons-material/Link';

export default function CustomizedTimeline({stateTimeLine,setStateTimeLine}) {
  function handleClickContact() {
    setStateTimeLine(1);
  }
  function handleClickEducation() {
    setStateTimeLine(2);
  }
  function handleClickSkills() {
    setStateTimeLine(3);
  }
  function handleClickExperience() {
    setStateTimeLine(4);
  }
  function handleClickReference() {
    setStateTimeLine(5);
  }
  return (
    <div className='timeline-container'>
    <Timeline position="left">

      {/* Contact */}
        <button className={stateTimeLine > 1 ? "finished" : "selected"} value={ 1} onClick={handleClickContact}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <ContactPageRoundedIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '16px', px: 3 }}>
          <Typography variant="h5" component="span">Contact</Typography>
        </TimelineContent>
        </TimelineItem>
        </button>

      {/* Education */}
      <button className={(stateTimeLine > 2 ? "finished" : (stateTimeLine === 2? "selected":""))} value={ 2} onClick={handleClickEducation}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="secondary">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '16px', px: 3}}>
          <Typography variant="h5" component="span">Education</Typography>
        </TimelineContent>
      </TimelineItem>
      </button >

      {/* Skills */}
      <button className={(stateTimeLine > 3 ? "finished" : (stateTimeLine === 3? "selected":""))} value={ 3} onClick={handleClickSkills}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="success">
            <BuildIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '16px', px: 3 }}>
          <Typography variant="h5" component="span">Skills</Typography>
        </TimelineContent>
      </TimelineItem>
      </button>

      {/* Work Experience */}
      <button className={(stateTimeLine > 4 ? "finished" : (stateTimeLine === 4? "selected":""))} value={ 4} onClick={handleClickExperience}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="warning">
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '16px', px: 3 }}>
          <Typography variant="h5" component="span">Work Experience</Typography>
        </TimelineContent>
      </TimelineItem>
      </button>
      {/* Reference */}
      <button className={(stateTimeLine > 5 ? "finished" : (stateTimeLine === 5? "selected":""))} value={ 5} onClick={handleClickReference}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="info">
            <LinkIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '16px', px: 3 }}>
          <Typography variant="h5" component="span">Reference </Typography>
        </TimelineContent>
          </TimelineItem>
         
      </button>
      </Timeline>
      </div>
  );
}
