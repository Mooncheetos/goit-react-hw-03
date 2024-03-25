import css from "./SearchBox.module.css";

function SearchBox({value, onChange}) {
    return (
        <div className={css.searchWrap}>
            <p className={css.searchTitle}></p>
            <input className={css.searchInput}
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                    />
        </div>
    );
}

export default SearchBox;