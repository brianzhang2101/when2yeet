import React from 'react';
import { IState } from '../App';

interface IProps {
    details: IState["details"]
}

function Share(props: IProps) {
    return (
        <div>
            {props.details.dates.map((date) => (
                <h3>{date.format()}</h3>
            ))}
        </div>

    );
}

export default Share;