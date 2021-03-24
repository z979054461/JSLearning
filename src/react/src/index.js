import React from 'react'
import ReactDOM from 'react-dom'
import './thinking-in-react.css';

const data = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];
class App extends React.Component {
    render() {
        return <FilterableProductTable data={data} />
    }
}

const groupBy = arr => {
    return arr.reduce((acc, item) => {
        acc[item.category] ? acc[item.category].push(item) : acc[item.category] = [item]
        return acc
    }, {})
}
class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            showStock: false,
        }
        this.onSearchTextChange = this.onSearchTextChange.bind(this)
        this.onToggleShowStock = this.onToggleShowStock.bind(this)
    }
    onSearchTextChange(e) {
        this.setState({
            searchText: e.target.value
        })
    }
    onToggleShowStock(e) {
        this.setState({
            showStock: e.target.checked
        })
    }
    render() {
        return <div className='FilterableProductTable'>
            <SearchBar
                searchText={this.state.searchText}
                showStock={this.state.showStock}
                onSearchTextChange={this.onSearchTextChange}
                onToggleShowStock={this.onToggleShowStock}
            />
            <ProductTable
                data={this.props.data}
                searchText={this.state.searchText}
                showStock={this.state.showStock} />
        </div>
    }
}
class SearchBar extends React.Component {
    render() {
        return <div className='SearchBar'>
            <input type='search' value={this.props.searchText} onChange={this.props.onSearchTextChange} />
            <div>
                <input type='checkbox' checked={this.props.showStock} onChange={this.props.onToggleShowStock} />
            Only show products in stock
            </div>
        </div>
    }
}
class ProductTable extends React.Component {
    render() {
        let listItems = []
        const data = groupBy(this.props.data.filter(item =>
            item.name.toLowerCase().includes(this.props.searchText.toLowerCase())
            && (!this.props.showStock || item.stocked)
        ));
        Object.keys(data).forEach((category) => {
            listItems.push(<ProductCategoryRow key={category} category={category}> </ProductCategoryRow>)
            data[category].forEach(item => listItems.push(<ProductRow key={item.name} name={item.name} price={item.price} />))
        })
        return (
            <div className='ProductTable'>
                <div className='ProductTableTitle'>
                    <span className='ProductTableTitleLeft'>Name</span>
                    <span>Price</span>
                </div>
                {listItems}
            </div>
        )
    }
}
class ProductCategoryRow extends React.Component {
    render() {
        return (<div className='ProductCategoryRow'>{this.props.category}</div>)
    }
}
class ProductRow extends React.Component {
    render() {
        return (<div className='ProductRow'>
            <span className='ProductRowLeft'>{this.props.name}</span>
            <span>{this.props.price}</span>
        </div>)
    }
}



ReactDOM.render(
    <App />,
    document.getElementById('root'),
)