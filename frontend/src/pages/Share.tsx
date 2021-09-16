import React from 'react';
import { IState } from '../App';

interface IProps {
    details: IState["details"]
}

function Share(props: IProps) {
    return (
        <div>
            <div>
                {props.details.dates.map((date) => (
                    <h3>{date}</h3>
                ))}
            </div>
            <div>
                <h3>{props.details.time_start.toString()}</h3>
            </div>
            <div>
                <h3>{props.details.time_end.toString()}</h3>
            </div>
        </div>

    );
}

export default Share;