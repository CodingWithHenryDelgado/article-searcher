import React from 'react'

const List = ({ results }) => {
    const renderedList = results.map((item) => {
        return (
            <div key={item.pageid} className='ui segment'>
                <h3>
                    <a
                        href={"https://en.wikipedia.org?curid=" + item.pageid}
                        className='header'
                        target="_blank"
                        rel="noreferrer"
                    >{item.title}</a>
                </h3>
                <p dangerouslySetInnerHTML={{ __html: item.snippet }}></p>
            </div>
        );
    })

    return renderedList
}

export default List;