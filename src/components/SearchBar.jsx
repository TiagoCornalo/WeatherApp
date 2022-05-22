import React, {useState} from 'react';
import './styles/Nav.css'
import { Nav, Form } from "react-bootstrap"
import useOnclickOutside from "react-cool-onclickoutside"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

export default function SearchBar({onSearch}) {
  // acá va tu código
  const [city, setCity] = useState('')

    const [search, setSearch] = useState()
  
    const toggle = () => {
      setSearch(true)
    }

    const closeSearch = () => (search === true ? setSearch(false) : null)

    const ref = useOnclickOutside(() => {
      closeSearch()
    })

    return (
      <Nav className="my-auto" ref={ref}>
        <Form
          className={
            search === false
              ? "searchbar fadeOutWidth"
              : search === true
              ? "searchbar fadeInWidth"
              : "searchbar"
          }
          onSubmit={(e)=>{
                   e.preventDefault();
                   onSearch(city)
                   setCity('')
                 }}
        >
          {search === true && (
            <input
              ref={ref}
              className={
                search === true
                  ? "search-input fadeIn"
                  : search === false
                  ? "search-input fadeOut"
                  : "search-input"
              }
              type="text"
              placeholder="Search..."
              value={city}
              onChange= {e => setCity(e.target.value)}
            />
          )}
          <div
            className={
              search === true
                ? "icon-bg fadeOut"
                : search === false
                ? "icon-bg fadeIn"
                : "icon-bg"
            }
          >
            {search !== true && (
              <FontAwesomeIcon
                onClick={toggle}
                className={
                  search === true
                    ? "search-icon fadeOut"
                    : search === false
                    ? "search-icon fadeIn"
                    : "search-icon"
                }
                icon={faSearch}
              />
            )}
          </div>
        </Form>
      </Nav>
    )
};