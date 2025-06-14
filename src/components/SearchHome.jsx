import React, { useState, useRef, useEffect } from "react";
import { CiMenuFries } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { useCollection } from "../hooks/useCollection";

function SearchHome() {
  const { data } = useCollection("products");
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const wrapperRef = useRef(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const input = e.target.value;
    setQuery(input);

    if (!input.trim()) {
      setSuggestions([]);
      return;
    }

    const filtered = data
      ?.filter(
        (item) =>
          item?.idP?.toLowerCase().includes(input.toLowerCase()) ||
          item?.name?.toLowerCase().includes(input.toLowerCase())
      )
      .slice(0, 6); // максимум 6 подсказок

    setSuggestions(filtered);
    setActiveIndex(-1);
  };

  const handleSuggestionClick = (item) => {
    setQuery("");
    setSuggestions([]);
    navigate(`/product/${item.id}`);
  };

  // Закрытие при клике вне поля
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Обработка клавиатуры
  const handleKeyDown = (e) => {
    if (suggestions.length === 0) return;

    if (e.key === "ArrowDown") {
      setActiveIndex((prev) => (prev + 1) % suggestions.length);
    } else if (e.key === "ArrowUp") {
      setActiveIndex(
        (prev) => (prev - 1 + suggestions.length) % suggestions.length
      );
    } else if (e.key === "Enter") {
      if (activeIndex >= 0 && suggestions[activeIndex]) {
        handleSuggestionClick(suggestions[activeIndex]);
      }
    }
  };

  return (
    <div className="relative w-full flex " ref={wrapperRef}>
      <label className="input w-full flex items-center gap-2 bg-white rounded-lg shadow-sm border border-gray-300 px-3 py-2">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          className="grow outline-none"
          placeholder="Mahsulot yoki ID orqali qidiring..."
          value={query}
          disabled={!data}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </label>

      {suggestions?.length > 0 && (
        <ul className="list  absolute z-10 mt-10 bg-white w-full border border-gray-200 rounded-md shadow-lg max-h-64 overflow-y-auto text-sm">
          {suggestions.map((item, index) => (
            <li
              key={item.id}
              className={`p-2 list-row cursor-pointer hover:bg-gray-100 items-center gap-5  flex ${
                index === activeIndex ? "bg-gray-100" : ""
              }`}
              onClick={() => handleSuggestionClick(item)}
            >
              <figure className=" size-18 relative ">
                <img
                  src={item.img}
                  alt={item.name}
                  className=" object-bottom  "
                />
                <div className=" absolute right-0 bottom-0 text-xs">
                  {item.amoutProduct}x
                </div>
              </figure>
              <div className="flex flex-col gap-2">
                <div className="font-medium text-gray-800">{item.name}</div>
                <div className="text-xs text-gray-500">{item.idP}</div>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Меню для мобильных устройств */}
      <div className="dropdown dropdown-end md:hidden flex ">
        <div tabIndex={0} role="button" className="btn btn-sm m-1">
          <CiMenuFries />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 mt-10 shadow-sm"
        >
          <li>
            <Link to="/all" className="text-xs text-red-800">
              Barcha mahsulotlar
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SearchHome;
