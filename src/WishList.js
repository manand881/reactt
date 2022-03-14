import React from 'react'

export default function Wishlist() {
  function AddItem() {
    let input = document.getElementById('Addtowishlist')
    let adder = document.getElementById('adder')
    let inputvalue = input.value
    let list = document.getElementById('list')
    let list_number = list.childElementCount
    if (inputvalue !== '' && list_number <= 2) {
      let li = '<li>' + inputvalue + '</li>'
      list.innerHTML += li
      console.log(list_number+1," items in list")
    }
    if (list_number > 2) {
      alert('you can only add 3 items')
      input.disabled = true
      adder.disabled = true
    }
    input.value = ''
  }
  return (
    <div>
      <h1>Wishlist</h1>
      <h6>Add to Wishlist</h6>
      <input id='Addtowishlist'></input>
      <button id='adder' style={{ marginLeft: '10px' }} onClick={AddItem}>Add</button>
      <ul id="list">

      </ul>
    </div>
  )
}