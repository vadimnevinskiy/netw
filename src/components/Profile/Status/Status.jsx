import React, {useState} from "react";
import classes from './Status.module.css';
import {Field, Form} from "react-final-form";


const Status = (props) => {
    let [editMode, setEditMode] = useState(false);


    let activateEditMode = () => {
        setEditMode(true);
    }
    let deactivateEditMode = () => {
        setEditMode(false);
    }
    const onSubmit = values => {
        window.alert(JSON.stringify(values, 0, 2))
    }


    return (
        <div className={classes.statusBlock}>
            {
                !editMode
                    ? <div className={classes.status}>
                        Не плохой человек! Не плохой человек! Не плохой человек!
                        <span
                            className={classes.editIcon + ' ' + "material-icons"}
                            onClick={activateEditMode}
                        >edit</span>
                    </div>
                    : <div className={classes.statusForm}>
                        <Form
                            onSubmit={onSubmit}
                            render={({handleSubmit, form, submitting, pristine, values}) => (
                                <form onSubmit={handleSubmit}>
                                    <div className={classes.form}>
                                        <div className={classes.statusField}>
                                            <Field
                                                name="status"
                                                component="input"
                                                type="text"
                                                placeholder="Status"
                                            />
                                        </div>
                                        <div className={classes.statusButton}>
                                            <button type="submit" disabled={submitting}>
                                                <span className="material-icons">send</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            )}
                        />
                        <span
                            className={classes.closeIcon + ' ' + "material-icons"}
                            onClick={deactivateEditMode}
                        >close</span>
                    </div>
            }


        </div>
    )
}
export default Status;
