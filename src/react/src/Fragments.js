import React from 'react'

const items = [
    {
        id: 1,
        term: 11,
        description: 111,
    },
    {
        id: 2,
        term: 22,
        description: 222,
    },
    {
        id: 3,
        term: 33,
        description: 333,
    },
]
export default function App() {
    return (
        <div>
            <Demo />
            <Demo1 />
            <Table />
            <Glossary items={items} />
        </div>
    );
}


function Demo() {
    return (
        <React.Fragment>
            <span>span1</span>
            <span>span2</span>
            <span>span3</span>
        </React.Fragment>
    );
}
function Demo1() {
    return (
        <>
            <span>span1</span>
            <span>span2</span>
            <span>span3</span>
        </>
    );
}

class Table extends React.Component {
    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <Columns />
                    </tr>
                </tbody>
            </table>
        );
    }
}

class Columns extends React.Component {
    render() {
        return (
            // index.js:1 Warning: validateDOMNesting(...): <td> cannot appear as a child of <div>.
            // <div>
            <>
                <td>Hello</td>
                <td>World</td>
            </>
            // </div>
        );
    }
}

function Glossary(props) {
    return (
        <dl>
            {props.items.map(item => (
                // 没有`key`，React 会发出一个关键警告
                // 这里只能使用React.Fragment，不能用空标签
                <React.Fragment key={item.id}>
                    <dt>{item.term}</dt>
                    <dd>{item.description}</dd>
                </React.Fragment>
            ))}
        </dl>
    );
}