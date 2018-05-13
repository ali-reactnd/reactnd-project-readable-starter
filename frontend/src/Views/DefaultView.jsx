import React from 'react';
import PropTypes from 'prop-types';
import CategoryBar from '../Components/CategoryBar';
import SortMenu from '../Components/SortMenu';
import ContentsList from '../Components/ContentsList';
import { Grid } from 'semantic-ui-react';
import AddNewContentLink from '../Components/AddNewContentLink';

const DefaultView = (props) => {

    const {categories, posts} = props;

    return (
        <div>
            <Grid centered>
                <CategoryBar categories={categories} />
                <SortMenu />
            </Grid>
            <ContentsList contents={posts} contentType="post"/>
            <AddNewContentLink path="/create/post" contentType="post" />
        </div>
    );

}

DefaultView.propTypes = {
    categories: PropTypes.array.isRequired,
    posts: PropTypes.array.isRequired
};

export default DefaultView;