/*
 Inside app.js, create a GroceryList component that contains an unordered list of 2 grocery items. 
 Render this component to the div tag in index.html with an id of app

*/

class GroceryListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hover: false
        }
        this.crossOutItem = this.crossOutItem.bind(this);
    }

    crossOutItem() {
        this.setState({
            hover: !this.state.hover
        });
    }

    render() {
        const style = {
            fontWeight: this.state.hover ? 'bold' : 'initial'
        };

        return (
          <li style={style} onMouseOver={this.crossOutItem}>{this.props.item}</li>
        );
    }
} 

var GroceryList = (props) => (
    <div>
        <h2>GroceryList</h2>
        <ul>
            {props.items.map(item => <GroceryListItem item={item}/>)}
        </ul>
    </div>
);

ReactDOM.render(<GroceryList items={['Milk', 'Eggs']} />, document.getElementById('app'));