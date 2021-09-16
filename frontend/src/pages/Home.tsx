import React, { useState } from 'react';
import '../App.css';
import Input from '../components/Input';
import TimeSelector from '../components/TimeSelector';
import DateSelector from '../components/DateSelector';
import { Button, createStyles, makeStyles, Theme, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { IState } from '../App';
import { DateObject } from 'react-multi-date-picker';

interface IProps {
    postData: (details: IState["details"]) => void
}

function Home(props: IProps) {
    /* CUSTOM CSS FOR BUTTON */
    const ColorButton = withStyles((theme: Theme) => ({
        root: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        },
    }))(Button);
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            margin: {
                margin: theme.spacing(1),
            },
        }),
    );
    const classes = useStyles();

    const [input, setInput] = useState<IState["details"]>({
        event_name: "",
        user_name: "",
        email: "",
        desc: "",
        dates: [new DateObject().format()],
        time_start: new Date('2021-09-07T09:00:00'),
        time_end: new Date('2021-09-07T17:00:00')
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleDateChange = (e: string[]) => {
        setInput({
            ...input,
            dates: e
        })
    }

    const handleTimeChange = (e: Date | null, name: string) => {
        setInput({
            ...input,
            [name]: e
        })
    }



    return (
        <div>
            <h3>Create an Event</h3>
            <div className="App-Components">
                <div className="entry-fields">
                    <Input label="Event Name" helperText="What's your event called?" name="event_name" handleChange={handleChange} required={true} />
                    <Input label="Your Name" helperText="Surely you've got a name!" name="user_name" handleChange={handleChange} required={true} />
                    <Input label="Your Email" helperText="(Optional) We will send you an email copy of the link." name="email" handleChange={handleChange} required={false} />
                    <Input label="Event Description" helperText="(Optional) Write something about your event." name="desc" handleChange={handleChange} required={false}
                        multiline={true} rows={1} rowsMax={Infinity} />
                </div>
                <div className="date-selector">
                    <DateSelector handleChange={handleDateChange} />
                </div>
                <div className="date-fields">
                    <TimeSelector title="No earlier than:" name="time_start" handleChange={handleTimeChange} default={'2021-09-07T09:00:00'} />
                    <TimeSelector title="No later than:" name="time_end" handleChange={handleTimeChange} default={'2021-09-07T17:00:00'} />
                </div>
            </div>
            <div>
                <ColorButton variant="contained" color="primary" className={classes.margin}>
                    <Link to=""
                        style={{ color: 'inherit', textDecoration: 'inherit' }}
                        onClick={() => {
                            props.postData(input)
                        }}>
                        Create Event
                    </Link>
                </ColorButton>
            </div>
        </div>


    );
}

export default Home;