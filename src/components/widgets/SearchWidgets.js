import React from 'react';

const SearchWidgets = () => {
    return (
        <>
            <div className="search-field">
                <form action="#">
                    <input placeholder="search ...." type="text" />
                    <button type="submit">
                        <i className="fa fa-search" />
                    </button>
                </form>
            </div>
        </>
    );
};

export default SearchWidgets;