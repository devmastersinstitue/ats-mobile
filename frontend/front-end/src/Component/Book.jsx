import React  from 'react';

function Book  (props) {
    return (
        <div>
            <div className=' bg-red-400 mx-40 my-10 p-10 text-center' >
                    <h2>Book Function</h2>
                </div>
                <div>
                    <div className='flex flex-row justify-between px-40'>
                        <div>Book Name</div>
                        <div>Color</div>
                        <div>Price</div>
                        <div>Author</div>
                    </div>
                    {props.books.map((book) => (
                        <div className='flex flex-row justify-between px-40 border'>
                            <div>{book.name}</div>
                            <div>{book.color}</div>
                            <div>{book.price}</div>
                            <div>{book.author.name}</div>
                        </div>
                    ))}
                </div>
        </div>
    )
}

export default Book;