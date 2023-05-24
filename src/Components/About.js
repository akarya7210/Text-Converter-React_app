import React from 'react'

export default function About(props) {
    return (
        <div className="my-3 container">
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" style={{ color: props.mode === 'dark' ? '#fff' : 'black', backgroundColor: props.mode === 'light' ? "#fff" : '#686d73', }} aria-controls="flush-collapseOne">
                            About this app
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={{ color: props.mode === 'dark' ? '#fff' : 'black', backgroundColor: props.mode === 'light' ? "#fff" : 'rgb(108, 116, 147)', }}>This is text converted or mutuable app, which let's you to change the text according to Your
                        need and it can change text into uppercase and lowercase, which will be helpful for many. Beside this features, I also add some other feature like
                        time to read to given paragraph or sentence and preview to see the text at once. Also a dark mode button soothe your eyes while working at night to keep your eyes restrain free.
                        Hope you'll enjoy using it.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={{ color: props.mode === 'dark' ? '#fff' : 'black', backgroundColor: props.mode === 'light' ? "#fff" : '#686d73', }} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            About developer
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={{ color: props.mode === 'dark' ? '#fff' : 'black', backgroundColor: props.mode === 'light' ? "#fff" : 'rgb(108, 116, 147)', }}>This is Ajay arya, commerce grad, who recently taking interest in the field of IT. IT field amazed me by all the websites I had visited and a curious nature to know a how a basic site had developed.
                        I always wonder if I can build a website.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
