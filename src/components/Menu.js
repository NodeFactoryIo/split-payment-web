import React from 'react';
import {
    CallSplit, MergeType
} from '@material-ui/icons';

export function Menu({onSplitChoose, onRequestChoose}) {
    return (
        <section className="menu-section">
            <div className="card round-container" onClick={onSplitChoose}>
                <CallSplit className="card-icon" />
                <span className="card-title">Split</span>
            </div>
            <div className="card round-container" onClick={onRequestChoose}>
                <MergeType className="card-icon" />
                <span className="card-title">Request</span>
            </div>
        </section>
    )
}