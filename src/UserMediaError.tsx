import React from 'react';

export interface Props {
    error?: MediaStreamError;
}

function UserMediaError({ error }: Props) {
    if (!error) {
        return null;
    }

    let errorMessage = error.name + ": " + error.message;

    if (error.name === "AbortError") {
        errorMessage = "Some problem occurred which prevented media device from being used. " + error.message;
    } else if (error.name === "NotAllowedError") {
        errorMessage = "The access to the media device has been denied. " + error.message;
    } else if (error.name === "NotFoundError") {
        errorMessage = "No media tracks of the type specified were found. " + error.message;
    } else if (error.name === "NotReadableError") {
        errorMessage = "Access to the media device was prevented by a hardware error occurred at the operating system. " + error.message;
    } else if (error.name === "SecurityError") {
        errorMessage = "Media support is disabled. " + error.message;
    }

    return <p>{errorMessage}</p>;
}

export default UserMediaError;
