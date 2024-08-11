import React, { Component } from 'react'
import items from './item'

export class items extends Component {
render() {
return (
<main>
    {this.props.items.map(el=>(
    <item key={el.id} item={el} onAdd={this.props.onAdd}/>
    ))}
</main>
)
}
}
export default items