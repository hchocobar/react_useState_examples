import React, { useState } from "react";

const ReadMore = () => {
    const [readMore, setReadMore] = useState(false);

    // if readMore === true, I show the modal, else i show the button to open the modal
    return readMore ? (
        <div className="container-sm my-5">
            <div class="alert alert-success" role="alert">
                <h4 class="alert-heading">Well done!</h4>
                <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                <hr/>
                <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
            </div>
            <button onClick={() => setReadMore(false)} type="button" class="btn btn-outline-success">Close</button>
        </div>
    ) : (
        <div className="container-sm my-5">
            <button onClick={() => setReadMore(true)} type="button" class="btn btn-outline-primary">Read more</button>
        </div>
    );
};

export default ReadMore;