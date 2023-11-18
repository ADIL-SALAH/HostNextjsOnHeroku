import React from 'react'
import Typewriter from 'typewriter-effect';

function TypeWriterText() {
    const texts = [
        'I AM ADIL SALAH',
        'I AM A WEB DEVELOPER',
        'I AM A WEB DESIGNER',
        'JAVASCRIPT ',
        'REACT JS ',
        'NEXT JS ',
        'MONGO DB',
        'EXPRESS/NODE JS',
    ]
    return (
        <strong className="text-2xl ">

            <Typewriter

                onInit={(typewriter) => {
                    texts.map((text, index) => (
                        typewriter
                            .typeString(text)
                            .pauseFor(2500)
                            .deleteAll()
                            .start()
                    ))
                }}
                options={
                    { loop: true }
                }

            />
        </strong>
    )
}

export default TypeWriterText