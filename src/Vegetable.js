import React from 'react'

export default function Vegetable() {
    function addtom() {
        let tomcount = document.getElementById('tomcon').innerHTML
        let inttom = parseInt(tomcount)
        inttom = inttom + 1
        document.getElementById('tomcon').innerHTML = inttom
    }
    function addpot() {
        let potcount = document.getElementById('potacon').innerHTML
        let intpot = parseInt(potcount)
        intpot = intpot + 1
        document.getElementById('potacon').innerHTML = intpot
    }
    function addcar() {
        let carcount = document.getElementById('carrcon').innerHTML
        let intcar = parseInt(carcount)
        intcar = intcar + 1
        document.getElementById('carrcon').innerHTML = intcar
    }
    function addonc() {
        let onccount = document.getElementById('oncon').innerHTML
        let intonc = parseInt(onccount)
        intonc = intonc + 1
        document.getElementById('oncon').innerHTML = intonc
    }
    function removetom() {
        let tomcount = document.getElementById('tomcon').innerHTML
        let inttom = parseInt(tomcount)
        if (inttom > 0) {
            inttom = inttom - 1
        }
        document.getElementById('tomcon').innerHTML = inttom
    }
    function removepot() {
        let potcount = document.getElementById('potacon').innerHTML
        let intpot = parseInt(potcount)
        if (intpot > 0) {
            intpot = intpot - 1
        }
        document.getElementById('potacon').innerHTML = intpot
    }
    function removecar() {
        let carcount = document.getElementById('carrcon').innerHTML
        let intcar = parseInt(carcount)

        if (intcar > 0) {
            intcar = intcar - 1
        }
        document.getElementById('carrcon').innerHTML = intcar
    }
    function removeonc() {
        let onccount = document.getElementById('oncon').innerHTML
        let intonc = parseInt(onccount)
        if (intonc > 0) {
            intonc = intonc - 1
        }
        document.getElementById('oncon').innerHTML = intonc
    }

    return (
        <div>Vegetable Problem
            <h3>
                Vegetable List
                <ul>
                    <li>tomatoes    - <span id='tomcon'>10</span> Kgs<button onClick={addtom}>+</button><button onClick={removetom}>-</button></li>
                    <li>potatoes    - <span id='potacon'>8</span> Kgs<button onClick={addpot}>+</button><button onClick={removepot}>-</button></li>
                    <li>carrots     - <span id='carrcon'>5</span> Kgs<button onClick={addcar}>+</button><button onClick={removecar}>-</button></li>
                    <li>onions      - <span id='oncon'>7</span> Kgs<button onClick={addonc}>+</button ><button onClick={removeonc}>-</button></li>
                </ul>
            </h3>
        </div>
    )
}
