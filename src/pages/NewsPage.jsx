import React from 'react';
import styled, { css } from 'styled-components';
import Categories from '../component/Categories';
import NewsList from '../component/NewsList';

const NewsPage = ({ match }) => {
  const category = match.params.category || 'all';
  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
