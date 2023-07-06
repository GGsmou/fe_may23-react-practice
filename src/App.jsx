import React, { useState } from 'react';
import cn from 'classnames';
import './App.scss';

import usersFromServer from './api/users';
import categoriesFromServer from './api/categories';
import productsFromServer from './api/products';

const productsPrepared = productsFromServer.map((product) => {
  const category = categoriesFromServer.find(
    categ => categ.id === product.categoryId,
  );
  const user = usersFromServer.find(
    usr => usr.id === category.ownerId,
  );

  return {
    ...product,
    category,
    user,
  };
});

const applyChanges = (products, {
  userFilter,
  nameFilter,
  categorieFilters,
  columnSorter,
  sortDirection,
}) => {
  let productsNew = [...products];

  if (userFilter) {
    productsNew = productsNew.filter(
      product => product.user.id === userFilter,
    );
  }

  if (nameFilter.trim()) {
    productsNew = productsNew.filter(
      product => product.name
        .trim().toLowerCase().includes(nameFilter.trim().toLowerCase()),
    );
  }

  if (categorieFilters.length) {
    productsNew = productsNew.filter(
      product => categorieFilters.includes(product.categoryId),
    );
  }

  if (columnSorter) {
    productsNew.sort((a, b) => {
      switch (columnSorter) {
        case 'ID':
          return a.id - b.id;
        case 'Product':
          return a.name.localeCompare(b.name);
        case 'Category':
          return a.category.title.localeCompare(b.category.title);
        case 'Owner':
          return a.user.name.localeCompare(b.user.name);
        default:
          return 0;
      }
    });
  }

  if (sortDirection === 'desc') {
    productsNew.reverse();
  }

  return productsNew;
};

export const App = () => {
  const [userFilter, setUserFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [categorieFilters, setCategorieFilters] = useState([]);
  const [columnSorter, setColumnSorter] = useState('');
  const [sortDirection, setSortDirection] = useState('');

  const resetAllFilters = () => {
    setUserFilter('');
    setNameFilter('');
    setCategorieFilters([]);
  };

  const products = applyChanges(productsPrepared, {
    userFilter,
    nameFilter,
    categorieFilters,
    columnSorter,
    sortDirection,
  });

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        <div className="block">
          <nav className="panel">
            <p className="panel-heading">Filters</p>

            <p className="panel-tabs has-text-weight-bold">
              <a
                data-cy="FilterAllUsers"
                href="#/"
                onClick={() => setUserFilter('')}
                className={cn({
                  'is-active': userFilter === '',
                })}
              >
                All
              </a>

              {usersFromServer.map(user => (
                <a
                  data-cy="FilterUser"
                  href="#/"
                  key={user.id}
                  className={cn({
                    'is-active': userFilter === user.id,
                  })}
                  onClick={() => setUserFilter(user.id)}
                >
                  {user.name}
                </a>
              ))}
            </p>

            <div className="panel-block">
              <p className="control has-icons-left has-icons-right">
                <input
                  data-cy="SearchField"
                  type="text"
                  className="input"
                  placeholder="Search"
                  value={nameFilter}
                  onChange={event => setNameFilter(event.target.value)}
                />

                <span className="icon is-left">
                  <i className="fas fa-search" aria-hidden="true" />
                </span>

                {nameFilter && (
                  <span className="icon is-right">
                    {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                    <button
                      data-cy="ClearButton"
                      type="button"
                      className="delete"
                      onClick={() => setNameFilter('')}
                    />
                  </span>
                )}
              </p>
            </div>

            <div className="panel-block is-flex-wrap-wrap">
              <a
                href="#/"
                data-cy="AllCategories"
                className={cn(
                  'button mr-2 my-1 is-success',
                  { 'is-outlined': categorieFilters.length },
                )}
                onClick={() => setCategorieFilters([])}
              >
                All
              </a>

              {categoriesFromServer.map(category => (
                <a
                  data-cy="Category"
                  href="#/"
                  key={category.id}
                  className={cn(
                    'button mr-2 my-1',
                    { 'is-info': categorieFilters.includes(category.id) },
                  )}
                  onClick={() => {
                    setCategorieFilters((prevCategories) => {
                      if (prevCategories.includes(category.id)) {
                        return prevCategories.filter(
                          id => id !== category.id,
                        );
                      }

                      return [...prevCategories, category.id];
                    });
                  }}
                >
                  {category.title}
                </a>
              ))}
            </div>

            <div className="panel-block">
              <a
                data-cy="ResetAllButton"
                href="#/"
                className="button is-link is-outlined is-fullwidth"
                onClick={resetAllFilters}
              >
                Reset all filters
              </a>
            </div>
          </nav>
        </div>

        <div className="box table-container">
          {!products.length ? (
            <p data-cy="NoMatchingMessage">
              No products matching selected criteria
            </p>
          ) : (
            <table
              data-cy="ProductTable"
              className="table is-striped is-narrow is-fullwidth"
            >
              <thead>
                <tr>
                  {['ID', 'Product', 'Category', 'Owner'].map(column => (
                    <th key={column}>
                      <span className="is-flex is-flex-wrap-nowrap">
                        {column}

                        <a
                          href="#/"
                          onClick={() => {
                            const currentSortDirection = column !== columnSorter
                              ? '' : sortDirection;

                            setColumnSorter(column);

                            if (currentSortDirection === '') {
                              setSortDirection('asc');
                            } else if (currentSortDirection === 'asc') {
                              setSortDirection('desc');
                            } else {
                              setColumnSorter('');
                              setSortDirection('');
                            }
                          }}
                        >
                          <span className="icon">
                            <i
                              data-cy="SortIcon"
                              className={cn('fas', {
                                'fa-sort-up': columnSorter === column
                                  && sortDirection === 'asc',
                                'fa-sort-down': columnSorter === column
                                  && sortDirection === 'desc',
                                'fa-sort': columnSorter !== column,
                              })}
                            />
                          </span>
                        </a>
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {products.map(product => (
                  <tr data-cy="Product" key={product.id}>
                    <td className="has-text-weight-bold" data-cy="ProductId">
                      {product.id}
                    </td>

                    <td data-cy="ProductName">{product.name}</td>
                    <td data-cy="ProductCategory">
                      {`${product.category.icon} - ${product.category.title}`}
                    </td>

                    <td
                      data-cy="ProductUser"
                      className={cn({
                        'has-text-link': product.user.sex === 'm',
                        'has-text-danger': product.user.sex === 'f',
                      })}
                    >
                      {product.user.name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};
